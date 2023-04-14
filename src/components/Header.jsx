import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { ChakraProvider, ColorModeScript, useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"purple"} justifyContent={"space-evenly"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
      <ColorModeSwitcher />
    </HStack>
    
  );
};
function ColorModeSwitcher() {
  const location = useLocation()
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? <MoonIcon color={"white"}/> : <SunIcon  />;
  return (

    location.pathname !== "/" && <IconButton   pos={'fixed'}
    top={'4'}
    right={'4'}
      aria-label="Toggle color mode"
      icon={icon}
      onClick={toggleColorMode}
      variant="outline"
      // {{colorMode} == light? bgColor={"white"}: }
    />
  );
}

export default Header;
