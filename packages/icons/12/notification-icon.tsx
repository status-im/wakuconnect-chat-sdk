import { useTheme } from '@tamagui/core'
import { Circle, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgNotificationIcon = (props: IconProps) => {
  const { color: token = '$neutral-100' } = props
  const theme = useTheme()
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const color = theme[token]?.val ?? token
  return (
    <Svg
      width={12}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={6} cy={6} r={4} fill="#4360DF" />
    </Svg>
  )
}
export default SvgNotificationIcon
