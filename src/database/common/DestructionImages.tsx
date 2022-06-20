import * as React from 'react';
import { Avatar, SxProps, ImageList, ImageListItem, Grid, ImageListItemBar, Typography } from '@mui/material';
import { FieldProps, RaRecord, useRecordContext, useTranslate } from 'react-admin';
import { BaseEntity, Customer, DestructionImages, ExplosiveMaterial, PhotoDto } from '../../types';
import dataProvider from '../../dataProvider/dataProvider';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Photo, } from '@mui/icons-material';

interface Props extends FieldProps<RaRecord> {
    sx?: SxProps;
    size?: string;
    resource: string;
}

const DestructionImagesList = ({ size = '50', sx, resource}: Props) => {
    const record = useRecordContext<RaRecord>();
    const translate = useTranslate();
    const [imageBeforeList, setImageBeforeList] = React.useState( Array<PhotoDto>());
    const [imageAfterList, setImageAfterList] = React.useState( Array<PhotoDto>());
  
    React.useEffect(() => {
      (async (rec) => {
          let pictureList : DestructionImages | null = null;
        try {
          var response = (await (dataProvider.getImage(resource, record.id))).data;
          pictureList = JSON.parse(response);
        } catch (error) {
          console.warn('MyImageField error:', error)
        }
        console.log(pictureList);
        setImageBeforeList(pictureList!.before!);
        setImageAfterList(pictureList!.after!);
      })(record)
    }, [record, setImageBeforeList, setImageAfterList])

    if (!record) return null;
    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h6" gutterBottom>
                            {translate('bis.destruction.photos_before')}
                        </Typography></Grid>
         

        <Grid item xs={12} sm={12} md={12}>
            <ImageList
          sx={{ width: 500, height: 300 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {imageBeforeList.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <Zoom>
              <img
                src={`data:/jpeg;base64,${item.base64}`}
                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
                style={{ width: parseInt(size, 30), height: parseInt(size, 30)}}
              />
              </Zoom>
              <ImageListItemBar
            subtitle={`${item.description}`}
            position="below"
          />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h6" gutterBottom>
                            {translate('bis.destruction.photos_after')}
                        </Typography></Grid>
      <Grid item xs={12} sm={12} md={12}>
            <ImageList
          sx={{ width: 500, height: 300 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {imageAfterList.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <Zoom>
              <img
                src={`data:/jpeg;base64,${item.base64}`}
                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
                style={{ width: parseInt(size, 30), height: parseInt(size, 30)}}
              />
              </Zoom>
              <ImageListItemBar
            subtitle={`${item.description}`}
            position="below"
          />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>

        
    </Grid>
      
    );
};

export default DestructionImagesList;
function translate(arg0: string): React.ReactNode {
  throw new Error('Function not implemented.');
}

