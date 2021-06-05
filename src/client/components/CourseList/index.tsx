import * as React from 'react';
import './styles/index.scss';

type Course = any;

export default function ({ courses } : { courses: Course[] }) {
    return (
        <ul className="course-list">
            {
                courses.map(el => (
                    <li className={`course-list__item ${!el.isActive
                        ? 'course-list__item--derp'
                        : ''}`}
                    >   
                        <a href="/course">
                            <img 
                                className="course-list__preview"
                                src={ el.ava }
                            />
                        </a>
                        <a href="/course">
                            <span className="course-list__title">
                                { el.name }
                            </span>
                        </a>
                        <ul className="course-list__tag-list">
                            {
                                el.tags.map((tag: string) => (
                                    <li className="course-list__tag">
                                        {tag}
                                    </li>
                                ))
                            }
                        </ul>
                        <p className="course-list__short-desc">
                            { el.shortDesc } 
                        </p>
                    </li>
                ))
            }
        </ul>
    );
}
