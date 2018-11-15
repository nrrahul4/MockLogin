import React from 'react';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.location.state.refData,
        }
    }
    render() {
        return (
            <div style={{ textAlign: "center", paddingTop:"10px" }}>
                <h1 style={{ fontSize: "20px", fontWeight: "bold" }}> Hi.. {this.state.data.name}</h1>
                <p1>You're logged in with React & Basic HTTP Authentication!!</p1>
            </div>
        )
    }
}
export default Homepage;