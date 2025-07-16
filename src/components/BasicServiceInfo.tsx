import { CheckCircle } from 'lucide-react';

const BasicServiceInfo = () => {
  const services = [
    'パソコン開梱・設置',
    'Windows11初期設定・ユーザー登録',
    'Wi-Fi接続設定',
    'メールソフト設定（Outlook等）',
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">基本サービス内容</h3>
      <ul className="space-y-3">
        {services.map(service => (
          <li key={service} className="flex items-center text-gray-700">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicServiceInfo;