import React, { useState, useEffect } from "react";
import { DataTableSection } from "../../../sections/DataTableSection/DataTableSection";
import { FileText } from "lucide-react";
import { fetchAllOrders } from "../../../../services/firestore";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../../config/firebase";

// Functions to fetch real filter options from Firestore
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

const fetchClients = async () => {
  try {
    const clientsRef = collection(db, "clients");
    const q = query(clientsRef, orderBy("name", "asc"));
    const querySnapshot = await getDocs(q);

    const clients: any[] = [];
    querySnapshot.forEach((doc) => {
      clients.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return clients;
  } catch (error) {
    console.error("Error fetching clients:", error);
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

const fetchCompaniesDrivers = async () => {
  try {
    const driversRef = collection(db, "companies-drivers");
    const q = query(driversRef, orderBy("name", "asc"));
    const querySnapshot = await getDocs(q);

    const drivers: any[] = [];
    querySnapshot.forEach((doc) => {
      drivers.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return drivers;
  } catch (error) {
    console.error("Error fetching companies-drivers:", error);
    return [];
  }
};

const fetchCompaniesCars = async () => {
  try {
    const carsRef = collection(db, "companies-cars");
    const q = query(carsRef, orderBy("plateNumber", "asc"));
    const querySnapshot = await getDocs(q);

    const cars: any[] = [];
    querySnapshot.forEach((doc) => {
      cars.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return cars;
  } catch (error) {
    console.error("Error fetching companies-cars:", error);
    return [];
  }
};

const fetchClientCars = async () => {
  try {
    const carsRef = collection(db, "client-cars");
    const q = query(carsRef, orderBy("carNumber", "asc"));
    const querySnapshot = await getDocs(q);

    const cars: any[] = [];
    querySnapshot.forEach((doc) => {
      cars.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return cars;
  } catch (error) {
    console.error("Error fetching client-cars:", error);
    return [];
  }
};

const fetchOrdersRefIds = async () => {
  try {
    const orders = await fetchAllOrders();
    const refIds = [
      ...new Set(orders.map((order) => order.refId).filter(Boolean)),
    ];
    return refIds.sort();
  } catch (error) {
    console.error("Error fetching orders refIds:", error);
    return [];
  }
};

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

// Transform orders data to match table structure
const transformOrdersData = (orders: any[]) => {
  return orders.map((order) => ({
    id: order.id,
    refId: order.refId || order.id,
    clientName:
      extractText(order.client?.name) ||
      order.assignedDriver?.createdUserId ||
      "-",
    driverName: extractText(order.assignedDriver?.name) || "-",
    carType: extractText(order.assignedDriver?.car?.carType?.name) || "-",
    carNumber: extractText(order.assignedDriver?.car?.plateNumber) || "-",
    productName: extractText(order.service?.title) || "-",
    productNumber: extractText(order.service?.serviceId) || "-",
    quantity: order.totalLitre || "-",
    unit: extractText(order.service?.unit) || "-",
    // Additional fields with correct paths
    serviceFees: order.selectedOption?.companyPrice || "-",
    serviceProviderName: extractText(order.carStation?.name) || "-",
    productType: extractText(order.selectedOption?.category?.name) || "-",
    productNumberFromCategory:
      order.selectedOption?.category?.onyxProductId || "-",
  }));
};

// Table columns configuration
const tableColumns = [
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
    key: "productNumber",
    label: "رقم المنتج",
    width: "w-[120px] min-w-[120px]",
    priority: "medium",
  },
  {
    key: "productName",
    label: "اسم المنتج",
    width: "w-[120px] min-w-[120px]",
    priority: "medium",
  },
  {
    key: "carNumber",
    label: "رقم المركبة",
    width: "w-[120px] min-w-[120px]",
    priority: "high",
  },
  {
    key: "carType",
    label: "نوع المركبة",
    width: "w-[100px] min-w-[100px]",
    priority: "medium",
  },
  {
    key: "driverName",
    label: "سائق المركبة",
    width: "w-[120px] min-w-[120px]",
    priority: "medium",
  },
  {
    key: "clientName",
    label: "اسم العميل",
    width: "w-[150px] min-w-[150px]",
    priority: "high",
  },
  {
    key: "refId",
    label: "كود",
    width: "w-[120px] min-w-[120px]",
    priority: "high",
  },
];

// Function to fetch and transform orders data
const fetchFinancialData = async () => {
  try {
    const orders = await fetchAllOrders();
    return transformOrdersData(orders);
  } catch (error) {
    console.error("Error fetching financial data:", error);
    throw error;
  }
};

export const FinancialReport: React.FC = () => {
  const [filterOptions, setFilterOptions] = useState<any[]>([]);

  useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        // Fetch all data in parallel
        const [
          companies,
          clients,
          services,
          drivers,
          companiesCars,
          clientCars,
          refIds,
        ] = await Promise.all([
          fetchCompanies(),
          fetchClients(),
          fetchServices(),
          fetchCompaniesDrivers(),
          fetchCompaniesCars(),
          fetchClientCars(),
          fetchOrdersRefIds(),
        ]);

        // Create filter options with real data
        const options = [
          {
            label: "اسم المنتج",
            value: "الكل",
            options: [
              { value: "الكل", label: "الكل" },
              ...services
                .map((service) => ({
                  value: extractText(service.title),
                  label: extractText(service.title),
                }))
                .filter((option) => option.value !== "-"),
            ],
          },
          {
            label: "اسم العميل",
            value: "الكل",
            options: [
              { value: "الكل", label: "الكل" },
              ...companies
                .map((company) => ({
                  value: extractText(company.name),
                  label: extractText(company.name),
                }))
                .filter((option) => option.value !== "-"),
              ...clients
                .map((client) => ({
                  value: extractText(client.name),
                  label: extractText(client.name),
                }))
                .filter((option) => option.value !== "-"),
            ],
          },
          {
            label: "كود العميل",
            value: "الكل",
            options: [
              { value: "الكل", label: "الكل" },
              ...companies
                .map((company) => ({
                  value: company.uId || company.id,
                  label: company.uId || company.id,
                }))
                .filter((option) => option.value),
              ...clients
                .map((client) => ({
                  value: client.uId || client.id,
                  label: client.uId || client.id,
                }))
                .filter((option) => option.value),
            ],
          },
          {
            label: "نوع التقرير",
            value: "تحليلي",
            options: [
              { value: "تحليلي", label: "تحليلي" },
              { value: "تفصيلي", label: "تفصيلي" },
              { value: "ملخص", label: "ملخص" },
            ],
          },
          {
            label: "رقم العملية",
            value: "الكل",
            options: [
              { value: "الكل", label: "الكل" },
              ...refIds.map((refId) => ({
                value: refId,
                label: refId,
              })),
            ],
          },
          {
            label: "كود السائق",
            value: "الكل",
            options: [
              { value: "الكل", label: "الكل" },
              ...drivers
                .map((driver) => ({
                  value: driver.uId || driver.id,
                  label: driver.uId || driver.id,
                }))
                .filter((option) => option.value),
            ],
          },
          {
            label: "رقم المركبة",
            value: "الكل",
            options: [
              { value: "الكل", label: "الكل" },
              ...companiesCars
                .map((car) => ({
                  value: extractText(car.plateNumber),
                  label: extractText(car.plateNumber),
                }))
                .filter((option) => option.value !== "-"),
              ...clientCars
                .map((car) => ({
                  value: extractText(car.carNumber),
                  label: extractText(car.carNumber),
                }))
                .filter((option) => option.value !== "-"),
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
        title="التقارير المالية - جميع الطلبات"
        entityName="طلب"
        entityNamePlural="طلبات"
        icon={FileText}
        columns={tableColumns}
        fetchData={fetchFinancialData}
        addNewRoute="/admin-financial-reports/add"
        viewDetailsRoute={(id: string | number) =>
          `/admin-financial-reports/${id}`
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
