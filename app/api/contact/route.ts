import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { ContactFormData } from '../../../app/types/index';

// Template HTML pour votre notification (repris de votre EmailService)
function generateContactEmailHTML(name: string, email: string, message: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Nouveau message de contact</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { background: white; padding: 10px; border-radius: 4px; margin-top: 5px; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #3b82f6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📧 Nouveau message de contact</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nom:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="field">
              <div class="label">Date:</div>
              <div class="value">${new Date().toLocaleString('fr-FR')}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Template HTML pour la confirmation utilisateur (repris de votre EmailService)
function generateConfirmationEmailHTML(name: string, message: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Confirmation de réception</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981, #3b82f6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f0fdf4; padding: 20px; border-radius: 0 0 8px 8px; }
          .message { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #10b981; }
          .signature { margin-top: 20px; padding-top: 20px; border-top: 1px solid #d1d5db; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>✅ Message bien reçu !</h2>
          </div>
          <div class="content">
            <p>Bonjour <strong>${name}</strong>,</p>
            
            <div class="message">
              <p>Merci pour votre message !</p>
              <p>J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais (généralement sous 24h).</p>
            </div>
            
            <p><strong>Résumé de votre message :</strong></p>
            <p style="background: white; padding: 10px; border-radius: 4px; font-style: italic;">
              ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}
            </p>
            
            <div class="signature">
              <p>À bientôt,<br>
              <strong>Pierre Boisnard</strong><br>
              Développeur Full-Stack</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Email invalide' },
        { status: 400 }
      );
    }

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Vérifier que EMAIL_USER est défini
    if (!process.env.EMAIL_USER) {
      throw new Error('Configuration EMAIL_USER manquante');
    }

    try {
      // 1. Email de notification pour vous
      const notificationOptions = {
        from: {
          name: 'Pierre Boisnard - Portfolio',
          address: process.env.EMAIL_USER
        },
        to: process.env.EMAIL_USER,
        subject: `[Portfolio] Nouveau message de ${name}`,
        html: generateContactEmailHTML(name, email, message),
        text: `
          Nouveau message de contact
          
          Nom: ${name}
          Email: ${email}
          
          Message:
          ${message}
          
          Date: ${new Date().toLocaleString('fr-FR')}
        `
      };

      // 2. Email de confirmation pour l'utilisateur
      const confirmationOptions = {
        from: {
          name: 'Pierre Boisnard - Portfolio',
          address: process.env.EMAIL_USER
        },
        to: email,
        subject: 'Confirmation de réception de votre message',
        html: generateConfirmationEmailHTML(name, message),
        text: `
          Message bien reçu !
          
          Bonjour ${name},
          
          Merci pour votre message !
          
          J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais (généralement sous 24h).
          
          Résumé de votre message :
          ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}
          
          À bientôt,
          Pierre Boisnard
          Développeur Full-Stack
        `
      };

      // Envoi des deux emails
      await Promise.all([
        transporter.sendMail(notificationOptions),
        transporter.sendMail(confirmationOptions)
      ]);

      return NextResponse.json(
        { message: 'Message envoyé avec succès ! Vous recevrez une confirmation par email.' },
        { status: 200 }
      );

    } catch (emailError) {
      console.error('Erreur lors de l\'envoi des emails:', emailError);
      return NextResponse.json(
        { message: 'Erreur lors de l\'envoi du message' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Erreur lors du traitement de la demande:', error);
    return NextResponse.json(
      { message: 'Erreur lors du traitement de votre message' },
      { status: 500 }
    );
  }
}