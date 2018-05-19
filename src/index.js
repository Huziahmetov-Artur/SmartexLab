import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/Store'
import SmartexTask from './Conteiner/PartInfo'
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom'


const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <Route path='/' component={SmartexTask}/>
            </HashRouter>
        </Provider>,
        document.getElementById('root'))
};
store.dispatch({
    type : 'BEGIN_WORK'
});
store.subscribe(render);
render();
