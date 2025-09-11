'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = '' | 'sending' | 'success' | 'error';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }
    
    // Simulation d'envoi de formulaire
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 5000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contactez-moi
        </h2>
        
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          Une idée de projet ? Une collaboration ? N&apos;hésitez pas à me contacter !
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Colonne gauche - Informations */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Discutons de votre projet</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Passionné par les projets innovants et les défis techniques, je suis toujours intéressé 
                par de nouvelles collaborations et opportunités de développement.
              </p>
            </div>
            
            {/* Moyens de contact directs */}
            <div className="space-y-4">
              <a 
                href="mailto:pierre.boisnard@live.fr"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg transition-all group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">pierre.boisnard@live.fr</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/pierre-boisnard-74514785/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg transition-all group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                  <p className="text-gray-600 dark:text-gray-300">Pierre Boisnard</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/Pierrebsnrd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg transition-all group"
              >
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">GitHub</h4>
                  <p className="text-gray-600 dark:text-gray-300">@Pierrebsnrd</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Colonne droite - Formulaire */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>
              
              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
              
              {/* Messages de statut */}
              {formStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message envoyé avec succès ! Je vous répondrai rapidement.</span>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>Erreur : Veuillez remplir tous les champs requis.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;