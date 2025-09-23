import { TextField } from "@mui/material";
import React from "react";

export default function (props, ind) {
    return (
        <TextField
            sx={props.child_style}
            id={`outlined-controlled_${ind}`}
            fullWidth={props?.fullWidth || false}
            color={props?.color || 'primary'}
            size={props?.size || 'small'}
            variant={props?.variant || 'outlined'}
            label={props?.floating_label ? props?.title || "sample label" : ""}
            placeholder={props?.floating_label ? "" : props?.title || "sample label"}
            value={props?.value || ""}
            onChange={props?.onChange || null}
            required={props?.is_mandatory || false}
        />

    )
}