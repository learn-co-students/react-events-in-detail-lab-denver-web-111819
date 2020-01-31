import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleClick = (event) => {
        const coords = [
            event.clientX,
            event.clientY
        ]
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default CoordinatesButton