/**
 * This service is used to scale the UI components based on the device screen size and resolution. Use this if you want to LOCK the size of the UI components based on the design.
 */
import { Dimensions, PixelRatio } from 'react-native';

const baseHeight = 812; // UX design base height
const baseWidth = 375; // UX design base width

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');

const widthBaseScale = SCREEN_WIDTH / baseWidth;
const heightBaseScale = SCREEN_HEIGHT / baseHeight;

function normalize(size: number, based = 'width') {
  const newSize = based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width pixel
export function widthPixel(size: number) {
  return normalize(size, 'width');
}
//for height pixel
export function heightPixel(size: number) {
  return normalize(size, 'height');
}
//for font pixel
export function fontSizePixel(size: number) {
  return heightPixel(size);
}
//for Margin and Padding vertical pixel
export function pixelVertical(size: number) {
  return heightPixel(size);
}
//for Margin and Padding horizontal pixel
export function pixelHorizontal(size: number) {
  return widthPixel(size);
}
