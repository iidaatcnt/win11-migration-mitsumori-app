import { Dispatch, SetStateAction } from 'react';
import { CompanyInfo, ValidationErrors } from '@/types';

interface Props {
  companyInfo: CompanyInfo;
  setCompanyInfo: Dispatch<SetStateAction<CompanyInfo>>;
  validationErrors: ValidationErrors;
}

const CompanyInfoForm = ({ companyInfo, setCompanyInfo, validationErrors }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = "w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out";
  const errorClass = "border-red-500";
  const errorMessageClass = "text-red-500 text-sm mt-1";

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">3. お客様情報入力</h3>
      <div className="space-y-4">
        <div>
          <input 
            type="text" 
            name="companyName" 
            placeholder="会社名 (必須)" 
            value={companyInfo.companyName} 
            onChange={handleChange} 
            className={`${inputClass} ${validationErrors.companyName ? errorClass : ''}`}
          />
          {validationErrors.companyName && <p className={errorMessageClass}>{validationErrors.companyName}</p>}
        </div>
        <div>
          <input 
            type="text" 
            name="contactName" 
            placeholder="担当者名 (必須)" 
            value={companyInfo.contactName} 
            onChange={handleChange} 
            className={`${inputClass} ${validationErrors.contactName ? errorClass : ''}`}
          />
          {validationErrors.contactName && <p className={errorMessageClass}>{validationErrors.contactName}</p>}
        </div>
        <div>
          <input 
            type="email" 
            name="email" 
            placeholder="メールアドレス (必須)" 
            value={companyInfo.email} 
            onChange={handleChange} 
            className={`${inputClass} ${validationErrors.email ? errorClass : ''}`}
          />
          {validationErrors.email && <p className={errorMessageClass}>{validationErrors.email}</p>}
        </div>
        <div>
          <input 
            type="tel" 
            name="phone" 
            placeholder="電話番号 (任意)" 
            value={companyInfo.phone} 
            onChange={handleChange} 
            className={inputClass}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoForm;