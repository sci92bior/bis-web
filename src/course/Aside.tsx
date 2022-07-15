import * as React from 'react';
import {
    NumberField,
    TextField,
    DateField,
    useTranslate,
    useGetList,
    RecordContextProvider,
    ReferenceField,
    useLocaleState,
    useRecordContext,
    FunctionField,
} from 'react-admin';
import {
    Typography,
    Card,
    CardContent,
    Box,
    Link,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Grid,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import {
    Order as OrderRecord,
    Review as ReviewRecord,
    Customer,
    Destruction,
    ProcessItem,
    Course,
    TopicMark,
} from '../types';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const CourseMarkAside = () => {
    const record = useRecordContext<Course>();
    return (
        <Box width={400} display={{ xs: 'none', lg: 'block' }}>
            {record.lastMarks && <MarkList />}
        </Box>
    );
};

const MarkList = () => {
    const record = useRecordContext<Course>();
    const translate = useTranslate();
    const [locale] = useLocaleState();


    return (
        <Box ml={2}>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {translate('bis.course.last_marks')}
                    </Typography>
                

            <Stepper orientation="vertical" sx={{ mt: 1 }}>
                {record.lastMarks!.map(event => (
                    <Step
                        key={`${event.description}`}
                        expanded
                        active
                        completed
                    >
                        <StepLabel icon={event.isPlus ? <ThumbUpIcon color='success' /> : <ThumbDownIcon color='error' /> }
                        >
                            {event.description}
                        </StepLabel>
                        <StepContent>
                        <ProcessItemShow instructorId={event.instructorId} createDate={event.createDate} description={event.description} isPlus={event.isPlus} topic={event.topic} id={event.id} participantId={event.participantId} />
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            </CardContent>
            </Card>
            
        </Box>
    );
};


const ProcessItemShow = (event : TopicMark) => {
    return (
        <>
            <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                <ReferenceField record={event} label="bis.course.participant" source="participantId" reference="user">
                        <FunctionField render={(record: any) => `${record.firstName} ${record.lastName}`} />
                    </ReferenceField>
            </Typography>
            <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}
            >
                {event.topic?.name}
            </Typography>
            <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}
            >
                {event.createDate}
            </Typography>
        </>
    );
};

export default CourseMarkAside;
