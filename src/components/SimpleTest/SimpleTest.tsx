import React from 'react';

export const SimpleTest: React.FC = () => {
  return (
    <div className="p-4 bg-blue-100 border border-blue-400 rounded mb-4">
      <h3 className="text-blue-800 font-bold">✅ Simple Test Working!</h3>
      <p className="text-blue-700">This component doesn't use any context or hooks</p>
      <p className="text-sm text-blue-600">If you see this, the basic routing is working</p>
    </div>
  );
};
