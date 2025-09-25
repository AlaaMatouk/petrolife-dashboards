import React, { useState } from 'react';
import { User, Plus, MoreVertical, Info, X } from 'lucide-react';
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
  const [showContextMenu, setShowContextMenu] = useState<string | null>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  const drivers: Driver[] = [
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
      accountStatus: 'active'
    }
  ];

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
      key: 'driverCode',
      label: 'كود السائق',
      width: '120px',
      render: (value) => (
        <span className="font-medium text-gray-900">{value}</span>
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
      key: 'phoneNumber',
      label: 'رقم الهاتف',
      width: '150px',
      render: (value) => (
        <span className="text-gray-700">{value}</span>
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
      key: 'accountStatus',
      label: 'حالة الحساب',
      width: '120px',
      render: (_, row) => (
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              row.accountStatus === 'active' ? 'bg-green-500' : 'bg-gray-400'
            }`} />
            <span className={`text-sm font-medium ${
              row.accountStatus === 'active' ? 'text-green-700' : 'text-gray-500'
            }`}>
              {row.accountStatus === 'active' ? 'مفعل' : 'غير مفعل'}
            </span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col items-start gap-6 w-full bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <User className="w-6 h-6 text-gray-600" />
          <h2 className="text-xl font-bold text-gray-900">سائقي السيارة</h2>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          إضافة سائق للسيارة
        </button>
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
            className="fixed z-20 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px]"
            style={{
              left: contextMenuPosition.x,
              top: contextMenuPosition.y,
            }}
          >
            <button
              onClick={handleDriverInfo}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Info className="w-4 h-4" />
              معلومات السائق
            </button>
            <button
              onClick={handleRemoveDriver}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <X className="w-4 h-4" />
              إزالة السائق
            </button>
          </div>
        </>
      )}
    </div>
  );
};
