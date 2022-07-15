import { RichTextInput } from 'ra-input-rich-text';
import * as React from 'react';
import {
    ArrayInput,
    required,
    SimpleFormIterator,
} from 'react-admin';
import { LoadImageExample } from '../database/common/ImageUploader';
import { useController, useWatch, useFormContext} from "react-hook-form";

const DestructionPhotosAfter= () => {

    const {getValues, setValue} = useFormContext();
    const [itemIndex, setItemIndex] = React.useState(0);
             
    const handleImageUpload = (images : Array<any>) => {
        setValue(`photosAfter[${itemIndex}].base64`,images[0]["data_url"]);
        setItemIndex(itemIndex+1);
        console.log(getValues());
    }

    return <ArrayInput source="photosAfter" label="">
    <SimpleFormIterator>
        <LoadImageExample maxImage={10} onUpload={handleImageUpload}/>
    <RichTextInput source="description" />
    </SimpleFormIterator>
</ArrayInput>
};

export default DestructionPhotosAfter;
const req = [required()];
