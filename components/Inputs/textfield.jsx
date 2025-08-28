import { TextField } from "@mui/material";

export default function (props, ind) {
    return (
        <TextField
            id={`outlined-controlled_${ind}`}
            fullWidth
            label={props?.title || ''}
            value={props?.value || ''}
            onChange={props?.onChange || null}
        />
    )
}