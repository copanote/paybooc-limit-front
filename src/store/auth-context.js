import React, { useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';

const AuthContext = React.createContext({
  hasAccessToken: false,
  onClear: () => {},
  onRequestAccessToekn: () => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [hasAccessToken, setHasAccessToken] = useState(false);
  const { isLoading, error, sendRequest: fetchAccessToken } = useHttp();

  useEffect(() => {
    const storedAcessToken = localStorage.getItem('accessToken');
    if (storedAcessToken) {
      setHasAccessToken(true);
    } else {
      console.log('fetch AccessToken');
      fetchAccessToken({ url: 'https://isrnd.bccard.com:34443/app/paybooc/CreditLimit.do?exec=authorize&clientId=PAYBOOC08' }, accessTokenTask);
    }
  }, [fetchAccessToken]);
  const accessTokenTask = (data) => {
    console.log(data);
    localStorage.setItem('accessToken', data.accessToken);
    setHasAccessToken(true);
  };

  const onClear = () => {
    localStorage.removeItem('accessToken');
    setHasAccessToken(false);
  };

  //request http
  const onRequestAccessToekn = () => {
    if (hasAccessToken) {
      return localStorage.getItem('accessToken');
    } else {
      //reqeust http
      fetchAccessToken({ url: 'https://isrnd.bccard.com:34443/app/paybooc/CreditLimit.do?exec=authorize&clientId=PAYBOOC08' }, accessTokenTask).then(() => {
        return localStorage.getItem('accessToken');
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        hasAccessToken: hasAccessToken,
        onClear: onClear,
        onRequestAccessToekn: onRequestAccessToekn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
