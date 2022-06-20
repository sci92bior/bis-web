import * as React from 'react';
import { Create, FormTab, TabbedForm, TextInput, required } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import AddPhotosPage from '../explosive-unit/AddPhotosPage';
import { ObstacleEditDetail } from './ObstacleEditDetail';
import { ObstacleCompositionCreate } from './ObstacleCompositionCreate';


const ObstacleCreate = () => {
    return (
        <Create>
            <TabbedForm >
                <FormTab
                    label="resources.products.tabs.details"
                    sx={{ maxWidth: '40em' }}
                >
                    <ObstacleEditDetail />
                </FormTab>
                <FormTab
                    label="bis.common.composition"
                    path="composition"
                >
                    <ObstacleCompositionCreate/>
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

export default ObstacleCreate;
