import * as React from 'react';
import {
    Datagrid,
    Edit,
    FormTab,
    required,
    TabbedForm,
    TextField,
    useRecordContext,
    useTranslate,
    ArrayField,
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import { ExplosiveUnit, Product } from '../types';
import { ExplosiveUnitEditDetail } from './ExplosiveUnitEditDetails';
import { ExplosiveUnitCompositionCreate } from './ExplosiveUnitCompositionCreate';

const ExplosiveUnitTitle = () => {
    const record = useRecordContext<ExplosiveUnit>();
    return record ? <span>{record.name}</span> : null;
};

const ExplosiveUnitEdit = () => (
    <Edit title={<ExplosiveUnitTitle />}>
        <TabbedForm>
            <FormTab
                label="resources.products.tabs.details"
                sx={{ maxWidth: '40em' }}
            >
                <ExplosiveUnitEditDetail />
            </FormTab>
            <FormTab
                label="bis.common.composition"
                sx={{ maxWidth: '40em' }}
            >
            <ExplosiveUnitCompositionCreate />
            </FormTab>
        </TabbedForm>
    </Edit>
);

const req = [required()];

const ReviewsFormTab = (props: any) => {
    const record = useRecordContext();
    
    const translate = useTranslate();
    let label = translate('resources.products.tabs.reviews');

    label += ` (${record.explosiveMaterials.length})`;
    
    return <FormTab label={label} {...props} />;
};

export default ExplosiveUnitEdit;
