import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "../AppPicker";

const AppFormPicker = ({
  items,
  name,
  placeholder,
  numberOfColumns,
  width,
  PickerItemComponent,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        numberOfColumns={numberOfColumns}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      {touched[name] && (
        <AppText style={{ color: "red" }}>{errors[name]}</AppText>
      )}
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
