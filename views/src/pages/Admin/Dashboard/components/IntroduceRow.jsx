import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import { FormattedMessage } from 'umi';
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
        title={
          <FormattedMessage id="dashboard.analysis.total-sales" defaultMessage="总销售额" />
        }
        action={
          <Tooltip
            title={
              <FormattedMessage id="dashboard.analysis.introduce" defaultMessage="Introduce" />
            }
          >
            <InfoCircleOutlined />
          </Tooltip>
        }
        loading={loading}
        total={numeral(18846).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage id="dashboard.analysis.day-sales" defaultMessage="日销售额" />
            }
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
          <FormattedMessage id="dashboard.analysis.week" defaultMessage="周同比" />
          <span className={styles.trendText}>12%</span>
        </Trend>
        <Trend flag="down">
          <FormattedMessage id="dashboard.analysis.day" defaultMessage="日同比" />
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>

  </Row>
);

export default IntroduceRow;
