import {
  Flex,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

/**
 * Searchbar Component
 */
function Searchbar({submitHandler}: any) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isInvalid, setIsInvalid] = useState<boolean>(true);

  useEffect(() => {
    if(!searchValue.replace(/\s/g, '').length){
        setIsInvalid(true);
    }
    else if(!searchValue.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i)){
        setIsInvalid(true);
    }
    else{
        setIsInvalid(false);
    }
  }, [searchValue])


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
              data-testid="clr-btn"
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
        isDisabled={searchValue.length <= 0 || isInvalid}
      >
        Submit
      </Button>
    </Flex>
  );
}

export default Searchbar;
