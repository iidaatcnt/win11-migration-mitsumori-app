import { CompanyInfo } from '@/types';
import { FileText } from 'lucide-react';

interface Props {
  companyInfo: CompanyInfo;
}

const ActionButtons = ({ companyInfo }: Props) => {
  const isFormValid = companyInfo.companyName && companyInfo.contactName && companyInfo.email;

  const handlePdfGeneration = () => {
    if (!isFormValid) {
      alert('会社名、担当者名、メールアドレスは必須です。');
      return;
    }
    alert('PDF生成機能は現在準備中です。');
    // PDF generation logic will go here
  };

  return (
    <div className="mt-6 text-center">
      <button 
        onClick={handlePdfGeneration}
        disabled={!isFormValid}
        className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <FileText className="w-5 h-5 mr-2" />
        見積書PDFをダウンロード
      </button>
    </div>
  );
};

export default ActionButtons;