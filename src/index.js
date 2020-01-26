import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {BrowserRouter,Route} from 'react-router-dom'
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp'
import Feature from './components/auth/Feature';
import Signout from './components/auth/Signout'


import reducers from './reducers'

const store  = createStore(
    reducers,
    {
        auth:{authenticated:localStorage.getItem('token')}
    },
    applyMiddleware(reduxThunk)
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
    <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={(props) => <SignUp {...props}/>} />
        <Route path="/feature" exact component={(props) => <Feature {...props}/>} />
        <Route path="/signout" exact component={Signout} />

    </App>
</BrowserRouter>
    </Provider>
,
document.querySelector('#root'))