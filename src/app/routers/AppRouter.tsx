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
import { initNavigator, initSwipeBehavior, useInitData, useLaunchParams } from "@telegram-apps/sdk-react";
import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { useEffect, useMemo, useState } from "react";
import { useIntegration } from "@telegram-apps/react-router-integration";
import { VacancyPage } from "../../pages/vacancy-page";
import { OnboardPage } from "../../pages/onboard-page";
import { useInitDataStore } from '../stores/init-data/init-data.store';
import { ProfilePage } from "../../pages/profile-page";
import AvatarLogo from "../mocks/images/avatar.webp";
import { BookmarksPage } from "../../pages/bookmarks-page";
import { TasksPage } from "../../pages/tasks-page";
import { useJobsStore } from "../stores/jobs/jobs.store";
import { Jobs } from "../mocks/jobs";
import { useTranslation } from "react-i18next";

export const AppRouter: React.FC = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'navBar' });
  const navItems = [
    {
      image: HomeLogo,
      subscription: t('home'),
      path: '/home',
    },
    {
      image: BookmarkLogo,
      subscription: t('bookmarks'),
      path: '/bookmarks',
    },
    {
      image: JobsLogo,
      subscription: t('jobs'),
      path: '/jobs',
    },
    {
      image: ProfileLogo,
      subscription: t('profile'),
      path: '/profile',
    }
  ]  
  const [updateUser, updatePlatform, platform] = useInitDataStore((state: any) => [state.updateUser, state.updatePlatform, state.platform]);
  const updateJobs = useJobsStore((state: any) => state.updateJobs);
  const initData = useInitData();
  const lp = useLaunchParams();
  const userRows = useMemo(() => {
    return initData && initData.user ? initData.user : undefined;
  }, [initData]);
  if (userRows) {
    i18n.changeLanguage(userRows.languageCode)
  }

  postEvent('web_app_set_background_color', {color: '#ffffff'});
  postEvent('web_app_set_header_color', {color: '#ffffff'});
  const [isLoading, setIsLoading] = useState(false);
  const [swipeBehavior] = initSwipeBehavior();
  swipeBehavior.disableVerticalSwipe();
  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 1500)
  }, [])

  useEffect(() => {
    updateUser({...userRows, photoUrl: AvatarLogo})
    updatePlatform(lp.platform)
  }, [initData, lp])

  useEffect(() => {
    updateJobs(Jobs)
  }, [Jobs])

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Router location={location} navigator={reactNavigator}>
        <Routes>
          <Route path='/home' element={
            <div {...stylex.props(styles.wrapper, platform === 'ios' && styles.iosPadding)}>
              <HomePage />
              <NavBar items={navItems} />
            </div>
          }/>
          <Route path='/bookmarks' element={
            <div {...stylex.props(styles.wrapper, platform === 'ios' && styles.iosPadding)}>
              <BookmarksPage />
              <NavBar items={navItems} />
            </div>
          }/>
          <Route path='/jobs' element={
            <div {...stylex.props(styles.wrapper, platform === 'ios' && styles.iosPadding)}>
              <JobsPage />
              <NavBar items={navItems} />
            </div>
          }/>
          <Route path='/vacancy/:slug' element={
            <div {...stylex.props(styles.wrapper, platform === 'ios' && styles.iosPadding)}>
              <VacancyPage />
              <NavBar items={navItems} />
            </div>
          }/>
          <Route path='/profile' element={
            <div {...stylex.props(styles.wrapper, platform === 'ios' && styles.iosPadding)}>
              <ProfilePage />
              <NavBar items={navItems} />
            </div>
          }/>
          <Route path='/tasks' element={
            <div {...stylex.props(styles.wrapper, platform === 'ios' && styles.iosPadding)}>
              <TasksPage />
              <NavBar items={navItems} />
            </div>
          }/>
          <Route path='/onboard' element={<OnboardPage />}/>
          <Route path='*' element={
            <Navigate to='/home' />
          }/>
        </Routes>
      </Router>
    </>
  )
}