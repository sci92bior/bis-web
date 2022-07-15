import * as React from 'react';
import { useCallback } from 'react';
import { CreateButton, ExportButton, FilterButton, List, SearchInput, SelectInput, TopToolbar, useGetIdentity } from 'react-admin';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { Box, Drawer, useMediaQuery, Theme } from '@mui/material';

import SimpleEntityListDesktop from './SimpleEntityListDesktop';
import SimpleEntityAside from './SImpleEntityAside';


export const SimpleEntityList = () => {
    const { identity } = useGetIdentity();
    const location = useLocation();
    const matchShow = matchPath('/explosive-material/:id/show', location.pathname);
    if (!identity) return null;
    return (
        <>
            <List
                perPage={100}
                sort={{ field: 'creationDate', order: 'ASC' }}
                actions={<ExplosiveMaterialActions />}
                component="div"
                aside={<SimpleEntityAside />}
            >
                <SimpleEntityListDesktop />
            </List>
            {/* <ExplosiveMaterialShow open={!!matchShow} id={matchShow?.params.id} /> */}
        </>
    );
};


const ExplosiveMaterialActions = () => {
    return (
        <TopToolbar>
            <ExportButton />
            <CreateButton
                variant="contained"
                label="bis.categories.new"
                sx={{ marginLeft: 2 }}
            />
        </TopToolbar>
    );
};

export default SimpleEntityList;
