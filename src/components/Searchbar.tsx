import {
  Flex,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useRSSContext } from "../context/RSSContext";

/**
 * Searchbar Component
 */
function Searchbar({ submitHandler }: any) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isInvalid, setIsInvalid] = useState<boolean>(true);

  const {setRSSAddress} = useRSSContext();
  

  useEffect(() => {
    if (!searchValue.replace(/\s/g, "").length) {
      setIsInvalid(true);
    } else if (!searchValue.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i)) {
      setIsInvalid(false);
    } else {
      setIsInvalid(false);
    }
  }, [searchValue]);

  return (
    <Flex>
      <InputGroup>
        <Input
          pr="4rem"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            e.preventDefault();
          }}
          data-testid="search-bar"
          type="search"
        />
      </InputGroup>
      <Button
        data-testid="submit-btn"
        onClick={submitHandler ? () => submitHandler(searchValue) : () => {setRSSAddress(searchValue)}}
        isDisabled={searchValue.length <= 0 || isInvalid}
      >
        Submit
      </Button>
    </Flex>
  );
}

export default Searchbar;
