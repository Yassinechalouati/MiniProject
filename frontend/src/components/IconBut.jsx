import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

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
