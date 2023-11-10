import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Center,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaqItemType } from "../const/types";
import { CaretDown } from "@phosphor-icons/react";

type Props = {
  faq: FaqItemType;
};

export default function FaqItemComponent({ faq }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <AccordionItem className="accordionItem" mb={4}>
      <AccordionButton
        p={4}
        borderRadius={16}
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={() => {
          if (isOpen) {
            onClose();
          } else {
            onOpen();
          }
        }}
      >
        <Text
          fontSize={[16, null, 18]}
          fontWeight={500}
          textAlign={"left"}
          mr={8}
        >
          {faq.question}
        </Text>

        <Center
          bg={isOpen ? "p.500" : "var(--divider)"}
          borderRadius={"full"}
          p={2}
          alignSelf={"flex-start"}
        >
          <Icon
            as={CaretDown}
            fontSize={[18, null, 20]}
            weight="bold"
            color={isOpen ? "white" : "p.500"}
            transform={isOpen ? "rotate(-180deg)" : ""}
            transition={"200ms"}
          />
        </Center>
      </AccordionButton>

      <AccordionPanel p={4} pt={3}>
        <Text lineHeight={"187.5%"}>{faq.answer}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
}
