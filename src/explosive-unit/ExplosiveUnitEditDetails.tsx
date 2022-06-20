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
import { explosiveUnitTypes, roles } from '../types';
import { RichTextInput } from 'ra-input-rich-text';

export const ExplosiveUnitEditDetail = () => (
    <Grid container columnSpacing={2}>
        <Grid item xs={12} sm={12}>
            <TextInput source="name" fullWidth validate={req} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <SelectInput choices={explosiveUnitTypes} label="bis.common.type" source='explosiveUnitType' fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <NumberInput
                source="makeTime"
                min="0"
                label="bis.explosive_unit.makeTime"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">sec</InputAdornment>
                    ),
                }}
                validate={req}
                fullWidth
            />
        </Grid>
        <Grid item >
        <RichTextInput source="description" label="" validate={req} />
        </Grid>
    </Grid>
);

const req = [required()];
