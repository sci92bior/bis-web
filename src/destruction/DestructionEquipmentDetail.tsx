import * as React from 'react';
import {
    BooleanInput,
    DateTimeInput,
    FormDataConsumer,
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

export const DestructionEquipmentDetail = () => (
    <Grid container columnSpacing={2}>
        <Grid item xs={12} sm={6}>
        <ReferenceInput label="bis.explosive_unit.one" source="explosiveUnitId" reference="explosive-unit">
            <SelectInput optionText="name" fullWidth/>
        </ReferenceInput>
        </Grid>
        <Grid item xs={12} sm={6}>
        <ReferenceInput label="bis.guns.one" source="gunId" reference="explosive-unit">
            <SelectInput optionText="name" fullWidth/>
        </ReferenceInput>
        </Grid>
        <Grid item xs={12} sm={6}>
        <ReferenceInput label="bis.tools.one" source="toolId" reference="explosive-unit">
            <SelectInput optionText="name" fullWidth/>
        </ReferenceInput>
        </Grid>
        <Grid item xs={12} sm={12}>
        <BooleanInput label="bis.destruction.two_stage" source="twoStage" />
        </Grid>
        <Grid item xs={12} sm={12}>
            <FormDataConsumer>
                 {({ formData, ...rest }) => formData.twoStage &&
                 <Grid container columnSpacing={2}>
                     <Grid item xs={12} sm={6}>
                    <ReferenceInput label="bis.explosive_unit.second" source="explosiveUnitId" reference="explosive-unit">
                        <SelectInput optionText="name" fullWidth/>
                    </ReferenceInput>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <ReferenceInput label="bis.guns.second" source="gunId" reference="explosive-unit">
                        <SelectInput optionText="name" fullWidth/>
                    </ReferenceInput>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <ReferenceInput label="bis.tools.second" source="toolId" reference="explosive-unit">
                        <SelectInput optionText="name" fullWidth/>
                    </ReferenceInput>
                    </Grid>
                 </Grid>
                 
                      
                 }
             </FormDataConsumer>
             </Grid>
        <Grid item xs={12} sm={12}>
        <BooleanInput label="bis.destruction.go_or_no" source="goOrNo" />
        </Grid>
        <Grid item xs={12} sm={12}>
        <RichTextInput label="bis.destruction.recommendation" source="reccomendations" />
        </Grid>
        
    </Grid>
);

const req = [required()];
