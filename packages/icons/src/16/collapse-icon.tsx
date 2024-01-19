import type { SVGProps } from 'react'

const SvgCollapseIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_3221_3544)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5.932H5.298a11.452 11.452 0 0 1-.196 1.714c-.166.799-.424 1.316-.782 1.674-.358.358-.876.617-1.674.782-.48.1-1.046.162-1.714.197V6.5a12.817 12.817 0 0 0 1.957-.223c.936-.194 1.7-.529 2.28-1.108.579-.58.914-1.344 1.108-2.28.118-.57.187-1.22.223-1.957ZM.932 9.5v1.202c.668.034 1.233.096 1.714.196.798.165 1.316.424 1.674.782.358.358.616.876.782 1.674.1.48.162 1.046.196 1.714H6.5a12.816 12.816 0 0 0-.223-1.957c-.194-.936-.53-1.7-1.109-2.28-.579-.579-1.343-.914-2.279-1.108-.57-.118-1.22-.187-1.957-.223Zm9.77 5.568H9.5c.036-.737.105-1.388.223-1.957.194-.936.529-1.7 1.108-2.28.58-.579 1.343-.914 2.28-1.108.57-.118 1.22-.187 1.957-.223v1.202c-.668.034-1.234.096-1.714.196-.799.165-1.316.424-1.674.782-.358.358-.617.876-.782 1.674-.1.48-.162 1.046-.197 1.714ZM15.067 6.5V5.3a11.451 11.451 0 0 1-1.714-.197c-.799-.165-1.316-.424-1.674-.782-.358-.358-.617-.875-.782-1.674-.1-.48-.162-1.046-.197-1.714H9.5c.036.737.105 1.388.223 1.958.194.935.529 1.7 1.108 2.279.58.579 1.343.914 2.28 1.108.57.118 1.22.187 1.957.223Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_3221_3544">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCollapseIcon