import { useTheme } from '@tamagui/core'
import { Path, Rect, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgCopyIcon = (props: IconProps) => {
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
        d="M12.5 5.75c0-.232 0-.348-.01-.446a2 2 0 0 0-1.794-1.794c-.098-.01-.214-.01-.446-.01H8.3c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3.5 5.78 3.5 6.62 3.5 8.3v1.95c0 .232 0 .348.01.446a2 2 0 0 0 1.794 1.794c.098.01.214.01.446.01"
        stroke="#1B273D"
        strokeOpacity={0.3}
        strokeWidth={1.3}
      />
      <Rect
        x={7.5}
        y={7.5}
        width={9}
        height={9}
        rx={3}
        stroke={color}
        strokeWidth={1.3}
      />
    </Svg>
  )
}
export default SvgCopyIcon