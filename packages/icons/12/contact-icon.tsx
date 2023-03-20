import { useTheme } from '@tamagui/core'
import { Circle, Path, Svg } from 'react-native-svg'

import type { IconProps } from '../types'

const SvgContactIcon = (props: IconProps) => {
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
      <Circle cx={6} cy={6} r={5} fill="#4360DF" />
      <Path
        d="M9 9.5A3.369 3.369 0 0 0 6.197 8h-.394A3.369 3.369 0 0 0 3 9.5"
        stroke="#fff"
        strokeLinejoin="round"
      />
      <Circle cx={6} cy={6} r={4.25} stroke="#4360DF" strokeWidth={1.5} />
      <Circle cx={6} cy={4.5} r={1.5} stroke="#fff" strokeLinejoin="round" />
    </Svg>
  )
}
export default SvgContactIcon