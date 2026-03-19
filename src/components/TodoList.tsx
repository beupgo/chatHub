import React from 'react';
import { Card, List, Tag, Button, Radio } from '@arco-design/web-react';
import { IconPlus, IconCheck, IconClock } from '@arco-design/web-react/icon';
import { TodoItem } from '../types';

const RadioGroup = Radio.Group;

interface TodoListProps {
  todos: TodoItem[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const getPriorityColor = (priority: string) => {
    const colorMap: { [key: string]: string } = {
      high: 'red',
      medium: 'orange',
      low: 'green'
    };
    return colorMap[priority] || 'default';
  };

  const getPriorityText = (priority: string) => {
    const textMap: { [key: string]: string } = {
      high: '高',
      medium: '中',
      low: '低'
    };
    return textMap[priority] || priority;
  };

  const getStatusIcon = (status: string) => {
    if (status === 'completed') return <IconCheck style={{ color: '#52c41a' }} />;
    if (status === 'in-progress') return <IconClock style={{ color: '#1890ff' }} />;
    return <IconClock style={{ color: '#faad14' }} />;
  };

  return (
    <Card 
      className="card-shadow"
      title="待办任务"
      extra={
        <Button type="primary" icon={<IconPlus />} size="small">
          新建任务
        </Button>
      }
      style={{ marginBottom: 24 }}
    >
      <div style={{ marginBottom: 16 }}>
        <RadioGroup defaultValue="all" size="small">
          <Radio value="all">全部</Radio>
          <Radio value="pending">待处理</Radio>
          <Radio value="in-progress">进行中</Radio>
          <Radio value="completed">已完成</Radio>
        </RadioGroup>
      </div>
      <List
        size="small"
        dataSource={todos}
        render={(item: TodoItem) => (
          <List.Item
            key={item.id}
            style={{ padding: '12px 0' }}
            actions={[
              <Button key="edit" type="text" size="small">编辑</Button>,
              <Button key="complete" type="text" size="small">完成</Button>
            ]}
          >
            <List.Item.Meta
              avatar={getStatusIcon(item.status)}
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>{item.title}</span>
                  <Tag color={getPriorityColor(item.priority)} size="small">
                    {getPriorityText(item.priority)}优先级
                  </Tag>
                </div>
              }
              description={
                <div>
                  <div style={{ marginBottom: 4 }}>{item.description}</div>
                  <div style={{ fontSize: 12, color: '#999' }}>
                    负责人: {item.assignee} | 截止时间: {item.dueDate}
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

export default TodoList;
