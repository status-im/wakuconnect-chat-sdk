import React from 'react'

import { Stack, Unspaced, XStack, YStack } from 'tamagui'

import { Author } from '../author/author'
import { Avatar } from '../avatar'
import { Image } from '../image'
import { Paragraph } from '../typography'
import { Actions } from './components/actions'
import { Reactions } from './components/reactions'

interface Props {
  text?: React.ReactNode
  images?: Array<{ url: string }>
  reactions?: []
}

const ChatMessage = (props: Props) => {
  const { text, images, reactions } = props

  const [hovered, setHovered] = React.useState(false)

  return (
    <XStack
      space={10}
      position="relative"
      alignItems="flex-start"
      paddingHorizontal={8}
      paddingVertical={12}
      borderRadius={16}
      hoverStyle={{
        backgroundColor: '$neutral-5',
      }}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
    >
      {hovered && (
        <Unspaced>
          <Actions
            onClick={() => {
              console.log('clicked')
            }}
          />
        </Unspaced>
      )}

      <Avatar
        size={32}
        src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybHx8fHx8fDE2NzM4ODQ0NzU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
        indicator="online"
      />

      <YStack flex={1}>
        <Author
          name="Alisher Yakupov"
          address="zQ3...9d4Gs0"
          status="verified"
          time="09:30"
        />

        {text && (
          <Paragraph flexGrow={0} weight="regular" color="$neutral-100">
            {text}
          </Paragraph>
        )}

        {images?.map(image => (
          <Stack
            key={image.url}
            marginTop={8}
            $gtMd={{
              maxWidth: 320,
            }}
          >
            <Image src={image.url} width="full" height={320} radius={12} />
          </Stack>
        ))}

        {reactions && (
          <Stack marginTop={8}>
            <Reactions />
          </Stack>
        )}
      </YStack>
    </XStack>
  )
}

export { ChatMessage }