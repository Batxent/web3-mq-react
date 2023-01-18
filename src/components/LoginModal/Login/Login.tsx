import React, { useCallback, useMemo, useState } from 'react';

import { ArgentWalletIcon, CloseEyesIcon, LoginErrorIcon, MetaMaskIcon, OpenEyesIcon } from '../../../icons';
import { useLoginContext } from '../../../context';
import { getShortAddress } from '../../../utils';
import { Button } from '../../Button';

import ss from './index.module.scss';
import cx from 'classnames';

export const walletsMap = [
  {
    type: 'eth',
    title: 'MetaMask',
    icon: <MetaMaskIcon />,
  },
  {
    type: 'starknet',
    title: 'Argent X',
    icon: <ArgentWalletIcon className={ss.ArgentWalletIcon} />,
  },
];

export const Login: React.FC = () => {
  const { login, address, styles, showLoading, setShowLoading, walletType } = useLoginContext();

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorInfo, setErrorInfo] = useState<string>();

  const handleSubmit = async () => {
    setShowLoading(true);
    try {
      await login(password, walletType);
      setShowLoading(false);
    } catch (e: any) {
      setErrorInfo(e.message);
      setShowLoading(false);
    }
  };

  const isDisable = useMemo(() => {
    return showLoading || !password;
  }, [password, showLoading]);

  const WalletIconContainer = useCallback(() => {
    const walletItem = walletsMap.find(item => item.type === walletType);
    if (!walletItem) return null;
    return (
      <>
        {walletItem?.icon}
        <div className={ss.centerText}>{walletItem?.title}</div>
      </>
    );
  }, [walletType]);

  return (
    <div className={cx(ss.container)} style={styles?.loginContainer}>
      <div className={cx(ss.addressBox)} style={styles?.addressBox}>
        <WalletIconContainer />
        <div className={ss.addressText}>{getShortAddress(address)}</div>
      </div>
      <div className={ss.textBox}>
        <div className={ss.title} style={styles?.textBoxTitle}>
          Enter password
        </div>
        <div className={ss.subTitle} style={styles?.textBoxSubTitle}>
          Please enter your password associated with the wallet above to access your Web3MQ account.
        </div>
      </div>
      <div className={ss.inputContainer}>
        <div className={ss.inputBox} style={styles?.inputBox}>
          <div className={ss.title}>Password</div>
          <div className={ss.inputValue} style={styles?.inputValue}>
            <input
              style={styles?.inputBoxInput}
              placeholder="Write something..."
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {showPassword ? (
              <div
                className={ss.eyesBox}
                onClick={() => {
                  setShowPassword(false);
                }}
              >
                <OpenEyesIcon />{' '}
              </div>
            ) : (
              <div
                className={ss.eyesBox}
                onClick={() => {
                  setShowPassword(true);
                }}
              >
                <CloseEyesIcon />{' '}
              </div>
            )}
          </div>
        </div>
        {errorInfo && (
          <div className={ss.errorBox}>
            <div className={ss.errorIcon}>
              <LoginErrorIcon />
            </div>
            <div>{errorInfo}</div>
          </div>
        )}
      </div>
      <div className={ss.btnBox}>
        <Button
          style={styles?.loginButton}
          className={ss.button}
          disabled={isDisable}
          type="primary"
          onClick={handleSubmit}
        >
          Log in
        </Button>
      </div>
    </div>
  );
};
