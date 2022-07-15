import * as React from 'react';
import {
    ArrayInput,
    BooleanInput,
    Datagrid,
    DateInput,
    DateTimeInput,
    FormDataConsumer,
    NumberInput,
    ReferenceInput,
    ReferenceManyField,
    required,
    SelectArrayInput,
    SelectInput,
    SimpleFormIterator,
    TextField,
    TextInput,
    useGetList,
} from 'react-admin';
import { InputAdornment, Grid } from '@mui/material';
import { Category, destructionType, explosiveUnitTypes, roles, User } from '../types';
import { RichTextInput } from 'ra-input-rich-text';
import ExplosiveUnitQuickPreviewButton from '../explosive-unit/ExplosiveUnitQuickPreviewButton';
import { useFormState } from 'react-final-form';

const optionRenderer = (user: User) => `${user.firstName} ${user.lastName}`;

export const DestructionEquipmentDetail = () => {

    return <Grid container columnSpacing={2}>
        <Grid item xs={12} sm={12}>
            <Grid container columnSpacing={2} alignItems="center">
                <Grid item xs={6} sm={9}>
                    <ReferenceInput label="bis.explosive_unit.one" source="explosiveUnitId" reference="explosive-unit">
                        <SelectInput optionText="name" fullWidth />
                    </ReferenceInput>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <FormDataConsumer>
                        {({ formData, ...rest }) => formData.explosiveUnitId &&
                            <ExplosiveUnitQuickPreviewButton objectId={formData.explosiveUnitId} />
                        }
                    </FormDataConsumer>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
            <ArrayInput source="additionalItems">
                <SimpleFormIterator>
                    <ReferenceInput label="bis.explosive_unit.one" source="categoryId" reference="categories">
                        <SelectInput optionText="name" label='bis.categories.one' fullWidth />
                    </ReferenceInput>
                    <FormDataConsumer>
                        {({
                            getSource,
                            scopedFormData,
                            ...rest
                        }) =>
                            scopedFormData && scopedFormData.categoryId ? (
                                <ReferenceInput
                                    source={getSource!('simpleEntityId')}
                                    reference="simple-entity"
                                    label='bis.simple_entity.one'
                                    filter={{ categoryId: scopedFormData.categoryId }}
                                >
                                    <SelectInput optionText="name" label='bis.simple_entity.one' fullWidth />
                                </ReferenceInput>
                            ) : null
                        }
                    </FormDataConsumer>
                </SimpleFormIterator>
            </ArrayInput>
        </Grid>
        <Grid item xs={12} sm={12}>
            <BooleanInput label="bis.destruction.two_stage" source="twoStage" />
        </Grid>
        <Grid item xs={12} sm={12}>
            <FormDataConsumer>
                {({ formData, ...rest }) => formData.twoStage &&
                    <Grid container columnSpacing={2}>
                        <Grid item xs={12} sm={12}>
                        <Grid container columnSpacing={2} alignItems="center">
                            <Grid item xs={6} sm={9}>
                                <ReferenceInput label="bis.explosive_unit.one" source="secondExplosiveUnitId" reference="explosive-unit">
                                    <SelectInput optionText="name" fullWidth />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <FormDataConsumer>
                                    {({ formData, ...rest }) => formData.secondExplosiveUnitId &&
                                        <ExplosiveUnitQuickPreviewButton objectId={formData.secondExplosiveUnitId} />
                                    }
                                </FormDataConsumer>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <ArrayInput source="secondAdditionalItems" fullWidth>
                                <SimpleFormIterator>
                                    <ReferenceInput label="bis.explosive_unit.one" source="secondCategoryId" reference="categories">
                                        <SelectInput optionText="name" label='bis.categories.one' fullWidth />
                                    </ReferenceInput>
                                    <FormDataConsumer>
                                        {({
                                            scopedFormData,
                                            getSource,
                                            ...rest
                                        }) =>
                                            scopedFormData && scopedFormData.secondCategoryId ? (
                                                <ReferenceInput
                                                    source={getSource!('simpleEntityId')}
                                                    reference="simple-entity"
                                                    label='bis.simple_entity.one'
                                                    filter={{ categoryId: scopedFormData.secondCategoryId }}
                                                >
                                                    <SelectInput optionText="name" label='bis.simple_entity.one' fullWidth />
                                                </ReferenceInput>
                                            ) : null
                                        }
                                    </FormDataConsumer>
                                </SimpleFormIterator>
                            </ArrayInput>
                        </Grid>
                    </Grid>
                }
            </FormDataConsumer>
        </Grid>
        <Grid item xs={12} sm={12}>
            <BooleanInput label="bis.destruction.go_or_no" source="goOrNo" />
        </Grid>
        <Grid item xs={12} sm={12}>
            <RichTextInput label="bis.destruction.recommendation" source="recommendations" />
        </Grid>

    </Grid>
};

const req = [required()];
