import * as React from 'react';
import {
    EditBase,
    useTranslate,
    TextInput,
    SimpleForm,
    DateField,
    EditProps,
    Labeled,
    BooleanInput,
    ImageField,
    ImageInput,
    NumberInput,
    SelectInput,
} from 'react-admin';
import { Box, Grid, Stack, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import ReviewEditToolbar from '../common/ReviewEditToolbar';
import { Review, unitTypeArray } from '../../types';

interface Props extends EditProps<Review> {
    onCancel: () => void;
}


const BuildMaterialEdit = ({ onCancel, ...props }: Props) => {
    const translate = useTranslate();
    return (
        <EditBase {...props}>
            <Box pt={5} width={{ xs: '100vW', sm: 400 }} mt={{ xs: 2, sm: 1 }}>
                <Stack direction="row" p={2}>
                    <Typography variant="h6" flex="1">
                        {translate('bis.common.summary')}
                    </Typography>
                    <IconButton onClick={onCancel} size="small">
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <SimpleForm
                    sx={{ pt: 0, pb: 0 }}
                    toolbar={<ReviewEditToolbar />}
                >
            <ImageInput source="pictures" label="Related pictures" accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>
            <TextInput disabled source="id" />
            <TextInput source="name" label="bis.common.name" />
           <NumberInput source="aFactor" label="bis.build_materials.aFactor"/>
           <BooleanInput source="isApproved" label="bis.common.approved"/>
        </SimpleForm>
            </Box>
        </EditBase>
    );
};

export default BuildMaterialEdit;
