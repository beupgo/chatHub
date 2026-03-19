import React from 'react';
import { Card, List, Tag, Button } from '@arco-design/web-react';
import { IconExclamationCircle, IconSettings } from '@arco-design/web-react/icon';
import { RiskAlert } from '../types';

interface RiskAlertsProps {
  alerts: RiskAlert[];
}

const RiskAlerts: React.FC<RiskAlertsProps> = ({ alerts }) => {
  const getLevelColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      critical: 'red',
      high: 'orange',
      medium: 'gold',
      low: 'green'
    };
    return colorMap[level] || 'default';
  };

  const getLevelText = (level: string) => {
    const textMap: { [key: string]: string } = {
      critical: '紧急',
      high: '高危',
      medium: '中危',
      low: '低危'
    };
    return textMap[level] || level;
  };

  return (
    <Card 
      className="card-shadow"
      title="风险告警"
      extra={
        <Button type="primary" icon={<IconSettings />} size="small">
          告警设置
        </Button>
      }
      style={{ marginBottom: 24 }}
    >
      <List
        size="small"
        dataSource={alerts}
        render={(item: RiskAlert) => (
          <List.Item
            key={item.id}
            style={{ padding: '12px 0' }}
            actions={[
              <Button key="view" type="text" size="small">查看</Button>,
              <Button key="handle" type="text" size="small">处理</Button>
            ]}
          >
            <List.Item.Meta
              avatar={<IconExclamationCircle style={{ color: getLevelColor(item.level), fontSize: 16 }} />}
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>{item.title}</span>
                  <Tag color={getLevelColor(item.level)} size="small">
                    {getLevelText(item.level)}
                  </Tag>
                </div>
              }
              description={
                <div>
                  <div style={{ marginBottom: 4 }}>{item.description}</div>
                  <div style={{ fontSize: 12, color: '#999' }}>
                    来源: {item.source} | 时间: {item.time}
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default RiskAlerts;
