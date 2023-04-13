
import { Button, ButtonProps, SxProps } from "@mui/material";
import React from "react";

interface ButtonWithImageProps extends ButtonProps {
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  active?: boolean;
}

const ButtonWithImage: React.FC<ButtonWithImageProps> = ({
  children,
  onClick,
  image,
  active,
  imageAlt = "",
  sx,
  ...rest
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 20px",
        border: "2px solid #000",
        borderRadius: "10px",
        background: "#fff",
        cursor: "pointer",
        height: "50px",
        width: "300px",
        fontSize: "1.2rem",
        textTransform: "none",
        ...sx,
      }}
      {...rest}
    >
      <img
        src={image}
        alt={imageAlt}
        style={{ marginRight: "10px", height: "30px", width: "30px" }}
      />
      {children}
    </Button>
  );
};

export default ButtonWithImage;
