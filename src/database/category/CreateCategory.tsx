import { RichTextInput } from "ra-input-rich-text";
import { useState } from "react";
import { Create, SimpleForm, TextInput, required, DateInput, NumberInput, SaveButton, Toolbar } from "react-admin";
import { LoadImageExample } from "../common/ImageUploader";

export const CreateCategory = () => {
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
                </SimpleForm>
            </Create>
    );
    };