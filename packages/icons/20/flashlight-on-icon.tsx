import { useTheme } from '@tamagui/core'
import { Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgFlashlightOnIcon = (props: IconProps) => {
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
        d="M7 3s1-1 3-1 3 1 3 1"
        stroke="#1B273D"
        strokeOpacity={0.3}
        strokeWidth={1.3}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.533 4.35h7.006a2.65 2.65 0 0 1 2.61 2.61l.001.073v.043a4.651 4.651 0 0 1-.482 2.041l-.017.034-.69 1.38-.019.038c-.123.246-.215.43-.335.6-.107.15-.229.287-.364.412-.153.14-.325.255-.554.408l-.035.023-.204.136c-.158.105-.176.12-.188.13a.35.35 0 0 0-.107.202 1.993 1.993 0 0 0-.005.228V15.5a3.15 3.15 0 1 1-6.3 0v-2.792c0-.19-.002-.213-.004-.228a.35.35 0 0 0-.108-.202 2.013 2.013 0 0 0-.188-.13l-.203-.136-.036-.024a4.423 4.423 0 0 1-.554-.407 2.655 2.655 0 0 1-.363-.412c-.12-.17-.213-.354-.336-.6l-.02-.038-.689-1.38-.017-.034a4.65 4.65 0 0 1-.482-2.04V6.96a2.65 2.65 0 0 1 2.61-2.61l.073-.001Zm.005 1.3H6.48a1.35 1.35 0 0 0-1.33 1.388v.032c0 .094.005.187.013.28h9.674c.008-.093.013-.186.013-.28v-.09a1.35 1.35 0 0 0-1.388-1.33H6.538Zm7.91 3H5.552l.65 1.3c.15.3.196.388.25.464.055.076.117.147.185.21.07.063.151.12.43.307l.205.135.026.018c.113.075.225.15.323.24.27.251.45.586.508.95.021.132.021.266.021.402V15.5a1.85 1.85 0 0 0 3.7 0v-2.824c0-.136 0-.27.02-.402.06-.364.238-.699.51-.95.097-.09.209-.165.322-.24l.027-.018.204-.135c.28-.187.36-.243.43-.307.069-.063.13-.134.185-.21.054-.076.1-.164.25-.465l.65-1.299ZM9.35 12v-2h1.3v2h-1.3Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgFlashlightOnIcon
