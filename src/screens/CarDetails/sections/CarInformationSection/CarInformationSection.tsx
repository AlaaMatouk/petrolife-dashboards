import React, { useState } from 'react';
import { Car, Edit3 } from 'lucide-react';
import { Input } from '../../../../components/shared/Form/Input';
import { RadioGroup } from '../../../../components/shared/Form/RadioGroup';

export const CarInformationSection = (): JSX.Element => {
  const [carData, setCarData] = useState({
    carName: '',
    carType: 'صغيرة',
    yearOfManufacture: '2020',
    licensePlateNumber: 'أ ب ج',
    carCity: 'الرياض',
    brand: 'تيوتا',
    model: 'كرولا',
    carStatus: 'دبلوماسية',
    fuelType: 'بنزين 91'
  });

  const handleInputChange = (field: string, value: string) => {
    setCarData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const carTypeOptions = [
    { id: 'small', label: 'صغيرة' },
    { id: 'medium', label: 'متوسطة' },
    { id: 'large', label: 'كبيرة' },
    { id: 'vip', label: 'VIP' }
  ];

  const fuelTypeOptions = [
    { id: 'diesel', label: 'ديزل' },
    { id: 'petrol95', label: 'بنزين 95' },
    { id: 'petrol91', label: 'بنزين 91' }
  ];

  return (
    <div className="flex flex-col items-start gap-6 w-full bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      {/* Breadcrumb */}
      <div className="flex items-center justify-end w-full">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>السيارات</span>
          <span>/</span>
          <span>سيارة 21A254</span>
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center gap-3">
        <Car className="w-6 h-6 text-gray-600" />
        <h1 className="text-2xl font-bold text-gray-900">سيارة 21A254</h1>
      </div>

      {/* Form */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Car Name */}
            <Input
              label="اسم السيارة (اختياري)"
              value={carData.carName}
              onChange={(value) => handleInputChange('carName', value)}
              placeholder="أدخل اسم السيارة"
            />

            {/* Car Type */}
            <RadioGroup
              label="نوع السيارة"
              value={carData.carType}
              onChange={(value) => handleInputChange('carType', value)}
              options={carTypeOptions}
            />

            {/* Year of Manufacture */}
            <Input
              label="سنة الاصدار"
              value={carData.yearOfManufacture}
              onChange={(value) => handleInputChange('yearOfManufacture', value)}
              type="number"
            />

            {/* License Plate Number */}
            <Input
              label="رقم السيارة"
              value={carData.licensePlateNumber}
              onChange={(value) => handleInputChange('licensePlateNumber', value)}
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Car City */}
            <Input
              label="مدينة السيارة"
              value={carData.carCity}
              onChange={(value) => handleInputChange('carCity', value)}
            />

            {/* Brand */}
            <Input
              label="الماركة"
              value={carData.brand}
              onChange={(value) => handleInputChange('brand', value)}
            />

            {/* Model */}
            <Input
              label="الطراز"
              value={carData.model}
              onChange={(value) => handleInputChange('model', value)}
            />

            {/* Car Status */}
            <Input
              label="حالة السيارة"
              value={carData.carStatus}
              onChange={(value) => handleInputChange('carStatus', value)}
            />
          </div>
        </div>

        {/* Fuel Type - Full Width */}
        <div className="mt-6">
          <RadioGroup
            label="نوع البنزين"
            value={carData.fuelType}
            onChange={(value) => handleInputChange('fuelType', value)}
            options={fuelTypeOptions}
          />
        </div>

        {/* Edit Button */}
        <div className="flex justify-end mt-8">
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm">
            <Edit3 className="w-4 h-4" />
            تعديل البيانات
          </button>
        </div>
      </div>
    </div>
  );
};
