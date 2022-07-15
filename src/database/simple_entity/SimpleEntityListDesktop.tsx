import {
    Datagrid,
    TextField,
    BulkDeleteButton,
    FunctionField,
    ReferenceField,
} from 'react-admin';

import { Category} from '../../types';
import EntityAvatarField from '../common/EntityAvatarField';



const ReviewsBulkActionButtons = () => (
    <>
        <BulkDeleteButton />
    </>
);

const SimpleEntityListDesktop = () => (
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
        <EntityAvatarField resource={'simple-entity'} />
        <TextField source="creationDate" />
        <TextField source="name" label="bis.common.name" />
        <ReferenceField label="bis.categories.one" source="categoryId" reference="categories">
            <FunctionField label="bis.common.name" render={(record: Category) => `${record.name}`} />
        </ReferenceField>
    </Datagrid>
);

export default SimpleEntityListDesktop;
