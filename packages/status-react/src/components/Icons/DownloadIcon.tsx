import React from 'react'
import styled from 'styled-components'

type DownloadIconProps = {
  width: number
  height: number
  className?: string
}

export function DownloadIcon({ width, height, className }: DownloadIconProps) {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10.6668 8.83399C10.6668 8.55784 10.8924 8.33835 11.1647 8.29286C12.5846 8.05568 13.6668 6.82121 13.6668 5.33399C13.6668 3.67713 12.3237 2.33399 10.6668 2.33399L5.3335 2.33399C3.67664 2.33399 2.3335 3.67713 2.3335 5.33399C2.3335 6.82121 3.4157 8.05568 4.83559 8.29286C5.10796 8.33835 5.3335 8.55784 5.3335 8.83399C5.3335 9.11013 5.10852 9.33726 4.83449 9.30316C2.86085 9.05755 1.3335 7.37414 1.3335 5.33399C1.3335 3.12485 3.12436 1.33398 5.3335 1.33398L10.6668 1.33399C12.876 1.33399 14.6668 3.12485 14.6668 5.33399C14.6668 7.37414 13.1395 9.05755 11.1658 9.30316C10.8918 9.33726 10.6668 9.11013 10.6668 8.83399Z" />
      <path d="M8.00016 4.83399C8.27631 4.83399 8.50016 5.05784 8.50016 5.33399V11.9888C8.50016 12.2858 8.85921 12.4345 9.0692 12.2245L10.3133 10.9804C10.5085 10.7852 10.8251 10.7852 11.0204 10.9804C11.2156 11.1757 11.2156 11.4923 11.0204 11.6875L8.35372 14.3542C8.15845 14.5495 7.84187 14.5495 7.64661 14.3542L4.97994 11.6875C4.78468 11.4923 4.78468 11.1757 4.97994 10.9804C5.1752 10.7852 5.49179 10.7852 5.68705 10.9804L6.93113 12.2245C7.14112 12.4345 7.50016 12.2858 7.50016 11.9888V5.33399C7.50016 5.05784 7.72402 4.83399 8.00016 4.83399Z" />
    </Icon>
  )
}

const Icon = styled.svg`
  fill: ${({ theme }) => theme.tertiary};
`
