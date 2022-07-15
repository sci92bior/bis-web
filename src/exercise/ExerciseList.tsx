import * as React from 'react';
import { useCallback } from 'react';
import { TextField, ExportButton, FilterButton, List, SearchInput, SelectInput, TopToolbar, useGetIdentity, BooleanField, Datagrid, FunctionField, NumberField, ReferenceField } from 'react-admin';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { Box, Drawer, useMediaQuery, Theme } from '@mui/material';
import EntityAvatarField from '../database/common/EntityAvatarField';
import { User } from '../types';
import ExerciseCalendar from './ExerciseCalendar';




export const ExerciseList = () => {

    return (
        <>
            <List
                perPage={15}
                sort={{ field: 'startDate', order: 'ASC' }}
                //filters={dealFilters}
                // filterDefaultValues={{ sales_id: identity && identity?.id }}
                //actions={<BuildMaterialActions />}
                // pagination={false}
                component="div"
                emptyWhileLoading
            >
                <>
                    <ExerciseCalendar /> 
                    <Datagrid
                        rowClick="show"
                        optimized
                        sx={{
                            '& .RaDatagrid-thead': {
                                borderLeftColor: 'transparent',
                                borderLeftWidth: 5,
                                borderLeftStyle: 'solid',
                            },
                            '& .column-comment': {
                                maxWidth: '18em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            },
                        }}
                    >
                        <TextField source="name" label="bis.common.name" />
                        <TextField source="startDate" label="bis.course.start_time" />
                        <TextField source="endDate" label="bis.course.end_time" />
                        <ReferenceField label="bis.common.createdBy" source="createdBy" reference="user">
                            <FunctionField label="bis.common.name" render={(record: User) => `${record.firstName} ${record.lastName}`} />
                        </ReferenceField>
                    </Datagrid>
                </>
            </List>
        </>
    );
};


export default ExerciseList;
