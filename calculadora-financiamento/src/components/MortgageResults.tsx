import React, { useState } from 'react';
import { MortgageResult } from '../utils/mortgageCalculations';

interface MortgageResultsProps {
  result: MortgageResult;
  calculationMethod: 'SAC' | 'PRICE';
}

const MortgageResults: React.FC<MortgageResultsProps> = ({ result, calculationMethod }) => {
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Resultado da Simulação ({calculationMethod})</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Prestação Inicial</h3>
          <p className="text-2xl font-bold text-blue-900">{formatCurrency(result.monthlyPayment)}</p>
          <p className="text-sm text-blue-700 mt-1">
            {calculationMethod === 'SAC' ? '(Valor decrescente ao longo do tempo)' : '(Valor fixo)'}
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Total Pago</h3>
          <p className="text-2xl font-bold text-green-900">{formatCurrency(result.totalPayment)}</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Total de Juros</h3>
          <p className="text-2xl font-bold text-purple-900">{formatCurrency(result.totalInterest)}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <button
          onClick={() => setShowFullSchedule(!showFullSchedule)}
          className="w-full px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          {showFullSchedule ? 'Ocultar Tabela Completa' : 'Mostrar Tabela Completa'}
        </button>
      </div>
      
      {showFullSchedule && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mês
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prestação
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amortização
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Juros
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Saldo Devedor
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {result.schedule.map((item) => (
                <tr key={item.month}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.month}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(item.payment)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(item.principal)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(item.interest)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(item.balance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MortgageResults; 