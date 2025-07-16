import { Dispatch, SetStateAction } from 'react';
import QuoteDetails from './QuoteDetails';
import CompanyInfoForm from './CompanyInfoForm';
import ActionButtons from './ActionButtons';
import { CompanyInfo, Options, ValidationErrors } from '@/types';

interface Props {
  pcCount: number;
  options: Options;
  companyInfo: CompanyInfo;
  setCompanyInfo: Dispatch<SetStateAction<CompanyInfo>>;
  subtotal: number;
  tax: number;
  total: number;
  validationErrors: ValidationErrors;
  validateCompanyInfo: () => boolean;
}

const QuotePanel = (props: Props) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg" id="quote-content">
      <h2 className="text-2xl font-bold text-center mb-4">お見積もり結果</h2>
      <QuoteDetails {...props} />
      <CompanyInfoForm {...props} />
      <ActionButtons {...props} />
    </div>
  );
};

export default QuotePanel;