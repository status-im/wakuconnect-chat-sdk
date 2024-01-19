import type { SVGProps } from 'react'

const SvgFavouriteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeWidth={1.2}
      d="M10 2.5c.5 0 2.5 5 2.5 5s5 0 5 .625-4.375 3.75-4.375 3.75S15.5 17 15 17.5s-5-3.125-5-3.125S5.5 18 5 17.5s1.875-5.625 1.875-5.625S2.5 8.75 2.5 8.125s5-.625 5-.625 2-5 2.5-5Z"
    />
  </svg>
)
export default SvgFavouriteIcon