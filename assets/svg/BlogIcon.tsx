import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const BlogIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path
      d="M4 2h10l6 6v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
      fill="#7B61FF"
    />
    <Path
      d="M14 2v6h6"
      fill="none"
      stroke="#fff"
      strokeWidth={2}
    />
    <Path
      d="M7 13h10M7 17h10M7 9h5"
      fill="none"
      stroke="#fff"
      strokeWidth={2}
    />
  </Svg>
);

export default BlogIcon;
