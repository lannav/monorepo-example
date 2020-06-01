import React from 'react';

import './ui-core.less';

/* eslint-disable-next-line */
export interface UiCoreProps {}

export const CoreComponent = (props: UiCoreProps) => {
  return (
    <div>
      <h1>Welcome to ui-core! {process.env.NX_BASE_URL}</h1>
    </div>
  );
};

export default CoreComponent;
