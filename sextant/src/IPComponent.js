import React, { Component } from 'react';

class IPComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ipAddress: null,
            error: null,
        };
    }

    componentDidMount() {
        const ipType = this.props.ipType === 'v6' ? 'ipv6' : 'ipv4';
        const apiUrl = `https://api64.ipify.org?format=json&${ipType}=true`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data); //log the data object to debug
                this.setState({ ipAddress: data[ipType] });
            })
            .catch(error => {
                this.setState({ error: error.message });
            });
    }

    render() {
        const { ipAddress, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div className="ip-component">
                <p>Your public IP address ({this.props.ipType}): {ipAddress}</p>
            </div>
        );
    }
}

export default IPComponent;
