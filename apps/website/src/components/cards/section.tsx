import { Text } from '@status-im/components'
import { PopupIcon } from '@status-im/icons'
import { cx } from 'class-variance-authority'
import Image from 'next/image'

import { type Illustration, illustrations } from '@/config/illustrations'

import { ScreenshotImage } from '../screenshot-image'

import type { StaticImageData } from 'next/image'

type Props = {
  icon: Illustration
  title: string
  description: string
  explanation?: string
  secondaryTitle: string
  secondaryDescription: string
  secondaryExplanation?: string
  image: StaticImageData
  imageAlt: string
  customNode?: React.ReactNode
  color: 'yellow' | 'turquoise' | 'purple' | 'none'
  reverse?: boolean
}

const Section = (props: Props) => {
  const {
    title,
    color,
    description,
    explanation,
    image,
    imageAlt,
    icon,
    secondaryDescription,
    secondaryTitle,
    secondaryExplanation,
    reverse,
  } = props

  const illustration = illustrations[icon]

  return (
    <div className="justify-center px-5 py-12 lg:flex lg:px-0 lg:py-20">
      <div className="relative z-[3]">
        <div
          className={cx([
            'flex flex-col gap-12 lg:items-center xl:gap-[140px]',
            reverse ? 'lg:flex-row' : 'lg:flex-row-reverse',
          ])}
        >
          <div className="flex flex-col justify-start lg:max-w-[462px] lg:justify-center">
            <div className="flex flex-col">
              <Image
                {...illustration}
                alt={illustration.alt}
                className="mb-4"
              />
              <div className="mb-5 flex flex-col lg:mb-16">
                <Text size={27} weight="semibold">
                  {title}
                </Text>
                <div className="relative flex pt-1">
                  <Text size={27}>
                    {description}
                    {explanation && (
                      <span className="relative left-1 top-1 inline-block">
                        <PopupIcon size={20} color="$neutral-50" />
                      </span>
                    )}
                  </Text>
                </div>
              </div>

              <div className="flex flex-col rounded-[20px] border border-dashed border-neutral-80/20 p-4">
                <Text size={19} weight="semibold">
                  {secondaryTitle}
                </Text>
                <div className="flex pt-1">
                  <Text size={19}>
                    {secondaryDescription}
                    {secondaryExplanation && (
                      <span className="relative left-1 top-1 inline-block">
                        <PopupIcon size={20} color="$neutral-50" />
                      </span>
                    )}
                  </Text>
                </div>

                {props.customNode && (
                  <div className="mt-4 flex flex-col">{props.customNode}</div>
                )}
              </div>
            </div>
          </div>

          <div
            className={`flex max-w-[1504px] justify-center overflow-hidden rounded-[32px]`}
          >
            <ScreenshotImage image={image} alt={imageAlt} color={color} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Section }
