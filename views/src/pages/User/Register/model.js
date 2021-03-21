import { register } from './service';

const Model = {
  namespace: 'userAndRegister',
  state: {
    status: undefined,
  },
  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(register, payload);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
  },
  reducers: {
    registerHandle(state, { payload }) {
      return { ...state, response: payload };
    },
  },
};
export default Model;
