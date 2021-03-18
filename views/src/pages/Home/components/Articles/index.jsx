import { List, Tag } from 'antd';
import React from 'react';
import { connect, Link } from 'umi';
import ArticleListContent from '../ArticleListContent';
import styles from './index.less';

const Articles = (props) => {
  const { list } = props;

  return (
    <List
      size="large"
      className={styles.articleList}
      rowKey="id"
      itemLayout="vertical"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          key={item.id}
        >
          <List.Item.Meta
            title={
              <Link className={styles.listItemMetaTitle} to={"/article?id=" + item.id}>
                {item.title}
              </Link>
            }
            description={
              <span>
                <Tag>开始</Tag>
                <Tag>博客</Tag>
              </span>
            }
          />
          <ArticleListContent data={item} />
        </List.Item>
      )}
    />
  );
};

export default connect(({ accountAndcenter }) => ({
  list: accountAndcenter.list,
}))(Articles);
