import * as React from 'react';
import { Avatar, SxProps, ImageList, ImageListItem } from '@mui/material';
import { FieldProps, useRecordContext } from 'react-admin';
import { BaseEntity, Customer, ExplosiveMaterial, PhotoDto } from '../../types';
import dataProvider from '../../dataProvider/dataProvider';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Photo, } from '@mui/icons-material';

interface Props extends FieldProps<BaseEntity> {
    sx?: SxProps;
    size?: string;
    resource: string;
}

const BISImageList = ({ size = '50', sx, resource}: Props) => {
    const record = useRecordContext<BaseEntity>();
    const [imageList, setImageList] = React.useState(Array<PhotoDto>());
  
    React.useEffect(() => {
      (async (rec) => {
          let pictureList= Array<PhotoDto>();
        try {
          var response = (await (dataProvider.getImage(resource, record.id))).data;
          pictureList = JSON.parse(response);
        } catch (error) {
          console.warn('MyImageField error:', error)
        }
        setImageList(pictureList)
      })(record)
    }, [record, setImageList])

    if (!record) return null;
    return (
      <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {imageList.map((item) => (
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
        </ImageListItem>
      ))}
    </ImageList>
    );
};

export default BISImageList;
