import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'umi';
import IntroduceRow from './components/IntroduceRow';
import styles from './style.less';

class Dashboard extends Component {
  render() {
    return (
      <GridContent>
        <React.Fragment>
          <IntroduceRow />
        </React.Fragment>
      </GridContent>
    );
  }
}

export default connect(({ }) => ({
}))(Dashboard);
