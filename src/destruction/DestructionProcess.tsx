import { InputAdornment } from '@mui/material';
import { RichTextInput } from 'ra-input-rich-text';
import * as React from 'react';
import {
    ArrayInput,
    NumberInput,
    required,
    SimpleFormIterator,
    TextInput,
} from 'react-admin';

const DestructionProcess = () => (
    <ArrayInput source="processItems">
    <SimpleFormIterator>
        <TextInput source="title" fullWidth/>
        <NumberInput source="time" label="bis.common.time" min="0"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">sec</InputAdornment>
                    ),
                }}
                validate={req}
                fullWidth/>
        <RichTextInput source="description" />
    </SimpleFormIterator>
</ArrayInput>
);

export default DestructionProcess;
const req = [required()];
