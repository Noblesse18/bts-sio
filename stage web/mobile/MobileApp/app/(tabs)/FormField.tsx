import React, { RefObject } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface FormFieldProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  inputRef?: RefObject<TextInput>;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChangeText,
  error,
  placeholder,
  secureTextEntry = false,
  inputRef,
  ...rest
}) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>{label}</Text>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={{
          borderWidth: 1,
          borderColor: error ? "red" : "#ccc",
          borderRadius: 5,
          padding: 10,
        }}
        {...rest}
      />
      {error && <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>}
    </View>
  );
};

export default FormField;
