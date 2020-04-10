import React, {createContext} from 'react';

const AppCtx = createContext([0, () => {}]);
// const AppCtx = createContext([total, setTotal]);

export default AppCtx;