import * as React from 'react';
import {
    ShowBase,
    TextField,
    ReferenceField,
    ReferenceManyField,
    ReferenceArrayField,
    useRecordContext,
    useRedirect,
    useTranslate,
    FunctionField,
} from 'react-admin';
import { Box, Dialog, DialogContent, Typography, Divider } from '@mui/material';
import { format } from 'date-fns';
import { BuildMaterial, ExplosiveMaterial, User } from '../../types';
import EntityImageField from '../common/EntityImageField';


export const ExplosiveMaterialShow = ({ open, id }: { open: boolean; id?: string }) => {
    const redirect = useRedirect();

    const handleClose = () => {
        redirect('list', 'explosive-material');
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="md"
            sx={{
                '.MuiDialog-paper': {
                    position: 'absolute',
                    top: 50,
                },
            }}
        >
            <DialogContent>
                {!!id ? (
                    <ShowBase id={id}>
                        <ExplosiveMaterialShowContent />
                    </ShowBase>
                ) : null}
            </DialogContent>
        </Dialog>
    );
};

const ExplosiveMaterialShowContent = () => {
    const record : ExplosiveMaterial = useRecordContext();
    const translate = useTranslate();
    if (!record) return null;
    return (
        <div>
            <Box display="flex">
            <Box
                    width={200}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <EntityImageField  resource='explosive-material'/>
                </Box>
                <Box ml={2} flex="1">
                    <Typography variant="h5">{record.name}</Typography>

                    <Box display="flex" mt={2}>
                        
                        <Box display="flex" mr={5} flexDirection="column">
                            <Typography color="textSecondary" variant="body2">
                            {translate("bis.explosive_materials.rFactor")}
                            </Typography>
                            <Typography variant="subtitle1">
                                {record.reFactor}
                            </Typography>
                        </Box>
                        <Box display="flex" mr={5} flexDirection="column">
                            <Typography color="textSecondary" variant="body2">
                            {translate("bis.explosive_materials.grains")}
                            </Typography>
                            <Typography variant="subtitle1">
                                {record.grain}
                            </Typography>
                        </Box>
                        <Box display="flex" mr={5} flexDirection="column">
                            <Typography color="textSecondary" variant="body2">
                            {translate("bis.explosive_materials.unitType")}
                            </Typography>
                            <Typography variant="subtitle1">
                                {record.unitType}
                            </Typography>
                        </Box>

                        <Box display="flex" mr={5} flexDirection="column">
                            <Typography color="textSecondary" variant="body2">
                            {translate("bis.common.creationDate")}
                            </Typography>
                            <Typography variant="subtitle1">
                                {record.creationDate}
                            </Typography>
                        </Box>

                        <Box display="flex" mr={5} flexDirection="column">
                            <Typography color="textSecondary" variant="body2">
                            {translate("bis.common.createdBy")}
                            </Typography>
                            <Typography variant="subtitle1">
                                <ReferenceField label="bis.common.createdBy" source="createdBy" reference="user">
                                    <FunctionField label="bis.common.name" render={(record:User) => `${record.firstName} ${record.lastName}`} />
                                </ReferenceField>
                            </Typography>
                        </Box>

                    </Box>
                    <Divider />

                </Box>
            </Box>
        </div>
    );
};
