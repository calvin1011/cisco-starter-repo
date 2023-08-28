import React from 'react';

function Exhibit(props) {
    return (
        <div className="exhibit">
            <h2 className="exhibit-heading">{props.heading}</h2>
            {props.children}
        </div>
    );
}

export default Exhibit;
