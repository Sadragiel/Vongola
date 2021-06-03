import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions, selectors } from '../../../store/ui';
import './styles/index.scss';

type PropsType = {
    name: string,
    modifier?: string,
    title: string,
    allowBgClick?: boolean,
    onClose?: () => void,
    children: React.ReactNode,
}

export default function (props: PropsType) {
    const activeDialogName = useSelector(selectors.getActiveDialog);
    const dispatch = useDispatch();
    const [isOpen, setState] = useState(props.name === activeDialogName);
    useEffect(() => {
        setState(props.name === activeDialogName);
    }, [activeDialogName, props.name]);

    const onClose = () => {
        if (props.onClose)
            props.onClose();
        dispatch(actions.closeDialog());
    }

    const modifiers = `${isOpen ? 'dialog--opened' : ''} ${ props.modifier }`

    return (
        <div className={`dialog ${ modifiers }`}>
            <div 
                onClick={() => !props.allowBgClick && onClose()}
                className="dialog__bg"
            ></div>
            <dialog open={isOpen} className="dialog__window">
                <header className="dialog__header">
                    <h5 className="dialog__title">
                        {props.title}
                    </h5>
                    <i
                        className="dialog__close"
                        onClick={ onClose }
                    />  
                </header>

                <div className="dialog__content">
                    { props.children }
                </div>
            </dialog>
        </div>
    );
}
