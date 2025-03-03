import React, { useState } from 'react';
import { MortgageInput } from '../utils/mortgageCalculations';

interface MortgageFormProps {
  onCalculate: (input: MortgageInput) => void;
}

const MortgageForm: React.FC<MortgageFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<MortgageInput>({
    totalAmount: 500000,
    downPayment: 100000,
    interestRate: 5.5,
    months: 360,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value) || 0,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="totalAmount" className="block text-sm font-medium text-gray-700 mb-1">
            Valor Total (R$)
          </label>
          <input
            type="number"
            id="totalAmount"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleChange}
            min="0"
            step="1000"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700 mb-1">
            Entrada (R$)
          </label>
          <input
            type="number"
            id="downPayment"
            name="downPayment"
            value={formData.downPayment}
            onChange={handleChange}
            min="0"
            step="1000"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">
            Taxa de Juros (% ao ano)
          </label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={formData.interestRate}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="months" className="block text-sm font-medium text-gray-700 mb-1">
            Prazo (meses)
          </label>
          <input
            type="number"
            id="months"
            name="months"
            value={formData.months}
            onChange={handleChange}
            min="1"
            max="480"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Calcular
        </button>
      </div>
    </form>
  );
};

export default MortgageForm; 