import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, NumberField, SimpleShowLayout, TextField, useGetOne } from 'react-admin';

const useStyles = makeStyles({
    field: {
        // These styles will ensure our drawer don't fully cover our
        // application when teaser or title are very long
        '& span': {
            display: 'inline-block',
            maxWidth: '40em'
        }
    }
});

export interface ExplosiveUnitQuickPreviewButtonProps {
    objectId: any;
  }

const ExplosiveUnitQuickPreviewButton = (props : ExplosiveUnitQuickPreviewButtonProps) => {

    const {objectId} = props;
    console.log(objectId);
    const [showPanel, setShowPanel] = useState(false);
    const classes = useStyles();
    const { data } = useGetOne('explosive-unit', {id:objectId});

    const handleClick = () => {
        setShowPanel(true);
    };

    const handleCloseClick = () => {
        setShowPanel(false);
    };

    return (
        <>
            <Button onClick={handleClick} label="ra.action.show">
                <RemoveRedEyeIcon />
            </Button>
            <Drawer anchor="right" open={showPanel} onClose={handleCloseClick}>
                <div>
                    <Button label="Close" onClick={handleCloseClick}>
                        <ChevronRightIcon />
                    </Button>
                </div>
                <SimpleShowLayout
                    record={data}
                >
                    <TextField source="id" />
                    <TextField source="name" label={"bis.common.name"} className={classes.field} />
                    <TextField source="explosiveUnitType" label={"bis.common.type"} />
                    <TextField source='newTnt' label={'bis.explosive_unit.newTNT'} />
                    <TextField source='newActual' label={'bis.explosive_unit.newActual'} />
                </SimpleShowLayout>
            </Drawer>
        </>
    );
};

export default ExplosiveUnitQuickPreviewButton;