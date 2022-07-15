import { Dialog } from "@mui/material";
import { useState } from "react";
import { Create, SimpleForm, ImageInput, ImageField, TextInput, NumberInput, SelectInput, AutocompleteInput, ReferenceInput, required, useDataProvider, useRedirect, SaveButton, Toolbar, DateInput, SelectArrayInput, ReferenceArrayInput, ArrayInput, SimpleFormIterator, DateTimeInput } from "react-admin";
import { User } from "../types";

const validateRequired = required();

const optionRenderer = (user: User) => `${user.firstName} ${user.lastName}`;

export const CourseCreate = () => {

    return (
        <Create>
            <SimpleForm >
                <TextInput source="name" label="bis.common.name" />
                <ReferenceInput
                    source="instructorId"
                    reference="user"
                    filter={{ role: "INSTRUCTOR" }}
                >
                    <SelectInput optionText={optionRenderer} />
                </ReferenceInput>
                <DateTimeInput source="startDate" label="bis.course.start_time" />
                <DateTimeInput source="endDate" label="bis.course.end_time" />
                <ReferenceArrayInput label="bis.course.student" filter={{ role: "USER" }} source="participants" reference="user">
                    <SelectArrayInput optionText={optionRenderer} />
                </ReferenceArrayInput>
                <ArrayInput source="topics">
                    <SimpleFormIterator>
                        <TextInput source="name" />
                    </SimpleFormIterator>
                </ArrayInput>

            </SimpleForm>
        </Create>
    );
};