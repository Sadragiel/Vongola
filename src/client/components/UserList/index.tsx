import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions, selectors } from '../../store/user';

export default () => {
    const userList = useSelector(selectors.getUsersList);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(actions.getUsers());
    }, []);

    return (
        <ul>
            {userList ? (
                userList.map((user) => (
                    <li key={user.login}>
                        <span> {user.login} </span>
                    </li>
                ))
            ) : (
                <span> EMPTY LIST LOL </span>
            )}
        </ul>
    );
};
