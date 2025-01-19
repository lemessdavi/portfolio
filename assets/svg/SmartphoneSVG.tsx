import Svg, { Rect } from "react-native-svg";

interface SmartphoneSVGProps {
  PHONE_WIDTH: number;
  PHONE_HEIGHT: number;
}

export default function SmartphoneSVG({
  PHONE_WIDTH,
  PHONE_HEIGHT,
}: SmartphoneSVGProps) {
  const borderMarginWidth = PHONE_WIDTH * 0.0333;
  const borderMarginHeight = PHONE_HEIGHT * 0.0167;
  const borderWidth = PHONE_WIDTH - 2 * borderMarginWidth;
  const borderHeight = PHONE_HEIGHT - 2 * borderMarginHeight;
  const borderRadius = PHONE_WIDTH * 0.1333;

  const screenMarginWidth = PHONE_WIDTH * 0.1;
  const screenMarginHeight = PHONE_HEIGHT * 0.1;
  const screenWidth = PHONE_WIDTH - 2 * screenMarginWidth;
  const screenHeight = PHONE_HEIGHT - 2 * screenMarginHeight;
  const screenBorderRadius = PHONE_WIDTH * 0.0667;

  return (
    <Svg width={PHONE_WIDTH} height={PHONE_HEIGHT}>
      {/* Smartphone Border */}
      <Rect
        x={borderMarginWidth}
        y={borderMarginHeight}
        width={borderWidth}
        height={borderHeight}
        rx={borderRadius}
        ry={borderRadius}
        fill="#000"
        stroke="#333"
        strokeWidth={2}
      />
      {/* Screen */}
      <Rect
        x={screenMarginWidth}
        y={screenMarginHeight}
        width={screenWidth}
        height={screenHeight}
        rx={screenBorderRadius}
        ry={screenBorderRadius}
        fill="transparent"
      />
    </Svg>
  );
}
