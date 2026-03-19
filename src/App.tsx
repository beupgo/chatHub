import React, { useState } from 'react';
import { Layout, Grid, Tabs } from '@arco-design/web-react';
import Sidebar from './components/Sidebar';
import GuidanceSteps from './components/GuidanceSteps';
import StatCards from './components/StatCards';
import AssetList from './components/AssetList';
import TodoList from './components/TodoList';
import RiskAlerts from './components/RiskAlerts';
import QuickTools from './components/QuickTools';
import { AssetItem, TodoItem, RiskAlert, QuickTool } from './types';

const { Sider, Content } = Layout;
const { Row, Col } = Grid;
const TabPane = Tabs.TabPane;

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('dashboard');
  const [showGuidance, setShowGuidance] = useState(true);

  const mockAssets: AssetItem[] = [
    {
      id: '1',
      name: 'web-server-01',
      type: 'ECS',
      status: 'running',
      region: '北京',
      createTime: '2024-01-15 10:30:00',
      cpu: '2核',
      memory: '4GB',
      disk: '40GB'
    },
    {
      id: '2',
      name: 'db-server-01',
      type: 'RDS',
      status: 'running',
      region: '上海',
      createTime: '2024-01-10 14:20:00',
      cpu: '4核',
      memory: '8GB',
      disk: '100GB'
    },
    {
      id: '3',
      name: 'cache-server-01',
      type: 'Redis',
      status: 'stopped',
      region: '深圳',
      createTime: '2024-01-08 09:15:00',
      cpu: '1核',
      memory: '2GB',
      disk: '20GB'
    }
  ];

  const mockTodos: TodoItem[] = [
    {
      id: '1',
      title: '配置生产环境安全组',
      description: '为生产环境的Web服务器配置防火墙规则',
      priority: 'high',
      status: 'pending',
      dueDate: '2024-01-20',
      assignee: '张三'
    },
    {
      id: '2',
      title: '数据库备份策略优化',
      description: '调整数据库自动备份策略，提高备份效率',
      priority: 'medium',
      status: 'in-progress',
      dueDate: '2024-01-25',
      assignee: '李四'
    },
    {
      id: '3',
      title: '监控告警规则完善',
      description: '完善系统监控告警规则，减少误报',
      priority: 'low',
      status: 'completed',
      dueDate: '2024-01-18',
      assignee: '王五'
    }
  ];

  const mockAlerts: RiskAlert[] = [
    {
      id: '1',
      title: 'CPU使用率过高',
      level: 'high',
      description: 'web-server-01 CPU使用率达到85%，请及时处理',
      time: '2024-01-16 15:30:00',
      source: '云监控'
    },
    {
      id: '2',
      title: '安全组异常访问',
      level: 'critical',
      description: '检测到来自未知IP的异常访问尝试',
      time: '2024-01-16 14:45:00',
      source: '安全中心'
    },
    {
      id: '3',
      title: '磁盘空间不足',
      level: 'medium',
      description: 'db-server-01磁盘使用率达到75%',
      time: '2024-01-16 12:20:00',
      source: '云监控'
    }
  ];

  const mockTools: QuickTool[] = [
    {
      id: '1',
      name: '云服务器',
      icon: 'IconCloud',
      description: '快速创建实例',
      url: '/ecs/create'
    },
    {
      id: '2',
      name: '对象存储',
      icon: 'IconStorage',
      description: '管理存储桶',
      url: '/oss/buckets'
    },
    {
      id: '3',
      name: '安全组',
      icon: 'IconSafe',
      description: '配置防火墙',
      url: '/security/groups'
    },
    {
      id: '4',
      name: '负载均衡',
      icon: 'IconSettings',
      description: '配置负载均衡',
      url: '/slb/instances'
    },
    {
      id: '5',
      name: '监控告警',
      icon: 'IconBug',
      description: '查看监控数据',
      url: '/monitor/dashboard'
    },
    {
      id: '6',
      name: '日志服务',
      icon: 'IconFile',
      description: '查看系统日志',
      url: '/logs/search'
    }
  ];

  const mockStats = {
    runningInstances: 12,
    totalStorage: '2.5TB',
    securityEvents: 3,
    alerts: 8
  };

  const renderDashboard = () => (
    <div>
      {showGuidance && (
        <GuidanceSteps onClose={() => setShowGuidance(false)} />
      )}
      <StatCards stats={mockStats} />
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <AssetList assets={mockAssets} />
        </Col>
        <Col span={12}>
          <TodoList todos={mockTodos} />
        </Col>
        <Col span={12}>
          <RiskAlerts alerts={mockAlerts} />
        </Col>
        <Col span={24}>
          <QuickTools tools={mockTools} />
        </Col>
      </Row>
    </div>
  );

  const renderContent = () => {
    if (selectedKey === 'dashboard') {
      return renderDashboard();
    }
    
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '60vh',
        fontSize: 16,
        color: '#999'
      }}>
        该功能正在开发中...
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={240} style={{ background: '#fff' }}>
          <Sidebar 
            selectedKey={selectedKey} 
            onMenuSelect={setSelectedKey} 
          />
        </Sider>
        <Layout>
          <Content className="content-area">
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
