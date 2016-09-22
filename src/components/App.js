import React from 'react';
import Header from './Header';
import Toast from './Toast';
import Main from './Main';
import Navigation from '../containers/Navigation';
import Footer from './Footer';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {

    constructor() {
        super();
        this.onDialogApply = this.onDialogApply.bind(this);
        this.state = {
            histories: []
        };
    }

    onDialogApply(selectedHistory) {
        this.setState({histories:selectedHistory.canvas})
    }

    render() {
        return (
            <div>
                <Header/>
                <Toast/>
                <Navigation
                    onDialogApply={this.onDialogApply}
                />
                <Main
                    currentCanvasData={this.state.histories}
                />
                <Footer/>
            </div>
        )
    }
}
export default App;
