import { useState, useCallback } from 'react';
import { validateCarForm } from '../utils/validation';

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setFieldValue = useCallback((field: string, value: any) => {
    setValues(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const setFieldError = useCallback((field: string, error: string) => {
    setErrors(prev => ({
      ...prev,
      [field]: error,
    }));
  }, []);

  const clearFieldError = useCallback((field: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }, []);

  const validateForm = useCallback(() => {
    const validationErrors = validateCarForm(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [values]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);

  const isValid = Object.keys(errors).length === 0 && Object.values(values).every(v => v && v.toString().trim() !== '');

  return {
    values,
    errors,
    isSubmitting,
    isValid,
    setFieldValue,
    setFieldError,
    clearFieldError,
    validateForm,
    resetForm,
    setIsSubmitting,
  };
};
