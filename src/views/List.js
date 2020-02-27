import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
  }
  componentDidMount() {
    // console.log(this.props.match)
    let id = this.props.match.params.id;
    this.setState({
      id
    })
  }
  render() {
    return (
      <p>List in here-> {this.state.id}</p>
    )
  }
}

export default List;
