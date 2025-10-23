import React from "react";
import { Settings } from "lucide-react";
import { DataTableSection } from "../../../sections/DataTableSection/DataTableSection";

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
  unit: string;
  status: "active" | "inactive";
  accountStatus?: { active: boolean; text: string };
}

export const mockServices: Service[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
    title: "وقود بالقرب منك",
    description: "نصلك في أسرع وقت لتزويدك بالوقود",
    unit: "لتر",
    status: "active",
    accountStatus: { active: true, text: "نشط" },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop",
    title: "تغيير البطارية",
    description: "تغيير وفحص البطارية",
    unit: "حبة",
    status: "active",
    accountStatus: { active: true, text: "نشط" },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
    title: "وقود بالقرب منك",
    description: "نصلك في أسرع وقت لتزويدك بالوقود",
    unit: "لتر",
    status: "active",
    accountStatus: { active: true, text: "نشط" },
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
    title: "وقود بالقرب منك",
    description: "نصلك في أسرع وقت لتزويدك بالوقود",
    unit: "لتر",
    status: "inactive",
    accountStatus: { active: false, text: "غير نشط" },
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
    title: "وقود بالقرب منك",
    description: "نصلك في أسرع وقت لتزويدك بالوقود",
    unit: "لتر",
    status: "active",
    accountStatus: { active: true, text: "نشط" },
  },
];

export const Services: React.FC = () => {
  // Define table columns
  const columns = [
    {
      key: "actions",
      priority: "high" as const,
    },
    {
      key: "unit",
      label: "الوحدة",
      priority: "high" as const,
    },
    {
      key: "description",
      label: "الوصف",
      priority: "medium" as const,
      render: (text: string) => (
        <div className="max-w-xs truncate text-sm text-[#5B738B]">
          {text}
        </div>
      ),
    },
    {
      key: "title",
      label: "العنوان",
      priority: "high" as const,
    },
    {
      key: "image",
      label: "صورة الخدمة",
      priority: "high" as const,
      render: (imageUrl: string) => (
        <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-md bg-gray-100">
          <img 
            src={imageUrl} 
            alt="Service" 
            className="w-full h-full object-cover" 
          />
        </div>
      ),
    },
    {
      key: "id",
      label: "الرقم التعريفي",
      priority: "high" as const,
    },
  ];

  // Mock data fetching function
  const fetchServices = async (): Promise<Service[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockServices;
  };

  // Handle status toggle
  const handleToggleStatus = (id: number) => {
    console.log("Toggle status for service:", id);
    // In a real app, you would make an API call here
  };

  // Mock add new service route
  const addNewServiceRoute = "/application-services/add";

  // Mock view details route
  const viewServiceDetailsRoute = (id: number) => `/application-services/${id}`;

  return (
    <DataTableSection
      title="خدمات التطبيق"
      entityName="خدمة"
      entityNamePlural="خدمات"
      icon={Settings}
      columns={columns}
      fetchData={fetchServices}
      onToggleStatus={handleToggleStatus}
      addNewRoute={addNewServiceRoute}
      viewDetailsRoute={viewServiceDetailsRoute}
      loadingMessage="جاري تحميل الخدمات..."
      errorMessage="فشل في تحميل الخدمات"
      itemsPerPage={10}
      showAddButton={true}
      showModifyButton={true}
    />
  );
};

export default Services;
