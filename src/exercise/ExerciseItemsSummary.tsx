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

import { DatabaseItemQuantity, Exercise, ExplosiveMaterial, ExplosiveMaterialQuantity, ExplosiveUnit, Order, Product } from '../types';
import AvatarField from '../visitors/AvatarField';
import EntityAvatarField from '../database/common/EntityAvatarField';
import { TableCellRight } from '../orders/TableCellRight';

const ExerciseItemsSummary = () => {
    const record = useRecordContext<Exercise>();
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
                        {translate('bis.categories.one')}
                    </TableCellRight>
                </TableRow>
            </TableHead>
            <TableBody>
                {record.databaseItems.map((item: DatabaseItemQuantity) => (
                    (item.explosiveMaterialId!=null ?

                        <TableRow key={item.explosiveMaterialId!!}>
                            <TableCell>
                                <EntityAvatarField resource={'explosive-material'} entityId={`${item.explosiveMaterialId}`} />
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="body2"
                                    display="flex"
                                    flexWrap="nowrap"
                                    alignItems="center"
                                    component="div"
                                >

                                    <Link to={`/explosive-material/${item.explosiveMaterialId}/show`}>
                                        {item.name}
                                    </Link>
                                </Typography>

                            </TableCell>
                            <TableCellRight>{item.quantity}</TableCellRight>
                            <TableCellRight>{item.unit}</TableCellRight>
                        </TableRow> : 
                        
                        <TableRow key={item.simpleEntityId!!}>
                            <TableCell>
                                <EntityAvatarField resource={'simple-entity'} entityId={`${item.simpleEntityId}`} />
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="body2"
                                    display="flex"
                                    flexWrap="nowrap"
                                    alignItems="center"
                                    component="div"
                                >

                                    <Link to={`/simple-entity/${item.explosiveMaterialId}/show`}>
                                        {item.name}
                                    </Link>
                                </Typography>

                            </TableCell>
                            <TableCellRight>{item.quantity}</TableCellRight>
                            <TableCellRight>{item.unit}</TableCellRight>
                        </TableRow>)

                ))}
            </TableBody>
        </Table>
    );
};

export default ExerciseItemsSummary;
