/**
 * Nav.js
 */

import React from 'react';
import NavItems from './NavItems';
import HistoryTable from './HistoryTable';

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
        open: false,
        selectedRows: [],
        histories: []
    };

    handleRowSelection = (selectedRows) => {
        this.setState({selectedRows});
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleApply = () => {
        const selectedRows = this.state.selectedRows;
        if (selectedRows.length > 0) {
            // TODO: update canvas
            const history = this.state.histories[selectedRows[0]];
            console.log(history);
        }
        this.setState({
            open: false,
            selectedRows: []
        });
    };

    handleOnShowHistory = (histories) => {
        this.setState({histories: histories});
        this.handleOpen();
    };

    render() {
        const actions = [
            <FlatButton
                label="Close"
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Apply"
                primary={true}
                onTouchTap={this.handleApply}
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
                        <HistoryTable
                            histories={this.state.histories}
                            selectedRows={this.state.selectedRows}
                            onRowSelection={this.handleRowSelection}
                        />
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default Navigation;
