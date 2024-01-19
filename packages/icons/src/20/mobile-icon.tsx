import type { SVGProps } from 'react'

const SvgMobileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.1 10c0-1.751.032-3.062.152-4.053.12-.998.323-1.59.603-1.962.26-.347.64-.573 1.298-.71C7.835 3.133 8.744 3.1 10 3.1c1.255 0 2.165.033 2.846.175.66.137 1.039.363 1.299.71.28.373.482.964.603 1.962.12.991.152 2.302.152 4.053s-.032 3.062-.152 4.053c-.121.998-.324 1.59-.603 1.962-.26.346-.64.573-1.299.71-.68.142-1.59.175-2.846.175s-2.165-.033-2.847-.175c-.659-.137-1.038-.364-1.298-.71-.28-.373-.482-.964-.603-1.962C5.132 13.062 5.1 11.75 5.1 10ZM10 1.9c-1.245 0-2.272.03-3.091.2-.84.175-1.524.511-2.014 1.165-.47.627-.706 1.474-.835 2.538C3.93 6.874 3.9 8.25 3.9 10s.03 3.126.16 4.197c.13 1.064.364 1.91.835 2.538.49.653 1.173.99 2.014 1.165.819.17 1.846.2 3.09.2 1.245 0 2.273-.03 3.092-.2.84-.175 1.524-.512 2.014-1.165.47-.627.705-1.474.834-2.538.13-1.071.16-2.448.16-4.197s-.03-3.126-.16-4.197c-.129-1.064-.364-1.91-.834-2.538-.49-.654-1.173-.99-2.014-1.165-.819-.17-1.847-.2-3.091-.2ZM8 6.1h4V4.9H8v1.2Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgMobileIcon