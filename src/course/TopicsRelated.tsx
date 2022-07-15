import { Box, Card, CardContent, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { ArrayField, BooleanField, ChipField, Datagrid, DateField, FunctionField, Labeled, Link, List, NumberField, ReferenceArrayField, ReferenceField, ReferenceManyField, SingleFieldList, TextField, useRedirect, useRecordContext, useTranslate, useNotify, Button, useDataProvider, useRefresh } from "react-admin";
import EntityAvatarField from "../database/common/EntityAvatarField";
import UserDetail from "../database/common/UserDetail";
import { TableCellRight } from "../orders/TableCellRight";
import { Course, CourseParticipant, ExplosiveMaterialQuantity, Topic, User } from "../types";
import rowStyle from "./rowStyle";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import React from "react";
import AddCourseMarkDialog from "./AddCourseMarkDialog";
import { useMutation } from 'react-query';
import dataProvider from "../dataProvider/dataProvider";
import CheckIcon from '@mui/icons-material/Check';


const ConditionalEndDateField = () => {
    const record: Topic = useRecordContext();
    return record && record.endDate != null ? <DateField source="endDate" label='bis.course.endDate' /> : null;
}
export interface CloseTopicButtonProps {
    topicId: string;

  }


const CloseTopicButton = (props: CloseTopicButtonProps) => {
    const {topicId} = props;
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const refresh = useRefresh();
    const { mutate, isLoading } = useMutation(
        ['markTopicAsDone', topicId],
        () => dataProvider.markTopicAsDone(topicId)
    );

    const handleTopicMarkAsDone = () => {
        mutate();
        notify('bis.course.topic_tone_confirmation', { type: 'success' })
        refresh();
    }
    return <IconButton onClick={() => { handleTopicMarkAsDone() }} disabled={isLoading}>
        <CheckIcon color="success" />
    </IconButton>
};

const TopicsRelated = () => {

    const translate = useTranslate();

    return (<><Box ml={2}>

        <Typography variant="subtitle1" gutterBottom>
            {translate('bis.course.topics')}
        </Typography>
        <ArrayField source="topics" label="bis.course.topics">
            <Datagrid isRowSelectable={() => false}>
                <NumberField label="bis.common.name" source="name" />
                <ConditionalEndDateField />
                <FunctionField render={(record: Topic) => record.endDate===null ? <CloseTopicButton topicId={record.id}/>: null} />
            </Datagrid>
        </ArrayField>
    </Box>
    </>
    );
}

export default TopicsRelated;