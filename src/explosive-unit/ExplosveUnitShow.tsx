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

import { Order, Customer, ExplosiveUnit, User } from '../types';
import Basket from './ExplosiveMaterialsSummary';
import Totals from './Totals';
import ExplosiveMaterialsSummary from './ExplosiveMaterialsSummary';
import dataProvider from '../dataProvider/dataProvider';
import BISImageList from '../database/common/BISImageList';
import DestructionRelatedAside from '../destruction/DestructionRelatedAside';

const ExplosiveUnitShow = () => (
    <Show title={<ExplosiveUnitTitle />} component="div">
        <ExplosiveUnitDetail />
    </Show>
);

const ExplosiveUnitTitle = () => {
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


const ExplosiveUnitDetail = () => {
    const translate = useTranslate();
    const record = useRecordContext<ExplosiveUnit>();
    const images = dataProvider.getImage('explosive-unit', record.id)
    return (
        <Show emptyWhileLoading aside={<DestructionRelatedAside target='explosiveUnitId'/>}>
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
                                        <Labeled source="creationDate" label="bis.common.creationDate">
                                            <DateField source="creationDate" />
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
                                        <Labeled source="explosiveUnitType" label="bis.common.type">
                                            <TextField source="explosiveUnitType" />
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
                            {translate('bis.common.summary')}
                        </Typography>
                        <div>
                            <Totals />
                        </div>
                        <Typography variant="h6" gutterBottom>
                            {translate('bis.common.photos')}
                        </Typography>
                        <div>
                            <BISImageList resource={'explosive-unit'}/>
                        </div>
                    </CardContent>
                    <Toolbar />
                </Card>
        </Form>
        </Show>
    );
};

export default ExplosiveUnitShow;
