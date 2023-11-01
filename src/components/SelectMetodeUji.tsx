import { Select } from "@chakra-ui/react";
import React from "react";

export default function SelectMetodeUji(props: any) {
  const formik = props?.formik;
  const name = props?.name;
  const data = ["Metode A", "Metode B", "Metode C"];

  return (
    <Select
      placeholder={props.placeholder || "Pilih metode uji"}
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
