import { useState } from 'react';
import { TStatus } from './interfaces';

function useCheckBoxState(status: boolean) {
  const [isChecked, setIsChecked] = useState<TStatus>(status ?? false);

  const handlePress = () => {
    setIsChecked(cur => !cur);
  };

  return {
    isChecked,
    handlePress,
  };
}

export default useCheckBoxState;
