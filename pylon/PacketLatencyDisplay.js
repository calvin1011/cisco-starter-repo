import React, { Component } from 'react';
import WebSocket from 'websocket';

class PacketLatencyDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latency: null,
    };
    this.ws = null;
  }

  componentDidMount() {
    this.connectWebSocket();
  }

  connectWebSocket() {
    const ws = new WebSocket.client();

    ws.on('connect', connection => {
      console.log('Connected to Pylon');
      
      connection.on('message', message => {
        if (message.type === 'utf8') {
          const data = JSON.parse(message.utf8Data);
          if (data.type === 'latency') {
            this.setState({ latency: data.latency });
          }
        }
      });

      connection.on('close', () => {
        console.log('Connection to Pylon closed');
      });
    });

    ws.connect('ws://localhost:55455/');
    this.ws = ws;
  }

  componentWillUnmount() {
    if (this.ws) {
      this.ws.abort();
    }
  }

  render() {
    const { latency } = this.state;

    return (
      <div>
        <h2>Packet Latency from Pylon:</h2>
        {latency !== null ? <p>{latency} ms</p> : <p>Waiting for data...</p>}
      </div>
    );
  }
}

export default PacketLatencyDisplay;
