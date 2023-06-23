import { createIcon } from '../lib/create-icon'

const SvgTumblrIcon = createIcon(props => {
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
        d="M11.267 8.743v4.58c0 1.155-.012 1.83.11 2.16.12.324.427.664.775.864.463.267.99.402 1.525.392 1.027 0 1.642-.13 2.66-.786v3.006c-.745.348-1.525.615-2.328.795a9.672 9.672 0 0 1-2.272.245c-.928 0-1.48-.112-2.182-.34a5.253 5.253 0 0 1-1.827-.993c-.513-.425-.849-.879-1.045-1.361-.2-.48-.294-1.18-.294-2.1V8.198H3.67V5.364c.8-.26 1.687-.623 2.26-1.1a5.548 5.548 0 0 0 1.354-1.722c.349-.66.585-1.513.717-2.542h3.266v5.001h5.07v3.742h-5.07Z"
      />
    </svg>
  )
})

export default SvgTumblrIcon
