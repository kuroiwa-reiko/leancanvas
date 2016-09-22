/**
 * Nav.js
 */

import React from 'react';
import NavItems from './NavItems';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

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

const dateFromTimestamp = (unix_timestamp) => {
    const date = new Date(unix_timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
};

class Navigation extends React.Component {
    state = {
        open: false,
        histories: []
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleApply = () => {
        // if nothing is selected, simply close
        // if a new row is selected, update view
        this.setState({open: false});
    };

    handleOnShowHistory = (histories) => {
        this.handleOpen();
        this.setState({histories: histories});
    };

    generateDialogBody = () => {
        const histories = this.state.histories;
        if (histories.length === 0) {
            return 'No History';
        }

        const style = {
            verticalAlign: 'middle'
        };
        return (
            <Table>
                <TableHeader
                    displaySelectAll={true}
                    adjustForCheckbox={false}>
                    <TableRow className='show-history-dialog-table-row'>
                        <TableHeaderColumn style={style}>Version</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Created At</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Problem</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={true}>
                    {
                        histories.map((history, index) => (
                            <TableRow className='show-history-dialog-table-row' key={history.timestamp}>
                                <TableRowColumn style={style}>{index}</TableRowColumn>
                                <TableRowColumn style={style}>{dateFromTimestamp(history.timestamp)}</TableRowColumn>
                                <TableRowColumn style={style}>{history.canvas.problem}</TableRowColumn>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        );
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
                        {this.generateDialogBody()}
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default Navigation;
