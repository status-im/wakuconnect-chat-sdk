import { useTheme } from '@tamagui/core'
import { Circle, Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgContactBookIcon = (props: IconProps) => {
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
        d="M6 10.625c0-1.036.84-1.875 1.875-1.875h1.25c1.036 0 1.875.84 1.875 1.875 0 .345-.28.625-.625.625h-3.75A.625.625 0 0 1 6 10.625Z"
        stroke={color}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <Circle
        cx={8.5}
        cy={6}
        r={1.25}
        stroke={color}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6 6.774V9.226c0 .818 0 1.468-.043 1.993-.044.538-.136.996-.35 1.415a3.6 3.6 0 0 1-1.573 1.574c-.42.213-.877.305-1.415.35-.524.042-1.175.042-1.993.042H7.774c-.818 0-1.468 0-1.993-.043-.538-.044-.996-.136-1.415-.35a3.6 3.6 0 0 1-1.574-1.573c-.213-.42-.305-.877-.35-1.415a11.73 11.73 0 0 1-.03-.619H2a.6.6 0 1 1 0-1.2h.4V6.6H2a.6.6 0 0 1 0-1.2h.411c.007-.224.016-.43.032-.62.044-.537.136-.995.35-1.414a3.6 3.6 0 0 1 1.573-1.574c.42-.213.877-.305 1.415-.35C6.306 1.4 6.956 1.4 7.774 1.4h1.452c.818 0 1.468 0 1.993.043.538.044.996.136 1.415.35a3.6 3.6 0 0 1 1.574 1.573c.213.42.305.877.35 1.415.042.525.042 1.175.042 1.993ZM3.612 5.4c.005-.192.014-.364.027-.522.038-.463.11-.745.223-.968A2.4 2.4 0 0 1 4.91 2.862c.223-.114.505-.185.968-.223C6.348 2.6 6.95 2.6 7.8 2.6h1.4c.85 0 1.451 0 1.922.039.463.038.745.11.968.223a2.4 2.4 0 0 1 1.048 1.048c.114.223.185.505.223.968.039.47.039 1.072.039 1.922v2.4c0 .85 0 1.451-.039 1.921-.038.464-.11.746-.223.969a2.4 2.4 0 0 1-1.048 1.048c-.223.114-.505.185-.968.223-.47.038-1.072.039-1.922.039H7.8c-.85 0-1.451 0-1.922-.039-.463-.038-.745-.11-.968-.223a2.4 2.4 0 0 1-1.048-1.048c-.114-.223-.185-.505-.223-.969-.013-.157-.022-.33-.027-.521H4a.6.6 0 1 0 0-1.2h-.4V6.6H4a.6.6 0 1 0 0-1.2h-.388Z"
        fill="#000"
      />
    </Svg>
  )
}
export default SvgContactBookIcon
