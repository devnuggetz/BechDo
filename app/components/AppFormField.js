import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...otherProps }) => {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      {touched[name] && (
        <AppText style={{ color: "red" }}>{errors[name]}</AppText>
      )}
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
