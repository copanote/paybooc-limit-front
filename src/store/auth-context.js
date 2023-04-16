import React, { useState, useEffect } from 'react';
import useHttp from '../hooks/use-Http';

const AuthContext = React.createContext({
  hasAccessToken: false,
  onClear: () => {},
  onRequestAccessToekn: () => {},
});

export const AuthContextProvider = (props) => {
  const [hasAccessToken, setHasAccessToken] = useState(false);
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
  const enterTaskHandler = async () => {
    // sendTaskRequest(
    //   {
    //     url: '',
    //     method: 'GET',
    //     headers: {
    //       //   'Content-Type': 'application/json',
    //     },
    //     body: { text: taskText },
    //   }
    //   //   createTask.bind(null, taskText)
    // );
  };

  useEffect(() => {
    const storedAcessToekn = localStorage.getItem('accessToken');
    if (storedAcessToekn) {
      setHasAccessToken(true);
    } else {
    }
  }, []);

  const onClear = () => {
    localStorage.removeItem('accessToken');
    setHasAccessToken(false);
  };

  const onSaveAccessToeken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
    setHasAccessToken(true);
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

export default AuthContext;
