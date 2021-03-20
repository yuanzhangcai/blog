import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import React from 'react';
import numeral from 'numeral';
import { ChartCard, Field } from './Charts';
import Trend from './Trend';
import styles from '../style.less';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};

const IntroduceRow = ({ loading }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={"访问总量"}
        action={
          <Tooltip
            title={"访问总量"}
          >
            <InfoCircleOutlined />
          </Tooltip>
        }
        loading={loading}
        total={numeral(18846).format('0,0')}
        footer={
          <Field
            label={"日销售额"}
            value={numeral(8846).format('0,0')}
          />
        }
        contentHeight={46}
      >
        <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          周同比
          <span className={styles.trendText}>12%</span>
        </Trend>
        <Trend flag="down">
          日同比
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>

  </Row>
);

export default IntroduceRow;
