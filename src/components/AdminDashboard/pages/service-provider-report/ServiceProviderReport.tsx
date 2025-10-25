import React, { useState, useEffect } from "react";
import { DataTableSection } from "../../../sections/DataTableSection/DataTableSection";
import { Users } from "lucide-react";
import { fetchAllOrders } from "../../../../services/firestore";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../../config/firebase";

// Helper function to extract text from language objects or return string
const extractText = (value: any): string => {
  if (!value) return "-";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    // Handle language objects with ar/en keys
    if (value.ar && value.ar.trim() !== "") return value.ar;
    if (value.en && value.en.trim() !== "") return value.en;
    // Handle other object structures
    if (value.name) {
      if (typeof value.name === "string" && value.name.trim() !== "")
        return value.name;
      if (value.name.ar && value.name.ar.trim() !== "") return value.name.ar;
      if (value.name.en && value.name.en.trim() !== "") return value.name.en;
    }
    // If all values are empty, return "-"
    return "-";
  }
  return String(value);
};

// Transform orders data to match service provider table structure
const transformServiceProviderData = (orders: any[]) => {
  return orders.map((order) => ({
    id: order.id,
    service: extractText(order.service?.title) || "-",
    serviceProviderName: extractText(order.carStation?.name) || "-",
    productType: extractText(order.selectedOption?.category?.name) || "-",
    productNumber: order.selectedOption?.category?.onyxProductId || "-",
    productName: extractText(order.service?.title) || "-",
    quantity: order.totalLitre || "-",
    unit: extractText(order.service?.unit) || "-",
    value: order.totalPrice || order.totalCost || "-",
    serviceFees: order.selectedOption?.companyPrice || "-",
  }));
};

// Functions to fetch real filter options from Firestore
const fetchServiceProviders = async () => {
  try {
    const serviceProvidersRef = collection(db, "service-providers");
    const q = query(serviceProvidersRef, orderBy("name", "asc"));
    const querySnapshot = await getDocs(q);

    const serviceProviders: any[] = [];
    querySnapshot.forEach((doc) => {
      serviceProviders.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return serviceProviders;
  } catch (error) {
    console.error("Error fetching service-providers:", error);
    return [];
  }
};

const fetchCompanies = async () => {
  try {
    const companiesRef = collection(db, "companies");
    const q = query(companiesRef, orderBy("name", "asc"));
    const querySnapshot = await getDocs(q);

    const companies: any[] = [];
    querySnapshot.forEach((doc) => {
      companies.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return companies;
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
};

const fetchServices = async () => {
  try {
    const servicesRef = collection(db, "services");
    const q = query(servicesRef, orderBy("title", "asc"));
    const querySnapshot = await getDocs(q);

    const services: any[] = [];
    querySnapshot.forEach((doc) => {
      services.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

const fetchCategories = async () => {
  try {
    const categoriesRef = collection(db, "categories");
    const q = query(categoriesRef, orderBy("name", "asc"));
    const querySnapshot = await getDocs(q);

    const categories: any[] = [];
    querySnapshot.forEach((doc) => {
      categories.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Table columns configuration
const tableColumns = [
  {
    key: "serviceFees",
    label: "رسوم الخدمة",
    width: "w-[120px] min-w-[120px]",
    priority: "high",
  },
  {
    key: "value",
    label: "القيمة (ر.س)",
    width: "w-[120px] min-w-[120px]",
    priority: "high",
  },
  {
    key: "unit",
    label: "الوحدة",
    width: "w-[80px] min-w-[80px]",
    priority: "high",
  },
  {
    key: "quantity",
    label: "الكمية",
    width: "w-[80px] min-w-[80px]",
    priority: "high",
  },
  {
    key: "productName",
    label: "اسم المنتج",
    width: "w-[120px] min-w-[120px]",
    priority: "high",
  },
  {
    key: "productNumber",
    label: "رقم المنتج",
    width: "w-[120px] min-w-[120px]",
    priority: "medium",
  },
  {
    key: "productType",
    label: "نوع المنتج",
    width: "w-[120px] min-w-[120px]",
    priority: "medium",
  },
  {
    key: "serviceProviderName",
    label: "اسم مزود الخدمة",
    width: "w-[150px] min-w-[150px]",
    priority: "high",
  },
  {
    key: "service",
    label: "الخدمة",
    width: "w-[120px] min-w-[120px]",
    priority: "high",
  },
];

// Function to fetch and transform service provider data
const fetchServiceProviderData = async () => {
  try {
    const orders = await fetchAllOrders();
    return transformServiceProviderData(orders);
  } catch (error) {
    console.error("Error fetching service provider data:", error);
    throw error;
  }
};

export const ServiceProviderReport: React.FC = () => {
  const [filterOptions, setFilterOptions] = useState<any[]>([]);

  useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        // Fetch orders data to generate filter options from actual data
        const orders = await fetchAllOrders();

        // Extract unique values from orders for filter options using correct paths
        const uniqueServiceFees = [
          ...new Set(
            orders
              .map((order) => order.selectedOption?.companyPrice)
              .filter(Boolean)
          ),
        ];
        const uniqueCarStations = [
          ...new Set(
            orders
              .map((order) => extractText(order.carStation?.name))
              .filter((name) => name !== "-")
          ),
        ];
        const uniqueCategories = [
          ...new Set(
            orders
              .map((order) => extractText(order.selectedOption?.category?.name))
              .filter((name) => name !== "-")
          ),
        ];
        const uniqueProductNumbers = [
          ...new Set(
            orders
              .map((order) => order.selectedOption?.category?.onyxProductId)
              .filter(Boolean)
          ),
        ];
        const uniqueServices = [
          ...new Set(
            orders
              .map((order) => extractText(order.service?.title))
              .filter((name) => name !== "-")
          ),
        ];

        // Create filter options with real data from orders
        const options = [
          {
            label: "رسوم الخدمة",
            value: "الكل",
            options: [
              { value: "الكل", label: "الكل" },
              ...uniqueServiceFees.map((fee) => ({
                value: fee,
                label: fee,
              })),
            ],
          },
          {
            label: "اسم مزود الخدمة",
            value: "الكل",
            options: [
              { value: "الكل", label: "الكل" },
              ...uniqueCarStations.map((station) => ({
                value: station,
                label: station,
              })),
            ],
          },
          {
            label: "نوع المنتج",
            value: "الكل",
            options: [
              { value: "الكل", label: "الكل" },
              ...uniqueCategories.map((category) => ({
                value: category,
                label: category,
              })),
            ],
          },
          {
            label: "رقم المنتج",
            value: "الكل",
            options: [
              { value: "الكل", label: "الكل" },
              ...uniqueProductNumbers.map((number) => ({
                value: number,
                label: number,
              })),
            ],
          },
          {
            label: "اسم المنتج",
            value: "الكل",
            options: [
              { value: "الكل", label: "الكل" },
              ...uniqueServices.map((service) => ({
                value: service,
                label: service,
              })),
            ],
          },
        ];

        setFilterOptions(options);
      } catch (error) {
        console.error("Error loading filter options:", error);
        // Fallback to empty options
        setFilterOptions([]);
      }
    };

    loadFilterOptions();
  }, []);

  return (
    <div className="flex flex-col w-full items-start gap-5">
      <DataTableSection
        title="تقارير مزودي الخدمة - جميع الطلبات"
        entityName="طلب"
        entityNamePlural="طلبات"
        icon={Users}
        columns={tableColumns}
        fetchData={fetchServiceProviderData}
        addNewRoute="/admin-service-provider-reports/add"
        viewDetailsRoute={(id: string | number) =>
          `/admin-service-provider-reports/${id}`
        }
        loadingMessage="جاري تحميل جميع الطلبات..."
        errorMessage="فشل في تحميل الطلبات"
        itemsPerPage={10}
        showTimeFilter={false}
        showAddButton={false}
        filterOptions={filterOptions}
      />
    </div>
  );
};
