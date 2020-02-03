import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const calScale = (size: number) => (width / guidelineBaseWidth) * size;

const size = {
  xxSmall: Math.round(width * 0.0125),
  xSmall: Math.round(width * 0.025),
  small: Math.round(width * 0.0375),
  medium: Math.round(width * 0.05),
  large: Math.round(width * 0.075),
};
export default {
  scale: calScale,
  scaleVertical: (size: number) => (height / guidelineBaseHeight) * size,
  scaleModerate: (size: number, factor: number = 0.5) =>
    size + (calScale(size) - size) * factor,
  wp: (percentage: number) => {
    const value = (percentage * width) / 100;
    return Math.round(value);
  },
  ...size,
  width,
  height,
};
