import * as React from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import './styles/index.scss';

export default function () {
    const [isFirstStep, setIsFirstStep] = React.useState(true);

    return (
        <div className="new-course-form">
            <h3 className="new-course-form__title">
                Новий курс
            </h3>
            {
                isFirstStep
                    ? <FirstStep cb={ (values: any) => {
                        setIsFirstStep(false)
                    }} />
                    : <SecondStep cb={ (values: any) => {
                        
                    }} />
            }
            
        </div>
    );
}
