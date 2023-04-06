import { useTheme } from '@tamagui/core'
import { Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgFolderIcon = (props: IconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.847 3.35h-.09c-.7 0-1.162 0-1.56.09A3.646 3.646 0 0 0 2.44 6.197c-.09.397-.089.858-.089 1.56v3.47c0 .816 0 1.469.043 1.995.044.54.137 1.006.355 1.434a3.65 3.65 0 0 0 1.595 1.595c.428.218.893.31 1.434.355.527.043 1.179.043 1.995.043H12.927c.994 0 1.65 0 2.201-.179a3.648 3.648 0 0 0 2.343-2.343c.18-.552.18-1.207.18-2.201V8.772c0-.816 0-1.469-.044-1.995-.044-.54-.137-1.006-.355-1.434a3.65 3.65 0 0 0-1.595-1.595c-.428-.218-.893-.31-1.434-.355-.526-.043-1.179-.043-1.995-.043H6.847ZM3.65 8.8c0-.85 0-1.45.039-1.917.037-.46.108-.736.217-.95a2.35 2.35 0 0 1 1.027-1.027c.214-.109.49-.18.95-.217.362-.03.802-.037 1.378-.038.36.001.527.008.672.032A2.35 2.35 0 0 1 9.736 6.16c.066.172.11.385.227.966l.01.054c.064.32.111.556.191.765a2.65 2.65 0 0 0 2.034 1.667c.22.037.462.037.788.037H14.2c.795 0 1.039.008 1.217.066.411.134.734.456.867.867.053.163.064.38.066 1.02a20.176 20.176 0 0 1-.039 1.514c-.037.46-.108.736-.217.95a2.351 2.351 0 0 1-1.027 1.027c-.214.109-.49.18-.95.217-.467.039-1.066.039-1.917.039H7.8c-.85 0-1.45 0-1.917-.039-.46-.037-.736-.108-.95-.217a2.35 2.35 0 0 1-1.027-1.027c-.109-.214-.18-.49-.217-.95-.038-.467-.039-1.066-.039-1.917V8.8Zm12.7-.08a2.647 2.647 0 0 0-.531-.24c-.401-.13-.872-.13-1.51-.13H13.04c-.404 0-.527-.002-.625-.019a1.35 1.35 0 0 1-1.036-.85c-.036-.093-.062-.213-.141-.608l-.013-.062c-.1-.498-.165-.827-.275-1.114a3.647 3.647 0 0 0-.616-1.047H12.2c.85 0 1.45 0 1.918.039.46.037.735.108.949.217a2.35 2.35 0 0 1 1.027 1.027c.109.214.18.49.217.95.037.452.04 1.028.04 1.837Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgFolderIcon
