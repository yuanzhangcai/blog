import { message } from 'antd';
import { fakeListForm } from './service';

const Model = {
  namespace: 'adminAndArticleAndList',
  state: {},
  effects: {
    *fakeListForm({ payload }, { call }) {
      yield call(fakeListForm, payload);
      message.success('提交成功');
    },
  },
};
export default Model;
