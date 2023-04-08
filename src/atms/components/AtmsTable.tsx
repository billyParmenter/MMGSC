import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Atm } from "..";

export interface AtmsTableProps {
  atms?: Atm[];
}

export const AtmsTable = ({ atms }: AtmsTableProps) => {
  return (
    <Box>
      {atms ? (
        <TableContainer>
          <Table variant="simple">
            <TableCaption>ATM Info</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th isNumeric>ID</Th>
                <Th>Country</Th>
              </Tr>
            </Thead>
            <Tbody>
              {atms?.map((atm) => (
                <Tr>
                  <Td>{atm.name}</Td>
                  <Td isNumeric>{atm.id}</Td>
                  <Td>{atm.country}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Box>Oops</Box>
      )}
    </Box>
  );
};

export default AtmsTable;
