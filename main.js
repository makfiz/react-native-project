import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigator } from './Navigation/Navigation';
import { authStateChangeUser } from './redux/auth/authOperations';

export const Main = () => {
  const dispatch = useDispatch();
  const { stateChange } = useSelector(state => state.auth);

  const navigation = navigator(stateChange);
  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return <NavigationContainer>{navigation}</NavigationContainer>;
};
