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
import { Transaction } from "..";

export interface TransactionsTableProps {
  transactions?: Transaction[];
}

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <Box>
      {transactions ? (
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th isNumeric>Amount</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions?.map((transaction) => (
                <Tr>
                  <Td>{transaction.name}</Td>
                  <Td isNumeric>{transaction.amount}</Td>
                  <Td>{transaction.status}</Td>
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

export default TransactionsTable;
