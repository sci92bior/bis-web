import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material';

import {
    Datagrid,
    Edit,
    EditButton,
    NumberField,
    Labeled,
    ReferenceManyField,
    SimpleForm,
    TextInput,
    useTranslate,
    useRecordContext,
    TextField,
    Show,
    Form,
    DateField,
    ReferenceField,
    ArrayField,
    useNotify,
    FunctionField,
} from 'react-admin';
import { matchPath, useLocation } from 'react-router';
import EntityAvatarField from '../database/common/EntityAvatarField';
import UserDetail from '../database/common/UserDetail';
import { Category, Course, Topic } from '../types';
import AddCourseMarkDialog from './AddCourseMarkDialog';
import rowStyle from './rowStyle';
import UsersRelatedAside from './UsersRelatedAside';
import { useMutation } from 'react-query';
import dataProvider from '../dataProvider/dataProvider';
import React from 'react';
import TopicsRelated from './TopicsRelated';
import CourseMarkAside from './Aside';


const CourseShow = () => {
    return (<><Show title={<CourseTitle />} aside={<CourseMarkAside />}>
        <CourseDetail />
    </Show></>)
};


const CourseDetail = () => {
    const record: Course = useRecordContext();
    const translate = useTranslate();

    return (<>
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
                                    <Labeled source="startDate" label="bis.course.start_time">
                                        <DateField source="startDate" />
                                    </Labeled>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Labeled source="endDate" label="bis.course.end_time">
                                        <DateField source="endDate" />
                                    </Labeled>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Labeled source="instructorId" label="bis.course.instructor">
                                        <ReferenceField
                                            source="instructorId"
                                            reference="user"
                                        >
                                            <UserDetail />
                                        </ReferenceField>
                                    </Labeled>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={6}>
                                <TopicsRelated />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <UsersRelatedAside />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Form>

    </>
    )

};

const CourseTitle = () => {
    const record = useRecordContext<Course>();
    const translate = useTranslate();

    return record ? (
        <span>
            {record.name}
        </span>
    ) : null;
};

export default CourseShow;
