import { Divider, Col, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'umi';
import styles from './Article.less';
import CommentEditor from './CommentEditor';
import { LikeOutlined, MessageFilled, EyeOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
  <span className={styles.iconText}>
    {icon} {text}
  </span>
);

class Article extends Component {
  componentDidMount() {
    const { dispatch } = this.props; // dispatch({
    //   type: 'article/fetch',
    // });
  }

  render() {
    return (
      <section>
        <h1>开端</h1>
        <div className={styles.modifiedTime}>2020-10-09 13:54</div>
        <Divider
          style={{
            marginBottom: 20,
          }}
        />
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
      </section>
    );
  }
}

export default connect(({ }) => ({}))(Article);
