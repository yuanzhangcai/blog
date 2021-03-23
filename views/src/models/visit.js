import { pageVisit } from '@/services/visit';
const Model = {
  namespace: 'visit',
  state: {
    currentUser: {},
    list: [],
  },
  effects: {
    *addVisit(_, { call, put }) {
      yield call(pageVisit);
    },
  },
  reducers: {
  },
};
export default Model;
