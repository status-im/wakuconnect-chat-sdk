import type { SVGProps } from 'react'

const SvgCommunitiesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.2}
      d="M10.956 10.955a4.29 4.29 0 0 0-1.04 1.697c-.2.609-.3.913-.403 1.039a.688.688 0 0 1-.345.25C9.016 14 8.788 14 8.33 14H3.371c-.474 0-.71 0-.904-.107a.916.916 0 0 1-.378-.422c-.084-.204-.06-.416-.013-.84A11.979 11.979 0 0 1 12.631 2.077c.423-.048.635-.072.84.013.167.069.334.218.422.377.107.193.107.43.107.904V8.33c0 .458 0 .687-.06.839a.687.687 0 0 1-.25.344c-.125.104-.43.204-1.039.404a4.289 4.289 0 0 0-1.695 1.04Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.1 14c0-4.804 4.096-8.9 8.9-8.9V3.9C8.533 3.9 3.9 8.533 3.9 14h1.2Zm2.5 0c0-3.337 3.02-6.4 6.4-6.4V6.4c-4.049 0-7.6 3.606-7.6 7.6h1.2Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCommunitiesIcon