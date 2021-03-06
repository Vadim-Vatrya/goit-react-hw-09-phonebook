import React from 'react';
import { useSelector } from 'react-redux';

import authSelectors from '../../redux/auth/auth-selectors';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
// import Container from '../Container';

import styles from './AppBar.module.scss';

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
