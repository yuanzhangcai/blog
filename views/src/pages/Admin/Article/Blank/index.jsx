import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect } from 'umi';
import {Spin } from 'antd';
import styles from './index.less';

class Blank extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'adminAndArticleAndBlank/fakeListForm',
    });
  }

  render() {
    const loading = false;
    return (
      <PageContainer content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large" />
      </div>
    </PageContainer>
    );
  }
}

export default connect(({ }) => ({
}))(Blank);
