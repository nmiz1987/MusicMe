import Box from '../Box/Box';
import { SpacerProps } from './Spacer.interfaces';
import { createStyle } from './Spacer.styles';

const Spacer = ({ size = 16, isVertical = true }: SpacerProps) => {
  const Styles = createStyle(size, isVertical);

  return <Box style={Styles.container} />;
};

export default Spacer;
