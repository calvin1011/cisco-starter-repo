import React from 'react';
import ReactDOM from 'react-dom';
import PacketLatencyDisplay from './PacketLatencyDisplay';

function App() {
  return (
    <div>
      <PacketLatencyDisplay />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
