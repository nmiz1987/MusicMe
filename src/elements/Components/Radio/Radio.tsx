import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';
import Box from '../Box/Box';
import { createStyle } from './Radio.styles';

export interface RadioProps {
  status?: boolean;
}

const Radio = ({ status }: RadioProps) => {
  const colors = useCurrentColorScheme();
  const Styles = createStyle(colors);

  return <Box style={[Styles.container, status ? Styles.outerActive : Styles.outerDeactivate]}>{status && <Box style={Styles.innerActive} />}</Box>;
};

export default Radio;
