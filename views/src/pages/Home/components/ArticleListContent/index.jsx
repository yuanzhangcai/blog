// import { Avatar } from 'antd';
import React from 'react';
import { LikeOutlined, MessageFilled, EyeOutlined } from '@ant-design/icons';
import moment from 'moment';
import styles from './index.less';
import { Col, Row } from 'antd';

const IconText = ({ icon, text }) => (
  <span className={styles.iconText}>
    {icon} {text}
  </span>
);

const ArticleListContent = ({ data: { content, updatedAt } }) => (
  <div className={styles.listContent}>
    <div className={styles.description}>{content}</div>
    <div className={styles.extra}>
      <Row gutter={24} justify={"center"}>
        <Col lg={12} md={12}>
          <IconText key="eye" icon={<EyeOutlined />} text={"2"} />
          <IconText key="like" icon={<LikeOutlined />} text={"2"} />
          <IconText key="message" icon={<MessageFilled />} text={"1"} />
        </Col>
        <Col lg={12} md={12} className={styles.testRight}>
          <em>{moment(updatedAt).format('YYYY-MM-DD HH:mm')}</em>
        </Col>
      </Row>
    </div>
  </div>
);

export default ArticleListContent;
