import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgAlert(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#alert_svg__clip0)">
        <Path
          d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.78 11.78 0 0011.8 24h.214A12.11 12.11 0 0024 11.791 11.765 11.765 0 0011.983 0zM10.5 16.542a1.475 1.475 0 011.45-1.53h.026a1.527 1.527 0 011.523 1.47 1.476 1.476 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 01-2 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="alert_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgAlert;
