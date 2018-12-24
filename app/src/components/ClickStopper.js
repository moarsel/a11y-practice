import React from 'react';

const stopClicks = ev => {
  ev.stopPropagation();
  ev.preventDefault();
  ev.stopImmediatePropagation();
  return false;
};

export default ({ children }) => {
  return <div onClick={stopClicks}>{children}</div>;
};
