import React, { useEffect, useState } from 'react';
import { Client } from '@web3mq/client';

import { sha256, ByteArrayToHexString } from '@web3mq/client';

// own by user:47ba5dcce9140493e8aaf4302f05605141998b074e5e9eaa3f2c7ba7
let groupId = 'group:69d8ee0fb8a49c57deee88b963f1437ca16db28f';
const App: React.FC = () => {
  const [wasm, setWasm] = useState<typeof import('web3mq_mls')>();

  useEffect(() => {
    (async () => {
      try {
        const wasm = await import('web3mq_mls');
        setWasm(wasm);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  //   const user_a = {
  //     DID_KEY: 'eth:0x9b6a5a1dd55ea481f76b782862e7df2977dffe6c',
  //     PRIVATE_KEY: '5111ec7fda1046fa8a4bfcd8351307068c92f4932b81015d3e32a93efa5fe824',
  //     PUBLIC_KEY: 'c5f3abee30867c0abf77b77b43258d4892adcec006463f0715be67401296b6fb',
  //     MAIN_PUBLIC_KEY: 'afc38081bbe032c090be0786739ca6cebe58c6a8be4b21c61c03e0c3544c32da',
  //     MESSAGEUPDATEDATE: '1695801519782',
  //     PUBKEY_EXPIRED_TIMESTAMP: '1695886370119',
  //     W3M_VERSION: '2.3.7',
  //     'gsw-last-1697469593967-1554288037239': 'argentX',
  //     MAIN_PRIVATE_KEY:
  //       'IX4TVAJv6KC8C1i8v5hOo1jmEnujMe1oS0LpudzZHrpIFDwunHN2Txzb0xkz6BL8LXJ1cCrJszJHDiy/ROxFq6bja5El8Ynx5ilGpHB1+KM=',
  //     FAST_URL: 'https://dev-ap-jp-1.web3mq.com',
  //     userid: 'user:ea63cbd115dc2a4a2935f6ee669725c11ac2638fa5200ba94d71c84a',
  //     WALLET_ADDRESS: '0x9b6a5a1dd55ea481f76b782862e7df2977dffe6c',
  //   };

  //
  //   const user_a = {
  //     DID_KEY: 'eth:0x3e21588682b547aa5b3cb01f5c073a56455e7b1d',
  //     PRIVATE_KEY: '7f97e521b3bfbff558302b36c067edfda302dca69b175f57647bea0237ca6bf3',
  //     PUBLIC_KEY: 'f8d54e8aa947d2c8f7af74f16c36aa445b7cddc40f86e9bba6ea16640755d612',
  //     MAIN_PUBLIC_KEY: '28cf81789322b650ea293fb2f8b9e709e4b8e35838703fa45f485305ba055c0b',
  //     PUBKEY_EXPIRED_TIMESTAMP: '1701508275574',
  //     W3M_VERSION: '2.3.7',
  //     'gsw-last-1697469593967-1554288037239': 'argentX',
  //     MAIN_PRIVATE_KEY:
  //       'e3QWVFlluaDmUl6/vZ0e8Q3gFH+iZ7s/Qhfnu4uKSb5IFDYvnXVwHBnaghgw6Ef3eXR9dy+ctT9FW3/oEbVCpgLgS6jeAZHey6qMzHMqNLY=',
  //     FAST_URL: 'https://dev-ap-jp-1.web3mq.com',
  //     userid: 'user:47ba5dcce9140493e8aaf4302f05605141998b074e5e9eaa3f2c7ba7',
  //     WALLET_ADDRESS: '0x3e21588682b547aa5b3cb01f5c073a56455e7b1d',
  //   };

  const user_a = {
    DID_KEY: 'eth:0x70b50f680018f38e438a90df1514867d5da8efc1',
    PRIVATE_KEY: '63e070554d84ce9cc73d15f213c17db93c2f552b2a9ecb0a3fad9dea3bd73c08',
    PUBLIC_KEY: '6768aada005f569900bb891e2ecdafd8b4d450ebaf263e0c262b1891f67a918c',
    MAIN_PUBLIC_KEY: '7ad77f33167f78dd8859f199333aad699669c966847a2e91df001086cf60696c',
    PUBKEY_EXPIRED_TIMESTAMP: '1701508480620',
    W3M_VERSION: '2.3.7',
    'gsw-last-1697469593967-1554288037239': 'argentX',
    MAIN_PRIVATE_KEY:
      'dClBAlptvaS9Ula+650Y8VizEij3M+lpHhbm69zZE7xMEGp9n3IkGBqCiUs3uR2qfnApIyvHsjJAWi2/E78Uq1HNlwZgUH6jV4+JTI6s5Wo=',
    FAST_URL: 'https://dev-ap-jp-1.web3mq.com',
    userid: 'user:269d53596eac30d9b56a73975e718daac4b0ebb8c5ec76c35a6eb4f2',
    WALLET_ADDRESS: '0x70b50f680018f38e438a90df1514867d5da8efc1',
  };

  const [loginUserId, setLoginUserId] = useState<any>();

  const [web3mqClient, setWeb3mqClient] = useState<any>();
  const init = async () => {
    const res = await Client.init({
      didKey: user_a.DID_KEY,
      app_key: 'vAUJTFXbBZRkEDRE',
      env: 'dev',
      connectUrl: user_a.FAST_URL,
      tempPubkey: user_a.PUBLIC_KEY,
    });
    console.log(res, 'res');
    const client = Client.getInstance({
      PrivateKey: user_a.PRIVATE_KEY,
      PublicKey: user_a.PUBLIC_KEY,
      userid: user_a.userid,
    });
    setWeb3mqClient(client);

    setLoginUserId(user_a.userid);
    client.setupWasmModule(wasm);
    console.log('client', client);
  };

  const handleEvent = (data: any) => {
    console.log(data, 'data');
    if (data.type === 'message.getList') {
      console.log(web3mqClient.message.messageList, 'aaa');
    }
  };

  useEffect(() => {
    if (web3mqClient) {
      web3mqClient.on('channel.created', handleEvent);
      web3mqClient.on('channel.getList', handleEvent);
      web3mqClient.on('channel.activeChange', handleEvent);
      web3mqClient.on('channel.updated', handleEvent);
      web3mqClient.on('contact.activeChange', handleEvent);
      web3mqClient.on('contact.getList', handleEvent);
      web3mqClient.on('contact.getContactList', handleEvent);
      web3mqClient.on('contact.getFollowerList', handleEvent);
      web3mqClient.on('contact.getFollowingList', handleEvent);
      web3mqClient.on('contact.friendList', handleEvent);
      web3mqClient.on('contact.reviceList', handleEvent);
      web3mqClient.on('contact.updateList', handleEvent);
      web3mqClient.on('contact.updateContactList', handleEvent);
      web3mqClient.on('contact.updateFollowerList', handleEvent);
      web3mqClient.on('contact.updateFollowingList', handleEvent);
      web3mqClient.on('connect.changeReadyStatus', handleEvent);
      web3mqClient.on('message.send', handleEvent);
      web3mqClient.on('message.delivered', handleEvent);
      web3mqClient.on('message.read', handleEvent);
      web3mqClient.on('message.updated', handleEvent);
      web3mqClient.on('message.getList', handleEvent);
      web3mqClient.on('message.getThreadList', handleEvent);
      web3mqClient.on('message.openAllThread', handleEvent);
      web3mqClient.on('notification.messageNew', handleEvent);
      web3mqClient.on('notification.getList', handleEvent);
      web3mqClient.on('notification.getMyTopicList', handleEvent);
      web3mqClient.on('notification.getMySubscribeList', handleEvent);
    }
  }, [web3mqClient]);

  useEffect(() => {
    console.log(web3mqClient?.message.messageList, 'web3mqClient?.message.messageList');
  }, [web3mqClient?.message.messageList]);

  return (
    <div>
      <div>
        <body>User: {loginUserId}</body>
      </div>

      <div>
        <h2>Greeting from wasm: {!wasm ? 'Loading...' : 'Loaded'}</h2>
      </div>

      <div>
        <button onClick={init}>init</button>
      </div>

      <div>
        <button
          onClick={async () => {
            console.log('web3mqClient: ', web3mqClient);
            const res = await web3mqClient?.channel.queryChannels({
              page: 1,
              size: 30,
            });
            console.log('channels: ', res);
            // console.log(JSON.stringify([res[0]]));
          }}
        >
          queryChannel
        </button>
      </div>
      <div>
        <button
          onClick={async () => {
            const res = await web3mqClient?.channel.createRoom({
              groupName: 'test group nft id 222',
              nfts: [
                {
                  chain_id: '1',
                  chain_type: 'evm',
                  contract: '0xd29F5F02f5fFcd102faF467F2F236c601830780d'.toLowerCase(),
                },
              ],
            });
            console.log(res);
          }}
        >
          createRoom
        </button>
      </div>

      <div>
        <button
          onClick={async () => {
            const res = await web3mqClient?.channel.createRoom({
              groupName: 'MLS Group 2',
            });
            console.log(res);
          }}
        >
          Create MLS Group
        </button>
      </div>

      <div>
        <button
          onClick={async () => {
            console.log('client:channel', web3mqClient?.channel);
            // TODO: present a alert to input the group id and the invited member user id
            const res = await web3mqClient?.channel.inviteGroupMember(
              ['user:47ba5dcce9140493e8aaf4302f05605141998b074e5e9eaa3f2c7ba7'],
              'group:69d8ee0fb8a49c57deee88b963f1437ca16db28f',
            );
            console.log('Invite Group Member result:', res);
          }}
        >
          Invite Group Member
        </button>
      </div>

      <div>
        <button
          onClick={async () => {
            const res = await web3mqClient?.message.sendMessage('hello test message', groupId);
            console.log(res);
            console.log(web3mqClient.message.messageList, 'web3mqClient.message.messageList');
            console.log(JSON.stringify(res));
          }}
        >
          send message
        </button>
      </div>

      <div>
        <button
          onClick={async () => {
            const res = await web3mqClient?.message.getMessageList({ page: 1, size: 10 }, groupId);
            console.log(res);
            console.log(JSON.stringify(res));
          }}
        >
          get message
        </button>
      </div>

      <div>
        <button
          onClick={async () => {
            let result = await web3mqClient?.contact.followOperation({
              targetUserid: 'user:47ba5dcce9140493e8aaf4302f05605141998b074e5e9eaa3f2c7ba7',
              action: 'follow',
              address: user_a.WALLET_ADDRESS,
              didType: 'eth',
            });
            console.log('Follow User result', result);
          }}
        >
          Follow User
        </button>
      </div>
    </div>
  );
};
export default App;
