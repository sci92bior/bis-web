import { Box, Card, CardContent, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { ArrayField, BooleanField, ChipField, Datagrid, DateField, FunctionField, Labeled, Link, List, NumberField, ReferenceArrayField, ReferenceField, ReferenceManyField, SingleFieldList, TextField, useRedirect, useRecordContext, useTranslate } from "react-admin";
import EntityAvatarField from "../database/common/EntityAvatarField";
import UserDetail from "../database/common/UserDetail";
import { TableCellRight } from "../orders/TableCellRight";
import { Course, CourseParticipant, ExplosiveMaterialQuantity, User } from "../types";
import rowStyle from "./rowStyle";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import React from "react";
import AddCourseMarkDialog from "./AddCourseMarkDialog";
import CommentIcon from '@mui/icons-material/Comment';
import ShowUserMarkDialog from "./ShowUserMarksDialog";

const UsersRelatedAside = () => {
    const translate = useTranslate();
    const record: Course = useRecordContext();

    const [addMarkOpen, setAddMarkOpen] = React.useState(false);
    const [markShowOpen, setMarkShowOpen] = React.useState(false);
    const [actualParticipant, setActualParticipant] = React.useState<CourseParticipant | null>(null);
    const [isPlus, setIsPlus] = React.useState<boolean>(true);

    const handleAddMarkClickOpen = (participant: CourseParticipant, isPlus: boolean) => {
        setActualParticipant(participant);
        setIsPlus(isPlus)
        setAddMarkOpen(true);
    };

    const handleAddMarkClose = () => {
        setAddMarkOpen(false);
    };

    const handleShowMarkClickOpen = (participant: CourseParticipant) => {
        setActualParticipant(participant);
        setMarkShowOpen(true);
    };

    const handleShowMarkClose = () => {
        setMarkShowOpen(false);
        
    };
    return (

        <><Box ml={2}>

            <Typography variant="subtitle1" gutterBottom>
                {translate('bis.course.participants')}
            </Typography>

            <ArrayField source="participants">
                <Datagrid rowStyle={rowStyle()} isRowSelectable={() => false} >
                    <ReferenceField label="bis.course.participant" source="participantId" reference="user">
                        <FunctionField render={(record: any) => `${record.firstName} ${record.lastName}`} />
                    </ReferenceField>
                    <NumberField label="bis.course.pluses" source="pluses" />
                    <NumberField label="bis.course.minuses" source="minuses" />
                    <FunctionField render={(record: any) => <IconButton onClick={() => { handleAddMarkClickOpen(record, true) }}>
                        <ThumbUpIcon color="success" />
                    </IconButton>} />
                    <FunctionField render={(record: any) => <IconButton onClick={() => { handleAddMarkClickOpen(record, false) }}>
                        <ThumbDownIcon color="error" />
                    </IconButton>} />
                    <FunctionField render={(record: any) => <IconButton onClick={() => { handleShowMarkClickOpen(record)}}>
                        <CommentIcon color="primary" />
                    </IconButton>} />

                </Datagrid>
            </ArrayField>

        </Box>
            <AddCourseMarkDialog open={addMarkOpen} isPlus={isPlus} participant={actualParticipant!} topics={record.topics} onClose={handleAddMarkClose} />
            <ShowUserMarkDialog open={markShowOpen} participant={actualParticipant!} onClose={handleShowMarkClose} />
        </>
    );
};

export default UsersRelatedAside;