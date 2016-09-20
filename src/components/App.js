import React from 'react';
import Header from './Header';
import Toast from './Toast';
import Main from './Main';
import NavItems from '../containers/NavItems';
import Footer from './Footer';

const App = () => (
    <div>
        <Header/>
        <Toast/>
        <Main/>
        <NavItems/>
        <Footer/>
    </div>
);

export default App;
