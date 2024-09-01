import { Navigate, Route, Router, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home-page";
import { JobsPage } from "../../pages/jobs-page";
import { NavBar } from "../../widgets/nav-bar";
import HomeLogo from '../../shared/images/for-button-with-subscription/homeLogo.svg';
import BookmarkLogo from '../../shared/images/for-button-with-subscription/bookmarkLogo.svg';
import JobsLogo from '../../shared/images/for-button-with-subscription/jobsLogo.svg';
import ProfileLogo from '../../shared/images/for-button-with-subscription/profileLogo.svg';
import { Loading } from "../../widgets/loading";
import { postEvent } from "@telegram-apps/sdk";
import { initNavigator, initSwipeBehavior } from "@telegram-apps/sdk-react";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { useEffect, useMemo } from "react";
import { useIntegration } from "@telegram-apps/react-router-integration";

const navItems = [
  {
    image: HomeLogo,
    subscription: 'Home',
    path: '/home',
  },
  {
    image: BookmarkLogo,
    subscription: 'Bookmark',
    path: '/bookmark',
  },
  {
    image: JobsLogo,
    subscription: 'Jobs',
    path: '/jobs',
  },
  {
    image: ProfileLogo,
    subscription: 'Profile',
    path: '/profile',
  }
]

export const AppRouter: React.FC = () => {
  postEvent('web_app_set_background_color', {color: '#ffffff'});
  const [swipeBehavior] = initSwipeBehavior()
  swipeBehavior.disableVerticalSwipe();
  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Loading />
      <Router location={location} navigator={reactNavigator}>
      <Routes>
        <Route path={'/home'} element={
          <>
            <HomePage/>
            <NavBar items={navItems} />
          </>
        }/>
        <Route path={'/bookmark'} element={
          <>
            <HomePage/>
            <NavBar items={navItems} />
          </>
        }/>
        <Route path={'/jobs'} element={
          <>
            <JobsPage/>
            <NavBar items={navItems} />
          </>
        }/>
        <Route path={'/profile'} element={
          <>
            <HomePage/>
            <NavBar items={navItems} />
          </>
        }/>
        <Route path={'/*'} element={
          <Navigate to='/home' />
        }/>
      </Routes>
    </Router>
    </div>
  )
}