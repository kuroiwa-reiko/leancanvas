import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class HistoryTable extends React.Component {

    static dateFromTimestamp(unix_timestamp) {
        const date = new Date(unix_timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDay();
        const hours = date.getHours();
        const minutes = '0' + date.getMinutes();
        const seconds = '0' + date.getSeconds();
        return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }

    render() {
        const histories = this.props.histories;
        if (histories.length === 0) {
            return 'No History';
        }
        const style = {
            verticalAlign: 'middle'
        };
        return (
            <Table
                selectable={true}
                multiSelectable={false}
                onRowSelection={this.props.onRowSelection}
            >
                <TableHeader>
                    <TableRow
                        className='show-history-dialog-table-row'>
                        <TableHeaderColumn style={style}>Version</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Created At</TableHeaderColumn>
                        <TableHeaderColumn style={style}>Problem</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        histories.map((history, index) => (
                            <TableRow
                                selected={this.props.selectedRows.indexOf(index) !== -1}
                                className='show-history-dialog-table-row' key={history.timestamp}>
                                <TableRowColumn style={style}>{index}</TableRowColumn>
                                <TableRowColumn style={style}>{HistoryTable.dateFromTimestamp(history.timestamp)}</TableRowColumn>
                                <TableRowColumn style={style}>{history.canvas.problem}</TableRowColumn>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        )
    }
}

export default HistoryTable;