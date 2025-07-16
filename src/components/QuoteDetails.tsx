import { Options } from '@/types';

interface Props {
  pcCount: number;
  options: Options;
  subtotal: number;
  tax: number;
  total: number;
}

const QuoteDetails = ({ pcCount, options, subtotal, tax, total }: Props) => {
  const optionFees = {
    dataMigration: 3000,
    onePassword: 2000,
    googleWorkspace: 2500,
    memoryUpgrade: 3000,
  };

  return (
    <div className="space-y-4 text-sm">
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h3 className="font-bold text-base mb-2">【見積もり詳細】</h3>
        <div className="space-y-1">
          <div className="flex justify-between"><span>出張費</span><span>¥5,000</span></div>
          <div className="flex justify-between"><span>基本セットアップ</span><span>¥8,000 × {pcCount}台 = ¥{(8000 * pcCount).toLocaleString()}</span></div>
        </div>
        
        <h3 className="font-bold text-base mt-3 mb-2">【オプション】</h3>
        <div className="space-y-1">
          {options.dataMigration && <div className="flex justify-between"><span>データ移行</span><span>¥{optionFees.dataMigration.toLocaleString()} × {pcCount}台 = ¥{(optionFees.dataMigration * pcCount).toLocaleString()}</span></div>}
          {options.onePassword && <div className="flex justify-between"><span>1Password設定</span><span>¥{optionFees.onePassword.toLocaleString()} × {pcCount}台 = ¥{(optionFees.onePassword * pcCount).toLocaleString()}</span></div>}
          {options.googleWorkspace && <div className="flex justify-between"><span>Google Workspace設定</span><span>¥{optionFees.googleWorkspace.toLocaleString()} × {pcCount}台 = ¥{(optionFees.googleWorkspace * pcCount).toLocaleString()}</span></div>}
          {options.memoryUpgrade && <div className="flex justify-between"><span>メモリ増設</span><span>¥{optionFees.memoryUpgrade.toLocaleString()} × {pcCount}台 = ¥{(optionFees.memoryUpgrade * pcCount).toLocaleString()}</span></div>}
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm space-y-2">
        <div className="flex justify-between"><span>小計</span><span>¥{subtotal.toLocaleString()}</span></div>
        <div className="flex justify-between"><span>消費税 (10%)</span><span>¥{tax.toLocaleString()}</span></div>
        <hr className="my-2"/>
        <div className="flex justify-between text-lg font-bold text-blue-600"><span>合計金額</span><span>¥{total.toLocaleString()}</span></div>
      </div>
    </div>
  );
};

export default QuoteDetails;