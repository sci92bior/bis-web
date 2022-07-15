import * as React from 'react';
import {
    BooleanInput,
    DateField,
    Edit,
    Form,
    FunctionField,
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

import { Order, Customer, ExplosiveUnit, User, Obstacle } from '../types';
import Basket from './ObstacleSummary';
import ExplosiveMaterialsSummary from './ObstacleSummary';
import dataProvider from '../dataProvider/dataProvider';
import BISImageList from '../database/common/BISImageList';
import UserDetail from '../database/common/UserDetail';
import DestructionRelatedAside from '../destruction/DestructionRelatedAside';

const ObstacleShow = () => (
    <Show title={<ObstacleTitle />} component="div">
        <ObstacleDetail />
    </Show>
);

const ObstacleTitle = () => {
    const translate = useTranslate();
    const record = useRecordContext<Obstacle>();
    return record ? (
        <span>
            {translate("bis.obstacle.one")}
        </span>
    ) : null;
};


const Spacer = () => <Box m={1}>&nbsp;</Box>;


const ObstacleDetail = () => {
    const translate = useTranslate();
    const record = useRecordContext<Obstacle>();
    const images = dataProvider.getImage('obstacle', record.id)
    return (
        <Show aside={<DestructionRelatedAside target='obstacleId'/>}>
        <Form>
                <Card>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="h6" gutterBottom>
                                <b>{record.name}</b>
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Labeled source="creationDate" label="bis.common.creationDate">
                                            <DateField source="creationDate" />
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Labeled source="createdBy" label="bis.common.createdBy">
                                        <ReferenceField
                                    source="createdBy"
                                    reference="user"
                                >
                                    <UserDetail />
                                </ReferenceField>
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Labeled source="obstacleType" label="bis.common.type">
                                            <TextField source="obstacleType" />
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Labeled source="thickness" label="bis.obstacle.thickness">
                                        <FunctionField label="thickness"  render={
                                                (record: { thickness: any; }) => `${record.thickness} cm`} />
                                        </Labeled>
                                    </Grid>
                                    
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Labeled source="description" label="bis.common.description">
                                        <RichTextField source="description" />
                                    </Labeled>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Spacer />

                        <Typography variant="h6" gutterBottom>
                            {translate('bis.common.composition')}
                        </Typography>
                        <div>
                            <ExplosiveMaterialsSummary />
                        </div>
                        <Spacer />

            
                        <Typography variant="h6" gutterBottom>
                            {translate('bis.common.photos')}
                        </Typography>
                        <div>
                            <BISImageList resource={'obstacle'}/>
                        </div>
                    </CardContent>
                    <Toolbar />
                </Card>
        </Form>
        </Show>
    );
};

export default ObstacleShow;
