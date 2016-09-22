/**
 * Main.js
 */

import React from 'react';
import CanvasBox from '../containers/CanvasBox';

class Main extends React.Component {

    render() {
        const data = this.props.currentCanvasData;
        return (
            <main>
                <div id="canvas">
                    <CanvasBox
                        title="Problem"
                        id="canvas_problem"
                        content={data.problem ? data.problem : ''}
                    />
                    <CanvasBox
                        title="Solution"
                        id="canvas_solution"
                        content={data.solution ? data.solution : ''}
                    />
                    <CanvasBox
                        title="Key Metrics"
                        id="canvas_key_metrics"
                        content={data.keyMetrics ? data.keyMetrics : ''}
                    />
                    <CanvasBox
                        title="Unique Value Proposition"
                        id="canvas_uvp"
                        content={data.uvp ? data.uvp : ''}
                    />
                    <CanvasBox
                        title="Unfair Advantage"
                        id="canvas_unfair_advantage"
                        content={data.unfairAdvantage ? data.unfairAdvantage : ''}
                    />
                    <CanvasBox
                        title="Channels"
                        id="canvas_channels"
                        content={data.channels ? data.channels : ''}
                    />
                    <CanvasBox
                        title="Customer Segments"
                        id="canvas_customer_segments"
                        content={data.customerSegments ? data.customerSegments : ''}
                    />
                    <CanvasBox
                        title="Cost Structure"
                        id="canvas_cost"
                        content={data.costStructure ? data.costStructure : ''}
                    />
                    <CanvasBox
                        title="Revenue Streams"
                        id="canvas_revenue"
                        content={data.revenueStreams ? data.revenueStreams : ''}
                    />
                </div>
            </main>
        );
    }
}

export default Main;
