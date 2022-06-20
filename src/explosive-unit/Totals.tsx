import * as React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { useRecordContext, useTranslate } from 'react-admin';

import { ExplosiveUnit, Order } from '../types';
import { TableCellRight } from './TableCellRight';

const Totals = () => {
    const record = useRecordContext<ExplosiveUnit>();
    const translate = useTranslate();

    return (
        <Table sx={{ minWidth: '35em' }}>
            <TableBody>
                <TableRow>
                    <TableCell>
                        {translate('bis.explosive_unit.newTNT')}
                    </TableCell>
                    <TableCellRight>
                        {record.newTnt.toFixed(2)}
                    </TableCellRight>
                </TableRow>
                <TableRow>
                    <TableCell>
                        {translate('bis.explosive_unit.newActual')}
                    </TableCell>
                    <TableCellRight>
                        {record.newActual.toFixed(2)}
                    </TableCellRight>
                </TableRow>
                <TableRow>
                    <TableCell>
                        {translate('bis.explosive_unit.msd')} 
                    </TableCell>
                    <TableCellRight>
                        {record.msd.toFixed(2)} m.
                    </TableCellRight>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default Totals;
