import React from 'react';
import { AuthNav } from './authNav';
import { UserNav } from './userNav';
import { authSignOutUser } from '../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export const navigator = isLoggedIn => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authSignOutUser());
  };
  if (!isLoggedIn) {
    return <AuthNav />;
  }

  return <UserNav />;
};
