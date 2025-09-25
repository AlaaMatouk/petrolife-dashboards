export interface ValidationErrors {
  [key: string]: string;
}

export const validateCarForm = (values: any): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Car name validation
  if (!values.carName || values.carName.trim() === '') {
    errors.carName = 'اسم السيارة مطلوب';
  }

  // Fuel type validation
  if (!values.fuelType || values.fuelType.trim() === '') {
    errors.fuelType = 'نوع البنزين مطلوب';
  }

  // Car type validation
  if (!values.carType || values.carType.trim() === '') {
    errors.carType = 'نوع السيارة مطلوب';
  }

  // City validation
  if (!values.city || values.city.trim() === '') {
    errors.city = 'مدينة السيارة مطلوبة';
  }

  // Year validation
  if (!values.year || values.year.trim() === '') {
    errors.year = 'سنة الإصدار مطلوبة';
  }

  // Model validation
  if (!values.model || values.model.trim() === '') {
    errors.model = 'الطراز مطلوب';
  }

  // Brand validation
  if (!values.brand || values.brand.trim() === '') {
    errors.brand = 'الماركة مطلوبة';
  }

  // Plate letters validation
  if (!values.plateLetters || values.plateLetters.trim() === '') {
    errors.plateLetters = 'حروف لوحة السيارة مطلوبة';
  }

  // Plate numbers validation
  if (!values.plateNumbers || values.plateNumbers.trim() === '') {
    errors.plateNumbers = 'أرقام لوحة السيارة مطلوبة';
  }

  // Car condition validation
  if (!values.carCondition || values.carCondition.trim() === '') {
    errors.carCondition = 'حالة السيارة مطلوبة';
  }

  return errors;
};
