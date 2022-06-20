import {
    Datagrid,
    TextField,
    BulkDeleteButton,
    NumberField,
    FunctionField,
    BooleanField,
    ReferenceField,
} from 'react-admin';

import { Customer, ExplosiveMaterial, unitDict, User } from '../../types';
import EntityAvatarField from '../common/EntityAvatarField';



const ReviewsBulkActionButtons = () => (
    <>
        <BulkDeleteButton />
    </>
);

const ExplosiveMaterialListDesktop = () => (
    <Datagrid
        rowClick="show"
        optimized
        bulkActionButtons={<ReviewsBulkActionButtons />}
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
            <EntityAvatarField resource={'explosive-material'} />
            <TextField source="creationDate" />
            <TextField source="name" label="bis.common.name" />
            <NumberField source="reFactor" label="bis.explosive_materials.rFactor"/>
            <BooleanField source="isApproved" label="bis.common.approved" />
            <ReferenceField label="bis.common.createdBy" source="createdBy" reference="user">
                <FunctionField label="bis.common.name" render={(record:User) => `${record.firstName} ${record.lastName}`} />
            </ReferenceField>
    </Datagrid>
);

export default ExplosiveMaterialListDesktop;
