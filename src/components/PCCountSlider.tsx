import { Dispatch, SetStateAction } from 'react';

interface Props {
  pcCount: number;
  setPcCount: Dispatch<SetStateAction<number>>;
}

const PCCountSlider = ({ pcCount, setPcCount }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <label htmlFor="pc-count" className="block text-xl font-semibold text-gray-800 mb-4">
        1. パソコンの台数をご入力ください <span className="text-base text-gray-500">(2台から50台まで対応)</span>
      </label>
      <input 
        id="pc-count"
        type="number" 
        min="2" 
        max="50" 
        value={pcCount} 
        onChange={(e) => {
          const value = Number(e.target.value);
          if (value >= 2 && value <= 50) {
            setPcCount(value);
          } else if (value < 2) {
            setPcCount(2);
          } else if (value > 50) {
            setPcCount(50);
          }
        }}
        className="w-full p-3 border border-gray-300 rounded-lg text-center text-3xl font-bold text-blue-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
      />
      <p className="text-sm text-gray-500 mt-2 text-center">※半角数字でご入力ください</p>
    </div>
  );
};

export default PCCountSlider;