import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { dark, light } from "@/theme/colors";

const links = [
  {
    name: "🏡 Inicio",
    path: "/",
    id: "home-link",
  },
  {
    name: "📚 Blog",
    path: "/blog",
    id: "blog-link",
  },
  {
    name: "⚗ Proyectos",
    path: "/projects",
    id: "projects-link",
  },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Link
    as={NextLink}
    href={path}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      px={4}
      boxShadow="md"
      bg={useColorModeValue(light.background, dark.background)}
      pos="fixed"
      w="full"
      top={0}
      left={0}
      right={0}
      zIndex={4}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map(({ id, name, path }) => (
              <NavLink key={id} path={path}>
                {name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "🌑" : "☀"}
        </Button>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map(({ id, name, path }) => (
              <NavLink key={id} path={path}>
                {name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
