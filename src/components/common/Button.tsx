import React from "react";
import {
  Button as NBButton,
  IButtonProps,
  useColorModeValue,
} from "native-base";

interface CustomButtonProps extends IButtonProps {
  variant?: "solid" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  ...props
}) => {
  // Theme-aware colors
  const bgColor = useColorModeValue("primary.500", "primary.400");
  const textColor = useColorModeValue("white", "white");
  const borderColor = useColorModeValue("primary.500", "primary.400");

  return (
    <NBButton
      variant={variant}
      size={size}
      bg={variant === "solid" ? bgColor : "transparent"}
      borderColor={variant === "outline" ? borderColor : "transparent"}
      _text={{
        color: variant === "solid" ? textColor : borderColor,
        fontWeight: "bold",
      }}
      _pressed={{
        bg: variant === "solid" ? "primary.600" : "primary.50",
        _dark: {
          bg: variant === "solid" ? "primary.300" : "primary.900",
        },
      }}
      borderRadius="md"
      {...props}
    >
      {children}
    </NBButton>
  );
};

export default Button;
