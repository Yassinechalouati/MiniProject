import { IconButton, Typography } from "@mui/material";

export default function IconBut({ text, sx, Icon, ...props }) {
  return (
    <IconButton {...props} sx={sx}>
      {Icon}
      {text && (
        <Typography variant="subtitle1" component="p">
          {text}
        </Typography>
      )}
    </IconButton>
  );
}
