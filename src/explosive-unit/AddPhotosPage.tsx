import * as React from 'react';
import {
    ImageField,
    ImageInput,
    required,
    useTranslate,
} from 'react-admin';
import { LoadImageExample } from '../database/common/ImageUploader';
import { useController, useWatch, useFormContext} from "react-hook-form";

export const AddPhotosPage = () => {
    const {getValues, setValue} = useFormContext();
             
    const handleImageUpload = (images : Array<any>) => {
        var imagesToSave = [];
        for (let value of images) {
            imagesToSave.push(value["data_url"]);
          }
        setValue(`photos`,imagesToSave);
    }
    return (
        <LoadImageExample maxImage={10} onUpload={handleImageUpload}/>
    )

};

export default AddPhotosPage;