import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import TodoApp from './components/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css'

ReactDOM.render(
  <div className="container">
    <div className="columns is-centered">
      <div className="column is-half is-narrow is-10-mobile is-offset-1-mobile">
        <TodoApp />
      </div>
    </div>
  </div>, document.getElementById('root'));
registerServiceWorker();
