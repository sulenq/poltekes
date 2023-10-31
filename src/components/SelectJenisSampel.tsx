import { Select } from "@chakra-ui/react";
import React from "react";

export default function SelectJenisSampel(props: any) {
  const formik = props?.formik;
  const name = props?.name;
  const jenisSampel = ["Sampel A", "Sampel B", "Sampel C"];

  return (
    <Select
      placeholder={props.placeholder || "Pilih jenis sampel"}
      onChange={(e) => {
        formik.setFieldValue(name, e.target.value);
      }}
    >
      {jenisSampel.map((s, i) => (
        <option key={i} value={s}>
          {s}
        </option>
      ))}
    </Select>
  );
}
