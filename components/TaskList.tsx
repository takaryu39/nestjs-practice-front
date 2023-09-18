import { useQueryTasks } from '@/hooks/useQueryTasks';
import { List, Loader, ThemeIcon } from '@mantine/core';
import React from 'react';
import { TaskItem } from './TaskItem';

export const TaskList = () => {
  const { data: tasks, status } = useQueryTasks();
  if (status === 'loading') return <Loader />;
  return (
    <List
      my="lg"
      spacing="sm"
      size="sm"
      icon={
        <ThemeIcon color="cyan" size={24} radius="xl">
          {/* <IconCircleDashes size={16} /> */}
        </ThemeIcon>
      }
    >
      {tasks?.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
        />
      ))}
    </List>
  );
};
