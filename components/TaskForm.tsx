import useMutateTask from '@/hooks/useMutateTask';
import useStore from '@/store';
import { DatabaseIcon } from '@heroicons/react/solid';
import { Button, Center, TextInput } from '@mantine/core';
import React, { FormEvent } from 'react';

export const TaskForm = () => {
  const { editedTask, updateEditedTask: update } = useStore();
  // const update = useStore((state)=>state.updateEditedTask)
  const { createTaskMutation, updateTaskMutation } = useMutateTask();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedTask.id === 0) {
      createTaskMutation.mutate({
        title: editedTask.title,
        description: editedTask.description,
      });
    } else {
      updateTaskMutation.mutate({
        id: editedTask.id,
        title: editedTask.title,
        description: editedTask.description,
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          mt="md"
          placeholder="title"
          value={editedTask.title || ''}
          onChange={(e) => update({ ...editedTask, title: e.target.value })}
        />
        <TextInput
          mt="md"
          placeholder="description"
          value={editedTask.description || ''}
          onChange={(e) =>
            update({ ...editedTask, description: e.target.value })
          }
        />
        <Center mt="lg">
          <Button
            disabled={editedTask.title === ''}
            leftIcon={<DatabaseIcon className="" />}
            color="cyan"
            type="submit"
          >
            {editedTask.id === 0 ? 'Create' : 'Update'}
          </Button>
        </Center>
      </form>
    </>
  );
};
