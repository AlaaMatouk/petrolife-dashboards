import { useState } from 'react';
import { Fuel, Users } from 'lucide-react';
import { TimeFilter } from '../../shared/TimeFilter';
import { Table } from '../../shared/Table';

interface StationData {
  name: string;
  address: string;
  price: number;
  fuel: string;
  type: string;
}

interface DriverData {
  name: string;
  phone: string;
  cost: number;
  fuel: string;
  type: string;
}

interface MostUsedSectionProps {
  stationsData: StationData[];
  driversData: DriverData[];
  stationsTitle?: string;
  driversTitle?: string;
}

const MostUsedSection = ({ 
  stationsData, 
  driversData,
  stationsTitle = "المحطات الأكثر استخداما",
  driversTitle = "السائقين الأكثر استهلاكا"
}: MostUsedSectionProps) => {
    const [selectedStationsFilter, setSelectedStationsFilter] = useState("اخر 12 شهر");
    const [selectedDriversFilter, setSelectedDriversFilter] = useState("اخر 12 شهر");
  
    // Table columns for stations
    const stationsColumns = [
      {
        key: "price",
        width: "min-w-[100px]",
        render: (_value: any, station: any) => (
          <div className="text-right">
            <div className="font-medium text-blue-600">{station?.price || 'N/A'}</div>
            <div className="text-gray-500">ر.س</div>
          </div>
        ),
      },
      {
        key: "station",
        width: "min-w-[200px]",
        render: (_value: any, station: any) => (
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="font-medium text-gray-800 [direction:rtl] text-right">
                {station?.name || 'N/A'}
              </div>
              <div className="text-sm text-gray-500 [direction:rtl] text-right">
                {station?.address || 'N/A'}
              </div>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <Fuel className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        ),
      },
    ];
  
    // Table columns for drivers
    const driversColumns = [
      {
        key: "cost",
        width: "min-w-[100px]",
        render: (_value: any, driver: any) => (
          <div className="text-right">
            <div className="font-medium text-blue-600">{driver?.cost || 'N/A'}</div>
            <div className="text-gray-500">ر.س</div>
          </div>
        ),
      },
      {
        key: "driver",
        width: "min-w-full",
        render: (_value: any, driver: any) => (
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="font-medium text-gray-800 [direction:rtl] text-right">
                {driver?.name || 'N/A'}
              </div>
              <div className="text-sm text-gray-500 [direction:rtl] text-right">
                {driver?.phone || 'N/A'}
              </div>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        ),
      },
    ];
  
    return (
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Most Used Stations */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="mb-6">
            <div className="flex justify-end mb-4">
              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <h3 className="mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                  {stationsTitle}
                </h3>
                <Fuel className="w-5 h-5 text-gray-500" />
              </div>
            </div>
            <div className="flex justify-start items-">
              <TimeFilter
                selectedFilter={selectedStationsFilter}
                onFilterChange={setSelectedStationsFilter}
              />
            </div>
          </div>
  
          <Table
            columns={stationsColumns}
            data={stationsData}
            className="mb-4"
          />
          
        </div>
  
        {/* Most Consuming Drivers */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="mb-6">
            <div className="flex justify-end mb-4">
              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <h3 className="mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                  {driversTitle}
                </h3>
                <Users className="w-5 h-5 text-gray-500" />
              </div>
            </div>
            <div className="flex justify-start">
              <TimeFilter
                selectedFilter={selectedDriversFilter}
                onFilterChange={setSelectedDriversFilter}
              />
            </div>
          </div>
  
          <Table
            columns={driversColumns}
            data={driversData}
            className="mb-4"
          />
          
        </div>
      </section>
    );
  };

export default MostUsedSection;