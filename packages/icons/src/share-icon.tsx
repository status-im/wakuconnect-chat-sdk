import { createIcon } from '../lib/create-icon'

const SvgShareIcon = createIcon(props => {
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
        d="m10 2.19.403.366 5.5 5-.807.888L10.6 4.356V14H9.4V4.356L4.903 8.444l-.807-.888 5.5-5L10 2.189ZM3.155 14.457c-.09-.438-.153-.923-.193-1.458h1.204c.037.456.09.858.164 1.214.165.799.424 1.316.782 1.674.358.358.875.617 1.674.782.805.167 1.849.23 3.214.23 1.366 0 2.41-.063 3.214-.23.799-.165 1.316-.424 1.674-.782.358-.358.617-.875.782-1.674a9.97 9.97 0 0 0 .164-1.214h1.204a11.38 11.38 0 0 1-.193 1.458c-.194.935-.529 1.7-1.108 2.279-.58.58-1.343.914-2.28 1.108-.929.193-2.072.255-3.457.255-1.385 0-2.528-.062-3.458-.255-.936-.194-1.7-.529-2.279-1.108-.58-.58-.914-1.343-1.108-2.28Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgShareIcon
