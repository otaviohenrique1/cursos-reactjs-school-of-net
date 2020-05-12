import React from 'react';

const Button1 = ({ type, className, onClickButton, buttonLabel }) => {
  return (
  <button type={type} className={className} onClick={onClickButton}>{buttonLabel}</button>
  );
};

const Button2 = ({ type, className, onClickButton, children }) => {
  return (
  <button type={type} className={className} onClick={onClickButton}>{children}</button>
  );
};

export {
  Button1,
  Button2
};


// const Button = ({ type, className, onClickButton, buttonLabel, children }) => {
//   return (
//   <button type={type} className={className} onClick={onClickButton}>{buttonLabel}</button>
//   );
// };
// export default Button;