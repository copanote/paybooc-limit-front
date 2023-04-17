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
    console.log('on AuthContextProvider:  ' + hasAccessToken);
    const storedAcessToekn = localStorage.getItem('accessToken');
    if (storedAcessToekn) {
      setHasAccessToken(true);
    } else {
      console.log('fetch AccessToken');
      const accessTokenTask = (data) => {
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        setHasAccessToken(true);
      };
      fetchAccessToken({ url: '/app/paybooc/CreditLimit.do?exec=authorize&clientId=PAYBOOC08' }, accessTokenTask);
    }
  }, [fetchAccessToken]);

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
