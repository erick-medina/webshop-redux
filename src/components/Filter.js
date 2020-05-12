import React from "react";

export function Filter(props) {
    return (
        // show how many products are available
        <div>
            <p>{props.count} products found.</p>
        </div>
    )
}