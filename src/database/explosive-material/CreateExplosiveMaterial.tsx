import { Dialog } from "@mui/material";
import { Create, SimpleForm, ImageInput, ImageField, TextInput, NumberInput, SelectInput, AutocompleteInput, ReferenceInput, required, useDataProvider, useRedirect, SaveButton, Toolbar } from "react-admin";
import { BuildMaterial, ExplosiveMaterial, unitTypeArray } from "../../types";
import { LoadImageExample } from "../common/ImageUploader";
import { useController, useWatch, useFormContext} from "react-hook-form";
import { useState } from "react";


export const CreateExplosiveMaterial = () => {
    const dataProvider = useDataProvider();
    const [images, setImages] = useState<Array<string>>();
    
    const handleImageUpload = (images : Array<any>) => {
        var imagesToSave = [];
        for (let value of images) {
            imagesToSave.push(value["data_url"]);
          }
        setImages(imagesToSave);
    }

    const PostCreateToolbar = (props : any) => (
        <Toolbar {...props}>
            
            <SaveButton
                transform={data => ({ ...data, photos: images })}
                type="button"
            />
        </Toolbar>
    );

    return (
            <Create>
                <SimpleForm toolbar={<PostCreateToolbar />}>
                    <LoadImageExample maxImage={1} onUpload={handleImageUpload}/>
                    <TextInput source="name" label="bis.common.name" />
                    <NumberInput source="rFactor" label="bis.explosive_materials.rFactor"/>
                    <NumberInput source="grain" label="bis.explosive_materials.grains"/>
                    <SelectInput source="unitType" choices={unitTypeArray} label="bis.explosive_materials.unitType"/>
                </SimpleForm>
            </Create>
    );
};