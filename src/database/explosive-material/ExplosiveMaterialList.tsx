import * as React from 'react';
import { useCallback } from 'react';
import { CreateButton, ExportButton, FilterButton, List, SearchInput, SelectInput, TopToolbar, useGetIdentity } from 'react-admin';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { Box, Drawer, useMediaQuery, Theme } from '@mui/material';

import reviewFilters from './reviewFilters';
import ReviewEdit from './BuildMaterialEdit';
import ExplosiveMaterialListDesktop from './ExplosiveMaterialListDesktop';
import BuildMaterialEdit from './BuildMaterialEdit';
import { CreateExplosiveMaterial } from './CreateExplosiveMaterial';
import { OnlyMineInput } from './OnlyMineInput';
import { ExplosiveMaterialShow } from './ExplosiveMaterialShow';


export const ExplosiveMaterialList = () => {
    const { identity } = useGetIdentity();
    const location = useLocation();
    const matchCreate = matchPath('/explosive-material/create', location.pathname);
    const matchShow = matchPath('/explosive-material/:id/show', location.pathname);
    if (!identity) return null;
    return (
        <>
            <List
                perPage={100}
                sort={{ field: 'creationDate', order: 'ASC' }}
                filters={dealFilters}
                // filterDefaultValues={{ sales_id: identity && identity?.id }}
                actions={<ExplosiveMaterialActions />}
                // pagination={false}
                component="div"
            >
                <ExplosiveMaterialListDesktop />
            </List>
            <CreateExplosiveMaterial open={!!matchCreate} />
            <ExplosiveMaterialShow open={!!matchShow} id={matchShow?.params.id} />
        </>
    );
};

const dealFilters = [
    <SearchInput source="q" alwaysOn />,
];

const ExplosiveMaterialActions = () => {
    return (
        <TopToolbar>
            <FilterButton />
            <ExportButton />
            <CreateButton
                variant="contained"
                label="bis.explosive_materials.new"
                sx={{ marginLeft: 2 }}
            />
        </TopToolbar>
    );
};

export default ExplosiveMaterialList;
