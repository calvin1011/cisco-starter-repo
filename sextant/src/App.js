import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
    return (
        <div className="App">
            <Banner />
            
            <Exhibit heading="Exhibit try">
                {/* Child components or content */}
                <p>This is some content for the exhibit.</p>
                <img src="exhibit-image.jpg" alt="Cisco" />
            </Exhibit>
            
            <Exhibit heading="Exhibit 2">
                <p>More content for exhibit 2.</p>
                <div>
                    <ul>
                        <li>React</li>
                        <li>Node </li>
                    </ul>
                </div>
            </Exhibit>
            
            {/* Other content */}
        </div>
    );
}

export default App;
