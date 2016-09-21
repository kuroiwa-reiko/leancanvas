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

    handleOnShowHistory = (histories) => {
        this.handleOpen();
        this.setState({histories: histories});
    };

    generateDialogBody = () => {
        const histories = this.state.histories;
        if (histories.length === 0) {
            return 'No History';
        }

        let tbodyRowColumns = [];
        Array.prototype.forEach.call(histories, (history, index) => {
            const canvasObject = history.canvas;
            tbodyRowColumns.push(
                <TableRow key={history.timestamp}>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{history.timestamp}</TableRowColumn>
                    <TableRowColumn>{canvasObject.problem}</TableRowColumn>
                    <TableRowColumn>{canvasObject.solution}</TableRowColumn>
                    <TableRowColumn>{canvasObject.keyMetrics}</TableRowColumn>
                    <TableRowColumn>{canvasObject.uvp}</TableRowColumn>
                    <TableRowColumn>{canvasObject.unfairAdvantage}</TableRowColumn>
                    <TableRowColumn>{canvasObject.channels}</TableRowColumn>
                    <TableRowColumn>{canvasObject.customerSegments}</TableRowColumn>
                    <TableRowColumn>{canvasObject.costStructure}</TableRowColumn>
                    <TableRowColumn>{canvasObject.revenueStreams}</TableRowColumn>
                </TableRow>
            );
        });

        const table = <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Version</TableHeaderColumn>
                    <TableHeaderColumn>Timestamp</TableHeaderColumn>
                    <TableHeaderColumn>Problem</TableHeaderColumn>
                    <TableHeaderColumn>Solution</TableHeaderColumn>
                    <TableHeaderColumn>Key Metrics</TableHeaderColumn>
                    <TableHeaderColumn>Unique Value Proposition</TableHeaderColumn>
                    <TableHeaderColumn>Unfair Advantage</TableHeaderColumn>
                    <TableHeaderColumn>Channels</TableHeaderColumn>
                    <TableHeaderColumn>Customer Segments</TableHeaderColumn>
                    <TableHeaderColumn>Cost Structure</TableHeaderColumn>
                    <TableHeaderColumn>Revenue Streams</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tbodyRowColumns}
            </TableBody>
        </Table>;

        return table;
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
                        {this.generateDialogBody()}
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default Navigation;
