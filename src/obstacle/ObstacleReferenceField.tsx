import * as React from 'react';
import { ReferenceField, ReferenceFieldProps } from 'react-admin';
import ObstacleField from './ObstacleField';


const ObstacleReferenceField = (
    props: Omit<ReferenceFieldProps, 'reference' | 'children' | 'source'> & {
        source?: string;
    }
) => (
    <ReferenceField source="obstacleId" reference="obstacle" link="show" {...props}>
        <ObstacleField />
    </ReferenceField>
);

ObstacleReferenceField.defaultProps = {
    source: 'obstacleId',
};

export default ObstacleReferenceField;
