import { Box, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { CaretRight } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import { Link } from "react-router-dom";

export default function PengumumanList() {
  const data = [
    {
      title: "Lorem ipsum dolor sit amet consectetur. Non tincidunt.",
      link: "",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur. Non tincidunt.",
      link: "",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur. Non tincidunt.",
      link: "",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur. Non tincidunt.",
      link: "",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur. Non tincidunt.",
      link: "",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur. Non tincidunt.",
      link: "",
    },
  ];

  const bgList = useColorModeValue("white", "dark");

  return (
    <Box>
      {data.map((pengumuman, i) => (
        <HStack
          key={i}
          py={2}
          pl={4}
          pr={2}
          borderRadius={8}
          bg={bgList}
          mb={2}
          as={Link}
          to={pengumuman.link}
          justify={"space-between"}
        >
          <Text>{pengumuman.title}</Text>

          <Icon as={CaretRight} fontSize={iconSize} />
        </HStack>
      ))}
    </Box>
  );
}
