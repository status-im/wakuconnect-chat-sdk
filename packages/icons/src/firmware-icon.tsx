import { createIcon } from '../lib/create-icon'

const SvgFirmwareIcon = createIcon(props => {
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
      <g clipPath="url(#firmware-icon_svg__a)">
        <path
          fill={props.color}
          fillRule="evenodd"
          d="M10.6.5v1.906c.646.014 1.246.052 1.8.122V1h1.2v1.748c.977.248 1.77.649 2.387 1.265.668.668 1.083 1.545 1.324 2.637H19v1.2h-1.499c.052.483.081 1 .093 1.55H19.5v1.2h-1.906a16.664 16.664 0 0 1-.156 2.05H19v1.2h-1.816c-.251.863-.635 1.574-1.197 2.137-.616.616-1.41 1.017-2.387 1.265V19h-1.2v-1.528c-.554.07-1.154.108-1.8.122V19.5H9.4v-1.906a17.558 17.558 0 0 1-1.8-.122V19H6.4v-1.748c-.977-.248-1.77-.649-2.387-1.265-.563-.563-.946-1.274-1.197-2.137H1v-1.2h1.562a16.652 16.652 0 0 1-.156-2.05H.5V9.4h1.906c.012-.55.041-1.067.093-1.55H1v-1.2h1.69c.24-1.092.655-1.969 1.323-2.637.616-.616 1.41-1.017 2.387-1.265V1h1.2v1.528c.554-.07 1.154-.108 1.8-.122V.5h1.2Zm-7 9.5c0-2.743.387-4.263 1.262-5.138S7.257 3.6 10 3.6s4.263.387 5.138 1.262S16.4 7.257 16.4 10s-.387 4.263-1.262 5.138S12.743 16.4 10 16.4s-4.263-.387-5.138-1.262S3.6 12.743 3.6 10Zm3-.4c0-.77.032-1.329.12-1.747.086-.407.214-.628.372-.772.164-.15.429-.278.91-.364C8.488 6.632 9.132 6.6 10 6.6c.87 0 1.51.032 1.99.122.475.09.734.226.898.39.164.164.3.423.39.898.09.48.122 1.12.122 1.99 0 .87-.032 1.51-.122 1.99-.09.475-.226.734-.39.898-.164.164-.423.3-.897.39-.48.09-1.12.122-1.991.122-.872 0-1.508-.032-1.984-.127-.466-.094-.721-.236-.887-.416-.17-.186-.313-.485-.405-1.025-.092-.542-.124-1.26-.124-2.232ZM10 5.4c-.88 0-1.612.03-2.206.136-.596.105-1.112.295-1.51.658-.406.369-.62.854-.738 1.412C5.43 8.154 5.4 8.82 5.4 9.6c0 .979.03 1.785.141 2.434.111.65.313 1.208.705 1.634.397.433.923.659 1.535.781.602.12 1.34.151 2.219.151.88 0 1.615-.03 2.213-.143.603-.114 1.125-.322 1.524-.72.398-.399.606-.92.72-1.524.112-.598.143-1.333.143-2.213 0-.88-.03-1.615-.143-2.213-.114-.603-.322-1.125-.72-1.524-.399-.398-.92-.606-1.524-.72C11.615 5.431 10.88 5.4 10 5.4Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="firmware-icon_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})

export default SvgFirmwareIcon