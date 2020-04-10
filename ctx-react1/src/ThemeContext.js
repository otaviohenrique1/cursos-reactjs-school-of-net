import React, {createContext} from 'react';

const ThemeContext = createContext({theme: 'light'});

const ThemeProvider = (props) => {
    console.log(props);
    
    return <ThemeContext.Provider value={{theme: props.theme}}>
        {props.children}
    </ThemeContext.Provider>
};

export {
    ThemeContext,
    ThemeProvider
};