import * as React from 'react';
import { ReferenceField, ReferenceFieldProps } from 'react-admin';
import ExplosiveUnitField from './ExplosiveUnitField';


const ExplosiveUnitReferenceField = (
    props: Omit<ReferenceFieldProps, 'reference' | 'children' | 'source'> & {
        source?: string;
    }
) => (
    <ReferenceField source="explosiveUnitId" link="show" reference="explosive-unit" {...props}>
        <ExplosiveUnitField />
    </ReferenceField>
);

ExplosiveUnitReferenceField.defaultProps = {
    source: 'explosiveUnitId',
};

export default ExplosiveUnitReferenceField;
