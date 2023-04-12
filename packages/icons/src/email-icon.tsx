import { createIcon } from '../lib/create-icon'

const SvgEmailIcon = createIcon(props => {
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
        d="M3.1 10c0-1.493.063-2.629.245-3.503.053-.251.114-.477.185-.68l.043.074c.381.668.923 1.561 1.564 2.458.3.42.626.847.97 1.253l-2.875 3.234C3.136 12.071 3.1 11.14 3.1 10Zm.454 4.28c.17.46.39.798.668 1.056.414.387 1.022.662 1.97.833.952.172 2.188.231 3.808.231 1.618 0 2.853-.063 3.804-.24.947-.176 1.556-.456 1.972-.847.274-.258.493-.592.662-1.042l-3.363-3.783a9.63 9.63 0 0 1-.399.37c-.783.685-1.704 1.242-2.676 1.242-.972 0-1.893-.557-2.676-1.242a9.62 9.62 0 0 1-.4-.37l-3.37 3.792Zm13.211-1.447c.098-.765.135-1.695.135-2.833 0-1.493-.063-2.629-.245-3.503a5.433 5.433 0 0 0-.185-.68l-.043.074a29.145 29.145 0 0 1-1.564 2.458c-.3.42-.626.847-.97 1.253l2.872 3.23Zm-1.024-8.178c-.414-.375-1.016-.644-1.937-.815-.95-.177-2.186-.24-3.804-.24-1.618 0-2.854.063-3.804.24-.921.171-1.523.44-1.938.815.093.172.213.39.357.641.368.645.889 1.502 1.498 2.355.613.858 1.3 1.69 2 2.304.718.627 1.359.945 1.887.945s1.17-.318 1.886-.945c.7-.613 1.388-1.446 2-2.304a28.213 28.213 0 0 0 1.855-2.996ZM10 2.4c-1.632 0-2.96.062-4.024.26-1.069.199-1.928.544-2.575 1.153-.65.613-1.02 1.43-1.23 2.44-.21 1-.271 2.24-.271 3.747 0 1.523.062 2.77.27 3.775.21 1.014.58 1.83 1.233 2.439.648.605 1.509.943 2.576 1.136 1.064.192 2.39.25 4.02.25 1.633 0 2.96-.062 4.025-.26 1.068-.199 1.928-.544 2.575-1.153.65-.613 1.02-1.43 1.23-2.44.21-1 .27-2.24.27-3.747 0-1.507-.06-2.746-.27-3.747-.21-1.01-.58-1.827-1.23-2.44-.647-.609-1.507-.954-2.575-1.153-1.065-.198-2.392-.26-4.024-.26Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgEmailIcon
