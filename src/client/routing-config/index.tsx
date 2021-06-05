import * as React from 'react';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Registration from '../pages/Registration';
import UserPage from '../pages/UserPage';
import CourseListPage from '../pages/CourseListPage';
import NewCourseForm from '../pages/NewCourseForm';
import CoursePage from '../pages/CoursePage';

export const routingConfig = {
    user: {
        link: '/user',
        label: 'Users',
        page: <UserPage />,
    },
    home: {
        link: '/',
        label: 'Home',
        page: <HomePage />,
    },
    about: {
        link: '/about',
        label: 'About',
        page: <About />,
    },
    registration: {
        link: '/registration',
        label: 'Registration',
        page: <Registration />,
    },
    courseList: {
        link: '/courses',
        label: 'Course List',
        page: <CourseListPage />,
    },
    newCourseForm: {
        link: '/new-course',
        label: 'New Course',
        page: <NewCourseForm />,
    },
    coursePage: {
        link: '/course',
        label: '',
        page: <CoursePage />,
    },
};

type KeysOfRoutingConfig = keyof typeof routingConfig;
type RouterArrayType = readonly KeysOfRoutingConfig[];

export const routerArray: RouterArrayType = ['registration', 'coursePage', 'newCourseForm', 'courseList', 'about', 'user', 'home'];

export const navigationRouterArray: RouterArrayType = ['home', 'newCourseForm', 'user', 'courseList', 'about'];
