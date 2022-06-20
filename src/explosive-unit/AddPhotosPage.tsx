import * as React from 'react';
import {
    ImageField,
    ImageInput,
    required,
    useTranslate,
} from 'react-admin';

export const AddPhotosPage = () => {
    const translate = useTranslate();
    return (
    <ImageInput source="pictures" label="Related pictures" accept="image/*" placeholder={<p>{translate("bis.common.drop_your_file_here")} </p>} multiple={true}>
    <ImageField source="src" title="title" />
</ImageInput>
    )

};

export default AddPhotosPage;