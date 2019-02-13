import * as React from "react";
import { PropertyControls, ControlType } from "framer";

interface Props {
    text: string;
}

export class Button extends React.Component<Props> {

    static defaultProps = {
        text: "Hello"
    }

    static propertyControls: PropertyControls ={
        text:{
            type: ControlType.String, title: "Text"
        },
    }

    render() {
        return <button>{this.props.text}</button>
    }
}