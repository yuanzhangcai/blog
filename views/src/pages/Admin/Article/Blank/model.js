import { message } from 'antd';
import { fakeListForm } from './service';

const Model = {
  namespace: 'adminAndArticleAndBlank',
  state: {},
  effects: {
    *fakeListForm({ payload }, { call }) {
      yield call(fakeListForm, payload);
      message.success('ζδΊ€ζε');
    },
  },
};
export default Model;
