import React from 'react';

const Title1 = ({ msg }) => {
    return (
        <h1>{msg}</h1>
    );
};

const Title2 = ({ children }) => {
    return (
        <h1>{children}</h1>
    );
};

export {
    Title1,
    Title2
};


// const Title = ({ msg }) => {
//     return (
//         <h1>{msg}</h1>
//     );
// };

// export default Title;