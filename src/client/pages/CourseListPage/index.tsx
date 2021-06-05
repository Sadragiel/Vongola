import * as React from 'react';
import * as yup from "yup";
import { Field, useFormik, FormikProvider } from 'formik';
import InputField from '../../components/connected/form/InputField';
import CourseList from '../../components/CourseList';
import './styles/index.scss';
import { Button } from '@material-ui/core';

const SearchValidation = yup.object().shape({
    query: yup
      .string()
      .required(),
});

const tags = [
    'programming',
    'biology',
    'math',
]

const courses = [
    {
        name: 'Основи web-програмування - Частина 2',
        shortDesc: 'Хостинг веб додатків з базою даних, створення динамічних веб сайтів.',
        tags: ['proggramming'],
        ava: 'https://progbase.herokuapp.com/images/wpb.png',
        isActive: true,
    },
    {
        name: 'Основи web-програмування - Частина 2',
        shortDesc: 'Хостинг веб додатків з базою даних, створення динамічних веб сайтів.',
        tags: ['proggramming'],
        ava: 'https://progbase.herokuapp.com/images/wpb.png',
        isActive: true,
    },
    {
        name: 'Основи web-програмування - Частина 2',
        shortDesc: 'Хостинг веб додатків з базою даних, створення динамічних веб сайтів.',
        tags: ['proggramming'],
        ava: 'https://progbase.herokuapp.com/images/wpb.png',
        isActive: true,
    },
    {
        name: 'Основи web-програмування - Частина 2',
        shortDesc: 'Хостинг веб додатків з базою даних, створення динамічних веб сайтів.',
        tags: ['biology'],
        ava: 'https://progbase.herokuapp.com/images/wpb.png',
        isActive: false,
    },
    {
        name: 'Основи web-програмування - Частина 2',
        shortDesc: 'Хостинг веб додатків з базою даних, створення динамічних веб сайтів.',
        tags: ['biology'],
        ava: 'https://progbase.herokuapp.com/images/wpb.png',
        isActive: false,
    }
];

export default function () {
    const filterFormik = useFormik({
        initialValues: {
            tags: '',
            activity: '',
        },
        onSubmit: () => {
            // todo
        }
    });

    const searchFormik = useFormik({
        initialValues: {
            query: '',
        },
        validationSchema: SearchValidation,
        onSubmit: () => {
            // todo
        }
    });


    return (
        <div className="course-list-page">
            <div className="course-list-page__row">
                <aside className="course-list-page__aside">
                    <FormikProvider value={filterFormik}>
                        <form onSubmit={filterFormik.handleSubmit} className="course-list-page__filter-form">
                            <div className="course-list-page__filter-title" id="checkbox-group">Активність</div>
                            <div 
                                className="course-list-page__filter-group" 
                                role="group" 
                                aria-labelledby="checkbox-group"
                            >
                                <label className="course-list-page__filter-item">
                                    <Field type="checkbox" name="activity" value="active" className="course-list-page__check-box" />
                                    Активні
                                </label>
                                <label className="course-list-page__filter-item">
                                    <Field type="checkbox" name="activity" value="notactive" className="course-list-page__check-box" />
                                    Неактивні
                                </label>
                            </div>

                            <div className="course-list-page__filter-title" id="checkbox-group">Tags</div>
                            <div 
                                className="course-list-page__filter-group" 
                                role="group" 
                                aria-labelledby="checkbox-group"
                            >
                                {
                                    tags.map(el => (
                                        <label className="course-list-page__filter-item">
                                            <Field type="checkbox" name="tags" value={el} className="course-list-page__check-box" />
                                            {el}
                                        </label>
                                    ))
                                }
                            </div>

                            <Button
                                variant="contained"
                                color="primary"
                                type='submit'
                                className="course-list-page__filter-button"
                            > Filter </Button>
                        </form>
                    </FormikProvider>
                </aside>
                <main className="course-list-page__content">
                    <FormikProvider value={searchFormik}>
                        <form onSubmit={searchFormik.handleSubmit} className="course-list-page__search-form">
                            <InputField
                                classname="course-list-page"
                                name="query" 
                                type="text"
                                label="Пошук:"
                                formik={searchFormik}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type='submit'
                                className="course-list-page__search-button"
                            > Search </Button>
                        </form>
                    </FormikProvider>
                    <CourseList 
                        courses={courses}
                    />

                    {
                        // TODO PAGINATION HERE LOL
                    }
                </main>
            </div>
        
        </div>
    );
}