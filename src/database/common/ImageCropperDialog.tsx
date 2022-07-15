import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Coordinates, Cropper, CropperRef } from 'react-advanced-cropper';
import { PreviewResults } from './PreviewResults';
import './GettingResultManualExample.scss';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
    open: boolean;
    image: string;
    onClose: (croppedImage: string) => void;

  }
  
export default function SimpleDialog(props: SimpleDialogProps) {
    const { onClose,  open, image } = props;
  
    const handleClose = () => {
      onClose(image);
    };

    const cropperRef = React.useRef<CropperRef>(null);
	const [coordinates, setCoordinates] = React.useState<Coordinates | null>(null);
	const [preview, setPreview] = React.useState<string>();

	const onCrop = () => {
		if (cropperRef.current) {
			setCoordinates(cropperRef.current.getCoordinates());
			setPreview(cropperRef.current.getCanvas()?.toDataURL());
            if(preview!== undefined){
                onClose(preview);
            }
		}
        
	};
  
    return (
      <Dialog onClose={handleClose} open={open} fullWidth={true}>
        <DialogTitle>Crop Image</DialogTitle>
        <div className={'getting-result-manual-example'}>
			<Cropper
				ref={cropperRef}
				className={'getting-result-manual-example__cropper'}
				stencilProps={{ aspectRatio: 1 }}
				src={image}
			/>
			<div className={'getting-result-manual-example__crop-button'} onClick={onCrop}>
				Crop Image
			</div>
			{coordinates && preview && <PreviewResults coordinates={coordinates} preview={preview} />}
		</div>
      </Dialog>
    );
  }