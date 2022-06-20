import { Dialog } from "@mui/material";
import { Create, SimpleForm, ImageInput, ImageField, TextInput, NumberInput, SelectInput, AutocompleteInput, ReferenceInput, required, useDataProvider, useRedirect } from "react-admin";
import { BuildMaterial, unitTypeArray } from "../../types";

const validateRequired = required();

export const CreateBuildMaterial = ({ open }: { open: boolean }) => {
    const redirect = useRedirect();
    const dataProvider = useDataProvider();

    const handleClose = () => {
        redirect('/build-material');
    };

    const onSuccess = (buildMaterial: BuildMaterial) => {
        redirect('/build-material');
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <Create<BuildMaterial>
                resource="build-material"
                mutationOptions={{ onSuccess }}
                sx={{ width: 500, '& .RaCreate-main': { mt: 0 } }}
            >
                <SimpleForm defaultValues={{ index: 0 }}>
                <ImageInput source="pictures" label="Related pictures" accept="image/*" >
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="name" label="bis.common.name" />
            <NumberInput source="aFactor" label="bis.build_materials.aFactor" defaultValue={0}/>
                </SimpleForm>
            </Create>
        </Dialog>
    );
};