import * as React from 'react';
import { Grid, SxProps, Typography } from '@mui/material';
import { memo } from 'react';

import { BooleanField, FieldProps, Labeled, useRecordContext } from 'react-admin';
import { Customer, ExplosiveUnit, Obstacle, User } from '../types';
import EntityAvatarField from '../database/common/EntityAvatarField';
import ExplosiveUnitField from '../explosive-unit/ExplosiveUnitField';

interface Props extends FieldProps<User> {
    size?: string;
    sx?: SxProps;
}

const ObstacleField = (props: Props) => {
    const { size } = props;
    const record = useRecordContext<Obstacle>();
    return record ? (
        <Grid container spacing={1}>
             
            <Grid item xs={12} sm={12} md={3}>
                    <EntityAvatarField resource={'obstacle'}/>
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
                <Labeled label="bis.obstacle.thickness">
                <Typography
                        variant="body2"
                        display="flex"
                        flexWrap="nowrap"
                        alignItems="center"
                        component="div"
                        sx={props.sx}
                    >
                        {record.thickness} 
                    </Typography>
                </Labeled>
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
                <Labeled label="bis.common.type">
                <Typography
                        variant="body2"
                        display="flex"
                        flexWrap="nowrap"
                        alignItems="center"
                        component="div"
                        sx={props.sx}
                    >
                        {record.obstacleType} 
                    </Typography>
                </Labeled>
            </Grid>
        </Grid>
       
    ) : null;
};

ObstacleField.defaultProps = {
   
};

export default memo<Props>(ObstacleField);
