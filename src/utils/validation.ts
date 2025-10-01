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

export const validateDriverForm = (values: any): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Driver name validation
  if (!values.driverName || values.driverName.trim() === '') {
    errors.driverName = 'اسم السائق مطلوب';
  } else if (values.driverName.trim().length < 2) {
    errors.driverName = 'اسم السائق يجب أن يكون على الأقل حرفين';
  }

  // Phone validation
  if (!values.phone || values.phone.trim() === '') {
    errors.phone = 'رقم الهاتف مطلوب';
  } else if (!/^(\+966|0)?[5-9][0-9]{8}$/.test(values.phone.replace(/\s/g, ''))) {
    errors.phone = 'رقم الهاتف غير صحيح';
  }

  // Email validation
  if (!values.email || values.email.trim() === '') {
    errors.email = 'البريد الإلكتروني مطلوب';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'البريد الإلكتروني غير صحيح';
  }

  // Address validation
  if (!values.address || values.address.trim() === '') {
    errors.address = 'العنوان مطلوب';
  } else if (values.address.trim().length < 5) {
    errors.address = 'العنوان يجب أن يكون على الأقل 5 أحرف';
  }

  // City validation
  if (!values.city || values.city.trim() === '') {
    errors.city = 'المدينة مطلوبة';
  }

  // Vehicle status validation
  if (!values.vehicleStatus || values.vehicleStatus.trim() === '') {
    errors.vehicleStatus = 'حالة السيارة مطلوبة';
  }

  // Driver amount validation
  if (!values.driverAmount || values.driverAmount.trim() === '') {
    errors.driverAmount = 'القيمة المالية مطلوبة';
  } else if (isNaN(Number(values.driverAmount)) || Number(values.driverAmount) <= 0) {
    errors.driverAmount = 'القيمة المالية يجب أن تكون رقماً صحيحاً أكبر من صفر';
  }

  // Plate letters validation
  if (!values.plateLetters || values.plateLetters.trim() === '') {
    errors.plateLetters = 'حروف لوحة السيارة مطلوبة';
  }

  // Plate number validation
  if (!values.plateNumber || values.plateNumber.trim() === '') {
    errors.plateNumber = 'رقم لوحة السيارة مطلوب';
  } else if (!/^\d{4}$/.test(values.plateNumber.trim())) {
    errors.plateNumber = 'رقم لوحة السيارة يجب أن يكون 4 أرقام';
  }

  // Vehicle category validation
  if (!values.vehicleCategory || values.vehicleCategory.trim() === '') {
    errors.vehicleCategory = 'تصنيف السيارة مطلوب';
  }

  return errors;
};