import { Dialog } from "@mui/material";
import { Create, SimpleForm, ImageInput, ImageField, TextInput, NumberInput, SelectInput, AutocompleteInput, ReferenceInput, required, useDataProvider, useRedirect } from "react-admin";
import { BuildMaterial, ExplosiveMaterial, unitTypeArray } from "../../types";

const validateRequired = required();

export const CreateExplosiveMaterial = ({ open }: { open: boolean }) => {
    const redirect = useRedirect();
    const dataProvider = useDataProvider();

    const handleClose = () => {
        redirect('/exploisve-material');
    };

    const onSuccess = (explosiveMaterial: ExplosiveMaterial) => {
        redirect('/explosive-material');
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <Create<ExplosiveMaterial>
                resource="explosive-material"
                mutationOptions={{ onSuccess }}
                sx={{ width: 500, '& .RaCreate-main': { mt: 0 } }}
            >
                <SimpleForm>
                    <ImageInput source="pictures" label="Related pictures" accept="image/*">
                        <ImageField source="src" title="title" />
                    </ImageInput>
                    <TextInput source="name" label="bis.common.name" />
                    <NumberInput source="rFactor" label="bis.explosive_materials.rFactor"/>
                    <NumberInput source="grain" label="bis.explosive_materials.grains"/>
                    <SelectInput source="unitType" choices={unitTypeArray} label="bis.explosive_materials.unitType"/>
            </SimpleForm>
            </Create>
        </Dialog>
    );
};