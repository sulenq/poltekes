import { Select } from "@chakra-ui/react";
import React from "react";

export default function SelectParameterUji(props: any) {
  const formik = props?.formik;
  const name = props?.name;
  const data = ["Parameter A", "Parameter B", "Parameter C"];

  return (
    <Select
      placeholder={props.placeholder || "Pilih parameter uji"}
      onChange={(e) => {
        formik.setFieldValue(name, e.target.value);
      }}
    >
      {data.map((s, i) => (
        <option key={i} value={s}>
          {s}
        </option>
      ))}
    </Select>
  );
}
