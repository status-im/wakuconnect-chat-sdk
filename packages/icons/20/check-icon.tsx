import { useTheme } from '@tamagui/core'
import { Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgCheckIcon = (props: IconProps) => {
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
      <Path d="m4 10 4 4 8-8" stroke={color} strokeWidth={1.3} />
    </Svg>
  )
}
export default SvgCheckIcon