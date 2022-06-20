import * as React from 'react';
import inflection from 'inflection';
import { Card, CardContent } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOfferOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {
    FilterList,
    FilterListItem,
    FilterLiveSearch,
    useGetList,
} from 'react-admin';

import { Category, explosiveUnitTypes, obstacleType } from '../types';

const Aside = () => {
    const { data } = useGetList<Category>('categories', {
        pagination: { page: 1, perPage: 100 },
        sort: { field: 'name', order: 'ASC' },
    });

    return (
        <Card
            sx={{
                display: { xs: 'none', md: 'block' },
                order: -1,
                width: '15em',
                mr: 2,
                alignSelf: 'flex-start',
            }}
        >
            <CardContent sx={{ pt: 1 }}>
                <FilterLiveSearch />

                <FilterList
                    label="bis.common.type"
                    icon={<LocalOfferIcon />}
                >
                    {
                        explosiveUnitTypes.map((record: any) => (
                            <FilterListItem
                                label={record.name}
                                key={record.id}
                                value={{ explosiveUnitType: record.id }}
                            />
                        ))}
                </FilterList>
            </CardContent>
        </Card>
    );
};

export default Aside;
