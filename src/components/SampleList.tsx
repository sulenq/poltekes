import {
  Box,
  ButtonGroup,
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
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
import { DotsThreeVertical, Eyedropper, Trash } from "@phosphor-icons/react";
import { iconSize } from "../const/sizes";
import TambahParameterModal from "./TambahParameterModal";
import useFormatNumber from "../utils/useFormatNumber";

export default function SampleList() {
  //TODO get data Sampel & Parameter

  // const data: any[] = [];
  const data = [
    {
      metode: "Metode A",
      parameter: "Kucing",
      harga: 2000000,
    },
    {
      metode: "Metode B",
      parameter: "Otter",
      harga: 3500000,
    },
  ];
  const fn = useFormatNumber;

  if (data.length > 0) {
    return (
      <Box>
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

            <TambahParameterModal />
          </ButtonGroup>
        </SimpleGrid>

        <TableContainer>
          <Table size={"sm"} variant={"striped"} colorScheme="ad">
            <Thead>
              <Tr>
                <Th isNumeric w={"20px"}>
                  No
                </Th>
                <Th>Metode</Th>
                <Th>Parameter</Th>
                <Th isNumeric>Harga</Th>
                <Th isNumeric></Th>
              </Tr>
            </Thead>

            <Tbody>
              {data.map((d, i) => (
                <Tr key={i}>
                  <Td isNumeric>{i + 1}</Td>
                  <Td>{d.metode}</Td>
                  <Td>{d.parameter}</Td>
                  <Td isNumeric whiteSpace={"nowrap"}>{`Rp ${fn(d.harga)}`}</Td>
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
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  return (
    <Center p={5} flexDir={"column"}>
      <Image src="/svg/sample.svg" maxW={"480px"} />
      <Text textAlign={"center"} fontWeight={500} maxW={"400px"}>
        Maaf, Saat Ini Anda Belum Memiliki Sampel Uji yang Tersedia
      </Text>
    </Center>
  );
}
