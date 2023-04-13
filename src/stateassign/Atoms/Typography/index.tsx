import React from "react";
import { Typography } from "@mui/material";
import { SxProps } from "@mui/material";
import {Stack} from "@mui/material";

interface TypographyProps {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
  img?: string;
  sx?:SxProps;
  imgPosition?:string;
}

const TypographyWithImage: React.FC<TypographyProps> = ({
  children,
  variant,
  img,
  sx,
  imgPosition,
}) => {
  const Component = img ? "div" : Typography;
  return (
    <Typography variant={variant} sx={sx}>
    <Stack direction='row' alignItems='center' justifyContent='center'>
      {imgPosition === 'left' && img && (
        <img src={img} alt="" style={{ width: "30px", height: "30px" }} />
      )}
      {children}
      {imgPosition === 'right' && img && (
        <img src={img} alt="" style={{ width: "30px", height: "30px" }} />
      )}
    </Stack>
  </Typography>
  );
};

export default TypographyWithImage;
