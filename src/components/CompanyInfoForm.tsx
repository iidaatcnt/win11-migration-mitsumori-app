import { Dispatch, SetStateAction } from 'react';
import { CompanyInfo } from '@/types';

interface Props {
  companyInfo: CompanyInfo;
  setCompanyInfo: Dispatch<SetStateAction<CompanyInfo>>;
}

const CompanyInfoForm = ({ companyInfo, setCompanyInfo }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-4">3. お客様情報入力</h3>
      <div className="space-y-4">
        <input type="text" name="companyName" placeholder="会社名 (必須)" value={companyInfo.companyName} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="contactName" placeholder="担当者名 (必須)" value={companyInfo.contactName} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="メールアドレス (必須)" value={companyInfo.email} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="tel" name="phone" placeholder="電話番号 (任意)" value={companyInfo.phone} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
    </div>
  );
};

export default CompanyInfoForm;