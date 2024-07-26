import React from "react";
import Button from "./Button";


class ClassButton extends React.Component {
    render() {
        console.log(this.props)


        return(
            <button>{this.props.name}</button>

        )
    }
}

export default ClassButton;