import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageInputList from "./ImageInputList";

const FormImagePicker = ({ name }) => {
    
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris= values[name]

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris], uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(name, imageUris.filter((imageUri) => imageUri != uri));
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      {touched[name] && (
        <AppText style={{ color: "red" }}>{errors[name]}</AppText>
      )}
    </>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
