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

import { ExplosiveMaterial, ExplosiveMaterialQuantity, ExplosiveUnit, Order, Product } from '../types';
import { TableCellRight } from './TableCellRight';
import AvatarField from '../visitors/AvatarField';
import EntityAvatarField from '../database/common/EntityAvatarField';

const ExplosiveMaterialsSummary = () => {
    const record = useRecordContext<ExplosiveUnit>();
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
                    <TableCellRight>
                        {translate('bis.explosive_materials.unitType')}
                    </TableCellRight>
                </TableRow>
            </TableHead>
            <TableBody>
                {record.explosiveMaterials.map((item: ExplosiveMaterialQuantity) => (
                    <TableRow key={item.explosiveMaterial.name}>
                        <TableCell>
                        <EntityAvatarField resource={'explosive-material'}  entityId={`${item.explosiveMaterial.id}`}/>
                        </TableCell>
                        <TableCell>
                        <Typography
            variant="body2"
            display="flex"
            flexWrap="nowrap"
            alignItems="center"
            component="div"
        >
            <Link to={`/explosive-material/${item.explosiveMaterial.id}`}>
                                {item.explosiveMaterial.name}
                            </Link>
        </Typography>
                            
                        </TableCell>
                        <TableCellRight>{item.quantity}</TableCellRight>
                        <TableCellRight>{item.explosiveMaterial.unitType}</TableCellRight>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ExplosiveMaterialsSummary;
