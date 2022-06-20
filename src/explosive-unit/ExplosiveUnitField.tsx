import * as React from 'react';
import { Grid, SxProps, Typography } from '@mui/material';
import { memo } from 'react';

import { BooleanField, FieldProps, Labeled, useRecordContext } from 'react-admin';
import { Customer, ExplosiveUnit, User } from '../types';
import EntityAvatarField from '../database/common/EntityAvatarField';

interface Props extends FieldProps<User> {
    size?: string;
    sx?: SxProps;
}

const ExplosiveUnitField = (props: Props) => {
    const { size } = props;
    const record = useRecordContext<ExplosiveUnit>();
    return record ? (
        <Grid container spacing={1}>
             
            <Grid item xs={12} sm={12} md={3}>
                    <EntityAvatarField resource={'explosive-unit'}/>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Labeled  label="bis.common.name">
                    <Typography
                        variant="body2"
                        display="flex"
                        flexWrap="nowrap"
                        alignItems="center"
                        component="div"
                        sx={props.sx}
                    >
                        {record.name} 
                    </Typography>
                </Labeled>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Labeled label="bis.explosive_unit.newActual">
                <Typography
                        variant="body2"
                        display="flex"
                        flexWrap="nowrap"
                        alignItems="center"
                        component="div"
                        sx={props.sx}
                    >
                        {record.newActual} 
                    </Typography>
                </Labeled>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Labeled label="bis.explosive_unit.newTNT">
                <Typography
                        variant="body2"
                        display="flex"
                        flexWrap="nowrap"
                        alignItems="center"
                        component="div"
                        sx={props.sx}
                    >
                        {record.newTnt} 
                    </Typography>
                </Labeled>
            </Grid>
        </Grid>
       
    ) : null;
};

ExplosiveUnitField.defaultProps = {
    source: 'lastName',
    label: 'resources.customers.fields.name',
};

export default memo<Props>(ExplosiveUnitField);
