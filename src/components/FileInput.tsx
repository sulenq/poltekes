import { Box, Button, HStack, Input, Text, Tooltip } from "@chakra-ui/react";
import React, { useRef } from "react";

type Props = {
  formik: any;
  name: string;
  accept?: string;
};

export default function FileInput(props: Props) {
  const formik = props.formik;
  const name = props.name;
  const accept = props.accept;
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Input
        ref={inputRef}
        display={"none"}
        name={name}
        type="file"
        accept={accept || "*"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const files: FileList | null = e.target.files;
          if (files && files.length > 0) {
            const file = files[0];
            formik.setFieldValue(name, [file]); // Setel ke array dengan satu file
          }
          console.log(files);
        }}
        mb={4}
      />

      <Button
        px={0}
        w={"100%"}
        fontWeight={400}
        variant={"ghost"}
        className="btn"
        gap={0}
        border={"1px solid var(--divider3)"}
        boxShadow={formik.errors[name] ? "0 0 0px 1px var(--red)" : ""}
        borderRadius={8}
        cursor={"pointer"}
        _focus={{ boxShadow: "0 0 0px 2px var(--p500)" }}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
      >
        <HStack gap={0} w={"100%"}>
          <HStack
            h={"40px"}
            flexShrink={0}
            px={4}
            py={2}
            borderRadius={"8px 0 0 8px"}
            bg={"var(--divider3)"}
          >
            <Text fontSize={[12, null, 14]}>Pilih File</Text>
          </HStack>

          <Box px={4} py={2}>
            <Tooltip
              label={
                formik.values[name].length > 0
                  ? formik.values[name]
                      .map((file: File) => file.name)
                      .join(", ")
                  : ""
              }
            >
              <Text
                noOfLines={1}
                fontSize={[12, null, 14]}
                whiteSpace={"normal"}
              >
                {formik.values[name].length > 0
                  ? formik.values[name]
                      .map((file: File) => file.name)
                      .join(", ")
                  : "Pilih berkas yang ingin diunggah"}
              </Text>
            </Tooltip>
          </Box>
        </HStack>
      </Button>
    </>
  );
}
