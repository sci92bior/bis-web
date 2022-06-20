import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOnOutlined';
import MailIcon from '@mui/icons-material/MailOutline';
import LocalOfferIcon from '@mui/icons-material/LocalOfferOutlined';
import { FilterList, FilterListItem, FilterLiveSearch } from 'react-admin';
import {
    endOfYesterday,
    startOfWeek,
    subWeeks,
    startOfMonth,
    subMonths,
} from 'date-fns';

import segments from '../segments/data';

const DestructionListAside = () => (
    <Card
        sx={{
            display: {
                xs: 'none',
                md: 'block',
            },
            order: -1,
            flex: '0 0 15em',
            mr: 2,
            mt: 8,
            alignSelf: 'flex-start',
        }}
    >
        <CardContent sx={{ pt: 1 }}>
            <FilterLiveSearch />

            
            <FilterList
                label="bis.destruction.go_or_no"
                icon={<MonetizationOnIcon />}
            >
                <FilterListItem
                    label="bis.destruction.go"
                    value={{ go: true }}
                />
                <FilterListItem
                    label="bis.destruction.no_go"
                    value={{ go: false }}
                />
            </FilterList>

            <FilterList
                label="bis.destruction.two_stage"
                icon={<MailIcon />}
            >
                <FilterListItem
                    label="ra.boolean.true"
                    value={{ twoStage: true }}
                />
                <FilterListItem
                    label="ra.boolean.false"
                    value={{ twoStage: false }}
                />
            </FilterList>
        </CardContent>
    </Card>
);

export default DestructionListAside;
