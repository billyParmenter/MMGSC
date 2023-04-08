import { Box, Select } from "@chakra-ui/react";
import { Aid } from "..";
import { ReactEventHandler } from "react";
import { useAids } from "../hooks/useAids";

export interface AidsSelectProps {
  // aids?: Aid[];
  onChange?: ReactEventHandler<HTMLSelectElement> | undefined;
}

// export const AidsSelect = ({ aids, onChange }: AidsSelectProps) => {
export const AidsSelect = ({ onChange }: AidsSelectProps) => {
  // eslint-disable-next-line no-console
  const { aids } = useAids();

  return (
    <Box>
      {aids ? (
        <Select onChange={onChange} placeholder="All applications">
          {aids?.map((aid) => (
            <option key={aid.id} value={aid.id}>
              {aid.name}
            </option>
          ))}
        </Select>
      ) : (
        <Select placeholder="LOADING"></Select>
      )}
    </Box>
  );
};

export default AidsSelect;
