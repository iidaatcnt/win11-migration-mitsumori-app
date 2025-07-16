import { Dispatch, SetStateAction } from 'react';
import { Options } from '@/types';
import { Briefcase, KeyRound, GanttChart, MemoryStick } from 'lucide-react';

interface Props {
  options: Options;
  setOptions: Dispatch<SetStateAction<Options>>;
}

const OptionSelector = ({ options, setOptions }: Props) => {
  const handleOptionChange = (option: keyof Options) => {
    setOptions(prev => ({ ...prev, [option]: !prev[option] }));
  };

  const optionList = [
    { id: 'dataMigration', icon: Briefcase, label: 'データ移行', price: '3,000円/台' },
    { id: 'onePassword', icon: KeyRound, label: '1Password設定', price: '2,000円/台' },
    { id: 'googleWorkspace', icon: GanttChart, label: 'Google Workspace設定', price: '2,500円/台' },
    { id: 'memoryUpgrade', icon: MemoryStick, label: 'メモリ増設(16GB)', price: '3,000円/台' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">2. オプションを選択</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {optionList.map(opt => (
          <div 
            key={opt.id} 
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition duration-200 ease-in-out 
              ${options[opt.id as keyof Options] ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500' : 'border-gray-300 hover:bg-gray-50'}`}
            onClick={() => handleOptionChange(opt.id as keyof Options)}
          >
            <input 
              type="checkbox" 
              checked={options[opt.id as keyof Options]} 
              onChange={() => {}} // The div click handles the logic
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <div className="ml-3 text-sm">
              <label className="font-medium text-gray-700 flex items-center cursor-pointer">
                <opt.icon className="w-5 h-5 mr-2 text-blue-600" />
                {opt.label}
              </label>
              <p className="text-gray-500">{opt.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;