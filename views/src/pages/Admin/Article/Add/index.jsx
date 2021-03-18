import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import { connect, FormattedMessage, formatMessage } from 'umi';
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Add = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const [showPublicUsers, setShowPublicUsers] = React.useState(false);
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

  const onFinish = (values) => {
    const { dispatch } = props;
    dispatch({
      type: 'adminAndArticleAndAdd/submitRegularForm',
      payload: values,
    });
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  return (
    <PageContainer content={<FormattedMessage id="adminandarticleandadd.basic.description" />}>
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{
            marginTop: 8,
          }}
          form={form}
          name="basic"
          initialValues={{
            public: '1',
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="adminandarticleandadd.title.label" />}
            name="title"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'adminandarticleandadd.title.required',
                }),
              },
            ]}
          >
            <Input
              placeholder={formatMessage({
                id: 'adminandarticleandadd.title.placeholder',
              })}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="adminandarticleandadd.date.label" />}
            name="date"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'adminandarticleandadd.date.required',
                }),
              },
            ]}
          >
            <RangePicker
              style={{
                width: '100%',
              }}
              placeholder={[
                formatMessage({
                  id: 'adminandarticleandadd.placeholder.start',
                }),
                formatMessage({
                  id: 'adminandarticleandadd.placeholder.end',
                }),
              ]}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="adminandarticleandadd.goal.label" />}
            name="goal"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'adminandarticleandadd.goal.required',
                }),
              },
            ]}
          >
            <TextArea
              style={{
                minHeight: 32,
              }}
              placeholder={formatMessage({
                id: 'adminandarticleandadd.goal.placeholder',
              })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="adminandarticleandadd.standard.label" />}
            name="standard"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'adminandarticleandadd.standard.required',
                }),
              },
            ]}
          >
            <TextArea
              style={{
                minHeight: 32,
              }}
              placeholder={formatMessage({
                id: 'adminandarticleandadd.standard.placeholder',
              })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="adminandarticleandadd.client.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="adminandarticleandadd.form.optional" />
                  <Tooltip title={<FormattedMessage id="adminandarticleandadd.label.tooltip" />}>
                    <InfoCircleOutlined
                      style={{
                        marginRight: 4,
                      }}
                    />
                  </Tooltip>
                </em>
              </span>
            }
            name="client"
          >
            <Input
              placeholder={formatMessage({
                id: 'adminandarticleandadd.client.placeholder',
              })}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="adminandarticleandadd.invites.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="adminandarticleandadd.form.optional" />
                </em>
              </span>
            }
            name="invites"
          >
            <Input
              placeholder={formatMessage({
                id: 'adminandarticleandadd.invites.placeholder',
              })}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="adminandarticleandadd.weight.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="adminandarticleandadd.form.optional" />
                </em>
              </span>
            }
            name="weight"
          >
            <InputNumber
              placeholder={formatMessage({
                id: 'adminandarticleandadd.weight.placeholder',
              })}
              min={0}
              max={100}
            />
            <span className="ant-form-text">%</span>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="adminandarticleandadd.public.label" />}
            help={<FormattedMessage id="adminandarticleandadd.label.help" />}
            name="publicType"
          >
            <div>
              <Radio.Group>
                <Radio value="1">
                  <FormattedMessage id="adminandarticleandadd.radio.public" />
                </Radio>
                <Radio value="2">
                  <FormattedMessage id="adminandarticleandadd.radio.partially-public" />
                </Radio>
                <Radio value="3">
                  <FormattedMessage id="adminandarticleandadd.radio.private" />
                </Radio>
              </Radio.Group>
              <FormItem
                style={{
                  marginBottom: 0,
                }}
                name="publicUsers"
              >
                <Select
                  mode="multiple"
                  placeholder={formatMessage({
                    id: 'adminandarticleandadd.publicUsers.placeholder',
                  })}
                  style={{
                    margin: '8px 0',
                    display: showPublicUsers ? 'block' : 'none',
                  }}
                >
                  <Option value="1">
                    <FormattedMessage id="adminandarticleandadd.option.A" />
                  </Option>
                  <Option value="2">
                    <FormattedMessage id="adminandarticleandadd.option.B" />
                  </Option>
                  <Option value="3">
                    <FormattedMessage id="adminandarticleandadd.option.C" />
                  </Option>
                </Select>
              </FormItem>
            </div>
          </FormItem>
          <FormItem
            {...submitFormLayout}
            style={{
              marginTop: 32,
            }}
          >
            <Button type="primary" htmlType="submit" loading={submitting}>
              <FormattedMessage id="adminandarticleandadd.form.submit" />
            </Button>
            <Button
              style={{
                marginLeft: 8,
              }}
            >
              <FormattedMessage id="adminandarticleandadd.form.save" />
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default connect(({ loading }) => ({
  submitting: loading.effects['adminAndArticleAndAdd/submitRegularForm'],
}))(Add);
