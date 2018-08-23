import React from "react";

class HoverableText extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    this.setState({
      text: this.props.defaultText || ""
    });
  }

  onMouseover(event) {
    this.setState({ text: this.props.hoverText || "" });
  }
  onMouseout(event) {
    this.setState({
      text: this.props.defaultText || ""
    });
  }
  render() {
    const { text } = this.state;
    return (
      <div
        onMouseEnter={this.onMouseover.bind(this)}
        onMouseLeave={this.onMouseout.bind(this)}
      >
        {text}
      </div>
    );
  }
}

export default HoverableText;
