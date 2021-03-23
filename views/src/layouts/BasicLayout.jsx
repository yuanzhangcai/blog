/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { DefaultFooter, GridContent } from '@ant-design/pro-layout';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useIntl, connect, history } from 'umi';
import { GithubOutlined, HomeOutlined, ContactsOutlined, MailOutlined } from '@ant-design/icons';
import { Result, Button, Row, Col, Card, Divider, Tag, BackTop } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { getMatchMenu } from '@umijs/route-utils';
import logo from '../assets/logo.svg';
import styles from './BasicLayout.less';

const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);

/** Use Authorized check all menu item */
const menuDataRender = (menuList) =>
  menuList.map((item) => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
    return Authorized.check(item.authority, localItem, null);
  });

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} 傲雨醉松　沪ICP备2021006339号`}
    links={[
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/yuanzhangcai',
        blankTarget: true,
      },
    ]}
  />
);

const BasicLayout = (props) => {
  const {
    dispatch,
    children,
    settings,
    currentUser = {},
    currentUserLoading,
    location = {
      pathname: '/',
    },
  } = props;

  const dataLoading = currentUserLoading || !(currentUser && Object.keys(currentUser).length);

  const menuDataRef = useRef([]);
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'visit/addVisit',
      });
    }
  }, []);
  /** Init variables */

  const handleMenuCollapse = (payload) => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  const authorized = useMemo(
    () =>
      getMatchMenu(location.pathname || '/', menuDataRef.current).pop() || {
        authority: undefined,
      },
    [location.pathname],
  );
  const { formatMessage } = useIntl();

  const renderUserInfo = (currentUser) => (
    <div className={styles.detail}>
      <p>
        <ContactsOutlined
          style={{
            marginRight: 8,
          }}
        />
        {currentUser.title}
      </p>
      <p>
        <HomeOutlined
          style={{
            marginRight: 8,
          }}
        />
        {
          (
            currentUser.geographic || {
              province: {
                label: '',
              },
            }
          ).province.label
        }
        {
          (
            currentUser.geographic || {
              city: {
                label: '',
              },
            }
          ).city.label
        }
      </p>
      <p>
        <MailOutlined
          style={{
            marginRight: 8,
          }}
        />
        {currentUser.email}
      </p>
    </div>
  );

  const TagList = ({ tags }) => {
    const ref = useRef(null);
    const [newTags, setNewTags] = useState([]);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const showInput = () => {
      setInputVisible(true);

      if (ref.current) {
        // eslint-disable-next-line no-unused-expressions
        ref.current?.focus();
      }
    };

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
      let tempsTags = [...newTags];

      if (inputValue && tempsTags.filter((tag) => tag.label === inputValue).length === 0) {
        tempsTags = [
          ...tempsTags,
          {
            key: `new-${tempsTags.length}`,
            label: inputValue,
          },
        ];
      }

      setNewTags(tempsTags);
      setInputVisible(false);
      setInputValue('');
    };

    return (
      <div className={styles.tags}>
        <div className={styles.tagsTitle}>标签</div>
        {(tags || []).concat(newTags).map((item) => (
          <Tag key={item.key}>{item.label}</Tag>
        ))}
      </div>
    );
  };

  return (
    <ProLayout
      logo={logo}
      formatMessage={formatMessage}
      {...props}
      {...settings}
      onCollapse={handleMenuCollapse}
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: formatMessage({
            id: 'menu.home',
          }),
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={() => {
        if (settings.footerRender || settings.footerRender === undefined) {
          return defaultFooterDom;
        }

        return null;
      }}
      menuDataRender={menuDataRender}
      rightContentRender={() => <RightContent />}
      postMenuData={(menuData) => {
        menuDataRef.current = menuData || [];
        return menuData || [];
      }}
    >
      <Authorized authority={authorized.authority} noMatch={noMatch}>
        <GridContent>
          <Row gutter={24} justify={"center"}>
            <Col lg={17} md={24}>
              <Card
                className={styles.tabsCard}
                bordered={false}
                style={{
                  marginBottom: 24,
                }}
              >
                <div>
                  {children}
                </div>
              </Card>
            </Col>
            <Col lg={7} md={24}>
              <Card
                bordered={false}
                loading={dataLoading}
              >
                {!dataLoading && (
                  <div>
                    <div className={styles.avatarHolder}>
                      <img alt="" src={currentUser.avatar} />
                      <div className={styles.name}>{currentUser.name}</div>
                      <div>{currentUser.signature}</div>
                    </div>
                    {renderUserInfo(currentUser)}
                    <Divider dashed />
                    <TagList tags={currentUser.tags || []} />
                    <Divider
                      style={{
                        marginTop: 16,
                      }}
                      dashed
                    />
                  </div>
                )}
              </Card>
            </Col>
          </Row>
        </GridContent>
      </Authorized>
      <BackTop />
    </ProLayout>
  );
};

export default connect(({ global, settings, loading, user }) => ({
  collapsed: global.collapsed,
  settings,
  currentUser: user.currentUser,
  currentUserLoading: loading.effects['user/fetchCurrent'],
}))(BasicLayout);
