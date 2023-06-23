import { createIcon } from '../lib/create-icon'

const SvgHeartIcon = createIcon(props => {
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
        d="m10 16.517-.253.544.253.117.253-.117-.253-.544ZM3 7.534l.598.054L3 7.534Zm14 0-.598.046v.008L17 7.534Zm-7-2.017-.345.49.343.241.344-.238L10 5.517Zm0 11 .253-.544-.003-.002a1.327 1.327 0 0 0-.07-.034c-.051-.024-.127-.063-.225-.113a17.45 17.45 0 0 1-3.252-2.191c-1.77-1.523-3.328-3.594-3.105-6.045l-1.196-.109c-.277 3.05 1.665 5.47 3.52 7.064a18.654 18.654 0 0 0 3.73 2.472l.068.033.02.009.005.003h.001l.254-.543Zm0 0a78.287 78.287 0 0 0 .254.543h.001l.006-.003.019-.009a7.928 7.928 0 0 0 .318-.16 18.659 18.659 0 0 0 3.48-2.346c1.855-1.593 3.797-4.013 3.52-7.063l-1.195.109c.222 2.45-1.336 4.522-3.107 6.045A17.453 17.453 0 0 1 9.75 15.97l-.003.001.253.545Zm7.598-9.03c-.132-1.723-.672-2.867-1.55-3.506-.869-.633-1.924-.662-2.844-.492-.927.17-1.816.56-2.457.893a12.177 12.177 0 0 0-1.081.636l-.005.004h-.002v.001l.341.494.342.493.002-.002a10.97 10.97 0 0 1 .956-.562c.593-.307 1.36-.637 2.121-.777.767-.142 1.431-.074 1.921.282.482.351.942 1.09 1.06 2.629l1.196-.092Zm-14 .101c.14-1.538.608-2.282 1.098-2.636.495-.358 1.158-.424 1.917-.283.754.14 1.512.469 2.098.777a10.684 10.684 0 0 1 .942.56l.002.002.345-.491.345-.491-.002-.002c-.002 0-.003-.002-.005-.003a1.632 1.632 0 0 0-.077-.052 11.886 11.886 0 0 0-.992-.585c-.635-.334-1.515-.724-2.437-.895-.917-.17-1.967-.14-2.84.491-.879.636-1.433 1.776-1.59 3.5l1.196.108Z"
      />
    </svg>
  )
})

export default SvgHeartIcon
