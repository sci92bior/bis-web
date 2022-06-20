import * as React from 'react';
import { Stack, Chip } from '@mui/material';
import { FieldProps, useTranslate, useRecordContext } from 'react-admin';
import segments from '../segments/data';
import { User } from '../types';

const segmentsById = segments.reduce((acc, segment) => {
    acc[segment.id] = segment;
    return acc;
}, {} as { [key: string]: any });

const SegmentsField = (props: FieldProps) => {
    const record = useRecordContext<User>();
    if (!record || !record.roles) {
        return null;
    }
    return (
        <Stack direction="row" gap={1} flexWrap="wrap">
            {record.roles.map(role => (
                <Chip
                    size="small"
                    key={role}
                    label={role}
                />
            ))}
        </Stack>
    );
};

export default SegmentsField;
