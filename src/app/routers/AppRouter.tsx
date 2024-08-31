import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { HomePage } from "../../pages/home-page";
import { JobsPage } from "../../pages/jobs-page";
import { NavBar } from "../../widgets/nav-bar";
import HomeLogo from '../../shared/images/for-button-with-subscription/homeLogo.svg';
import BookmarkLogo from '../../shared/images/for-button-with-subscription/bookmarkLogo.svg';
import JobsLogo from '../../shared/images/for-button-with-subscription/jobsLogo.svg';
import ProfileLogo from '../../shared/images/for-button-with-subscription/profileLogo.svg';
import { Loading } from "../../widgets/loading";
import { postEvent } from "@telegram-apps/sdk";

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
  const router = createBrowserRouter([
    {
      path: '/home',
      element: (
      <>
        <HomePage />
        <NavBar items={navItems} />
      </>
      ),
    },
    {
      path: '/bookmark',
      element: (
        <>
          <HomePage />
          <NavBar items={navItems} />
        </>
      ),
    },
    {
      path: '/jobs',
      element: (
        <>
          <JobsPage />
          <NavBar items={navItems} />
        </>
      ),
    },
    {
      path: '/profile',
      element: (
        <>
          <HomePage />
          <NavBar items={navItems} />
        </>
      ),
    },
    {
      path: '/*',
      element: (
        <Navigate to="/home" />
      ),
    }
  ]);

  return (
    <>
      <Loading />
      <RouterProvider router={router} />
    </>
  )
}