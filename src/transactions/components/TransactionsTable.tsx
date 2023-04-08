import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Transaction } from "..";

export interface TransactionsTableProps {
  transactions: Transaction[];
}

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <Box>
      {transactions ? (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>ATM ID</Th>
                <Th>Customer PAN</Th>
                <Th>Time</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map(function (transaction) {
                let s = String(transaction.devTime);
                let date =
                  s.substring(6, 8) +
                  "/" +
                  s.substring(4, 6) +
                  "/" +
                  s.substring(0, 4);

                let time =
                  date +
                  " " +
                  s.substring(8, 10) +
                  ":" +
                  s.substring(10, 12) +
                  ":" +
                  s.substring(12, 14);
                return (
                  <>
                    <Tr key={transaction.ref}>
                      <Td>{date}</Td>
                      <Td>{transaction.atm.txt}</Td>
                      <Td>{transaction.pan}</Td>
                      <Td>{time}</Td>
                      <Td>Ref: {transaction.ref}</Td>
                    </Tr>

                    {transaction.key.map(function (key) {
                      return (
                        <Tr key={key.id}>
                          <Td></Td>
                          <Td></Td>
                          <Td></Td>
                          <Td></Td>
                          <Td>{key.descr}</Td>
                        </Tr>
                      );
                    })}
                  </>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default TransactionsTable;
