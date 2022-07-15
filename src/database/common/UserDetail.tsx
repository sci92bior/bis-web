import { Typography } from "@mui/material";
import { useRecordContext } from "react-admin";
import { User } from "../../types";

const UserDetail = () => {
    const record = useRecordContext<User>();
    return (
        <div>
            <Typography>
                {record?.firstName} {record?.lastName}
            </Typography>
        </div>
    );
};

export default UserDetail;