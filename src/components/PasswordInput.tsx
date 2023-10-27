import { Box, Icon, IconButton, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { iconSize } from "../const/sizes";
import { Eye, EyeSlash } from "@phosphor-icons/react";

export default function PasswordInput(props: any) {
  const formik = props?.formik;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Box position={"relative"}>
      <Input
        name="password"
        placeholder="Masukkan kata sandi"
        onChange={formik.handleChange}
        type={showPassword ? "text" : "password"}
        pr={"40px !important"}
      />
      <IconButton
        aria-label="show password button"
        icon={<Icon as={showPassword ? EyeSlash : Eye} fontSize={iconSize} />}
        bg={"transparent"}
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        position={"absolute"}
        right={0}
        zIndex={2}
        onClick={() => {
          setShowPassword((ps) => !ps);
        }}
      />
    </Box>
  );
}
