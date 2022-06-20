import * as React from 'react';
import { ReferenceField, ReferenceFieldProps } from 'react-admin';

import FullNameField from './FullNameField';

const CustomerReferenceField = (
    props: Omit<ReferenceFieldProps, 'reference' | 'children' | 'source'> & {
        source?: string;
    }
) => (
    <ReferenceField source="performerId" reference="user" {...props}>
        <FullNameField />
    </ReferenceField>
);

CustomerReferenceField.defaultProps = {
    source: 'performerId',
};

export default CustomerReferenceField;
