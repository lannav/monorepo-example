import React from 'react';

import './ui-core.less';

/* eslint-disable-next-line */
export interface UiCoreProps {}

function getTitle() {
    return fetch('/.netlify/functions/get-todo-list', {
        body: JSON.stringify({ data: 'xz data' }),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}

export const CoreComponent = (props: UiCoreProps) => {
    const [todos, setMessage] = React.useState([]);

    React.useEffect(() => {
        getTitle().then(setMessage);
    }, []);

  return (
    <div>
      <h1>Welcome to ui-core! {process.env.NX_BASE_URL}</h1>
        {
            todos.map(it => (
                <div> {it.title} </div>
            ))
        }
    </div>
  );
};

export default CoreComponent;
