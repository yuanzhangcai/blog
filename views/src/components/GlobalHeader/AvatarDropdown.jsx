import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Button } from 'antd';
import React from 'react';
import { history, connect } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

class AvatarDropdown extends React.Component {
  onMenuClick = (event) => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }

    history.push(`/${key}`);
  };

  onLoginClick = () => {
    const { dispatch } = this.props;

    if (dispatch) {
      dispatch({
        type: 'login/logout',
      });
    }
  }

  render() {
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      loginUserInfo
    } = this.props;
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {loginUserInfo && loginUserInfo.ret == 0 && (loginUserInfo.data.type == "admin" || loginUserInfo.data.type == "super") && (
          <Menu.Item key="admin">
            <UserOutlined />
            管理端
          </Menu.Item>
        )}
        {loginUserInfo && loginUserInfo.ret == 0 && (loginUserInfo.data.type == "admin" || loginUserInfo.data.type == "super") &&
          <Menu.Divider />
        }
        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return loginUserInfo && loginUserInfo.ret == 0 ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={loginUserInfo.data.avatar} alt="avatar" />
          <span className={`${styles.name} anticon`}>{loginUserInfo.data.nickname}</span>
        </span>
      </HeaderDropdown>
    ) : (
      // <span className={`${styles.action} ${styles.account}`}>
      //   <Spin
      //     size="small"
      //     style={{
      //       marginLeft: 8,
      //       marginRight: 8,
      //     }}
      //   />
      // </span>
      <Button type="primary" shape="round" className={`${styles.login}`} onClick={this.onLoginClick}>登录</Button>
    );
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
  loginUserInfo: user.loginUserInfo,
}))(AvatarDropdown);
