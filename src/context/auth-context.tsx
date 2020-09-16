import React from 'react';


const authContext = React.createContext({
  authenficated: false,
  login: () => {}
})
export default authContext;