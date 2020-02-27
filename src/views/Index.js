import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Index extends Component {
  constructor(props) {
    super(props);
    // this.props.history.push('/home/')
    this.state = {
      list: [
        { cid: 123, title: 'Jorna blog-1' },
        { cid: 456, title: 'Jorna blog-2' },
        { cid: 789, title: 'Jorna blog-3' }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        <Redirect to="/home/" />
        <p>Jorna in here</p>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>
                <Link to={'/list/' + item.cid}>{item.title}</Link>
              </li>
            })
          }
        </ul>
      </Fragment>

    )
  }
}

export default Index;
