import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions, selectors } from '../../store/ui';
import { constants } from './common';

export default function () {
    const dispatch = useDispatch();
    const onClick = React.useCallback(() => {
        dispatch(actions.openDialog(constants.loginModal))
    }, [])

    return <div className="login">
        <div 
            onClick={ onClick }
            className="login__button"
        >
            Login
        </div>
    </div>;
}
