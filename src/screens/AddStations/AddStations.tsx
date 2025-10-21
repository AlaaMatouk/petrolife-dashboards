import React from 'react'
import { serviceDistributerNavigationMenuData, userInfo } from '../../constants/data'
import { LayoutSimple } from '../../components/shared/Layout/LayoutSimple'
import { Fuel, Plus, MapPin, ChevronDown } from 'lucide-react'
import { AddForm, FormField } from '../../components/sections/AddForm'
import { useNavigate } from 'react-router-dom'

function AddStations() {
  const navigate = useNavigate();

  // Define form fields configuration
  const stationFields: FormField[] = [
    // Row 1: 3 fields, each taking 2 columns (1/3 width each) - Right to left
    {
      key: 'phone',
      label: 'رقم الهاتف',
      type: 'tel',
      placeholder: 'رقم الهاتف هنا',
      span: 2,
      required: true
    },
    {
      key: 'email',
      label: 'البريد الالكتروني',
      type: 'email',
      placeholder: 'hesham@gmail.com',
      span: 2,
      required: true
    },
    {
      key: 'stationName',
      label: 'اسم المحطة',
      type: 'text',
      placeholder: 'اسم المحطة هنا',
      span: 2,
      required: true
    },
    // Row 2: Full width (6 columns)
    {
      key: 'address',
      label: 'العنوان',
      type: 'text',
      placeholder: 'العنوان بالتفصيل هنا',
      span: 6,
      required: true
    },
    // Row 3: Full width (6 columns)
    {
      key: 'location',
      label: 'الموقع',
      type: 'text',
      placeholder: 'ضع الموقع هنا',
      span: 6,
      required: true,
      icon: <MapPin className="w-4 h-4 text-gray-500" />
    },
    // Row 4: 2 fields, each taking 3 columns (1/2 width each) - Right to left
    {
      key: 'fuelProducts',
      label: 'منتجات المحطة',
      type: 'select',
      span: 3,
      options: [
        { value: 'بنزين 91', label: 'بنزين 91' },
        { value: 'بنزين 95', label: 'بنزين 95' },
        { value: 'ديزل', label: 'ديزل' }
      ],
      required: true,
      icon: <ChevronDown className="w-4 h-4 text-gray-500" />
    },
    {
      key: 'secretNumber',
      label: 'الرقم السري',
      type: 'password',
      placeholder: 'ضع الرقم السري هنا',
      span: 3,
      required: true
    }
  ];

  // Initial form values
  const initialValues = {
    stationName: '',
    email: '',
    phone: '',
    address: '',
    location: '',
    secretNumber: '',
    fuelProducts: ''
  };

  // Handle form submission
  const handleSubmit = async (values: Record<string, any>) => {
    try {
      console.log('Station form submitted:', values);
      // TODO: Implement actual API call to add station
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate back to stations list after successful submission
      navigate('/stations');
    } catch (error) {
      console.error('Error adding station:', error);
      throw error; // Re-throw to let AddForm handle the error display
    }
  };

  return (
    <LayoutSimple
      headerProps={{
        title: "المحطات / إضافة محطة جديدة",
        titleIconSrc: <Fuel className="w-5 h-5 text-gray-500" />,
        showSearch: false,
        searchProps: {
          onSearch: (query) => console.log("Search:", query),
        },
      }}
      sidebarProps={{
        sections: serviceDistributerNavigationMenuData.sections,
        topItems: serviceDistributerNavigationMenuData.topItems,
        bottomItems: serviceDistributerNavigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <AddForm
        title="إضافة محطة جديدة"
        titleIcon={<Plus className="w-5 h-5 text-gray-500" />}
        fields={stationFields}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        submitButtonText="إضافة المحطة"
        showBackButton={true}
        backButtonAction={() => navigate('/stations')}
      />
    </LayoutSimple>
  )
}

export default AddStations