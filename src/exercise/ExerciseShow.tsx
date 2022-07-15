import * as React from 'react';
import {
    BooleanInput,
    DateField,
    Edit,
    Form,
    Labeled,
    ReferenceField,
    RichTextField,
    SelectInput,
    Show,
    TextField,
    Toolbar,
    useRecordContext,
    useTranslate,
} from 'react-admin';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Box, Grid, Typography, Link } from '@mui/material';

import { Order, Customer, ExplosiveUnit, User, Exercise } from '../types';
import Basket from './ExerciseItemsSummary';
import ExerciseItemsSummary from './ExerciseItemsSummary';
import dataProvider from '../dataProvider/dataProvider';
import BISImageList from '../database/common/BISImageList';
import DestructionRelatedAside from '../destruction/DestructionRelatedAside';

const ExerciseShow = () => (
    <Show title={<ExerciseTitle />} component="div">
        <ExerciseDetail />
    </Show>
);

const ExerciseTitle = () => {
    const translate = useTranslate();
    const record = useRecordContext<ExplosiveUnit>();
    return record ? (
        <span>
            {translate("bis.explosive_unit.one")}
        </span>
    ) : null;
};

const UserDetail = () => {
    const record = useRecordContext<User>();
    return (
        <div>
            <Typography>
                {record?.firstName} {record?.lastName}
            </Typography>
        </div>
    );
};

const Spacer = () => <Box m={1}>&nbsp;</Box>;


const ExerciseDetail = () => {
    const translate = useTranslate();
    const record = useRecordContext<Exercise>();
    return (
        <Show emptyWhileLoading >
            <Form>
                <Card>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="h6" gutterBottom>
                                    <b>{record.name}</b>
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Labeled source="startDate" label="bis.course.startDate">
                                            <DateField source="startDate" />
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Labeled source="endDate" label="bis.course.endDate">
                                            <DateField source="endDate" />
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Labeled source="createdBy" label="bis.common.createdBy">
                                            <ReferenceField
                                                source="createdBy"
                                                reference="user"
                                            >
                                                <UserDetail />
                                            </ReferenceField>
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Labeled source="topicId" label="bis.common.createdBy">
                                            <ReferenceField
                                                source="topicId"
                                                reference="topic"
                                            >
                                                <TextField source='name' />
                                            </ReferenceField>
                                        </Labeled>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Spacer />

                        <Typography variant="h6" gutterBottom>
                            {translate('bis.common.composition')}
                        </Typography>
                        <div>
                            <ExerciseItemsSummary />
                        </div>
                        <Spacer />
                    </CardContent>
                    <Toolbar />
                </Card>
            </Form>
        </Show>
    );
};

export default ExerciseShow;
