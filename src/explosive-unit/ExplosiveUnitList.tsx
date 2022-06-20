import * as React from 'react';
import { Box, Chip, useMediaQuery, Theme } from '@mui/material';
import {
    CreateButton,
    ExportButton,
    FilterButton,
    FilterForm,
    FilterContext,
    InputProps,
    ListBase,
    NumberInput,
    Pagination,
    ReferenceInput,
    SearchInput,
    SelectInput,
    SortButton,
    Title,
    TopToolbar,
    useTranslate,
    useGetResourceLabel,
} from 'react-admin';

import ImageList from './GridList';
import Aside from './Aside';

const ExplosiveUnitList = () => {
    const getResourceLabel = useGetResourceLabel();
    const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
    return (
        <ListBase perPage={24} sort={{ field: 'name', order: 'ASC' }}>
            <Title defaultTitle={"bis.explosive_unit.title"} />
            <FilterContext.Provider value={explosiveUnitFilter}>
                <ListActions isSmall={isSmall} />
                {isSmall && (
                    <Box m={1}>
                        <FilterForm />
                    </Box>
                )}
            </FilterContext.Provider>
            <Box display="flex">
                <Aside />
                <Box width={isSmall ? 'auto' : 'calc(100% - 16em)'}>
                    <ImageList />
                    <Pagination rowsPerPageOptions={[12, 24, 48, 72]} />
                </Box>
            </Box>
        </ListBase>
    );
};


export const explosiveUnitFilter = [
    <SearchInput source="q" alwaysOn />,
    
];

const ListActions = ({ isSmall }: any) => (
    <TopToolbar sx={{ minHeight: { sm: 56 } }}>
        {isSmall && <FilterButton />}
        <SortButton fields={['name', 'newTnt']} />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

export default ExplosiveUnitList;
