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
} from '../types';

const Aside = () => {
    const record = useRecordContext<Destruction>();
    return (
        <Box width={400} display={{ xs: 'none', lg: 'block' }}>
            {record.processItems && <EventList />}
        </Box>
    );
};

const EventList = () => {
    const record = useRecordContext<Destruction>();
    const translate = useTranslate();
    const [locale] = useLocaleState();


    return (
        <Box ml={2}>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {translate('bis.process.title')}
                    </Typography>
                

            <Stepper orientation="vertical" sx={{ mt: 1 }}>
                {record.processItems!.map(event => (
                    <Step
                        key={`${event.description}-`}
                        expanded
                        active
                        completed
                    >
                        <StepLabel icon={<CircleIcon color='disabled' />}
                        >
                            {event.title}
                        </StepLabel>
                        <StepContent>
                        <ProcessItemShow title={event.title} time={event.time} description={event.description} id={'1'} />
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            </CardContent>
            </Card>
            
        </Box>
    );
};


const ProcessItemShow = (event : ProcessItem) => {
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
                {event.description}
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
                {event.time} sec.
            </Typography>
        </>
    );
};

export default Aside;
