import * as React from 'react';
import { Create, FormTab, TabbedForm, TextInput, required } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import { DestructionEditDetail } from './DestructionDetailEdit';
import DestructionProcess from './DestructionProcess';
import { DestructionEquipmentDetail } from './DestructionEquipmentDetail';
import DestructionPhotosBefore from './DestructionPhotosBefore';
import DestructionPhotosAfter from './DestructionPhotosAfter';

const DestructionCreate = () => {
    return (
        <Create>
            <TabbedForm >
                <FormTab
                    label="bis.common.general"
                    sx={{ maxWidth: '40em' }}
                >
                    <DestructionEditDetail />
                </FormTab>
                <FormTab
                    label="bis.process.title"
                    sx={{ maxWidth: '40em' }}
                >
                    <DestructionProcess />
                </FormTab>
            
                <FormTab
                    label="bis.process.equipment"
                    sx={{ maxWidth: '40em' }}
                >
                    <DestructionEquipmentDetail />
                </FormTab>
                <FormTab
                    label="bis.destruction.photos_before"
                    sx={{ maxWidth: '40em' }}
                >
                    <DestructionPhotosBefore />
                </FormTab>
                <FormTab
                    label="bis.destruction.photos_after"
                    sx={{ maxWidth: '40em' }}
                >
                    <DestructionPhotosAfter />
                </FormTab>
            </TabbedForm>
            
        </Create>
    );
};

export default DestructionCreate;
