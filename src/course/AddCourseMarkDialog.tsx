import { Box, Dialog, DialogContent, DialogTitle, Divider, Grid, TextField, Typography } from "@mui/material";
import { format } from "date-fns";
import { RichTextInput } from "ra-input-rich-text";
import { useMutation } from 'react-query';
import { useRefresh, useRedirect, useRecordContext, Labeled, ReferenceField, ReferenceArrayField, ReferenceManyField, FunctionField, useTranslate, Create, Form, SaveButton, TextInput, SimpleForm, ReferenceInput, SelectInput, Button, Toolbar, useDataProvider, useNotify } from "react-admin";
import UserDetail from "../database/common/UserDetail";
import { CourseParticipant, Topic } from "../types";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useController, useWatch, useFormContext } from "react-hook-form";

export interface AddCourseMarkDialogProps {
  open: boolean;
  topics: Array<Topic>;
  onClose: () => void;
  participant: CourseParticipant;
  isPlus: boolean;
}
const AddCourseMarkDialog = (props: AddCourseMarkDialogProps) => {
  const { onClose, topics, participant, open, isPlus } = props;
  const translate = useTranslate();


  const PostCreateToolbar = () => {

    const notify = useNotify();
    return (
      <Toolbar>
        <AddMarkButton />
      </Toolbar>
    );
  };
  const AddMarkButton = () => {
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const { getValues, setValue } = useFormContext();
    const refresh = useRefresh();

    const { mutate, isLoading } = useMutation(
      ['banUser', participant.participantId],
      () => dataProvider.addUserMark({ ...getValues(), isPlus: isPlus, participantId: participant.participantId }).then(refresh())
    );
    const handleSendMark = () => {
      console.log(getValues())
      mutate();
      if (!isLoading) {
        notify(`bis.course.mark_confirmation`, { type: 'success', undoable: true  });
        handleClose();
      }

    }

    return <Button color="primary" label="bis.common.add" onClick={() => handleSendMark()} disabled={isLoading} />;
  };



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
        <DialogTitle>{translate('bis.course.add_mark')}</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {isPlus ? <ThumbUpIcon color="success" /> : <ThumbDownIcon color="error" /> }
            </Grid>
            <Grid item xs={8}>
              <ReferenceField
                record={participant}
                source="participantId"
                reference="user"
              >
                <UserDetail />
              </ReferenceField>
            </Grid>

          </Grid>

          <Create>
            <SimpleForm toolbar={<PostCreateToolbar />} >
              <SelectInput source="topic_id" choices={topics} optionText="name" optionValue="id" fullWidth />
              <TextInput source="description" multiline fullWidth />
            </SimpleForm>
          </Create>

        </DialogContent>


      </Dialog>
    );
  }
}

export default AddCourseMarkDialog;
