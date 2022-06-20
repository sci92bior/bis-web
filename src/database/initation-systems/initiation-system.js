import { Avatar, Grid } from "@mui/material";
import * as React from "react";
import { List, Datagrid, TextField, ImageInput, NumberField, NumberInput, ImageField, useRecordContext, FunctionField, BooleanField, BooleanInput, EditButton, ShowBase, DeleteButton, usePermissionsOptimized } from 'react-admin';
import { Toolbar, SaveButton, SelectInput, TextInput, Edit, SimpleForm, Create, Show,SimpleShowLayout, TabbedShowLayout, Tab, TopToolbar, usePermissions} from 'react-admin';
import dataProvider from "../../dataProvider/dataProvider";


 const AvatarField = () => {
    const record = useRecordContext();
    const [imageUrl, setImageUrl] = React.useState('');
  
    React.useEffect(() => {
      (async (rec) => {
          let response='';
        try {
          response = await dataProvider.getImage("initiation-system", record.id)
        } catch (error) {
          console.warn('MyImageField error:', error)
        }
        setImageUrl(response.data)
      })(record)
    }, [record, setImageUrl])
  
    console.log(`data:/jpeg;base64,${imageUrl}`)
    return <Avatar src={`data:/jpeg;base64,${imageUrl}`} />
  }


  const DetailImageField = () => {
    const record = useRecordContext();
    const [imageUrl, setImageUrl] = React.useState('');
  
    React.useEffect(() => {
      (async (rec) => {
          let response='';
        try {
          response = await dataProvider.getImage("initiation-system", record.id)
        } catch (error) {
          console.warn('MyImageField error:', error)
        }
        setImageUrl(response.data)
      })(record)
    }, [record, setImageUrl])
  
    return <img alt="that wanaka tree" src={`data:/jpeg;base64,${imageUrl}`} width="300"/>
  }
 
export const InitiationSystemList = () => (
    
    <List >
        <Datagrid rowClick="show">
            <AvatarField source = "id"  />
            <TextField source="name" label="bis.common.name" />
            <BooleanField source="isApproved" label="bis.common.approved" />
        </Datagrid>
    </List>
);

// export const ExplosiveMaterialEdit = () => (
//     <Edit>
//         <SimpleForm>
//         <ImageInput source="pictures" label="Related pictures" accept="image/*">
//                     <ImageField source="src" title="title" />
//                 </ImageInput>
//             <TextInput disabled source="id" />
//             <TextInput source="name" label="bis.exposive_materials.name" />
//            <NumberInput source="rFactor" label="bis.exposive_materials.rFactor"/>
//            <BooleanInput source="isApproved" label="bis.exposive_materials.approved"/>
//            <NumberInput source="grain" label="bis.exposive_materials.grains" />
//            <SelectInput source="unitType" choices={unitType} label="bis.exposive_materials.unitType"/>
//         </SimpleForm>
//     </Edit>
// );

// const PostCreateToolbar = props => <Toolbar {...props} >
//     <SaveButton label="Zapisz" redirect={false} />
// </Toolbar>;


export const InitiationSystemCreate = props => (
        <Create {...props} >
            <SimpleForm>
                <ImageInput source="pictures" label="Related pictures" accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>
                <TextInput source="name" label="bis.common.name" />

            </SimpleForm>
        </Create>
    );

//     const ExplosiveMaterialTitle = () => {
//         const record = useRecordContext();
//         // the record can be empty while loading
//         if (!record) return null;
//         return <span>{record.name}</span>;
//     };

//     const ExplosiveMaterialShowActions = () => {
//         const { isLoading, permissions } = usePermissions(); 
//         if (isLoading) return null;
//         return (
//             <TopToolbar>
//                 {permissions.includes('ADMIN') && <EditButton />}
//             </TopToolbar>
//         );
//     }

//     export const ExplosiveMaterialShow = () => (
//         <Show title={<ExplosiveMaterialTitle />} actions={<ExplosiveMaterialShowActions />}>
//             <TabbedShowLayout>
//                 <Tab label="bis.common.summary">
//                 <Grid container spacing={3}>
//             <Grid item xs={3}>
//                 <SimpleShowLayout>
//                     <DetailImageField />
//                 </SimpleShowLayout>
//             </Grid>
//             <Grid item xs={2}>
//                 <SimpleShowLayout>
                
//                     <TextField source="name" label="bis.exposive_materials.name"/>
//                     <FunctionField label="Created at" render={record => `${record.creationDate[0]}-${record.creationDate[1]}-${record.creationDate[2]}`} />
//                     <FunctionField label="Updated at" render={record => `${record.updateDate[0]}-${record.updateDate[1]}-${record.updateDate[2]}`} />
//                     <BooleanField label="bis.exposive_materials.approved" source="isApproved" />
//                     <NumberField source="reFactor" label="bis.exposive_materials.rFactor" options={{ maximumFractionDigits: 2 }}/>
//                     <NumberField source="grain" label="bis.exposive_materials.grains" options={{ maximumFractionDigits: 2 }}/>
//                     <FunctionField label="bis.exposive_materials.unitType" render={record => `${unitType.find(x => x.id === record.unitType).name}`} />
//                 </SimpleShowLayout>
//             </Grid>
//             <Grid item xs={2}>
//                 <SimpleShowLayout>
                
//                 </SimpleShowLayout>
//             </Grid>
            
//         </Grid>
                   
//                 </Tab>
//                 <Tab label="bis.exposive_materials.usedIn" path="explosive-units">
                    
//                 </Tab>
//             </TabbedShowLayout>
//         </Show>
//     );