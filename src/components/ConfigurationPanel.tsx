import { Dispatch, SetStateAction } from 'react';
import PCCountSlider from './PCCountSlider';
import OptionSelector from './OptionSelector';
import BasicServiceInfo from './BasicServiceInfo';
import { Options } from '@/types';

interface Props {
  pcCount: number;
  setPcCount: Dispatch<SetStateAction<number>>;
  options: Options;
  setOptions: Dispatch<SetStateAction<Options>>;
}

const ConfigurationPanel = ({ pcCount, setPcCount, options, setOptions }: Props) => {
  return (
    <div className="space-y-6">
      <PCCountSlider pcCount={pcCount} setPcCount={setPcCount} />
      <OptionSelector options={options} setOptions={setOptions} />
      <BasicServiceInfo />
    </div>
  );
};

export default ConfigurationPanel;