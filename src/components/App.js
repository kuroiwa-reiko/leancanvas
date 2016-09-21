import React from 'react';
import Header from './Header';
import Toast from './Toast';
import Main from './Main';
import Navigation from '../containers/Navigation';
import Footer from './Footer';

const App = () => (
    <div>
        <Header/>
        <Toast/>
        <Navigation/>
        <Main/>
        <Footer/>
    </div>
);

export default App;
