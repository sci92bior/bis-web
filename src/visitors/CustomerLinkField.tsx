import * as React from 'react';
import { Link, FieldProps, useRecordContext } from 'react-admin';

import FullNameField from './FullNameField';
import { Customer, User } from '../types';

const UserLinkField = (props: FieldProps<User>) => {
    const record = useRecordContext<User>();
    if (!record) {
        return null;
    }
    return (
        <Link to={`/user/${record.id}`}>
            <FullNameField />
        </Link>
    );
};

UserLinkField.defaultProps = {
    source: 'performerId',
};

export default UserLinkField;
