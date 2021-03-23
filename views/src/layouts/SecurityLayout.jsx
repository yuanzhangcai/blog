import React from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import { connect } from 'umi';

class SecurityLayout extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    this.setState({
      isReady: true,
    });
    const { dispatch } = this.props;

    if (dispatch) {
      dispatch({
        type: 'user/fetchGetLoginUserInfo',
      });

      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }

  render() {
    const { isReady } = this.state;
    const { children, loading } = this.props; // You can replace it to your authentication rule (such as check token exists)
    // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）

    // const isLogin = currentUser && currentUser.userid;
    // const queryString = stringify({
    //   redirect: window.location.href,
    // });

    if (loading || !isReady) {
      return <PageLoading />;
    }

    // if (!isLogin && window.location.pathname !== '/user/login') {
    //   return <Redirect to={`/user/login?${queryString}`} />;
    // }

    return children;
  }
}

export default connect(({ loading }) => ({
  loading: loading.models.user,
}))(SecurityLayout);
