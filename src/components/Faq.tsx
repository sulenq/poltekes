import { Accordion, Text } from "@chakra-ui/react";
import React from "react";
import faqs from "../const/faqs";
import FaqItemComponent from "./FaqItem";

export default function Faq() {
  return (
    <>
      <Text fontSize={24} fontWeight={700} mb={6}>
        FAQ <span style={{ opacity: 0.5 }}>(Frequently Asked Questions)</span>
      </Text>

      <Accordion allowMultiple>
        {faqs.map((faq, i) => (
          <FaqItemComponent key={i} faq={faq} />
        ))}
      </Accordion>
    </>
  );
}
