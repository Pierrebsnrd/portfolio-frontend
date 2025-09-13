// pages/api/contact.js (ou app/api/contact/route.js si vous utilisez App Router)
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Permettre uniquement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, message }: ContactFormData = req.body;

  // Validation basique
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  // Validation email simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Email invalide' });
  }

  try {
    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // ou votre provider email
      auth: {
        user: process.env.EMAIL_USER, // votre email
        pass: process.env.EMAIL_PASS, // votre mot de passe d'application
      },
    });

    // Options de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // votre email pour recevoir les messages
      subject: `Nouveau message de ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message depuis votre portfolio</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Ce message a été envoyé depuis votre portfolio personnel.
          </p>
        </div>
      `,
    };

    // Email de confirmation automatique à l'expéditeur (optionnel)
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Merci pour votre message - Pierre Besnard',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Merci ${name} !</h2>
          <p>J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.</p>
          <p>Voici un récapitulatif de votre message :</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p>À bientôt !</p>
          <p><strong>Pierre Besnard</strong><br>
          Développeur Web Freelance</p>
        </div>
      `,
    };

    // Envoyer les emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
  }
}