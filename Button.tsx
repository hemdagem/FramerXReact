import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import styled, { css } from "styled-components"

const StyledButton = styled.button`
padding:10px 24px;
border-radius: 4px;
border: 0;
margin: 0;
text-align: center;
min-width: 104px;
width: 100%;
font: 18px/28px 'Total Sans Beta 04';

${(props: Props) => props.type == 'default' && css`
color: white;
background-color: #3CBF0A;
`}

${(props: Props) => props.type == 'hover' && css`
color: white;
background-color: #2AD100;
box-shadow: 0 4px 8px 0 rgba(38,120,6,0.30);
transform: translateY(-1px)
`}

${(props: Props) => props.type == 'active' && css`
color: white;
background-color: #2C8F07;
`}

${(props: Props) => props.type == 'disabled' && css`
color: #CCCCCF;
background-color: #EFEFEF;
`}

`

// Define type of property
interface Props {
  text: string;
  type: string;
}

// Define type of property
interface MyState {
  text: string;
  type: string;
}

export class Button extends React.Component<Props,MyState> {
  constructor(props: Props) {
    super(props);
    this.state = { text: this.props.text, type: this.props.type };
  }
  // Set default properties
  static defaultProps = {
    text: "Large Button",
    type: "default",
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: {
      type: ControlType.String,
      title: "Text"
    },
    type: {
      type: ControlType.Enum,
      title: "Type",
      options: ['default', 'hover', 'active', 'disabled'],
      optionTitles: ['Default', 'Hover', 'Active', 'Disabled']
    },
  }

  componentDidUpdate(prevProps: Props) {
    // Typical usage (don't forget to compare props):
    if (this.props.type !== prevProps.type) {
      this.setState({ type: this.props.type })
    }
  }

  render() {

    return (
      
      <StyledButton
        onMouseOver={() => this.setState({ type: "hover" })}
        onMouseLeave={() => this.setState({ type: "default" })}
        onMouseDown={() => this.setState({ type: "active" })}
        onMouseUp={() => this.setState({ type: "default" })}
        type={this.state.type}
        text={this.state.text}
      >
        {this.props.text}
      </StyledButton>
    )
  }
}