import * as React from 'react';
import {
    ArrayInput,
    DateInput,
    NumberInput,
    RecordContext,
    ReferenceInput,
    required,
    SelectArrayInput,
    SelectInput,
    SimpleFormIterator,
    TextInput,
} from 'react-admin';
import { InputAdornment, Grid } from '@mui/material';
import { ExplosiveMaterial, explosiveUnitTypes, roles, unitDict, unitTypeArray } from '../types';
import { RichTextInput } from 'ra-input-rich-text';

export const ExplosiveUnitCompositionCreate = () => (
    <ArrayInput source="explosiveMaterials">
    <SimpleFormIterator disableReordering>
    <ReferenceInput label="bis.exlosive_materials.one" source="explosiveMaterialId" reference="explosive-material">
    <SelectInput 
            optionText={(choice?: ExplosiveMaterial) =>
                choice?.id // the empty choice is { id: '' }
                    ? `${choice.name} [${choice.unitType}]`
                    : ''
            }
        />
</ReferenceInput>
        <NumberInput source="quantity" />
    </SimpleFormIterator>
</ArrayInput>
);

const req = [required()];
