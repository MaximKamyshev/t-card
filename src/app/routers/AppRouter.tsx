import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home-page";
import { JobsPage } from "../../pages/jobs-page";
import { NavBar } from "../../widgets/nav-bar";
import HomeLogo from '../../shared/images/for-button-with-subscription/homeLogo.svg';
import BookmarkLogo from '../../shared/images/for-button-with-subscription/bookmarkLogo.svg';
import JobsLogo from '../../shared/images/for-button-with-subscription/jobsLogo.svg';
import ProfileLogo from '../../shared/images/for-button-with-subscription/profileLogo.svg';
import { Loading } from "../../widgets/loading";
import { postEvent } from "@telegram-apps/sdk";
import { initNavigator, initSwipeBehavior, useInitData, useLaunchParams } from "@telegram-apps/sdk-react";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { useEffect, useMemo, useState } from "react";
import { useIntegration } from "@telegram-apps/react-router-integration";
import { VacancyPage } from "../../pages/vacancy-page";
import { OnboardPage } from "../../pages/onboard-page";
import { useInitDataStore } from '../stores/init-data.store';

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
  const [updateUser, updatePlatform, platform] = useInitDataStore((state: any) => [state.updateUser, state.updatePlatform, state.platform]);
  const initData = useInitData();
  const lp = useLaunchParams();
  const userRows = useMemo(() => {
    return initData && initData.user ? initData.user : undefined;
  }, [initData]);

  postEvent('web_app_set_background_color', {color: '#ffffff'});
  postEvent('web_app_set_header_color', {color: '#ffffff'});
  const [isLoading, setIsLoading] = useState(false);
  const [swipeBehavior] = initSwipeBehavior();
  // swipeBehavior.disableVerticalSwipe();
  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 1500)
  }, [])



  useEffect(() => {
    updateUser(userRows)
    updatePlatform(lp.platform)
  }, [initData, lp])

  // useEffect(() => {
  //   navigator.attach();
  //   return () => navigator.detach();
  // }, [navigator]);

  return (
    <>
      <Loading isLoading={isLoading} />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={
            <div {...stylex.props(styles.wrapper, platform === 'ios' && styles.iosPadding)}>
              <HomePage/>
              <NavBar items={navItems} />
            </div>
          }/>
          <Route path='/bookmark' element={
            <div {...stylex.props(styles.wrapper, platform === 'ios' && styles.iosPadding)}>
              <HomePage/>
              <NavBar items={navItems} />
            </div>
          }/>
          <Route path='/jobs' element={
            <div {...stylex.props(styles.wrapper, platform === 'ios' && styles.iosPadding)}>
              <JobsPage/>
              <NavBar items={navItems} />
            </div>
          }/>
          <Route path='/vacancy/:slug' element={
            <div {...stylex.props(styles.wrapper, platform === 'ios' && styles.iosPadding)}>
              <VacancyPage/>
              <NavBar items={navItems} />
            </div>
          }/>
          <Route path='/profile' element={
            <div {...stylex.props(styles.wrapper, platform === 'ios' && styles.iosPadding)}>
              <HomePage/>
              <NavBar items={navItems} />
            </div>
          }/>
          <Route path='/onboard' element={<OnboardPage />}/>
          <Route path='*' element={
            <Navigate to='/home' />
          }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}