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

        const style = {
            'vertical-align': 'middle'
        };
        return (
            <Table>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn style={style}>Version</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Timestamp</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Problem</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Solution</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Key Metrics</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Unique Value Proposition</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Unfair Advantage</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Channels</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Customer Segments</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Cost Structure</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Revenue Streams</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}>
                    {
                        histories.map((history, index) => (
                            <TableRow key={history.timestamp}>
                                <TableRowColumn style={style}>{index}</TableRowColumn>
                                <TableRowColumn style={style}>{history.timestamp}</TableRowColumn>
                                <TableRowColumn style={style}>{history.canvas.problem}</TableRowColumn>
                                <TableRowColumn style={style}>{history.canvas.solution}</TableRowColumn>
                                <TableRowColumn style={style}>{history.canvas.keyMetrics}</TableRowColumn>
                                <TableRowColumn style={style}>{history.canvas.uvp}</TableRowColumn>
                                <TableRowColumn style={style}>{history.canvas.unfairAdvantage}</TableRowColumn>
                                <TableRowColumn style={style}>{history.canvas.channels}</TableRowColumn>
                                <TableRowColumn style={style}>{history.canvas.customerSegments}</TableRowColumn>
                                <TableRowColumn style={style}>{history.canvas.costStructure}</TableRowColumn>
                                <TableRowColumn style={style}>{history.canvas.revenueStreams}</TableRowColumn>
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
