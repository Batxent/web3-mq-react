import React, { useEffect, useMemo, useState } from 'react';
import { CloseEyesIcon, LoginErrorIcon, MetaMaskIcon, OpenEyesIcon } from '../../../../icons';
import ss from './index.module.scss';
import { getShortAddress } from '../../../../utils';
import { Button, ButtonType } from '../../../Button';
import { useLoginContext } from '../../../../context';

interface IProps {
  getEthAccount: any;
  login: any;
  register: any;
  setHeaderTitle: any;
  userExits: boolean;
  address: string;
}

const loginText = {
  title: 'Enter password',
  subTitle:
    'Please enter your password associated with the wallet above to access your Web3MQ account.',
};
const signUpText = {
  title: 'Create password',
  subTitle: 'This password will be used to generate encryption keys for communicating with Web3MQ.',
};

export const StepTwo: React.FC = () => {
  const { login, register, userExits, address } = useLoginContext();

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorInfo, setErrorInfo] = useState<string>();

  const isDisable = useMemo(() => {
    let res = !password;
    if (!userExits) {
      res = !password || !confirmPassword;
      if (!res) {
        res = password !== confirmPassword;
      }
    }
    return res;
  }, [password, userExits, confirmPassword]);

  const handleSubmit = async () => {
    try {
      if (userExits) {
        await login(password);
      } else {
        if (password !== confirmPassword) {
          setErrorInfo('Passwords don\'t match. Please check your password inputs.');
        }
        await register(password);
        await login(password);
      }
    } catch (e: any) {
      setErrorInfo(e.message);
    }
  };

  return (
    <div className={ss.stepTwo}>
      <div className={ss.addressBox}>
        <MetaMaskIcon />
        <div className={ss.centerText}>MetaMask</div>
        <div className={ss.addressText}>{getShortAddress(address)}</div>
      </div>
      <div className={ss.textBox}>
        <div className={ss.title}>{userExits ? loginText.title : signUpText.title}</div>
        <div className={ss.subTitle}>{userExits ? loginText.subTitle : signUpText.subTitle}</div>
      </div>
      <div className={ss.inputContainer}>
        <div className={ss.inputBox}>
          <div className={ss.title}>Password</div>
          <div className={ss.inputValue}>
            <input
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
        {!userExits && (
          <div className={ss.inputBox}>
            <div className={ss.title}>Confirm password</div>
            <div className={ss.inputValue}>
              <input
                placeholder="Write something..."
                type={showPassword2 ? 'text' : 'password'}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              {showPassword2 ? (
                <div
                  className={ss.eyesBox}
                  onClick={() => {
                    setShowPassword2(false);
                  }}
                >
                  <OpenEyesIcon />{' '}
                </div>
              ) : (
                <div
                  className={ss.eyesBox}
                  onClick={() => {
                    setShowPassword2(true);
                  }}
                >
                  <CloseEyesIcon />{' '}
                </div>
              )}
            </div>
          </div>
        )}
        {errorInfo && (
          <div className={ss.errorBox}>
            <div className={ss.errorIcon}>
              <LoginErrorIcon />
            </div>
            <div>{errorInfo}</div>
          </div>
        )}
        {!userExits && (
          <div className={ss.tipsText}>
            <div>The Web3MQ network does not save your password.</div>
            <div>
              Please save it securely. If you lose your password, you will need to reset it, and you
              will be unable to decrypt previous messages.
            </div>
          </div>
        )}
      </div>
      <div className={ss.btnBox}>
        <Button
          className={ss.button}
          disable={isDisable}
          btnType={ButtonType.primary}
          onClick={handleSubmit}
        >
          {userExits ? 'Log in' : 'Create new user'}
        </Button>
      </div>
    </div>
  );
};
