import React, { Component } from 'react';
import { Button, Card, Input, Form, Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { connect } from 'umi';
import styles from './index.less';

// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'

const FormItem = Form.Item;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 2,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 22,
    },
    md: {
      span: 22,
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

class Add extends Component {
  formRef = React.createRef();
  txtRef = React.createRef();
  async componentDidMount() {
    const { dispatch } = this.props;
    // dispatch({
    //   type: 'accountAndcenter/fetch',
    // });
    this.setState({
      editorState: BraftEditor.createEditorState("test")
    })
  }

  onFinish = (values) => {
    const { dispatch } = this.props;
    this.formRef.current.setFieldsValue({
      goal: 'Hi, man!',
    });
    values.context = this.state.editorState.toHTML()
    // alert(JSON.stringify(values));
    this.txtRef.current.innerHTML = values.context;

    dispatch({
      type: 'adminAndArticleAndAdd/fakeListForm',
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


  state = {
    // 创建一个空的editorState作为初始值
    editorState: BraftEditor.createEditorState(null)
  }

  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML()
    const result = await saveEditorContent(htmlContent)
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {
    const { _, loading } = this.props;
    const { editorState } = this.state
    return (
      <PageContainer
      >
        <Card bordered={false}>
          <Form
            ref={this.formRef}
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
                  required: false,
                  message: "请输入内容",
                },
              ]}
            >
              {/* <TextArea
                style={{
                  minHeight: 32,
                }}
                placeholder={"请输入内容"}
                rows={4}
              /> */}
              <div className={styles.braft}>
                <BraftEditor
                  value={editorState}
                  onChange={this.handleEditorChange}
                  onSave={this.submitContent}
                  bordered={true}
                />
              </div>
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
        <Card>
          <Row>
            <Col>
              <p ref={this.txtRef}></p>
            </Col>
          </Row>
        </Card>
      </PageContainer>
    );
  }
}

export default connect(({ loading }) => ({
  loading: loading.effects['adminAndArticleAndAdd/fakeListForm'],
}))(Add);
