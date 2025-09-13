// 📁 hooks/useContactForm.ts
// ✅ VERSION COMPLÈTEMENT CORRIGÉE

import { useState } from 'react';
import { z } from 'zod';
import { contactSchema, ContactFormData, ValidationErrors } from '../lib/validation';

type FormStatus = 'idle' | 'validating' | 'loading' | 'success' | 'error';

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Validation en temps réel pour un champ
  const validateField = (field: keyof ContactFormData, value: string) => {
    try {
      // Valider seulement le champ concerné
      contactSchema.shape[field].parse(value);
      
      // Supprimer l'erreur si la validation passe
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
      
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({
          ...prev,
          [field]: error.issues[0].message
        }));
      }
      return false;
    }
  };

  // Validation complète du formulaire
  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors: ValidationErrors = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            validationErrors[issue.path[0] as keyof ContactFormData] = issue.message;
          }
        });
        setErrors(validationErrors);
      }
      return false;
    }
  };

  // Gestion des changements d'input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name as keyof ContactFormData;
    
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Validation en temps réel seulement si l'utilisateur a déjà interagi
    if (errors[field] || value.length > 0) {
      validateField(field, value);
    }
  };

  // Gestion de la perte de focus (validation finale du champ)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name as keyof ContactFormData;
    validateField(field, value);
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('validating');

    // Validation complète avant envoi
    if (!validateForm()) {
      setStatus('idle');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        // Reset du formulaire après succès
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        
        // Retour à idle après 5 secondes
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur envoi formulaire:', error);
      setStatus('error');
      
      // Retour à idle après 3 secondes
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  // Reset du formulaire
  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  // État dérivé
  const hasErrors = Object.keys(errors).length > 0;
  const isValid = !hasErrors && formData.name && formData.email && formData.message;
  const isSubmitting = status === 'loading' || status === 'validating';

  return {
    // État
    formData,
    status,
    errors,
    hasErrors,
    isValid,
    isSubmitting,
    
    // Actions
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    validateField,
    validateForm
  };
};