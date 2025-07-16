import { Dispatch, SetStateAction } from 'react';

interface Props {
  pcCount: number;
  setPcCount: Dispatch<SetStateAction<number>>;
}

const PCCountSlider = ({ pcCount, setPcCount }: Props) => {
  return (
    <div>
      <label htmlFor="pc-count" className="block text-lg font-medium mb-2">1. パソコンの台数を選択</label>
      <input 
        id="pc-count"
        type="range" 
        min="2" 
        max="10" 
        value={pcCount} 
        onChange={(e) => setPcCount(Number(e.target.value))} 
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-center text-2xl font-bold text-blue-600 mt-2">{pcCount}台</div>
    </div>
  );
};

export default PCCountSlider;