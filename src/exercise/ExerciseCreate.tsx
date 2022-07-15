import { Dialog, Grid } from "@mui/material";
import { RichTextInput } from "ra-input-rich-text";
import { useState } from "react";
import { Create, SimpleForm, ImageInput, ImageField, TextInput, NumberInput, SelectInput, AutocompleteInput, ReferenceInput, required, useDataProvider, useRedirect, SaveButton, Toolbar, DateInput, SelectArrayInput, ReferenceArrayInput, ArrayInput, SimpleFormIterator, DateTimeInput, FormDataConsumer, BooleanInput, FormTab, TabbedForm } from "react-admin";
import ExplosiveUnitQuickPreviewButton from "../explosive-unit/ExplosiveUnitQuickPreviewButton";
import { Topic, User } from "../types";
import ExerciseExplosiveUnits from "./ExerciseExplosiveUnits";

const validateRequired = required();

const optionRenderer = (topic: Topic) => `${topic.name}`;

export const ExerciseCreate = () => {

    return (
        <Create>
             <TabbedForm >
                <FormTab
                    label="bis.common.general"
                    sx={{ maxWidth: '40em' }}
                >
                    <Grid container columnSpacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Grid item xs={12} sm={12}>
                            <TextInput source="name" label="bis.common.name" />
                        </Grid>
                        <Grid item xs={6} sm={6}><DateTimeInput source="startDate" label="bis.course.start_time" /></Grid>
                        <Grid item xs={6} sm={6}><DateTimeInput source="endDate" label="bis.course.end_time" /></Grid>

                        <Grid item xs={6} sm={6}>
                            <ReferenceInput label="bis.course.name" source="courseId" reference="course">
                                <SelectInput optionText="name" />
                            </ReferenceInput>
                        </Grid>
                        <Grid item xs={3} sm={3}>
                            <FormDataConsumer>
                                {({ formData, ...rest }) => formData.courseId &&
                                    <ReferenceInput
                                        source='topicId'
                                        reference="topic"
                                        label='bis.course.topic'
                                        filter={{ courseId: formData.courseId }}
                                    >
                                        <SelectInput optionText="name" label='bis.course.topic' />

                                    </ReferenceInput>
                                }
                            </FormDataConsumer>
                        </Grid>
                    </Grid>
                </Grid>
                </FormTab>
                <FormTab
                    label="bis.explosive_unit.title"
                    sx={{ maxWidth: '40em' }}
                >
                    <ExerciseExplosiveUnits />
                </FormTab>
                <FormTab
                    label="bis.simple_entity.title"
                    sx={{ maxWidth: '40em' }}
                >
                    <Grid item xs={12} sm={12}>
                        <ArrayInput source="itemQuantities">
                            <SimpleFormIterator>
                                <ReferenceInput label="bis.explosive_unit.one" source="categoryId" reference="categories">
                                    <SelectInput optionText="name" label='bis.categories.one' />
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
                                                <SelectInput optionText="name" label='bis.simple_entity.one' />

                                            </ReferenceInput>
                                        ) : null
                                    }
                                </FormDataConsumer>
                                <NumberInput source="quantity" />
                            </SimpleFormIterator>
                        </ArrayInput>
                    </Grid>
                </FormTab>
                </TabbedForm>
        </Create>
    );
};