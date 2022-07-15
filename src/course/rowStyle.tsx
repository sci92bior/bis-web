import { Identifier } from "react-admin";
import { useTheme } from '@mui/material/styles';
import { CourseParticipant } from "../types";
import { green, red } from "@mui/material/colors";

const rowStyle = () => (record: CourseParticipant) => {
    let style = {};
    var mark = record.pluses - record.minuses
    if (!record) {
        return style;
    }
    
    if (mark>0)
        return {
            ...style,
            borderLeftColor: green[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    
    if (mark < 0)
        return {
            ...style,
            borderLeftColor: red[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    return style;
};

export default rowStyle;