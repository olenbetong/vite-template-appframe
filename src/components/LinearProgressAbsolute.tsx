import { Box, LinearProgress, LinearProgressProps } from "@mui/material";

export default function LinearProgressAbsolute(props: LinearProgressProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <LinearProgress
        sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 }}
        {...props}
      />
    </Box>
  );
}
