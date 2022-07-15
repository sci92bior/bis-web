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

import { useController, useWatch, useFormContext} from "react-hook-form";
import { LoadImageExample } from '../database/common/ImageUploader';

const DestructionPhotosBefore= () => {

    const {getValues, setValue} = useFormContext();
    const [itemIndex, setItemIndex] = React.useState(0);
             
    const handleImageUpload = (images : Array<any>) => {
        setValue(`photosBefore[${itemIndex}].base64`,images[0]["data_url"]);
        setItemIndex(itemIndex+1);
        console.log(getValues());
    }

    return <ArrayInput source="photosBefore" label="">
    <SimpleFormIterator>
        <LoadImageExample maxImage={10} onUpload={handleImageUpload}/>
    <RichTextInput source="description" />
    </SimpleFormIterator>
</ArrayInput>
};

export default DestructionPhotosBefore;
const req = [required()];
