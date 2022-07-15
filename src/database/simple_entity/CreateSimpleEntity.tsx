import { Dialog } from "@mui/material";
import { Create, SimpleForm, ImageInput, ImageField, TextInput, NumberInput, SelectInput, AutocompleteInput, ReferenceInput, required, useDataProvider, useRedirect, SaveButton, Toolbar } from "react-admin";
import { BuildMaterial, Category, entityUnitTypeArray, ExplosiveMaterial, unitTypeArray } from "../../types";
import { LoadImageExample } from "../common/ImageUploader";
import { useController, useWatch, useFormContext} from "react-hook-form";
import { useState } from "react";


export const CreateSimpleEntity = () => {
    const dataProvider = useDataProvider();
    const [images, setImages] = useState<Array<string>>();

    const optionRenderer = (category: Category) => `${category.name}`;
    
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
                    <SelectInput source="unitType" choices={entityUnitTypeArray} label="bis.explosive_materials.unitType"/>
                    <ReferenceInput label="bis.category.one" source="categoryId" reference="categories">
                        <SelectInput optionText="name" />
                    </ReferenceInput>
                </SimpleForm>
            </Create>
    );
};