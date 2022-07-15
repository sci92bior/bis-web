import * as React from 'react';
import { useState, FormEvent, ChangeEvent } from 'react';
import {
    TextField,
    ReferenceField,
    DateField,
    useResourceContext,
    useDelete,
    useUpdate,
    useNotify,
    useRecordContext,
    FunctionField,
} from 'react-admin';
import {
    Box,
    Typography,
    Tooltip,
    IconButton,
    FilledInput,
    Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import TrashIcon from '@mui/icons-material/Delete';
import { TopicMark, User } from '../types';
import UserDetail from '../database/common/UserDetail';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import NbItemsField from '../orders/NbItemsField';


export const Mark = ({
    mark,
}: {
    mark: TopicMark;

}) => {
    const [isHover, setHover] = useState(false);
    const resource = useResourceContext();
    const record = useRecordContext();
    const notify = useNotify();

    const [update, { isLoading }] = useUpdate();

    // const [deleteNote] = useDelete(
    //     resource,
    //     { id: note.id, previousData: note },
    //     {
    //         mutationMode: 'undoable',
    //         onSuccess: () => {
    //             notify('Note deleted', { type: 'info', undoable: true });
    //             update(reference, {
    //                 id: record.id,
    //                 data: { nb_notes: record.nb_notes - 1 },
    //                 previousData: record,
    //             });
    //         },
    //     }
    // );

    const handleDelete = () => {
        //deleteNote();
    };


    return (
        <Box
            
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Box  color="text.secondary">
                <ReferenceField
                    record={mark}
                    source="instructorId"
                    reference="user"
                >
                    <FunctionField render={(record: User) => `${record.firstName} ${record.lastName}`} />
                </ReferenceField>{' '}
                <Typography component="span" variant="body1">
                    added a mark{' '}
                </Typography>
                <DateField
                    source="createDate"
                    record={mark}
                    variant="body1"
                    showTime
                    locales="en"
                    options={{
                        dateStyle: 'full',
                        timeStyle: 'short',
                    }}
                />{' '}{mark.isPlus ? <ThumbUpIcon color='success'/> : <ThumbDownIcon color='error'/> }
                
            </Box>
            
                <Box
                    sx={{
                        bgcolor: mark.isPlus ? 'green' : 'red',
                        padding: '0 1em',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'stretch',
                        marginBottom: 1,
                    }}
                >
                    <Box flex={1}>
                        {mark.description
                            .split('\n')
                            .map((paragraph: string, index: number) => (
                                <Box
                                    component="p"
                                    //fontFamily="fontFamily"
                                    fontSize="body1.fontSize"
                                    lineHeight={1.3}
                                    marginBottom={2.4}
                                    key={index}
                                >
                                    {paragraph}
                                </Box>
                            ))}
                    </Box>
                    <Box
                        sx={{
                            marginLeft: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            visibility: isHover ? 'visible' : 'hidden',
                        }}
                    >
                    
                        <Tooltip title="Delete note">
                            <IconButton size="small" onClick={handleDelete}>
                                <TrashIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            
        </Box>
    );
};
