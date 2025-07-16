import { CheckCircle } from 'lucide-react';

const BasicServiceInfo = () => {
  const services = [
    'パソコン開梱・設置',
    'Windows11初期設定・ユーザー登録',
    'Wi-Fi接続設定',
    'メールソフト設定（Outlook等）',
  ];

  return (
    <div>
      <h3 className="text-lg font-medium mb-2">基本サービス内容</h3>
      <ul className="space-y-2">
        {services.map(service => (
          <li key={service} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicServiceInfo;