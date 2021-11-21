import './styles/Common.css';
import React from 'react';

class GradientBorderButton extends React.Component {
  constructor(props) {
    super(props);

    let defaults = {
      borderWidth: 3,
      gradientAngle: 90,
      fromColor: "red",
      toColor: "orange",
      backgroundColor: "white"
    };

    let options = {
      ...defaults,
      ...this.props.options
    };

    let borderRadius = options.borderRadius ? (options.borderWidth + options.borderRadius) + "px" : undefined;
    this.buttonContainerStyle = {
      padding: options.borderWidth + "px",
      borderRadius: borderRadius,
      background: "linear-gradient(" + options.gradientAngle + "deg, " + options.fromColor + "," + options.toColor + ")",
      ...this.props.buttonContainerStyle
    };

    this.buttonStyle = {
      borderRadius: borderRadius,
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
      <div className={this.getContainerClasses()} style={this.buttonContainerStyle}>
        <div className={this.getButtonClasses()} style={this.buttonStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default GradientBorderButton;