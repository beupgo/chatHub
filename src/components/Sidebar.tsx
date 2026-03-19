import React from 'react';
import { Menu } from '@arco-design/web-react';
import {
  IconDashboard,
  IconCloud,
  IconStorage,
  IconSafe,
  IconSettings,
  IconUser,
  IconFile,
  IconBug
} from '@arco-design/web-react/icon';
import { NavigationItem } from '../types';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

interface SidebarProps {
  selectedKey: string;
  onMenuSelect: (key: string) => void;
}

const navigationItems: NavigationItem[] = [
  {
    key: 'dashboard',
    label: '工作台',
    icon: 'IconDashboard'
  },
  {
    key: 'compute',
    label: '计算服务',
    icon: 'IconCloud',
    children: [
      { key: 'ecs', label: '云服务器 ECS', icon: 'IconCloud' },
      { key: 'container', label: '容器服务', icon: 'IconCloud' }
    ]
  },
  {
    key: 'storage',
    label: '存储服务',
    icon: 'IconStorage',
    children: [
      { key: 'oss', label: '对象存储 OSS', icon: 'IconStorage' },
      { key: 'nas', label: '文件存储 NAS', icon: 'IconStorage' }
    ]
  },
  {
    key: 'security',
    label: '安全服务',
    icon: 'IconSafe',
    children: [
      { key: 'waf', label: 'Web应用防火墙', icon: 'IconSafe' },
      { key: 'ddos', label: 'DDoS防护', icon: 'IconSafe' }
    ]
  },
  {
    key: 'monitor',
    label: '监控运维',
    icon: 'IconBug'
  },
  {
    key: 'account',
    label: '账户管理',
    icon: 'IconUser'
  },
  {
    key: 'settings',
    label: '系统设置',
    icon: 'IconSettings'
  }
];

const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    IconDashboard: <IconDashboard />,
    IconCloud: <IconCloud />,
    IconStorage: <IconStorage />,
    IconSafe: <IconSafe />,
    IconSettings: <IconSettings />,
    IconUser: <IconUser />,
    IconFile: <IconFile />,
    IconBug: <IconBug />
  };
  return iconMap[iconName] || <IconDashboard />;
};

const Sidebar: React.FC<SidebarProps> = ({ selectedKey, onMenuSelect }) => {
  const renderMenuItems = (items: NavigationItem[]) => {
    return items.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={item.label}
            icon={getIcon(item.icon)}
          >
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      }
      return (
        <MenuItem key={item.key} icon={getIcon(item.icon)}>
          {item.label}
        </MenuItem>
      );
    });
  };

  return (
    <div style={{ width: 240, height: '100vh', background: '#fff' }}>
      <div style={{ 
        height: 64, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderBottom: '1px solid #f0f0f0',
        fontSize: 18,
        fontWeight: 600,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        云计算控制台
      </div>
      <Menu
        selectedKeys={[selectedKey]}
        onClickMenuItem={onMenuSelect}
        style={{ height: 'calc(100vh - 64px)' }}
      >
        {renderMenuItems(navigationItems)}
      </Menu>
    </div>
  );
};

export default Sidebar;
