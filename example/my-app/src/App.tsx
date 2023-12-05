import React, { useEffect, useState } from 'react';
import { Client } from '@web3mq/client';
import { Chat, ConnectMessage, DashBoard, AppTypeEnum } from '@web3mq/react-components';
import '@web3mq/react-components/dist/css/index.css';
import Main from './components/Main';
import Login from './components/Login';

import useLogin from './hooks/useLogin';

const App: React.FC = () => {
  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();

  const [appType, setAppType] = useState(
    window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc'],
  );

  useEffect(() => {
    init();
    document.body.setAttribute('data-theme', 'light');
    window.addEventListener('resize', () => {
      setAppType(window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc']);
    });
  }, []);

  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    const loadClient = async () => {
      if (keys) {
        const wasm = await import('web3mq_mls');
        if (wasm) {
          const client = Client.getInstance(keys);
          client.setupWasmModule(wasm);
          setClient(client);
        }
      }
    };

    loadClient();
  }, [keys]);

  const handleEvent = (data: any) => {
    console.log(data, 'data');
    if (data.type === 'message.getList') {
      console.log(client.message.messageList, 'aaa');
    }
  };

  useEffect(() => {
    if (client) {
      client.on('channel.created', handleEvent);
      client.on('channel.getList', handleEvent);
      client.on('channel.activeChange', handleEvent);
      client.on('channel.updated', handleEvent);
      client.on('contact.activeChange', handleEvent);
      client.on('contact.getList', handleEvent);
      client.on('contact.getContactList', handleEvent);
      client.on('contact.getFollowerList', handleEvent);
      client.on('contact.getFollowingList', handleEvent);
      client.on('contact.friendList', handleEvent);
      client.on('contact.reviceList', handleEvent);
      client.on('contact.updateList', handleEvent);
      client.on('contact.updateContactList', handleEvent);
      client.on('contact.updateFollowerList', handleEvent);
      client.on('contact.updateFollowingList', handleEvent);
      client.on('connect.changeReadyStatus', handleEvent);
      client.on('message.send', handleEvent);
      client.on('message.delivered', handleEvent);
      client.on('message.read', handleEvent);
      client.on('message.updated', handleEvent);
      client.on('message.getList', handleEvent);
      client.on('message.getThreadList', handleEvent);
      client.on('message.openAllThread', handleEvent);
      client.on('notification.messageNew', handleEvent);
      client.on('notification.getList', handleEvent);
      client.on('notification.getMyTopicList', handleEvent);
      client.on('notification.getMySubscribeList', handleEvent);
      client.on('connect.changeReadyStatus', handleEvent);
    }
  }, [client]);

  if (!keys || !client) {
    let mainKeys = null;
    const mainPrivateKey = localStorage.getItem(`MAIN_PRIVATE_KEY`);
    const mainPublicKey = localStorage.getItem(`MAIN_PUBLIC_KEY`);
    const address = localStorage.getItem('WALLET_ADDRESS');
    if (mainPublicKey && mainPrivateKey && address) {
      mainKeys = {
        publicKey: mainPublicKey,
        privateKey: mainPrivateKey,
        walletAddress: address,
      };
    }
    return <Login appType={appType} handleLoginEvent={handleLoginEvent} mainKeys={mainKeys} />;
  } else {
    if (!fastestUrl) {
      return null;
    }
    return (
      <Chat client={client} appType={appType} logout={logout}>
        <ConnectMessage />
        <DashBoard />
        <Main />
        {/* <Channel>
        <Window>
          <MessageHeader avatarSize={40} />
          <MessageList />
          <MessageInput Input={MsgInput} />
          <MessageConsole Input={<MessageInput Input={MsgInput} />} />
        </Window>
        <Thread />
        <AllThreadList />
      </Channel> */}
      </Chat>
    );
  }
};

export default App;
