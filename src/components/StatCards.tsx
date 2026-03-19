import React from 'react';
import { Card, Grid, Statistic } from '@arco-design/web-react';
import { 
  IconCloud, 
  IconStorage, 
  IconSafe, 
  IconBug
} from '@arco-design/web-react/icon';

const Row = Grid.Row;
const Col = Grid.Col;

interface StatCardsProps {
  stats: {
    runningInstances: number;
    totalStorage: string;
    securityEvents: number;
    alerts: number;
  };
}

const StatCards: React.FC<StatCardsProps> = ({ stats }) => {
  const cardData = [
    {
      title: '运行中实例',
      value: stats.runningInstances,
      icon: <IconCloud style={{ fontSize: 32, color: '#1890ff' }} />,
      color: '#1890ff'
    },
    {
      title: '存储空间',
      value: stats.totalStorage,
      icon: <IconStorage style={{ fontSize: 32, color: '#52c41a' }} />,
      color: '#52c41a'
    },
    {
      title: '安全事件',
      value: stats.securityEvents,
      icon: <IconSafe style={{ fontSize: 32, color: '#faad14' }} />,
      color: '#faad14'
    },
    {
      title: '告警数量',
      value: stats.alerts,
      icon: <IconBug style={{ fontSize: 32, color: '#ff4d4f' }} />,
      color: '#ff4d4f'
    }
  ];

  return (
    <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
      {cardData.map((item, index) => (
        <Col span={6} key={index}>
          <Card 
            className="card-shadow"
            style={{ 
              background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
              border: `1px solid ${item.color}20`
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <Statistic
                  title={item.title}
                  value={item.value}
                  valueStyle={{ color: item.color, fontSize: 24, fontWeight: 600 }}
                />
              </div>
              <div style={{ opacity: 0.8 }}>
                {item.icon}
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatCards;
