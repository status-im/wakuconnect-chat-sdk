import { useTheme } from '@tamagui/core'
import { Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgCloseIcon = (props: IconProps) => {
  const { color: token = '$neutral-100' } = props
  const theme = useTheme()
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const color = theme[token]?.val ?? token
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="m4.464 11.536 7.072-7.072M4.464 4.464l7.072 7.072"
        stroke={color}
        strokeWidth={1.2}
      />
    </Svg>
  )
}
export default SvgCloseIcon
