import * as React from 'react';
import {
    DateInput,
    Edit,
    NullableBooleanInput,
    TextInput,
    PasswordInput,
    SimpleForm,
    useTranslate,
    BooleanInput,
    SelectArrayInput,
} from 'react-admin';
import { Grid, Box, Typography } from '@mui/material';

import Aside from './Aside';
import FullNameField from './FullNameField';
import SegmentsInput from './SegmentsInput';
import { validateForm } from './VisitorCreate';
import { roles } from '../types';

const VisitorEdit = () => {
    const translate = useTranslate();
    return (
        <Edit title={<VisitorTitle />}>
            <SimpleForm >
                <div>
                    <Grid container width={{ xs: '100%', xl: 800 }} spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                                {translate(
                                    'resources.customers.fieldGroups.identity'
                                )}
                            </Typography>
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                <TextInput source='id' disabled/>
                                </Box>
                                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                <TextInput source='username' disabled/>
                                </Box>
                            </Box>
                        
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="firstName"
                                        isRequired
                                        fullWidth
                                    />
                                </Box>
                                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="lastName"
                                        isRequired
                                        fullWidth
                                    />
                                </Box>
                            </Box>
                            <TextInput
                                type="email"
                                source="email"
                                isRequired
                                fullWidth
                            />
                    

                            <Box mt="1em" />

                            {/* <Typography variant="h6" gutterBottom>
                                {translate(
                                    'resources.customers.fieldGroups.address'
                                )}
                            </Typography>
                            <TextInput
                                source="address"
                                multiline
                                fullWidth
                                helperText={false}
                            />
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="city"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                    <TextInput
                                        source="stateAbbr"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                                <Box flex={2}>
                                    <TextInput
                                        source="zipcode"
                                        fullWidth
                                        helperText={false}
                                    />
                                </Box>
                            </Box> */}

                            <Box mt="1em" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                {translate(
                                    'resources.customers.fieldGroups.stats'
                                )}
                            </Typography>

                            <SelectArrayInput choices={roles} label="bis.user.roles" source='roles' fullWidth/>
                            <BooleanInput
                                fullWidth
                                source="enabled"
                            />
                        </Grid>
                    </Grid>
                </div>
            </SimpleForm>
        </Edit>
    );
};

const VisitorTitle = () => <FullNameField size="32" sx={{ margin: '5px 0' }} />;

export default VisitorEdit;
