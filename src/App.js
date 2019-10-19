import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';
import './branding.css';
import AppRouter from './routers';
import configureStore, { history } from './store/configureStore';


const store = configureStore();

class App extends React.Component {
  render(){
  return (
    <div className="app">
      <Provider store={store}>
          <ConnectedRouter history={history}>
              <AppRouter />
          </ConnectedRouter>
      </Provider>
    </div>
  );
  }
}

export default App;
