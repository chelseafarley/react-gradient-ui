import './styles/Common.css';
import React from 'react';

class GradientButton extends React.Component {
  constructor(props) {
    super(props);

    let defaults = {
      borderRadius: 50,
      width: 100,
      height: 100,
      gradientAngle: 90,
      fromColor: "red",
      toColor: "orange"
    };

    let options = {
      ...defaults,
      ...this.props.options
    };

    this.buttonStyle = {
      borderRadius: options.borderRadius + "px",
      width: options.width + "px",
      height: options.height + "px",
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
      <div class={this.getButtonClasses()} style={this.buttonStyle}>
        {this.props.children}
      </div>
    )
  }
}

export default GradientButton;