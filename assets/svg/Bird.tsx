import * as React from "react";
import Svg, {
  Circle,
  Ellipse,
  G,
  Line,
  Path,
  Polygon,
  Rect,
  SvgProps,
} from "react-native-svg";
const BirdIcon = (props: SvgProps) => (
  <Svg
    width="200"
    height="200"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle
      cx="50"
      cy="50"
      r="45"
      fill="#87CEEB"
      stroke="#87CEEB"
      stroke-width="2"
    />
    <Circle
      cx="50"
      cy="50"
      r="15"
      fill="#FFD700"
      stroke="#E6A000"
      stroke-width="2"
    />

    <Circle cx="56" cy="46" r="3" fill="white" />
    <Circle cx="57" cy="46" r="1.5" fill="black" />

    <Polygon
      points="62,50 68,46 68,54"
      fill="#FF4500"
      stroke="#B22222"
      stroke-width="1"
    />

    <Ellipse
      cx="46"
      cy="50"
      rx="6"
      ry="8"
      fill="#FFA500"
      stroke="#CC8400"
      stroke-width="1"
    />

    <Line
      x1="30"
      y1="50"
      x2="40"
      y2="50"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
    />
    <Line
      x1="25"
      y1="50"
      x2="35"
      y2="50"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      opacity="0.6"
    />
  </Svg>
);
export default BirdIcon;
