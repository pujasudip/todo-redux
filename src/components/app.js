import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import List from './list';
import {Route} from 'react-router-dom';
import AddItem from './add_item';
import NotFound from './404';


const App = () => (
    <div className='container'>
        <Route exact
               path='/'
               component={List}/>
        <Route path='/add-item'
               component={AddItem}/>
        <Route path='/not-found'
               component={NotFound}/>
    </div>
);

export default App;
