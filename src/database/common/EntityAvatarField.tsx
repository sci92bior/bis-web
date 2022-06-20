import * as React from 'react';
import { Avatar, SxProps } from '@mui/material';
import { FieldProps, useRecordContext } from 'react-admin';
import { BaseEntity, Customer, ExplosiveMaterial } from '../../types';
import dataProvider from '../../dataProvider/dataProvider';

interface Props extends FieldProps<BaseEntity> {
    sx?: SxProps;
    size?: string;
    resource: string;
    entityId?: string;
}

const EntityAvatarField = ({ size = '40', sx, resource, entityId= '' }: Props) => {
    const record = useRecordContext<BaseEntity>();
    const [base64, setbase64] = React.useState('');
  
    React.useEffect(() => {
      (async (rec) => {
          let response='';
        try {
          response = (await (dataProvider.getThumbnail(resource, entityId!=='' ? entityId : record.id))).data;
        } catch (error) {
          console.warn('MyImageField error:', error)
        }
        setbase64(response)
      })(record)
    }, [record, setbase64])

    if (!record) return null;
    return (
        <Avatar
            src={`data:/jpeg;base64,${base64}`}
            style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
            sx={sx}
        />
    );
};

export default EntityAvatarField;
