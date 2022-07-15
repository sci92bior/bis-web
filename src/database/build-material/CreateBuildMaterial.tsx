import { Dialog } from "@mui/material";
import { useState } from "react";
import { Create, SimpleForm, ImageInput, ImageField, TextInput, NumberInput, SelectInput, AutocompleteInput, ReferenceInput, required, useDataProvider, useRedirect, SaveButton, Toolbar } from "react-admin";
import { BuildMaterial, unitTypeArray } from "../../types";
import { LoadImageExample } from "../common/ImageUploader";

const validateRequired = required();

export const CreateBuildMaterial = ({ open }: { open: boolean }) => {
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
                    <NumberInput source="aFactor" label="bis.build_materials.aFactor" defaultValue={0}/>
                </SimpleForm>
            </Create>
    );
};