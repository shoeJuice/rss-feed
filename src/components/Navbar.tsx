import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

/**
 * Render a Navbar component
 * @type {JSX.Element}
 * @returns
 */
const Navbar = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      height="10%"
    >
      <Link to="/">
        <Text>RSS Feed</Text>
      </Link>
      <Flex>
        <Link to="/search">
          <Text>Search</Text>
        </Link>
        <Link to="/settings" data-testid="to-settings">
          Settings
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
