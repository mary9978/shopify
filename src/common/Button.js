import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const ButtonComponent = () => {
    const theme = useTheme();
  return (
    <Button variant="outlined" sx={{color:`${theme.palette.primary.light}`}}>
      material Button
    </Button>
  );
};

export default ButtonComponent;
