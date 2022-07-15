import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material';
import { Link, useTranslate, useGetMany, useRecordContext } from 'react-admin';

import { AdditionalItem, Destruction, ExplosiveMaterial, ExplosiveMaterialQuantity, ExplosiveUnit, Order, Product, SimpleEntity } from '../types';
import EntityAvatarField from '../database/common/EntityAvatarField';

export interface AdditionalItemsSummaryProps {
    after: boolean;
  }

const AdditionalItemsSummary = (props : AdditionalItemsSummaryProps) => {
    const {after} = props;
    const record = useRecordContext<Destruction>();
    const translate = useTranslate();
    const data = after ? record.secondAdditionalItems : record.additionalItems;
    console.log(record);

    return (
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                        {translate(
                            'bis.common.name'
                        )}
                    </TableCell>
                    <TableCell>
                        {translate(
                            'bis.categories.one'
                        )}
                    </TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {data!.map((item: SimpleEntity) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            <EntityAvatarField resource={'simple-entity'} entityId={`${item.id}`} />
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant="body2"
                                display="flex"
                                // flexWrap="nowrap"
                                alignItems="center"
                                component="div"
                            >
                                <Link to={`/simple-entity/${item.id}`}>
                                    {item.name}
                                </Link>
                            </Typography>

                        </TableCell>
                        <TableCell>
                            <Typography
                                variant="body2"
                                display="flex"
                                flexWrap="nowrap"
                                alignItems="center"
                                component="div"
                            >
                               <p>{item.categoryName}</p>
                            </Typography>

                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default AdditionalItemsSummary;
