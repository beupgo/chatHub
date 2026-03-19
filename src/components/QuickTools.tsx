import React from 'react';
import { Card, Grid, Button } from '@arco-design/web-react';
import { 
  IconCloud, 
  IconStorage, 
  IconSafe, 
  IconBug, 
  IconSettings,
  IconFile
} from '@arco-design/web-react/icon';
import { QuickTool } from '../types';

const Row = Grid.Row;
const Col = Grid.Col;

interface QuickToolsProps {
  tools: QuickTool[];
}

const QuickTools: React.FC<QuickToolsProps> = ({ tools }) => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      IconCloud: <IconCloud style={{ fontSize: 24 }} />,
      IconStorage: <IconStorage style={{ fontSize: 24 }} />,
      IconSafe: <IconSafe style={{ fontSize: 24 }} />,
      IconBug: <IconBug style={{ fontSize: 24 }} />,
      IconSettings: <IconSettings style={{ fontSize: 24 }} />,
      IconFile: <IconFile style={{ fontSize: 24 }} />
    };
    return iconMap[iconName] || <IconCloud style={{ fontSize: 24 }} />;
  };

  return (
    <Card 
      className="card-shadow"
      title="快捷工具"
      style={{ marginBottom: 24 }}
    >
      <Row gutter={[16, 16]}>
        {tools.map((tool) => (
          <Col span={8} key={tool.id}>
            <Card
              hoverable
              style={{ 
                textAlign: 'center',
                height: 120,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              bodyStyle={{ padding: 16 }}
            >
              <div style={{ color: '#1890ff', marginBottom: 8 }}>
                {getIcon(tool.icon)}
              </div>
              <div style={{ fontWeight: 500, marginBottom: 4 }}>
                {tool.name}
              </div>
              <div style={{ fontSize: 12, color: '#999' }}>
                {tool.description}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default QuickTools;
