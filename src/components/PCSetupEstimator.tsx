'use client';

import { useState, useMemo } from 'react';
import Header from './Header';
import ConfigurationPanel from './ConfigurationPanel';
import QuotePanel from './QuotePanel';
import { CompanyInfo, Options, ValidationErrors } from '@/types';

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
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validateCompanyInfo = (): boolean => {
    const errors: ValidationErrors = {};
    if (!companyInfo.companyName) {
      errors.companyName = '会社名は必須です。';
    }
    if (!companyInfo.contactName) {
      errors.contactName = '担当者名は必須です。';
    }
    if (!companyInfo.email) {
      errors.email = 'メールアドレスは必須です。';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(companyInfo.email)) {
      errors.email = '有効なメールアドレスを入力してください。';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

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
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-100">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
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
          validationErrors={validationErrors}
          validateCompanyInfo={validateCompanyInfo}
        />
      </div>
    </div>
  );
};

export default PCSetupEstimator;