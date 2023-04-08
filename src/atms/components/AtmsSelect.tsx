import { Box, Select } from "@chakra-ui/react";
import { Atm } from "..";
import { ReactEventHandler } from "react";
import { useAtms } from "../hooks/useAtms";

export interface AtmsSelectProps {
  // atms?: Atm[];
  onChange?: ReactEventHandler<HTMLSelectElement> | undefined;
}

// export const AtmsSelect = ({ atms, onChange }: AtmsSelectProps) => {
export const AtmsSelect = ({ onChange }: AtmsSelectProps) => {
  const { atms } = useAtms();
  const allAtms = atms.map((atm) => atm.id);
  return (
    <Box>
      {atms ? (
        <Select onChange={onChange}>
          <option value={allAtms.toString()}>All ATMS</option>
          {atms?.map((atm) => (
            <option value={atm.id}>{atm.name}</option>
          ))}
        </Select>
      ) : (
        <Select placeholder="LOADING"></Select>
      )}
    </Box>
  );
};

export default AtmsSelect;
