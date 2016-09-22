/**
 * Main.js
 */

import React from 'react';
import CanvasBox from '../containers/CanvasBox';

class Main extends React.Component {

    render() {
        const currentCanvasData = this.props.currentCanvasData;
        return (
            <main>
                <div id="canvas">
                    <CanvasBox
                        title="Problem"
                        id="canvas_problem"
                    />
                    <CanvasBox
                        title="Solution"
                        id="canvas_solution"
                    />
                    <CanvasBox
                        title="Key Metrics"
                        id="canvas_key_metrics"
                    />
                    <CanvasBox
                        title="Unique Value Proposition"
                        id="canvas_uvp"
                    />
                    <CanvasBox
                        title="Unfair Advantage"
                        id="canvas_unfair_advantage"
                    />
                    <CanvasBox
                        title="Channels"
                        id="canvas_channels"
                    />
                    <CanvasBox
                        title="Customer Segments"
                        id="canvas_customer_segments"
                    />
                    <CanvasBox
                        title="Cost Structure"
                        id="canvas_cost"
                    />
                    <CanvasBox
                        title="Revenue Streams"
                        id="canvas_revenue"
                    />
                </div>
            </main>
        );
    }
}

export default Main;
