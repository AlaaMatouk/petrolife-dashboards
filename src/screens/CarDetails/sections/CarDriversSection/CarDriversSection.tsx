import React, { useState } from 'react';
import { User, CirclePlus, MoreVertical, Info, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Table, TableColumn } from '../../../../components/shared/Table/Table';

interface Driver {
  id: string;
  driverCode: string;
  driverName: string;
  phoneNumber: string;
  address: string;
  financialValue: string;
  limit: string;
  accountStatus: 'active' | 'inactive';
}

export const CarDriversSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [showContextMenu, setShowContextMenu] = useState<string | null>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [drivers, setDrivers] = useState<Driver[]>([
    {
      id: '1',
      driverCode: '21A254',
      driverName: 'أحمد محمد',
      phoneNumber: '00965284358',
      address: '12 ش المنيل ، مصر',
      financialValue: '1600',
      limit: '1400',
      accountStatus: 'active'
    },
    {
      id: '2',
      driverCode: '21A254',
      driverName: 'أحمد محمد',
      phoneNumber: '00965284358',
      address: '12 ش المنيل ، مصر',
      financialValue: '1600',
      limit: '1000',
      accountStatus: 'active'
    },
    {
      id: '3',
      driverCode: '21A254',
      driverName: 'أحمد محمد',
      phoneNumber: '00965284358',
      address: '12 ش المنيل ، مصر',
      financialValue: '1600',
      limit: '1400',
      accountStatus: 'inactive'
    }
  ]);

  const handleToggleStatus = (driverId: string) => {
    setDrivers(prevDrivers => 
      prevDrivers.map(driver => 
        driver.id === driverId 
          ? { ...driver, accountStatus: driver.accountStatus === 'active' ? 'inactive' : 'active' }
          : driver
      )
    );
  };

  const handleContextMenu = (e: React.MouseEvent, driverId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(driverId);
  };

  const handleCloseContextMenu = () => {
    setShowContextMenu(null);
  };

  const handleDriverInfo = () => {
    console.log('Driver info clicked');
    handleCloseContextMenu();
  };

  const handleRemoveDriver = () => {
    console.log('Remove driver clicked');
    handleCloseContextMenu();
  };

  const columns: TableColumn<Driver>[] = [
    {
      key: 'actions',
      label: '',
      width: '50px',
      render: (_, row) => (
        <button
          onClick={(e) => handleContextMenu(e, row.id)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <MoreVertical className="w-4 h-4 text-gray-500" />
        </button>
      )
    },
    {
      key: 'accountStatus',
      label: 'حالة الحساب',
      width: '120px',
      render: (_, row) => (
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggleStatus(row.id)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                row.accountStatus === 'active' ? 'bg-green-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  row.accountStatus === 'active' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${
              row.accountStatus === 'active' ? 'text-green-700' : 'text-gray-500'
            }`}>
              {row.accountStatus === 'active' ? 'مفعل' : 'غير مفعل'}
            </span>
          </div>
        </div>
      )
    },
    {
      key: 'financialValue',
      label: 'القيمة المالية (ر.س) (المستخدمة / المحددة) يوميا',
      width: '250px',
      render: (_, row) => (
        <span className="text-gray-700">
          {row.financialValue} / {row.limit}
        </span>
      )
    },
    {
      key: 'address',
      label: 'العنوان',
      width: '200px',
      render: (value) => (
        <span className="text-gray-700">{value}</span>
      )
    },
    {
      key: 'phoneNumber',
      label: 'رقم الهاتف',
      width: '150px',
      render: (value) => (
        <span className="text-gray-700">{value}</span>
      )
    },
    {
      key: 'driverName',
      label: 'اسم السائق',
      width: '150px',
      render: (value) => (
        <span className="text-gray-900">{value}</span>
      )
    },
    {
      key: 'driverCode',
      label: 'كود السائق',
      width: '120px',
      render: (value) => (
        <span className="font-medium text-gray-900">{value}</span>
      )
    }
  ];

  return (
    <div className="flex flex-col items-start gap-6 w-full bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <button 
          onClick={() => navigate('/adddriver')}
          className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors"
        >
          <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
              <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                إضافة سائق للسيارة
              </span>
            </div>
            <CirclePlus className="w-4 h-4 text-gray-500" />
          </div>
        </button>
        <div className="flex w-[134px] items-center justify-end gap-1.5 relative">
          <h2 className="relative w-[117px] h-5 mt-[-1.00px] ml-[-7.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
            سائقي السيارة
          </h2>
          <User className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
        <Table
          columns={columns}
          data={drivers}
          className="w-full"
          headerClassName="bg-gray-50 text-gray-700 font-medium"
          rowClassName="hover:bg-gray-50 border-b border-gray-200 last:border-b-0"
          cellClassName="py-4"
        />
      </div>

      {/* Context Menu */}
      {showContextMenu && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={handleCloseContextMenu}
          />
          <div
            className="fixed z-20 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[155px]"
            style={{
              left: contextMenuPosition.x,
              top: contextMenuPosition.y,
            }}
          >
            <button
              onClick={handleDriverInfo}
              className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>معلومات السائق</span>
              <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <Info className="w-3 h-3 text-blue-500" />
              </div>
            </button>
            <button
              onClick={handleRemoveDriver}
              className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>إزالة السائق</span>
              <div className="w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">
                <X className="w-3 h-3 text-red-500" />
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
