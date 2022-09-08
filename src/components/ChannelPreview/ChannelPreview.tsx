import React from 'react';
import { formatMessageData } from '../../utils';
import { ChannelPreviewMessenger } from './ChannelPreviewMessenger';

export type ChannelPreviewProps = {
  Preview?: React.ComponentType<ChannelPreviewProps>;
  channel: any;
  changeActiveChannelEvent: (channel: any) => void;
  activeChannel: any | null;
};
export const ChannelPreview = (props: ChannelPreviewProps) => {
  const {
    Preview = ChannelPreviewMessenger,
    channel,
    activeChannel,
    changeActiveChannelEvent,
  } = props;

  const isActive = activeChannel?.room_id === channel.room_id;

  const { latestMsg, displayTitle, avatarUrl, updatedAt, unread } = formatMessageData(channel);

  if (typeof latestMsg === 'object') {
    return null;
  }

  return (
    <Preview
      {...props}
      active={isActive}
      channel={channel}
      unread={unread}
      displayTitle={displayTitle}
      lastMessage={latestMsg}
      updatedAt={updatedAt}
      setActiveChannel={changeActiveChannelEvent}
      avatarUrl={avatarUrl}
    />
  );
};
