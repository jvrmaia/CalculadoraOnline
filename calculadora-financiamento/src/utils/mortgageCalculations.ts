export interface MortgageInput {
  totalAmount: number;
  downPayment: number;
  interestRate: number;
  months: number;
}

export interface PaymentSchedule {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface MortgageResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  schedule: PaymentSchedule[];
}

// SAC (Sistema de Amortização Constante) - Constant Amortization System
export const calculateSAC = (input: MortgageInput): MortgageResult => {
  const { totalAmount, downPayment, interestRate, months } = input;
  const loanAmount = totalAmount - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const monthlyPrincipal = loanAmount / months;
  
  let totalPayment = 0;
  let totalInterest = 0;
  const schedule: PaymentSchedule[] = [];
  
  let remainingBalance = loanAmount;
  
  for (let month = 1; month <= months; month++) {
    const interestPayment = remainingBalance * monthlyInterestRate;
    const payment = monthlyPrincipal + interestPayment;
    
    remainingBalance -= monthlyPrincipal;
    
    totalPayment += payment;
    totalInterest += interestPayment;
    
    schedule.push({
      month,
      payment,
      principal: monthlyPrincipal,
      interest: interestPayment,
      balance: remainingBalance
    });
  }
  
  return {
    monthlyPayment: schedule[0].payment, // First month payment (highest in SAC)
    totalPayment,
    totalInterest,
    schedule
  };
};

// PRICE (French Amortization System)
export const calculatePRICE = (input: MortgageInput): MortgageResult => {
  const { totalAmount, downPayment, interestRate, months } = input;
  const loanAmount = totalAmount - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  
  // Calculate fixed monthly payment using the formula for PRICE
  const monthlyPayment = loanAmount * 
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / 
    (Math.pow(1 + monthlyInterestRate, months) - 1);
  
  let totalPayment = 0;
  let totalInterest = 0;
  const schedule: PaymentSchedule[] = [];
  
  let remainingBalance = loanAmount;
  
  for (let month = 1; month <= months; month++) {
    const interestPayment = remainingBalance * monthlyInterestRate;
    const principalPayment = monthlyPayment - interestPayment;
    
    remainingBalance -= principalPayment;
    
    totalPayment += monthlyPayment;
    totalInterest += interestPayment;
    
    schedule.push({
      month,
      payment: monthlyPayment,
      principal: principalPayment,
      interest: interestPayment,
      balance: remainingBalance
    });
  }
  
  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
    schedule
  };
}; 