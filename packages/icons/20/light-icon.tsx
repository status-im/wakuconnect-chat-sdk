import { useTheme } from '@tamagui/core'
import { Circle, Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgLightIcon = (props: IconProps) => {
  const { color: token = '$neutral-100' } = props
  const theme = useTheme()
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const color = theme[token]?.val ?? token
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 2v3M13.535 6.464l2.122-2.12M15 10h3M13.535 13.536l2.122 2.12M10 15v3M6.464 13.536l-2.121 2.12M5 10H2M6.464 6.464l-2.121-2.12"
        stroke="#000"
        strokeWidth={1.3}
      />
      <Circle cx={10} cy={10} r={3.5} stroke="#000" strokeWidth={1.3} />
    </Svg>
  )
}
export default SvgLightIcon
