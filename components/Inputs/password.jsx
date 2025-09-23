import React from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function (props) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();
    const handleMouseUpPassword = (event) => event.preventDefault();

    return (
        <FormControl required sx={{ ...props.child_style }} variant="outlined" size="small">
            {props?.floating_label && <InputLabel htmlFor="outlined-adornment-password">
                Password
            </InputLabel>}

            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                color={props?.color || "secondary"}
                value={props?.value || ""}
                onChange={props.onChange || null}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={showPassword ? "hide the password" : "display the password"}
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={props?.floating_label ? "Password" : ""}
                placeholder={props?.floating_label ? "" : props?.title || "sample label"}
                sx={props.child_style}
            />
        </FormControl>
    );
}
