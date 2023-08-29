import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPComponent from './IPComponent';

function App() {
    return (
        <div className="App">
            <Banner />
            
            <Exhibit heading="IPv4 Address">
                <IPComponent ipType="v4" />
            </Exhibit>
            
            <Exhibit heading="IPv6 Address">
                <IPComponent ipType="v6" />
            </Exhibit>
            
            {/* Other content */}
        </div>
    );
}

export default App;
