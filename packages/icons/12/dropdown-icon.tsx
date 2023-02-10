import { Circle, ClipPath, Defs, G, Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgDropdownIcon = (props: SvgProps) => {
  const { color: colorToken = 'currentColor', ...rest } = props
  const color = useCurrentColor(colorToken)
  return (
    <Svg
      width={12}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <G clipPath="url(#dropdown-icon_svg__a)">
        <Circle cx={6} cy={6} r={6} fill="#E7EAEE" />
        <Path d="m3 4.75 3 3 3-3" stroke={color} strokeWidth={1.1} />
      </G>
      <Defs>
        <ClipPath id="dropdown-icon_svg__a">
          <Path fill="#fff" d="M0 0h12v12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
export default SvgDropdownIcon
