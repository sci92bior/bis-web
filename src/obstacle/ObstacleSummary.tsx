import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { Link, useTranslate, useGetMany, useRecordContext } from 'react-admin';

import { BuildMaterialQuantity, ExplosiveMaterial, ExplosiveMaterialQuantity, ExplosiveUnit, Obstacle, Order, Product } from '../types';
import AvatarField from '../visitors/AvatarField';
import EntityAvatarField from '../database/common/EntityAvatarField';
import ExplosiveMaterialsSummary from '../explosive-unit/ExplosiveMaterialsSummary';
import { TableCellRight } from '../orders/TableCellRight';

const ObstacleSummary = () => {
    const record = useRecordContext<Obstacle>();
    const translate = useTranslate();
    console.log(record);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                        {translate(
                            'bis.common.name'
                        )}
                    </TableCell>
                    <TableCellRight>
                        {translate(
                            'bis.common.quantity'
                        )}
                    </TableCellRight>
                </TableRow>
            </TableHead>
            <TableBody>
                {record.buildMaterials.map((item: BuildMaterialQuantity) => (
                    <TableRow key={item.buildMaterial.name}>
                        <TableCell>
                        <EntityAvatarField resource={'build-material'}  entityId={`${item.buildMaterial.id}`}/>
                        </TableCell>
                        <TableCell>
                        <Typography
            variant="body2"
            display="flex"
            flexWrap="nowrap"
            alignItems="center"
            component="div"
        >
            <Link to={`/build-material/${item.buildMaterial.id}`}>
                                {item.buildMaterial.name}
                            </Link>
        </Typography>
                            
                        </TableCell>
                        <TableCellRight>{item.quantity} cm</TableCellRight>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ObstacleSummary;
