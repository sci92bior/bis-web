import { Box, Card, CardContent, Typography } from "@mui/material";
import { BooleanField, Datagrid, DateField, Labeled, ReferenceField, ReferenceManyField, TextField, useRecordContext, useTranslate } from "react-admin";
import UserDetail from "../database/common/UserDetail";

export interface DestructionRelatedAsideProps {
    target: string;
  }

const DestructionRelatedAside = (props : DestructionRelatedAsideProps) => {
    const {target} = props;
    const translate = useTranslate();
    return (
        
        <Box ml={2}>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {translate('bis.common.usedIn')}
                    </Typography>
            <ReferenceManyField
                    reference="destruction"
                    target={`${target}`}
                    perPage={20}
                >
                    <Datagrid
                       isRowSelectable={() => false}
                       rowClick='show'
                    >
                        <DateField source="date" label="bis.common.creationDate" />
                        <TextField source="destructionType" label="bis.common.type"/>
                        <TextField source="place" label="bis.common.localization"/>
                        <BooleanField source="go" label="bis.destruction.go_or_no"/>
                        <ReferenceField
                                    source="performerId"
                                    reference="user"
                                    label='bis.common.performer'
                                >
                                    <UserDetail />
                                </ReferenceField>
                        
                        {/* <EditButton /> */}
                    </Datagrid>
                </ReferenceManyField>
                </CardContent>
                </Card>
        </Box>
    );
};

export default DestructionRelatedAside;