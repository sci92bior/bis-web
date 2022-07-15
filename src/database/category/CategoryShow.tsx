import * as React from 'react';
import {
    Datagrid,
    Edit,
    EditButton,
    NumberField,
    Labeled,
    ReferenceManyField,
    SimpleForm,
    TextInput,
    useTranslate,
    useRecordContext,
    TextField,
    Show,
} from 'react-admin';

import EntityAvatarField from '../common/EntityAvatarField';
import { Category } from '../../types';

const CategoryShow = () => (
    <Show title={<CategoryTitle />}>
        <SimpleForm>
            <Labeled label="bis.common.referenced_object" fullWidth>
                <ReferenceManyField
                    reference="simple-entity"
                    target="categoryId"
                    perPage={20}
                >
                    <Datagrid
                        sx={{
                            '& .column-thumbnail': {
                                width: 25,
                                padding: 0,
                            },
                        }}
                    >
                        <EntityAvatarField resource={'simple-entity'} />
                        <TextField source="name" label="bis.common.name"/>
                        <TextField
                            source="unitType"
                            label="bis.common.type"
                        />
                        
                        {/* <EditButton /> */}
                    </Datagrid>
                </ReferenceManyField>
            </Labeled>
        </SimpleForm>
    </Show>
);

const CategoryTitle = () => {
    const record = useRecordContext<Category>();
    const translate = useTranslate();

    return record ? (
        <span>
            {translate('resources.categories.name', { smart_count: 1 })} &quot;
            {record.name}&quot;
        </span>
    ) : null;
};

export default CategoryShow;
