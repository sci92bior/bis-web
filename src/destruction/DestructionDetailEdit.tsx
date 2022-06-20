import * as React from 'react';
import {
    DateTimeInput,
    NumberInput,
    ReferenceInput,
    required,
    SelectArrayInput,
    SelectInput,
    TextInput,
} from 'react-admin';
import { InputAdornment, Grid } from '@mui/material';
import { destructionType, explosiveUnitTypes, roles, User } from '../types';
import { RichTextInput } from 'ra-input-rich-text';

const optionRenderer = (user: User) => `${user.firstName} ${user.lastName}`;

export const DestructionEditDetail = () => (
    <Grid container columnSpacing={2}>
        <Grid item xs={12} sm={6}>
        <ReferenceInput label="bis.common.performer" source="performerId" reference="user">
            <SelectInput optionText={optionRenderer} fullWidth/>
        </ReferenceInput>
        </Grid>
        <Grid item xs={12} sm={6}>
            <SelectInput choices={destructionType} label="bis.common.type" source='destructionType' fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}><TextInput source="localization" fullWidth/></Grid>
        <Grid item xs={12} sm={6}><DateTimeInput source="date" fullWidth/></Grid>
        <Grid item xs={12} sm={12}>
        <ReferenceInput label="bis.obstacle.title" source="obstacleId" reference="obstacle">
            <SelectInput optionText="name" fullWidth/>
        </ReferenceInput>
        </Grid>
        <Grid item >
        <RichTextInput source="description" label="" validate={req} />
        </Grid>
    </Grid>
);

const req = [required()];
