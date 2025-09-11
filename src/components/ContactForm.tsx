import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { ContactFormData, FormStatus } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('');

  const handleFormSubmit = (): void => {
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
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contactez-moi
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Discutons de votre projet</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Passionné par les projets innovants et les défis techniques, je suis toujours intéressé 
                par de nouvelles collaborations et opportunités de développement.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a 
                    href="mailto:pierre.boisnard@live.fr"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    pierre.boisnard@live.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg">
                <Linkedin className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/pierre-boisnard-74514785/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    Pierre Boisnard
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg">
                <Github className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a 
                    href="https://github.com/Pierrebsnrd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    Pierrebsnrd
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                  placeholder="Votre message..."
                />
              </div>
              
              <button
                type="button"
                onClick={handleFormSubmit}
                disabled={formStatus === 'sending'}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
              
              {formStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center">
                  ✅ Message envoyé avec succès !
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg text-center">
                  ❌ Veuillez remplir tous les champs
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;