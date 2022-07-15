import { Box, Dialog, DialogContent, DialogTitle, Divider, Grid, TextField, Typography } from "@mui/material";
import { format } from "date-fns";
import { RichTextInput } from "ra-input-rich-text";
import { useMutation } from 'react-query';
import { useRefresh, useRedirect, useRecordContext, Labeled, ReferenceField, ReferenceArrayField, ReferenceManyField, FunctionField, useTranslate, Create, Form, SaveButton, TextInput, SimpleForm, ReferenceInput, SelectInput, Button, Toolbar, useDataProvider, useNotify } from "react-admin";
import UserDetail from "../database/common/UserDetail";
import { CourseParticipant, Topic, TopicMark, User } from "../types";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useController, useWatch, useFormContext } from "react-hook-form";
import { Mark } from "./Mark";

export interface ShowUserMarkDialogProps {
  onClose: () => void;
  participant: CourseParticipant;
  open: boolean;

}
const ShowUserMarkDialog = (props: ShowUserMarkDialogProps) => {
  const { onClose, participant, open } = props;
  const translate = useTranslate();

  const handleClose = () => {
    onClose()
  };

  const handleListItemClick = () => {
  };

  if (participant === null) {
    return <div></div>
  } else {
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle> 
          <ReferenceField
          record={participant}
          source="participantId"
          reference="user"
        >
          <FunctionField render={(record: User) => <h2>{record.firstName} {record.lastName}</h2>} />
        </ReferenceField></DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>

            {participant.marks.map((item: TopicMark) => (
              <Grid item xs={12}>
                <Mark mark={item} />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}

export default ShowUserMarkDialog;
