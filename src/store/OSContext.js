import React, { useState } from 'react';

export const ContextOS = React.createContext();

const OSContext = ({ children }) => {
  const [type, setType] = useState('android');
  const store = {
    type,
    setType,
  };

  return <ContextOS.Provider value={store}>{children}</ContextOS.Provider>;
};

export default OSContext;
