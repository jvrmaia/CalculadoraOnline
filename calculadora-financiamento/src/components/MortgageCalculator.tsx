import React, { useState } from 'react';
import { 
  MortgageInput, 
  MortgageResult, 
  calculatePRICE, 
  calculateSAC 
} from '../utils/mortgageCalculations';
import MortgageForm from './MortgageForm';
import MortgageResults from './MortgageResults';

const MortgageCalculator: React.FC = () => {
  const [calculationMethod, setCalculationMethod] = useState<'SAC' | 'PRICE'>('PRICE');
  const [result, setResult] = useState<MortgageResult | null>(null);
  
  const handleCalculate = (input: MortgageInput) => {
    const calculationFunction = calculationMethod === 'SAC' ? calculateSAC : calculatePRICE;
    const calculationResult = calculationFunction(input);
    setResult(calculationResult);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Calculadora de Financiamento</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                calculationMethod === 'PRICE'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setCalculationMethod('PRICE')}
            >
              PRICE
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                calculationMethod === 'SAC'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setCalculationMethod('SAC')}
            >
              SAC
            </button>
          </div>
        </div>
        
        <MortgageForm onCalculate={handleCalculate} />
      </div>
      
      {result && (
        <MortgageResults result={result} calculationMethod={calculationMethod} />
      )}
    </div>
  );
};

export default MortgageCalculator; 