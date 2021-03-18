import React, { Component } from 'react';
import { connect } from 'umi';
import Articles from './components/Articles';

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'accountAndcenter/fetch',
    });
  }

  render() {
    return (
      <Articles />
    );
  }
}

export default connect(({ }) => ({
}))(Home);
