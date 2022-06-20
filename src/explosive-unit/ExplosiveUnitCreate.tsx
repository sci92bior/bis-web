import * as React from 'react';
import { Create, FormTab, TabbedForm, TextInput, required } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import { ExplosiveUnitCompositionCreate } from './ExplosiveUnitCompositionCreate';
import { ExplosiveUnitEditDetail } from './ExplosiveUnitEditDetails';
import { AddPhotosPage } from './AddPhotosPage';

const ExplosiveUnitCreate = () => {
    return (
        <Create>
            <TabbedForm >
                <FormTab
                    label="resources.products.tabs.details"
                    sx={{ maxWidth: '40em' }}
                >
                    <ExplosiveUnitEditDetail />
                </FormTab>
                <FormTab
                    label="bis.common.composition"
                    path="description"
                >
                    <ExplosiveUnitCompositionCreate/>
                </FormTab>
                <FormTab
                    label="bis.common.photos"
                    path="photos"
                >
                    <AddPhotosPage/>
                </FormTab>
            </TabbedForm>
        </Create>
    );
};

export default ExplosiveUnitCreate;
