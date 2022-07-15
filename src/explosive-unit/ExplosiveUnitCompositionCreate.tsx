import * as React from 'react';
import {
    ArrayInput,
    NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    SimpleFormIterator,
} from 'react-admin';
import { ExplosiveMaterial } from '../types';

export const ExplosiveUnitCompositionCreate = () => (
    <ArrayInput source="explosiveMaterials">
    <SimpleFormIterator disableReordering>
    <ReferenceInput label="bis.exlosive_materials.one" source="explosiveMaterialId" reference="explosive-material" >
    <SelectInput 
            source='explosiveMaterialId'
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
