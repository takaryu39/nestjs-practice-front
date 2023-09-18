import { userQueryUser } from '@/hooks/userQueryUser';
import { Loader } from '@mantine/core';
import React from 'react';

export const UserInfo = () => {
  const { data: user, status } = userQueryUser();
  if (status === 'loading') return <Loader />;
  return <div>{user?.email}</div>;
};
