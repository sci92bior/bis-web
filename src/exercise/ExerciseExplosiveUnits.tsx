import { Grid, InputAdornment } from '@mui/material';
import { RichTextInput } from 'ra-input-rich-text';
import * as React from 'react';
import {
    ArrayInput,
    FormDataConsumer,
    NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    SimpleFormIterator,
    TextInput,
} from 'react-admin';
import ExplosiveUnitQuickPreviewButton from '../explosive-unit/ExplosiveUnitQuickPreviewButton';

const ExerciseExplosiveUnits = () => (
    <ArrayInput source="explosiveUnits">
    <SimpleFormIterator>
            <ReferenceInput label="bis.explosive_unit.one" source="explosiveUnitId" reference="explosive-unit">
                <SelectInput optionText="name" fullWidth />
            </ReferenceInput>
            <FormDataConsumer>
                {({ formData, ...rest }) => formData.explosiveUnitId &&
                    <ExplosiveUnitQuickPreviewButton objectId={formData.explosiveUnitId} />
                }
            </FormDataConsumer>
            <NumberInput source="quantity" />
    </SimpleFormIterator>
</ArrayInput>
);

export default ExerciseExplosiveUnits;
const req = [required()];
