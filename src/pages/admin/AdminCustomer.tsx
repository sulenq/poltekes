import React from "react";
import AdminContainer from "../../components/AdminContainer";
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ArrowDown,
  ArrowUp,
  CaretDown,
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";

export default function AdminCustomer() {
  const bg = useColorModeValue("white", "dark");

  // TODO get data
  const data = [
    {
      id: "1",
      username: "user1",
      email: "example@examplemail.com",
      namaLengkap: "Panjul Aselole",
      telepon: "0852671876343",
      instansi: "Udinus Jaya",
      alamat: "Jalan Kenangan Mantan",
    },
    {
      id: "2",
      username: "user1",
      email: "example@examplemail.com",
      namaLengkap: "Jolitos Kurniawan",
      telepon: "0852671876343",
      instansi: "Udinus Jaya",
      alamat: "Jalan Kenangan Mantan",
    },
    {
      id: "3",
      username: "user1",
      email: "example@examplemail.com",
      namaLengkap: "Naomi Sinaga",
      telepon: "0852671876343",
      instansi: "Udinus Jaya",
      alamat: "Jalan Kenangan Mantan",
    },
    {
      id: "4",
      username: "user1",
      email: "example@examplemail.com",
      namaLengkap: "Karlitos Simmeon",
      telepon: "0852671876343",
      instansi: "Udinus Jaya",
      alamat: "Jalan Kenangan Mantan",
    },
  ];

  return (
    <AdminContainer active={["Pengguna", "Customer"]}>
      <VStack
        w={"100%"}
        align={"stretch"}
        gap={0}
        p={[4, 5, 6]}
        bg={bg}
        borderRadius={16}
        mb={6}
      >
        <HStack mb={4}>
          <InputGroup>
            <InputLeftElement>
              <Icon
                as={MagnifyingGlass}
                fontSize={iconSize}
              />
            </InputLeftElement>

            <Input
              placeholder={"Search"}
              maxW={"300px"}
            />
          </InputGroup>

          <Menu>
            <MenuButton
              as={Button}
              flexShrink={0}
              variant={"outline"}
              colorScheme="ap"
              pr={"12px"}
              rightIcon={
                <Icon
                  as={CaretDown}
                  fontSize={iconSize}
                />
              }
            >
              Urutkan
            </MenuButton>

            <MenuList
            // minW={"140px"}
            >
              <MenuGroup title="Nama Lengkap">
                <MenuItem>
                  <HStack className="sortItem">
                    <Text>A-Z</Text>
                    <Icon
                      as={ArrowUp}
                      fontSize={iconSize}
                    />
                  </HStack>
                </MenuItem>
                <MenuItem>
                  <HStack className="sortItem">
                    <Text>Z-A</Text>
                    <Icon
                      as={ArrowDown}
                      fontSize={iconSize}
                    />
                  </HStack>
                </MenuItem>
              </MenuGroup>

              <MenuDivider />

              <MenuGroup title="Instansi/Perusahaan">
                <MenuItem>
                  <HStack className="sortItem">
                    <Text>A-Z</Text>
                    <Icon
                      as={ArrowUp}
                      fontSize={iconSize}
                    />
                  </HStack>
                </MenuItem>
                <MenuItem>
                  <HStack className="sortItem">
                    <Text>Z-A</Text>
                    <Icon
                      as={ArrowDown}
                      fontSize={iconSize}
                    />
                  </HStack>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </HStack>

        <Box
          borderRadius={8}
          border={"1px solid var(--divider3)"}
          overflow={"auto"}
          className="scrollX"
        >
          <Table
            variant={"striped"}
            colorScheme="ad"
          >
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th whiteSpace={"nowrap"}>Nama Lengkap</Th>
                <Th>Nomor Ponsel</Th>
                <Th>Instansi/Perusahaan</Th>
                <Th>Alamat</Th>
              </Tr>
            </Thead>

            <Tbody>
              {data.map((d, i) => (
                <Tr key={i}>
                  <Td>{d.id}</Td>
                  <Td>{d.username}</Td>
                  <Td>{d.email}</Td>
                  <Td whiteSpace={"nowrap"}>{d.namaLengkap}</Td>
                  <Td>{d.telepon}</Td>
                  <Td>{d.instansi}</Td>
                  <Td minW={"300px"}>{d.alamat}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <HStack
          justify={"center"}
          mt={4}
        >
          <IconButton
            aria-label="prev"
            icon={
              <Icon
                as={CaretLeft}
                fontSize={iconSize}
              />
            }
            variant={"ghost"}
            className="btn"
            size={"sm"}
          />

          <HStack mx={2}>
            <Center
              bg={"p.500"}
              w={"32px"}
              h={"32px"}
              borderRadius={8}
            >
              <Text color={"white"}>1</Text>
            </Center>
          </HStack>

          <IconButton
            aria-label="prev"
            icon={
              <Icon
                as={CaretRight}
                fontSize={iconSize}
              />
            }
            variant={"ghost"}
            className="btn"
            size={"sm"}
          />
        </HStack>
      </VStack>
    </AdminContainer>
  );
}
