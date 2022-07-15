import * as React from 'react';
import { useCallback } from 'react';
import { CreateButton, ExportButton, FilterButton, List, SearchInput, SelectInput, TopToolbar, useGetIdentity } from 'react-admin';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { Box, Drawer, useMediaQuery, Theme } from '@mui/material';

import reviewFilters from './reviewFilters';
import ReviewEdit from './BuildMaterialEdit';
import BuildMaterialListDesktop from './BuildMaterialListDesktop';
import BuildMaterialEdit from './BuildMaterialEdit';
import { CreateBuildMaterial } from './CreateBuildMaterial';
import { OnlyMineInput } from './OnlyMineInput';
import { BuildMaterialShow } from './BuildMaterialShow';


export const BuildMaterialList = () => {
    const { identity } = useGetIdentity();
    const location = useLocation();
    const matchShow = matchPath('/build-material/:id/show', location.pathname);
    if (!identity) return null;
    return (
        <>
            <List
                perPage={100}
                sort={{ field: 'creationDate', order: 'ASC' }}
                filters={dealFilters}
                // filterDefaultValues={{ sales_id: identity && identity?.id }}
                actions={<BuildMaterialActions />}
                // pagination={false}
                component="div"
            >
                <BuildMaterialListDesktop />
            </List>
            <BuildMaterialShow open={!!matchShow} id={matchShow?.params.id} />
        </>
    );
};

const dealFilters = [
    <SearchInput source="q" alwaysOn />,
];

const BuildMaterialActions = () => {
    return (
        <TopToolbar>
            <FilterButton />
            <ExportButton />
            <CreateButton
                variant="contained"
                label="bis.build_materials.new"
                sx={{ marginLeft: 2 }}
            />
        </TopToolbar>
    );
};

export default BuildMaterialList;
