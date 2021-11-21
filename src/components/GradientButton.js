import './styles/Common.css';
import React from 'react';

class GradientButton extends React.Component {
  constructor(props) {
    super(props);

    let defaults = {
      gradientAngle: 90,
      fromColor: "red",
      toColor: "orange"
    };

    let options = {
      ...defaults,
      ...this.props.options
    };

    let borderRadius = options.borderRadius ? options.borderRadius + "px" : undefined;
    this.buttonStyle = {
      borderRadius: borderRadius,
      background: "linear-gradient(" + options.gradientAngle + "deg, " + options.fromColor + "," + options.toColor + ")",
      ...this.props.buttonStyle
    };
  }

  getButtonClasses() {
    let buttonClasses = "regradui-button ";
    buttonClasses += this.props.buttonClassName ?? "";
    return buttonClasses;
  }

  render() {
    return(
      <div className={this.getButtonClasses()} style={this.buttonStyle}>
        {this.props.children}
      </div>
    )
  }
}

export default GradientButton;