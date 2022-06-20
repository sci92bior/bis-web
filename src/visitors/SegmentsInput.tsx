import * as React from 'react';
import { SelectArrayInput, SelectArrayInputProps } from 'react-admin';

import segments from '../segments/data';

const SegmentsInput = (props: SelectArrayInputProps) => (
    <SelectArrayInput
        {...props}
        source="roles"
        translateChoice
        choices={segments}
    />
);

export default SegmentsInput;
