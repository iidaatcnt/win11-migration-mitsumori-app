import { CompanyInfo, ValidationErrors } from '@/types';
import { FileText } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface Props {
  companyInfo: CompanyInfo;
  validationErrors: ValidationErrors;
  validateCompanyInfo: () => boolean;
}

const ActionButtons = ({ companyInfo, validationErrors, validateCompanyInfo }: Props) => {
  const handlePdfGeneration = async () => {
    if (!validateCompanyInfo()) {
      alert('入力内容に不備があります。必須項目を確認してください。');
      return;
    }

    const input = document.getElementById('quote-content');
    if (input) {
      const canvas = await html2canvas(input, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save('見積書.pdf');
    } else {
      alert('PDF生成エラー: 見積もりコンテンツが見つかりません。');
    }
  };

  return (
    <div className="mt-6 text-center">
      <button 
        onClick={handlePdfGeneration}
        className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <FileText className="w-5 h-5 mr-2" />
        見積書PDFをダウンロード
      </button>
    </div>
  );
};

export default ActionButtons;