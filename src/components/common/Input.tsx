import React from "react";
import {
  Input as NBInput,
  IInputProps,
  FormControl,
  useColorModeValue,
} from "native-base";

interface CustomInputProps extends IInputProps {
  label?: string;
  error?: string;
  isRequired?: boolean;
}

const Input: React.FC<CustomInputProps> = ({
  label,
  error,
  isRequired = false,
  ...props
}) => {
  // Theme-aware colors
  const bgColor = useColorModeValue("white", "dark.surface");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const focusBorderColor = useColorModeValue("primary.500", "primary.400");
  const textColor = useColorModeValue("light.text", "dark.text");
  const placeholderColor = useColorModeValue("gray.400", "gray.500");

  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      {label && (
        <FormControl.Label
          _text={{
            color: textColor,
            fontSize: "sm",
            fontWeight: "medium",
          }}
        >
          {label}
        </FormControl.Label>
      )}
      <NBInput
        bg={bgColor}
        borderColor={borderColor}
        _focus={{
          borderColor: focusBorderColor,
          bg: bgColor,
        }}
        _text={{
          color: textColor,
        }}
        placeholderTextColor={placeholderColor}
        size="lg"
        borderRadius="md"
        {...props}
      />
      {error && <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>}
    </FormControl>
  );
};

export default Input;
