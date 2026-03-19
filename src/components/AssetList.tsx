import React from 'react';
import { Card, Table, Tag, Button, Input, Select } from '@arco-design/web-react';
import { IconSearch, IconPlus, IconRefresh } from '@arco-design/web-react/icon';
import { AssetItem } from '../types';

const Option = Select.Option;

interface AssetListProps {
  assets: AssetItem[];
}

const AssetList: React.FC<AssetListProps> = ({ assets }) => {
  const getStatusColor = (status: string) => {
    const colorMap: { [key: string]: string } = {
      running: 'green',
      stopped: 'orange',
      error: 'red',
      pending: 'blue'
    };
    return colorMap[status] || 'default';
  };

  const getStatusText = (status: string) => {
    const textMap: { [key: string]: string } = {
      running: '运行中',
      stopped: '已停止',
      error: '异常',
      pending: '启动中'
    };
    return textMap[status] || status;
  };

  const columns = [
    {
      title: '实例名称',
      dataIndex: 'name',
      key: 'name',
      width: 200
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      width: 120
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>
          {getStatusText(status)}
        </Tag>
      )
    },
    {
      title: '地域',
      dataIndex: 'region',
      key: 'region',
      width: 120
    },
    {
      title: 'CPU',
      dataIndex: 'cpu',
      key: 'cpu',
      width: 80
    },
    {
      title: '内存',
      dataIndex: 'memory',
      key: 'memory',
      width: 80
    },
    {
      title: '磁盘',
      dataIndex: 'disk',
      key: 'disk',
      width: 80
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 150
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      render: () => (
        <div>
          <Button type="text" size="small">管理</Button>
          <Button type="text" size="small">重启</Button>
          <Button type="text" size="small">停止</Button>
        </div>
      )
    }
  ];

  return (
    <Card 
      className="card-shadow"
      title="资产列表"
      extra={
        <div style={{ display: 'flex', gap: 8 }}>
          <Button icon={<IconRefresh />} size="small">刷新</Button>
          <Button type="primary" icon={<IconPlus />} size="small">
            创建实例
          </Button>
        </div>
      }
      style={{ marginBottom: 24 }}
    >
      <div style={{ marginBottom: 16, display: 'flex', gap: 12 }}>
        <Input
          addBefore={<IconSearch />}
          placeholder="搜索实例名称"
          style={{ width: 240 }}
        />
        <Select placeholder="选择状态" style={{ width: 120 }}>
          <Option value="all">全部</Option>
          <Option value="running">运行中</Option>
          <Option value="stopped">已停止</Option>
          <Option value="error">异常</Option>
        </Select>
        <Select placeholder="选择地域" style={{ width: 120 }}>
          <Option value="all">全部</Option>
          <Option value="cn-beijing">北京</Option>
          <Option value="cn-shanghai">上海</Option>
          <Option value="cn-shenzhen">深圳</Option>
        </Select>
      </div>
      <Table 
        columns={columns} 
        data={assets}
        pagination={{ pageSize: 10 }}
        size="small"
      />
    </Card>
  );
};

export default AssetList;
