import * as React from 'react';
import {
    BooleanField,
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

import { Order, Customer, ExplosiveUnit, User, Destruction } from '../types';
import dataProvider from '../dataProvider/dataProvider';
import BISImageList from '../database/common/BISImageList';
import Aside from './Aside';
import ExplosiveUnitField from '../explosive-unit/ExplosiveUnitField';
import ExplosiveUnitReferenceField from '../explosive-unit/ExplosiveUnitReferenceField';
import ObstacleReferenceField from '../obstacle/ObstacleReferenceField';
import DestructionImagesList from '../database/common/DestructionImages';

const DestructionShow = () => (
    <Show title={<ExplosiveUnitTitle />} component="div" aside={<Aside />}>
        <DestructionDetail />
    </Show>
);

const ExplosiveUnitTitle = () => {
    const translate = useTranslate();
    const record = useRecordContext<ExplosiveUnit>();
    return record ? (
        <span>
            {`# ${record.id}`}
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


const DestructionDetail = () => {
    const translate = useTranslate();
    const record = useRecordContext<Destruction>();
    //const images = dataProvider.getImage('explosive-unit', record.id)
    return (
        <Form>
            <Box>
                <Card>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="h6" gutterBottom>
                                <b>{record.name}</b>
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Labeled source="date" label="bis.common.creationDate">
                                            <DateField source="date" />
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Labeled source="performerId" label="bis.common.performer">
                                        <ReferenceField
                                    source="performerId"
                                    reference="user"
                                >
                                    <UserDetail />
                                </ReferenceField>
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Labeled source="destructionType" label="bis.common.type">
                                            <TextField source="destructionType" />
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Labeled source="place" label="bis.common.localization">
                                            <TextField source="place" />
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Labeled source="go" label="bis.destruction.go_or_no">
                                            <BooleanField source="go" />
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Labeled source="twoStage" label="bis.destruction.two_stage">
                                            <BooleanField source="twoStage" />
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

                        <Typography variant="h6" gutterBottom>
                            {translate('bis.obstacle.one')}
                        </Typography>
                        <div>
                            <ObstacleReferenceField />
                        </div>

                        <Typography variant="h6" gutterBottom>
                            {translate('bis.destruction.first_stage')}
                        </Typography>
                        <div>
                            <ExplosiveUnitReferenceField />
                        </div>
                        
                        <Typography variant="h6" gutterBottom>
                            {translate('bis.destruction.recommendation')}
                        </Typography>
                        <div>
                            <TextField source='recommendations' />
                        </div>
    
                        <div>
                            <DestructionImagesList resource={'destruction'}/>
                        </div>
                    </CardContent>
                    <Toolbar />
                </Card>
            </Box>
        </Form>
    );
};

export default DestructionShow;
