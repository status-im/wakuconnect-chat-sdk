import React, { useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { Link, useNavigate } from 'react-router-dom'

import { BellIcon } from '../../../../../../icons/bell-icon'
import { MarkAllAsReadIcon } from '../../../../../../icons/mark-all-as-read-icon'
import { TinyChevronRightIcon } from '../../../../../../icons/tiny-chevron-right-icon'
import { TinyCommunityIcon } from '../../../../../../icons/tiny-community-icon'
import { TinyReplyIcon } from '../../../../../../icons/tiny-reply-icon'
import { useActivityCenter } from '../../../../../../protocol'
import { styled } from '../../../../../../styles/config'
import {
  Avatar,
  Box,
  Button,
  EthAddress,
  Flex,
  IconButton,
  Popover,
  PopoverTrigger,
  Text,
} from '../../../../../../system'

export const ActivityCenter = () => {
  const [open, setOpen] = useState(false)

  const { activityCenter, notifications, totalCount } = useActivityCenter()
  const { all, mentions, replies } = notifications.reduce(
    (acc, obj) => {
      if (obj.type === 'message') {
        if (obj.isMention) {
          acc.mentions.push(obj)
        }

        if (obj.isReply) {
          acc.replies.push(obj)
        }
      }

      return acc
    },
    { all: notifications, mentions: [], replies: [] }
  )

  const navigate = useNavigate()

  const renderNotifications = (notifications: Notification[]) => {
    const _notifications = notifications.map(notification => {
      const value = notification.value
      const isReply = notification.isReply

      // todo: un/read
      // todo: date separator
      return (
        <NotificationLink
          to={`/${value.chatUuid}`}
          key={value.messageId}
          // todo?: rename to jumpedTo, navigateTo, goTo
          state={{ selectedMesssageId: value.messageId }}
          onClick={() => setOpen(false)}
        >
          <Flex
            gap={2}
            style={{
              width: '100%',
              // no, cuase fluid; maxheight
              //height: '100%'
            }}
          >
            <Box>
              <Avatar
                size={40}
                name={value.member.username}
                colorHash={value.member.colorHash}
              ></Avatar>
            </Box>
            <Flex
              direction="column"
              style={{
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <div>
                <Flex gap="1" align="center">
                  <Text color="primary" weight="500" size="15">
                    {/* todo?: ens name */}
                    {/* todo?: nickname */}
                    {value.member.username}
                  </Text>
                  <EthAddress size={10} color="gray">
                    {value.member.chatKey}
                  </EthAddress>
                  <Text size="10" color="gray">
                    •
                  </Text>
                  <Text size="10" color="gray">
                    {new Date(Number(value.timestamp)).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Text>
                </Flex>
              </div>
              {/* todo?: same comoponnent as for chat messages; think mention resolution */}
              <Text
                style={{
                  wordBreak: 'break-word',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  // '-webkit-line-clamp': 3,
                  // lineClamp: 3,
                  display: '-webkit-box',
                  boxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {value.text}
              </Text>
              {/* Community tag */}
              <Flex
                gap={1}
                style={{
                  padding: '6px 0px 0px',
                }}
              >
                <Tag
                  onClick={e => {
                    e.preventDefault()
                    // e.stopPropagation()
                  }}
                >
                  <div
                    role="none"
                    onClick={e => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        gap: '2px',
                        alignItems: 'center',
                      }}
                    >
                      <TinyCommunityIcon />
                      <Avatar
                        size={16}
                        name={value.communityDisplayName}
                        initialsCount={1}
                      />
                      <Text color="current" weight="500">
                        {value.communityDisplayName}
                      </Text>
                    </div>
                    <TinyChevronRightIcon />
                  </div>
                  <PathLink
                    onClick={e => {
                      // e.stopPropagation()
                      e.preventDefault()
                      navigate(`/${value.chatUuid}`)
                    }}
                  >
                    <Text color="current" weight="500">
                      #chat
                    </Text>
                  </PathLink>
                </Tag>
                {/* Reply tag */}
                {isReply && (
                  <Tag
                    onClick={e => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                  >
                    <TinyReplyIcon />
                    <Text color="current" weight="500">
                      {value.responseToMessage?.text}
                    </Text>
                  </Tag>
                )}
              </Flex>
            </Flex>
          </Flex>
        </NotificationLink>
      )
    })

    if (!_notifications.length) {
      return (
        <Text
          size="15"
          color="gray"
          weight="400"
          align="center"
          style={{
            margin: 'auto',
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          Notifications will appear here
        </Text>
      )
    }

    return (
      <div>
        {/* todo: */}
        <Text
          color="gray"
          weight={400}
          style={{ height: '34px', padding: '8px 16px 4px 16px' }}
        >
          Today
        </Text>
        {_notifications}
      </div>
    )
  }

  return (
    //   {/* todo: mention component; add to design system */}
    <PopoverTrigger open={open} onOpenChange={setOpen}>
      <IconButton label="Show Activity Center" onClick={() => setOpen(!open)}>
        {/* todo?: use <div> */}
        <>
          <BellIcon />
          {totalCount > 0 && (
            <Badge style={{ position: 'relative' }}>
              {totalCount < 99 ? totalCount : '∞'}
            </Badge>
          )}
        </>
      </IconButton>

      <Popover side="bottom">
        <div
          style={{
            width: '600px',
            height: '770px',
            // overflow: 'scroll',
            // maxHeight: 'max-content',
            // xxx?: why
            // display: 'flex',
          }}
        >
          <Tabs.Root
            defaultValue="tab1"
            orientation="vertical"
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <Flex
              style={{
                height: '64px',
                padding: '13px 16px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              // gap={2}
            >
              {/* todo: default tab */}
              {/* todo?: if all empty, disable other tabs */}
              <Tabs.List
                aria-label="tabs example"
                style={{ display: 'flex', gap: '8px' }}
              >
                {/* todo: map */}
                <Tabs.Trigger value="tab1">
                  <Button size="small">All</Button>
                </Tabs.Trigger>
                <Tabs.Trigger value="tab2">
                  <Button size="small" variant="secondary">
                    Mentions
                  </Button>
                </Tabs.Trigger>
                <Tabs.Trigger value="tab3">
                  <Button size="small" variant="secondary">
                    Replies
                  </Button>
                </Tabs.Trigger>
              </Tabs.List>
              <div>
                {/* todo?: relative to currently selected tab */}
                <IconButton
                  label="Mark All As Read"
                  onClick={() => activityCenter.removeNotifications()}
                >
                  <MarkAllAsReadIcon />
                </IconButton>
              </div>
            </Flex>
            {/* todo: if reply, show message being responded to as mention tag */}
            {/* todo: chat mention tag */}
            <div
              style={{
                flex: 1,

                overflow: 'hidden',
                overflowY: 'scroll',
                // overflow: 'hidden',
                // maxHeight: '700px',
                // minHeight: '700px',
                // overflowY: 'scroll',
                // overflowX: 'hidden',
                // WebkitOverflowScrolling: 'touch',
                // overscrollBehavior: 'contain',
              }}
            >
              <Tabs.Content
                className="content"
                value="tab1"
                style={{
                  width: '100%',
                  height: '100%',
                  // display: 'flex',
                  // flexDirection: 'column',
                  // justifyContent: 'center',
                }}
              >
                {renderNotifications(all)}
              </Tabs.Content>
              <Tabs.Content
                value="tab2"
                style={{
                  width: '100%',
                  height: '100%',
                  // display: 'flex',
                  // flexDirection: 'column',
                  // justifyContent: 'center',
                }}
              >
                {renderNotifications(mentions)}
              </Tabs.Content>
              <Tabs.Content
                value="tab3"
                style={{
                  width: '100%',
                  height: '100%',
                  // display: 'flex',
                  // flexDirection: 'column',
                  // justifyContent: 'center',
                }}
              >
                {renderNotifications(replies)}
              </Tabs.Content>
            </div>
          </Tabs.Root>
        </div>
      </Popover>
    </PopoverTrigger>
  )
}

// todo: dedupe
// fixme: position, white border, stretch up to 2 digits
const Badge = styled('div', {
  textAlign: 'center',
  position: 'absolute',
  right: 8,
  width: 22,
  height: 22,
  background: '$primary-1',
  borderRadius: '$full',
  fontSize: 12,
  color: '$accent-11',

  border: '2px solid $accent-11',

  // 'line-height': '16px',
  // align: 'center',
  // display: 'flex',
  // 'flex-direction': 'column',
  // 'align-items': 'center',
  // padding: '1px 5px',
  // // position: 'absolute',
  // // left: '16px',
  // // top: '-2px',
})

const NotificationLink = styled(Link, {
  // width: '100%',
  // boxSizing: 'border-box',
  // display: 'inherit',
  // display: 'inline-flex',
  // width: '100%',
  // display: 'flex',
  // gap: '$2',
  display: 'flex',
  flexShrink: 0,
  // height: '100%',
  minHeight: '60px',
  maxHeight: '126px',
  padding: '8px 16px',
  '&:hover': {
    background: '$gray-3',
  },
})

const PathLink = styled('a', {
  '&:hover': {
    textDecoration: 'underline',
  },
})

const Tag = styled('div', {
  padding: '0px 6px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '11px',
  height: '22px',
  display: 'flex',
  alignItems: 'center',
  width: 'max-content',
  color: '$gray-1',
  gap: 'unset',
  '&:hover': {
    cursor: 'default',
  },
})