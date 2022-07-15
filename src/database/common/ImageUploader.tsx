
import { Button, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import React, { useState } from 'react';
import { CropperRef, Cropper, CircleStencil } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImageUploading from 'react-images-uploading';
import CropIcon from '@mui/icons-material/Crop';
import Zoom from 'react-medium-image-zoom';
import SimpleDialog from './ImageCropperDialog';
import { useTranslate } from 'react-admin';


export interface LoadImageProps {
    maxImage: number;
    onUpload: (images: Array<any>) => void;
  }

export const LoadImageExample = (props: LoadImageProps) => {
    const {maxImage, onUpload} = props;
    const [images, setImages] = React.useState<Array<any>>([]);
    const [cropperOpen, setCropperOpen] = React.useState(false);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [croppedImage, setCroppedImage] = React.useState("");
    const translate = useTranslate();
    

    const onChange = (imageList: any) => {
        // data for submit
        console.log(images);
        setImages(imageList);
        onUpload(imageList);
    };

    const handleCropperOpen = (index : number) => {
        setCroppedImage(images[index]["data_url"]);
        setCurrentImageIndex(index)
        setCropperOpen(true);
    };

    const handleCropperClose = (value: string) => {
        var newImages = [...images];
        newImages[currentImageIndex]["data_url"] = value;
        setImages(newImages);
        setCropperOpen(false);
    };

    return (
        <div>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxImage}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <Button variant="outlined" onClick={onImageUpload} startIcon={<AddPhotoAlternateIcon />}>
                            {translate("bis.common.add_photo")}
                        </Button>
                        <ImageList  cols={1}>
                            {imageList.map((image, index) => (
                                <ImageListItem key={index}>
                                    <Zoom>
                                        <img
                                            src={image["data_url"]}
                                            loading="lazy"
                                        />
                                    </Zoom>
                                    <ImageListItemBar
                                        sx={{
                                            background:
                                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                        }}
                                        position="top"

                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'white' }}
                                                aria-label={`star`}
                                                onClick={() => handleCropperOpen(index)}
                                            >
                                                <CropIcon />
                                            </IconButton>
                                        }
                                        actionPosition="left"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <SimpleDialog
                            image={croppedImage}
                            open={cropperOpen}
                            onClose={handleCropperClose}
                        />
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};



