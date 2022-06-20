import { InputAdornment } from '@mui/material';
import { RichTextInput } from 'ra-input-rich-text';
import * as React from 'react';
import {
    ArrayInput,
    ImageField,
    ImageInput,
    NumberInput,
    required,
    SimpleFormIterator,
    TextInput,
} from 'react-admin';

const DestructionPhotosBefore= () => (
    <ArrayInput source="photosBefore">
    <SimpleFormIterator>
    <ImageInput source="photo" label="bis.destruction.photos_before" accept="image/*" placeholder={<p>Drop your file here</p>}>
        <ImageField source="src" title="title" />
    </ImageInput>
    <RichTextInput source="description" />
    </SimpleFormIterator>
</ArrayInput>
);

export default DestructionPhotosBefore;
const req = [required()];
