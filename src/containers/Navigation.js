/**
 * Nav.js
 */

import React from 'react';
import NavItems from './NavItems';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class Navigation extends React.Component {
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleOnShowHistory = (history) => {
        this.handleOpen();
        this.setState({history:history});
    };

    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <NavItems
                        onShowHistory={this.handleOnShowHistory}
                    />
                    <Dialog
                        title="Version History"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        Sample
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default Navigation;
