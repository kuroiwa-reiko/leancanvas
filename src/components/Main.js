/**
 * Main.js
 */

import React from 'react';

const Main = () => (
    <main>
        <div id="canvas">
            <div className="canvas-box" id="canvas_problem_box">
                <h2>Problem</h2>
                <div className="canvas-item" id="canvas_problem" contenteditable="true"></div>
            </div>
            <div className="canvas-box" id="canvas_solution_box">
                <h2>Solution</h2>
                <div className="canvas-item" id="canvas_solution" contenteditable="true"></div>
            </div>
            <div className="canvas-box" id="canvas_key_metrics_box">
                <h2>Key Metrics</h2>
                <div className="canvas-item" id="canvas_key_metrics" contenteditable="true"></div>
            </div>
            <div className="canvas-box" id="canvas_uvp_box">
                <h2>Unique Value Proposition</h2>
                <div className="canvas-item" id="canvas_uvp" contenteditable="true"></div>
            </div>
            <div className="canvas-box" id="canvas_unfair_advantage_box">
                <h2>Unfair Advantage</h2>
                <div className="canvas-item" id="canvas_unfair_advantage" contenteditable="true"></div>
            </div>
            <div className="canvas-box" id="canvas_channels_box">
                <h2>Channels</h2>
                <div className="canvas-item" id="canvas_channels" contenteditable="true"></div>
            </div>
            <div className="canvas-box" id="canvas_customer_segments_box">
                <h2>Customer Segments</h2>
                <div className="canvas-item" id="canvas_customer_segments" contenteditable="true"></div>
            </div>
            <div className="canvas-box" id="canvas_cost_box">
                <h2>Cost Structure</h2>
                <div className="canvas-item" id="canvas_cost" contenteditable="true"></div>
            </div>
            <div className="canvas-box" id="canvas_revenue_box">
                <h2>Revenue Streams</h2>
                <div className="canvas-item" id="canvas_revenue" contenteditable="true"></div>
            </div>
        </div>
    </main>
);

export default Main;
