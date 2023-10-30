import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Icon,
  IconButton,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import TableContainer from "./TableContainer";
import {
  DotsThreeVertical,
  Eyedropper,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import { iconSize } from "../const/sizes";

export default function Sample() {
  return (
    <Box mb={4}>
      <SimpleGrid columns={[1, 1, 2, 2]} gap={2} mb={4}>
        <HStack>
          <Icon as={Eyedropper} fontSize={iconSize} />
          <Text fontWeight={500}>001 - Anjay Sample</Text>
        </HStack>

        <ButtonGroup justifySelf={[null, null, "flex-end", "flex-end"]}>
          <IconButton
            aria-label="delete sample"
            icon={<Icon as={Trash} fontSize={iconSize} />}
            variant={"outline"}
            colorScheme="red"
            className="clicky"
          />
          <Button
            leftIcon={<Icon as={Plus} fontSize={iconSize} weight="bold" />}
            variant={"outline"}
            colorScheme="ap"
            className="lg-clicky"
          >
            Masukkan Parameter
          </Button>
        </ButtonGroup>
      </SimpleGrid>

      <TableContainer>
        <Table size={["sm", null, "md"]}>
          <Thead>
            <Tr>
              <Th isNumeric>No</Th>
              <Th>Metode</Th>
              <Th>Parameter</Th>
              <Th isNumeric>Harga</Th>
              <Th isNumeric></Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td isNumeric>1</Td>
              <Td>Gatau</Td>
              <Td>Kucing</Td>
              <Td isNumeric>2.000.000</Td>
              <Td isNumeric>
                <IconButton
                  aria-label="more"
                  icon={
                    <Icon
                      as={DotsThreeVertical}
                      fontSize={iconSize}
                      weight="bold"
                    />
                  }
                  variant={"ghost"}
                  className="btn"
                  borderRadius={"full"}
                  size={["sm", null, "md"]}
                  w={["32px", null, ""]}
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
