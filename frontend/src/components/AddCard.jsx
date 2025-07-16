import { Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export default function AddCard({
  iconWidth = "20px",
  iconHeight = "20px",
  text,
  classname,
  ...props
}) {
  return (
    <button {...props} className={classname}>
      <AddIcon
        sx={{
          width: { iconWidth },
          height: { iconHeight },
        }}
      ></AddIcon>
      <Typography variant="subtitle1" component="paragraph">
        {text}
      </Typography>
    </button>
  );
}
