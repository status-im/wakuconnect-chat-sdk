import { createIcon } from '../lib/create-icon'

const SvgLinkIcon = createIcon(props => {
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
        d="M14.44 4.818c.287.204.538.455.743.742a2.244 2.244 0 0 1-.24 2.89l-2.185 2.186.849.849 2.185-2.186a3.444 3.444 0 0 0 .367-4.437 4.393 4.393 0 0 0-1.02-1.02 3.444 3.444 0 0 0-4.438.366L8.515 6.394l.849.848 2.185-2.185a2.244 2.244 0 0 1 2.892-.24Zm-9.383 6.731 2.186-2.185-.849-.849L4.209 10.7a3.444 3.444 0 0 0-.368 4.438c.282.394.627.74 1.022 1.021a3.444 3.444 0 0 0 4.437-.367l2.185-2.186-.848-.848-2.186 2.185a2.244 2.244 0 0 1-2.891.24 3.193 3.193 0 0 1-.742-.743 2.244 2.244 0 0 1 .239-2.89Zm6.64-4.095-4.242 4.243.848.849 4.243-4.243-.849-.849Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgLinkIcon
