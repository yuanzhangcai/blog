import { Divider, Col, Row, PageHeader } from 'antd';
import React, { Component } from 'react';
import { connect } from 'umi';
import styles from './Article.less';
import CommentEditor from './CommentEditor';
import { LikeOutlined, MessageFilled, EyeOutlined } from '@ant-design/icons';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const IconText = ({ icon, text }) => (
  <span className={styles.iconText}>
    {icon} {text}
  </span>
);

class Article extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch({
    //   type: 'article/fetch',
    // });
  }

  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>开端</title>
          <meta name="description" content={"开端"} />
        </Helmet>
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="开端"
          extra={[
            <div className={styles.modifiedTime}>2020-10-09 13:54</div>
          ]}
        >
        </PageHeader>
        <p>个人博客的开启。（系统正在一步一步建设中。。。）</p>
        <Divider
          style={{
            marginBottom: 20,
          }}
        />
        <Row gutter={24} justify={"center"}>
          <Col lg={24} md={24}>
            <IconText key="eye" icon={<EyeOutlined />} text={"2"} />
            <IconText key="like" icon={<LikeOutlined />} text={"2"} />
            <IconText key="message" icon={<MessageFilled />} text={"1"} />
          </Col>
        </Row>
        <CommentEditor />
      </HelmetProvider>
    );
  }
}

export default connect(({ }) => ({}))(Article);
