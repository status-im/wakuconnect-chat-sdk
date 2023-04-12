import { createIcon } from '../lib/create-icon'

const SvgKeycardLogoIcon = createIcon(props => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 20 20"
      focusable={false}
      aria-hidden={true}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M6.35 5.75a2.65 2.65 0 1 1 5.3 0 2.65 2.65 0 0 1-5.3 0ZM9 1.9a3.85 3.85 0 0 0-.6 7.653V17.5h1.2v-2.9h.151l2.9 2.9h1.697l-3.5-3.5 3-3h-1.697l-2.4 2.4H9.6V9.553A3.851 3.851 0 0 0 9 1.9Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgKeycardLogoIcon
