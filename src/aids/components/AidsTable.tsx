import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Aid } from "..";

export interface AidsTableProps {
  aids?: Aid[];
}

export const AidsTable = ({ aids }: AidsTableProps) => {
  return (
    <Box>
      {aids ? (
        <TableContainer>
          <Table variant="simple">
            <TableCaption>ATM Info</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th isNumeric>ID</Th>
                <Th>AID</Th>
              </Tr>
            </Thead>
            <Tbody>
              {aids?.map((aid) => (
                <Tr>
                  <Td>{aid.name}</Td>
                  <Td isNumeric>{aid.id}</Td>
                  <Td>{aid.aid}</Td>
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

export default AidsTable;
