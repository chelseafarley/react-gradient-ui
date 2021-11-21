import './styles/Common.css';
import React from 'react';

class GradientText extends React.Component {
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

    this.textStyle = {
      backgroundColor: options.fromColor,
      backgroundImage: "linear-gradient(" + options.gradientAngle + "deg, " + options.fromColor + "," + options.toColor + ")",
      ...this.props.textStyle
    };
  }

  getTextClasses() {
    let textClasses = "regradui-text ";
    textClasses += this.props.textClassName ?? "";
    return textClasses;
  }

  render() {
    return(
      <span class={this.getTextClasses()} style={this.textStyle}>
        {this.props.children}
      </span>
    )
  }
}

export default GradientText;