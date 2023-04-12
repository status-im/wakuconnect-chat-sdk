import { createIcon } from '../lib/create-icon'

const SvgWalletIcon = createIcon(props => {
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
        d="M1.9 10a60.55 60.55 0 0 0 0 .5h.002c0 .1.002.198.004.295A3.7 3.7 0 0 0 1.9 11h.01c.023 1.185.096 2.188.259 3.028.208 1.074.572 1.937 1.22 2.584.646.647 1.509 1.011 2.583 1.22 1.067.206 2.397.268 4.028.268 1.63 0 2.96-.062 4.028-.269 1.074-.208 1.937-.572 2.584-1.22.646-.646 1.011-1.51 1.22-2.583.162-.84.235-1.843.259-3.028h.009c0-.069-.002-.137-.006-.206l.004-.294h.002V10c0-1.631-.062-2.96-.269-4.028-.208-1.074-.573-1.937-1.22-2.584-.646-.646-1.51-1.011-2.583-1.22C12.961 1.963 11.631 1.9 10 1.9c-1.631 0-2.96.062-4.028.269-1.074.208-1.937.573-2.584 1.22-.647.646-1.011 1.51-1.22 2.583C1.963 7.039 1.9 8.369 1.9 10Zm14.88-1.309c-.146-.837-.438-1.347-.939-1.7-.423-.3-1.054-.53-2.02-.68C12.86 6.164 11.616 6.1 10 6.1c-1.615 0-2.86.063-3.822.212-.965.15-1.596.38-2.02.678-.5.354-.792.864-.938 1.701l.058-.032C4.23 8.147 5.735 7.9 8 7.9h.6v.6c0 .41.104.757.298.99.179.215.496.41 1.102.41.606 0 .923-.195 1.101-.41.195-.233.299-.58.299-.99v-.6h.6c2.265 0 3.77.247 4.722.76l.058.031ZM3.106 10.823c.02 1.223.09 2.196.24 2.977.183.942.475 1.547.89 1.963.417.416 1.022.708 1.964.89.948.184 2.18.247 3.8.247 1.619 0 2.852-.063 3.8-.247.942-.182 1.547-.474 1.963-.89.416-.416.708-1.021.89-1.963.151-.78.22-1.755.24-2.978a1.375 1.375 0 0 0-.148-.561c-.1-.186-.273-.373-.592-.545-.616-.332-1.712-.572-3.607-.61-.076.405-.236.81-.523 1.153-.446.536-1.129.841-2.023.841-.894 0-1.577-.305-2.023-.84a2.494 2.494 0 0 1-.523-1.155c-1.895.039-2.991.28-3.607.61-.32.173-.492.36-.592.546a1.376 1.376 0 0 0-.149.562Zm12.657-6.586c.398.398.682.97.866 1.843a3.613 3.613 0 0 0-.096-.07c-.639-.451-1.477-.721-2.527-.884C12.952 4.962 11.634 4.9 10 4.9c-1.635 0-2.953.062-4.006.226-1.05.163-1.889.433-2.528.884a3.459 3.459 0 0 0-.095.07c.184-.874.468-1.445.866-1.843.415-.416 1.021-.708 1.963-.89.948-.184 2.18-.247 3.8-.247 1.619 0 2.852.063 3.8.247.942.182 1.547.474 1.963.89Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgWalletIcon
