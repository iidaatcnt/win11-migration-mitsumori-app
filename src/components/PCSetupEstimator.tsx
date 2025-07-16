'use client';

import { useState, useMemo } from 'react';
import Header from './Header';
import ConfigurationPanel from './ConfigurationPanel';
import QuotePanel from './QuotePanel';
import { CompanyInfo, Options } from '@/types';

const PCSetupEstimator = () => {
  const [pcCount, setPcCount] = useState(2);
  const [options, setOptions] = useState<Options>({
    dataMigration: false,
    onePassword: false,
    googleWorkspace: false,
    memoryUpgrade: false,
  });
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
  });

  const { subtotal, tax, total } = useMemo(() => {
    const baseServiceFee = 5000;
    const setupFeePerPC = 8000;
    const optionFees = {
      dataMigration: 3000,
      onePassword: 2000,
      googleWorkspace: 2500,
      memoryUpgrade: 3000,
    };

    let optionsTotal = 0;
    if (options.dataMigration) optionsTotal += optionFees.dataMigration * pcCount;
    if (options.onePassword) optionsTotal += optionFees.onePassword * pcCount;
    if (options.googleWorkspace) optionsTotal += optionFees.googleWorkspace * pcCount;
    if (options.memoryUpgrade) optionsTotal += optionFees.memoryUpgrade * pcCount;

    const sub = baseServiceFee + (setupFeePerPC * pcCount) + optionsTotal;
    const taxAmount = Math.floor(sub * 0.1);
    const totalAmount = sub + taxAmount;

    return { subtotal: sub, tax: taxAmount, total: totalAmount };
  }, [pcCount, options]);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <ConfigurationPanel 
          pcCount={pcCount}
          setPcCount={setPcCount}
          options={options}
          setOptions={setOptions}
        />
        <QuotePanel 
          pcCount={pcCount}
          options={options}
          companyInfo={companyInfo}
          setCompanyInfo={setCompanyInfo}
          subtotal={subtotal}
          tax={tax}
          total={total}
        />
      </div>
    </div>
  );
};

export default PCSetupEstimator;