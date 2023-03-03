import React from 'react';
import { AuthNav } from './authNav';
import { UserNav } from './userNav';

export const navigator = isLoggedIn => {
  if (!isLoggedIn) {
    return <AuthNav />;
  }

  return <UserNav />;
};
