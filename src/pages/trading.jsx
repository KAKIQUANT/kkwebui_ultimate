import React from 'react';
import { Layout, Card, Row, Col, Statistic } from 'antd';
import { DollarOutlined, PercentageOutlined, LineChartOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';

const { Content } = Layout;

const Trading = () => {
  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Layout style={{ marginTop: 64, minHeight: 'calc(100vh - 64px)', background: '#f0f2f5' }}>
        <Content style={{ padding: '24px' }}>
          <div className="max-w-7xl mx-auto">
            {/* 账户概览 */}
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="总资产"
                    value={125678.45}
                    precision={2}
                    prefix={<DollarOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="持仓市值"
                    value={98765.32}
                    precision={2}
                    prefix={<DollarOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="可用资金"
                    value={26913.13}
                    precision={2}
                    prefix={<DollarOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="总收益率"
                    value={25.67}
                    precision={2}
                    prefix={<PercentageOutlined />}
                    valueStyle={{ color: '#3f8600' }}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>

            {/* 策略绩效 */}
            <Card title="策略绩效" className="mt-6">
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <Card bordered={false}>
                    <Statistic
                      title="年化收益率"
                      value={32.45}
                      precision={2}
                      prefix={<LineChartOutlined />}
                      valueStyle={{ color: '#3f8600' }}
                      suffix="%"
                    />
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card bordered={false}>
                    <Statistic
                      title="最大回撤"
                      value={15.23}
                      precision={2}
                      prefix={<LineChartOutlined />}
                      valueStyle={{ color: '#cf1322' }}
                      suffix="%"
                    />
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card bordered={false}>
                    <Statistic
                      title="夏普比率"
                      value={2.34}
                      precision={2}
                      prefix={<LineChartOutlined />}
                    />
                  </Card>
                </Col>
              </Row>
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Trading; 