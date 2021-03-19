import React, { Component } from 'react';
import { Button, Card, Input, Form } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { connect } from 'umi';
import styles from './index.less';

const FormItem = Form.Item;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 7,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
    },
    md: {
      span: 10,
    },
  },
};
const submitFormLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 10,
      offset: 7,
    },
  },
};

class List extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch({
    //   type: 'accountAndcenter/fetch',
    // });
  }

  onFinish = (values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'adminAndArticleAndList/fakeListForm',
      payload: values,
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  onValuesChange = (changedValues) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  render() {
    const {_, loading} = this.props;
    return (
      <PageContainer
>
        <Card bordered={false}>
          <Form
            hideRequiredMark
            style={{
              marginTop: 8,
            }}
            name="basic"
            initialValues={{
              public: '1',
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            onValuesChange={this.onValuesChange}
          >
            <FormItem
              {...formItemLayout}
              label={"标题"}
              name="title"
              rules={[
                {
                  required: true,
                  message: "请输入标题！",
                },
              ]}
            >
              <Input
                placeholder={"请输入标题"}
              />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={"内容"}
              name="goal"
              rules={[
                {
                  required: true,
                  message: "请输入内容",
                },
              ]}
            >
              <TextArea
                style={{
                  minHeight: 32,
                }}
                placeholder={"请输入内容"}
                rows={4}
              />
            </FormItem>
            <FormItem
              {...submitFormLayout}
              style={{
                marginTop: 32,
              }}
            >
              <Button type="primary" htmlType="submit" loading={loading}>
                提交
            </Button>
            </FormItem>
          </Form>
        </Card>
      </PageContainer>
    );
  }
}

export default connect(({ loading }) => ({
  loading: loading.effects['adminAndArticleAndList/fakeListForm'],
}))(List);
