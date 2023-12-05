import React, { PropsWithChildren, useCallback, useEffect, useMemo } from 'react';

import { ComponentContextValue, useComponentContext } from '../../context/ComponentContext';
import { useChannelActionContext } from '../../context/ChannelActionContext';
import { useChannelStateContext } from '../../context/ChannelStateContext';
import {
  MessageInputContextProvider,
  MessageInputContextValue,
} from '../../context/MessageInputContext';
import { useChatContext } from '../../context/ChatContext';

export type MessageInputProps = {
  isThread?: boolean;
  Input?: ComponentContextValue['Input'];
};

export const MessageInput = (props: PropsWithChildren<MessageInputProps>) => {
  const { Input: propInput, isThread = false } = props;
  const { Input: contextInput } = useComponentContext('Input');
  const { replyMsgInfo } = useChannelStateContext('ChatAutoComplete');
  const { closeReply } = useChannelActionContext('Input');
  const MessageInputUIComponent = propInput || contextInput;

  const { client } = useChatContext('MessageInput');

  const handleEvent = () => {};
  useEffect(() => {
    client.on('message.send', handleEvent);
    return () => {
      client.off('message.send', handleEvent);
    };
  }, []);

  const sendMessage = useCallback(
    (text: string, cipher_suite: string) => {
      let enableMls = cipher_suite == 'MLS_128_DHKEMX25519_AES128GCM_SHA256_Ed25519' ? true : false;
      console.log('debug:sendMessage:useCallback:enableMls', enableMls);
      client.message.sendMessage(text, undefined, undefined, enableMls);
      replyMsgInfo && !isThread && closeReply();
    },
    [replyMsgInfo, isThread],
  );

  const messageInputContextValue: MessageInputContextValue = useMemo(
    () => ({
      isThread,
      sendMessage,
      closeReply,
    }),
    [replyMsgInfo],
  );

  return (
    <MessageInputContextProvider value={messageInputContextValue}>
      <MessageInputUIComponent />
    </MessageInputContextProvider>
  );
};
