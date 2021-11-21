import './styles/Common.css';
import React from 'react';

class GradientBorderButton extends React.Component {
  constructor(props) {
    super(props);

    let defaults = {
      borderWidth: 3,
      borderRadius: 50,
      width: 100,
      height: 100,
      gradientAngle: 90,
      fromColor: "red",
      toColor: "orange",
      backgroundColor: "white"
    };

    let options = {
      ...defaults,
      ...this.props.options
    };

    this.buttonContainerStyle = {
      padding: options.borderWidth + "px",
      borderRadius: (options.borderWidth + options.borderRadius) + "px",
      background: "linear-gradient(" + options.gradientAngle + "deg, " + options.fromColor + "," + options.toColor + ")",
      ...this.props.buttonContainerStyle
    };

    this.buttonStyle = {
      borderRadius: (options.borderWidth + options.borderRadius) + "px",
      width: options.width + "px",
      height: options.height + "px",
      backgroundColor: options.backgroundColor,
      ...this.props.buttonStyle
    };
  }

  getContainerClasses() {
    let containerClasses = "regradui-border-button-container ";
    containerClasses += this.props.shadow ? "regradui-shadow " : " ";
    containerClasses += this.props.containerClassName ?? "";
    return containerClasses;
  }

  getButtonClasses() {
    let buttonClasses = "regradui-border-button ";
    buttonClasses += this.props.buttonClassName ?? "";
    return buttonClasses;
  }

  render() {
    
    return(
      <div class={this.getContainerClasses()} style={this.buttonContainerStyle}>
        <div class={this.getButtonClasses()} style={this.buttonStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default GradientBorderButton;