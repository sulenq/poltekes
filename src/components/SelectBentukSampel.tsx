import { Select } from "@chakra-ui/react";
import React from "react";

export default function SelectBentukSampel(props: any) {
  const formik = props?.formik;
  const name = props?.name;
  const bentukSampel = [
    "Padat",
    "Cair",
    "Gas",
    "Lembek",
    "Berasap",
    "Berduri",
    "Berdansa",
  ];

  return (
    <Select
      placeholder={props.placeholder || "Pilih bentuk sampel"}
      _placeholder={{ color: "var(--divider)" }}
      onChange={(e) => {
        formik.setFieldValue(name, e.target.value);
      }}
    >
      {bentukSampel.map((s, i) => (
        <option key={i} value={s}>
          {s}
        </option>
      ))}
    </Select>
  );
}
