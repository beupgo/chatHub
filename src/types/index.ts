export interface AssetItem {
  id: string;
  name: string;
  type: string;
  status: 'running' | 'stopped' | 'error' | 'pending';
  region: string;
  createTime: string;
  cpu: string;
  memory: string;
  disk: string;
}

export interface TodoItem {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
  assignee: string;
}

export interface RiskAlert {
  id: string;
  title: string;
  level: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  time: string;
  source: string;
}

export interface QuickTool {
  id: string;
  name: string;
  icon: string;
  description: string;
  url: string;
}

export interface NavigationItem {
  key: string;
  label: string;
  icon: string;
  children?: NavigationItem[];
}
