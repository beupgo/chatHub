import React from 'react';
import { Card, Steps, Button } from '@arco-design/web-react';
import { IconCheck, IconClose } from '@arco-design/web-react/icon';

const Step = Steps.Step;

interface GuidanceStepsProps {
  onClose: () => void;
}

const GuidanceSteps: React.FC<GuidanceStepsProps> = ({ onClose }) => {
  return (
    <Card 
      className="card-shadow"
      title="新手指引"
      extra={
        <Button 
          type="text" 
          icon={<IconClose />} 
          onClick={onClose}
          size="small"
        />
      }
      style={{ marginBottom: 24 }}
    >
      <Steps current={1} size="small">
        <Step 
          title="创建云服务器" 
          description="选择配置并创建您的第一台云服务器"
          status="finish"
        />
        <Step 
          title="配置安全组" 
          description="设置防火墙规则保障服务器安全"
          status="process"
        />
        <Step 
          title="部署应用" 
          description="上传并部署您的应用程序"
          status="wait"
        />
        <Step 
          title="监控设置" 
          description="配置监控告警以及时发现问题"
          status="wait"
        />
      </Steps>
      <div style={{ marginTop: 16, textAlign: 'right' }}>
        <Button type="primary" size="small">
          继续指引
        </Button>
      </div>
    </Card>
  );
};

export default GuidanceSteps;
