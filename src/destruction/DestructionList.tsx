import * as React from 'react';
import {
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    FunctionField,
    List,
    NullableBooleanInput,
    NumberField,
    ReferenceField,
    SearchInput,
    TextField,
} from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import SegmentInput from '../visitors/SegmentInput';
import ColoredNumberField from '../visitors/ColoredNumberField';
import CustomerLinkField from '../visitors/CustomerLinkField';
import MobileGrid from '../visitors/MobileGrid';
import SegmentsField from '../visitors/SegmentsField';
import VisitorListAside from '../visitors/VisitorListAside';
import { User } from '../types';
import DestructionListAside from './DestructionListAside';


const visitorFilters = [
    <SearchInput source="q" alwaysOn />,
    <DateInput source="last_seen_gte" />,
    <NullableBooleanInput source="has_ordered" />,
    <NullableBooleanInput source="has_newsletter" defaultValue />,
    <SegmentInput source="groups" />,
];

const DestructionList = () => {
    const isXsmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
    return (
        <List
            filters={isSmall ? visitorFilters : undefined}
            sort={{ field: 'creationDate', order: 'DESC' }}
            perPage={25}
            aside={<DestructionListAside />}
        >
            {isXsmall ? (
                <MobileGrid />
            ) : (
                <Datagrid
                    optimized
                    rowClick="show"
                    sx={{
                        '& .column-groups': {
                            md: { display: 'none' },
                            lg: { display: 'table-cell' },
                        },
                    }}
                >
                    <ReferenceField label="bis.common.performer" source="performerId" reference="user">
                        <FunctionField label="bis.common.name" render={(record:User) => `${record.firstName} ${record.lastName}`} />
                    </ReferenceField>
                    <ReferenceField label="bis.common.createdBy" source="createdBy" reference="user">
                        <FunctionField label="bis.common.name" render={(record:User) => `${record.firstName} ${record.lastName}`} />
                    </ReferenceField>
                    <TextField source="creationDate" />
                    <TextField source="place" />
                    <TextField source="destructionType" />
                    {/* <NumberField
                        source="nb_commands"
                        label="resources.customers.fields.commands"
                        sx={{ color: 'purple' }}
                    />
                    <ColoredNumberField
                        source="total_spent"
                        options={{ style: 'currency', currency: 'USD' }}
                    /> */}
                    <BooleanField source="go" label="GO?" />
                </Datagrid>
            )}
        </List>
    );
};

export default DestructionList;
