import { createIcon } from '../lib/create-icon'

const SvgPuzzleIcon = createIcon(props => {
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
        d="M9.5 2.4a2.6 2.6 0 0 0-2.53 2H6.5v1.2h1.6V5a1.4 1.4 0 1 1 2.8 0v.6h1.6c.479 0 .797 0 1.04.023.237.021.343.059.41.098a.9.9 0 0 1 .33.329c.039.068.076.174.098.41A13 13 0 0 1 14.4 7.5v1.6h.6a1.4 1.4 0 0 1 0 2.8h-.6V13c0 .724-.001 1.207-.05 1.566-.045.342-.124.48-.213.57-.09.09-.229.169-.57.215-.36.048-.843.049-1.567.049H6.5c-.478 0-.797 0-1.04-.023-.236-.021-.343-.059-.41-.098a.9.9 0 0 1-.33-.329c-.038-.067-.076-.173-.097-.41A12.908 12.908 0 0 1 4.6 13.5v-.47a2.595 2.595 0 0 0 1.802-1.535A2.6 2.6 0 0 0 4.6 7.97V7.5c0-.478 0-.797.023-1.04.021-.236.059-.343.098-.41a.9.9 0 0 1 .329-.33c.067-.038.174-.076.41-.097A12.91 12.91 0 0 1 6.5 5.6V4.4h-.027c-.444 0-.818 0-1.122.028-.319.029-.62.091-.901.253a2.1 2.1 0 0 0-.768.769c-.163.28-.225.582-.254.9-.028.305-.028.679-.028 1.123V7.5h.605H3.4v1.6H4a1.4 1.4 0 0 1 0 2.8h-.6v1.6h.59-.59v.027c0 .444 0 .818.028 1.122.029.32.091.62.254.901a2.1 2.1 0 0 0 .768.769c.28.162.582.225.9.253.305.028.679.028 1.123.028h5.568c.672 0 1.236 0 1.685-.06.475-.064.91-.205 1.26-.555.349-.35.49-.784.554-1.26.06-.448.06-1.012.06-1.684v-.011a2.6 2.6 0 0 0 0-5.06v-.497c0-.444 0-.818-.027-1.122-.03-.319-.092-.62-.254-.901a2.1 2.1 0 0 0-.769-.769c-.28-.162-.582-.225-.9-.253-.305-.028-.679-.028-1.123-.028h-.497a2.606 2.606 0 0 0-1.535-1.802A2.6 2.6 0 0 0 9.5 2.4Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgPuzzleIcon
