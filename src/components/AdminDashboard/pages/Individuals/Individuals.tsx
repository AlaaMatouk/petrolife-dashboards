import { DataTableSection } from "../../../sections/DataTableSection";
import { Users } from "lucide-react";
import { fetchAllClients } from "../../../../services/firestore";

/**
 * @typedef {Object} Individual
 * @property {string} id - Client ID (uid)
 * @property {string} individualName - Client Name
 * @property {string} individualCode - Client Code (uid)
 * @property {string} email - Email address
 * @property {string} phone - Phone number
 * @property {string} city - City
 * @property {{active: boolean, text: string}} accountStatus - Account status (isActive)
 *
 */

// Columns configuration for clients table
// Note: Columns are defined in reverse order because the Table component reverses them for RTL
const individualColumns = [
  {
    key: "actions",
    priority: "high",
  },
  {
    key: "accountStatus",
    label: "حالة الحساب",
    priority: "high",
  },
  {
    key: "city",
    label: "المدينة",
    priority: "high",
  },
  {
    key: "email",
    label: "البريد الإلكتروني",
    priority: "medium",
  },
  {
    key: "phone",
    label: "رقم الهاتف",
    priority: "medium",
  },
  {
    key: "individualName",
    label: "اسم العميل",
    priority: "high",
  },
  {
    key: "individualCode",
    label: "كود العميل",
    priority: "high",
  },
];

// Fetch clients data from Firestore and map to table format
const fetchIndividuals = async () => {
  try {
    const clientsData = await fetchAllClients();

    // Map the Firebase data to match the table structure
    return clientsData.map((client) => {
      // Helper function to safely extract string values
      const safeStringValue = (value: any): string => {
        if (!value) return "-";
        if (typeof value === "string") return value;
        if (typeof value === "object") {
          // Handle localized objects like {ar: "text", en: "text"}
          if (value.ar) return value.ar;
          if (value.en) return value.en;
          // If it's an object but no ar/en, convert to string
          return JSON.stringify(value);
        }
        return String(value);
      };

      return {
        id: client.id, // Document ID
        individualCode: client.uid || client.id, // كود العميل (uid or fallback to id)
        individualName: safeStringValue(client.name), // اسم العميل
        phone: safeStringValue(client.phoneNumber), // رقم الهاتف
        email: safeStringValue(client.email), // البريد الإلكتروني
        city: safeStringValue(client.city), // المدينة
        accountStatus: {
          active: client.isActive !== undefined ? client.isActive : true, // حالة الحساب
          text:
            client.isActive !== undefined
              ? client.isActive
                ? "مفعل"
                : "معطل"
              : "مفعل",
        },
      };
    });
  } catch (error) {
    console.error("Error fetching individuals:", error);
    return [];
  }
};

// Handle status toggle - currently just logs the action
// TODO: Implement updateDoc to toggle isActive field in clients collection
const handleToggleStatus = (id: string | number) => {
  console.log(`Toggle status for client with id: ${id}`);
  // To implement: Use updateDoc to toggle the isActive field in Firestore
  // Example:
  // const clientRef = doc(db, "clients", id.toString());
  // await updateDoc(clientRef, { isActive: !currentStatus });
};

export const Individuals = () => {
  return (
    <DataTableSection
      title="قائمة الأفراد"
      entityName="فرد"
      entityNamePlural="أفراد"
      icon={Users}
      columns={individualColumns}
      fetchData={fetchIndividuals}
      onToggleStatus={handleToggleStatus}
      addNewRoute="/individuals/add"
      viewDetailsRoute={(id) => `/individuals/${id}`}
      loadingMessage="جاري تحميل بيانات الأفراد..."
      itemsPerPage={10}
      showTimeFilter={false}
      showAddButton={true}
    />
  );
};
