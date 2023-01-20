import {
  Flex,
  Input,
  Button,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

/**
 * Searchbar Component
 */
function Searchbar({submitHandler}: any) {
  const [searchValue, setSearchValue] = useState<string>("");

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
        {searchValue && (
          <InputRightElement width="4rem">
            <Button
              data-testid="clear-btn"
              onClick={() => {
                setSearchValue("");
              }}
              height="1rem"
              size="sm"
            >
              Clear
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <Button
        data-testid="submit-btn"
        onClick={() => submitHandler(searchValue)}
        isDisabled={searchValue.length <= 0}
      >
        Submit
      </Button>
    </Flex>
  );
}

export default Searchbar;
