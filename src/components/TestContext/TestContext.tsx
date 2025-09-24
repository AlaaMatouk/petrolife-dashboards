import React from 'react';
import { useGlobalState } from '../../hooks/useGlobalState';

export const TestContext: React.FC = () => {
  try {
    const { state } = useGlobalState();
    return (
      <div className="p-4 bg-green-100 border border-green-400 rounded">
        <h3 className="text-green-800 font-bold">✅ Context is working!</h3>
        <p className="text-green-700">Global state is accessible</p>
        <p className="text-sm text-green-600">Drivers count: {state.drivers.length}</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 rounded">
        <h3 className="text-red-800 font-bold">❌ Context Error!</h3>
        <p className="text-red-700">Error: {(error as Error).message}</p>
      </div>
    );
  }
};
