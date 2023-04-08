//application shell taken from https://choc-ui.com/docs/application-shells/sidebar-layouts

import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  useDisclosure,
  Text,
  Button,
  ButtonGroup,
  Heading,
  Spacer,
  NumberInput,
  NumberInputField,
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import {
  GrTransaction,
  GrSettingsOption,
  GrUserSettings,
  GrAtm,
  GrUser,
} from "react-icons/gr";
import { DateRangePicker } from "rsuite";
import { AidsSelect } from "@/aids/components";
import { AtmsSelect } from "@/atms/components/AtmsSelect";
import { TransactionsTable } from "@/transactions";
import { usePostTransactions } from "@/transactions/hooks/usePostTransactions";
import React, { useState } from "react";

export const DashboardShell = () => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [atmId, setAtmId] = useState("");
  const [pan, setPan] = useState("");
  const [aidId, setAidId] = useState("");
  const [ref, setRef] = useState("");

  const parseDate = (dateToParse: string) => {
    let d = new Date(0);
    let s = String(dateToParse);
    let date = s.substring(8, 10) + s.substring(3, 7) + s.substring(10, 24);
    d.setUTCSeconds(Date.parse(date) / 1000);
    return (
      String(d.getFullYear()) +
      String(d.getMonth() + 1).padStart(2, "0") +
      String(d.getDate()).padStart(2, "0")
    );
  };

  const { transactions, isLoading: transactionsIsLoading } =
    usePostTransactions({
      // @ts-ignore
      atmId: atmId,
      date0: date1,
      date1: date2,
      pan: pan,
      aidId: aidId,
      ref: parseInt(ref),
    });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const sidebar = useDisclosure();

  const NavItem = (props: any) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        mx="2"
        rounded="md"
        py="3"
        cursor="pointer"
        color="blackAlpha.700"
        _hover={{
          bg: "blackAlpha.300",
          color: "whiteAlpha.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: "gray.300",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="brand.600"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
            >
              Not implemented
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Button onClick={onClose}>Close</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Flex px="4" py="5" align="center">
        <Text fontSize="2xl" ml="2" color="black" fontWeight="semibold">
          MMGSC
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={GrTransaction}>Transactions</NavItem>
        <NavItem onClick={onOpen} icon={GrSettingsOption}>
          Settings
        </NavItem>
        <NavItem onClick={onOpen} icon={GrUserSettings}>
          User management
        </NavItem>
        <NavItem onClick={onOpen} icon={GrAtm}>
          ATM management
        </NavItem>
        <NavItem onClick={onOpen} icon={GrUser}>
          My account
        </NavItem>
      </Flex>
    </Box>
  );

  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
    >
      <SidebarContent
        display={{
          base: "none",
          md: "unset",
        }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
      >
        <Flex
          as="header"
          align="center"
          justify="right"
          w="full"
          px="4"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            mr="auto"
            display={{
              base: "inline-flex",
              md: "none",
            }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />

          <Flex align="center">
            <Icon
              onClick={onOpen}
              color="gray.500"
              as={FaBell}
              cursor="pointer"
            />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://www.pinclipart.com/picdir/middle/148-1486972_mystery-man-avatar-circle-clipart.png"
              cursor="pointer"
              onClick={onOpen}
            />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          <Box>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box p="2">
                <Heading size="md">All Transactions</Heading>
              </Box>
              <Spacer />
              <ButtonGroup gap="2">
                <Button onClick={onOpen}>Print</Button>
                <Button onClick={onOpen}>Export</Button>{" "}
              </ButtonGroup>
            </Flex>
            <Flex>
              <Box flex="1" p="1">
                Date
                <DateRangePicker
                  onChange={(event) => {
                    // @ts-ignore
                    setDate1(parseDate(event[0]));
                    // @ts-ignore
                    setDate2(parseDate(event[1]));
                  }}
                  size="lg"
                  block
                />
              </Box>
              <Box flex="1" p="1">
                ATM ID
                <AtmsSelect
                  // atms={atms}
                  onChange={(event) => {
                    // @ts-ignore
                    let value = event.target.value;
                    setAtmId(value.split(",").map(Number));
                  }}
                />
              </Box>
              <Box flex="1" p="1">
                Customer PAN Number
                <Input
                  onChange={(event) => {
                    setPan(event.currentTarget.value);
                  }}
                  placeholder="Partial or full card number"
                />
              </Box>
              <Box flex="1" p="1">
                EMV CHIP AID
                <AidsSelect
                  // @ts-ignore
                  onChange={(event) => setAidId(event.target.value)}
                />
              </Box>
              <Box flex="1" p="1">
                <NumberInput
                  onChange={(event) => setRef(event)}
                  max={9999}
                  keepWithinRange={true}
                >
                  Transaction Serial Number
                  <NumberInputField placeholder="4 digit number" />
                </NumberInput>
              </Box>
            </Flex>
          </Box>
          {!transactionsIsLoading ? (
            <TransactionsTable transactions={transactions} />
          ) : (
            <p>Loading</p>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardShell;
