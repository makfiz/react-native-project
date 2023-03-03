import React from 'react';
import { AuthNav } from '../Navigation/authNav';
import { UserNav } from '../Navigation/userNav';

export const navigator = isLoggedIn => {
  if (!isLoggedIn) {
    return <AuthNav />;
  }

  return <UserNav />;
};
