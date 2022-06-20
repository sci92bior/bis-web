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

export const ObstacleCompositionCreate = () => (
    <ArrayInput source="buildMaterials">
    <SimpleFormIterator disableReordering>
    <ReferenceInput label="bis.build_materials.one" source="buildMaterialId" reference="build-material">
    <SelectInput 
            optionText={(choice?: ExplosiveMaterial) =>
                choice?.id // the empty choice is { id: '' }
                    ? `${choice.name}`
                    : ''
            }
        />
</ReferenceInput>
        <NumberInput source="quantity" />
    </SimpleFormIterator>
</ArrayInput>
);

const req = [required()];
