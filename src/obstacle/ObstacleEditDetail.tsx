import * as React from 'react';
import {
    NumberInput,
    ReferenceInput,
    required,
    SelectArrayInput,
    SelectInput,
    TextInput,
} from 'react-admin';
import { InputAdornment, Grid } from '@mui/material';
import { explosiveUnitTypes, obstacleType, roles } from '../types';
import { RichTextInput } from 'ra-input-rich-text';

export const ObstacleEditDetail = () => (
    <Grid container columnSpacing={2}>
        <Grid item xs={12} sm={12}>
            <TextInput source="name" fullWidth validate={req} />
        </Grid>
        <Grid item xs={12} sm={12}>
            <SelectInput choices={obstacleType} label="bis.common.type" source='obstacleType' fullWidth/>
        </Grid>
        <Grid item >
        <RichTextInput source="description"  validate={req}/>
        </Grid>
    </Grid>
);

const req = [required()];

export default ObstacleEditDetail;