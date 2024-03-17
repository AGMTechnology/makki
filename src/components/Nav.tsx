import { Outlet, Link } from "react-router-dom";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import logo from "../assets/logo_makki.png"
import { useDisclosure } from '@mantine/hooks';
import { ActionIcon } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';
import { NavbarMinimal } from "./NavBarMinimal";

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
];

export function Nav() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <>
      <Box className={classes.box} style={{position:"fixed", width:"100%", backgroundColor:"black", zIndex:998}} mb={0}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <img width={200} src={logo} />
            <Burger opened={drawerOpened} onClick={toggleDrawer} />
          </Group>
        </header>

         <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          overlayProps={{ backgroundOpacity: 0.5, blur: 1 }}
          position="right"
          scrollAreaComponent={ScrollArea.Autosize}
          withCloseButton={false}
          size={260}
        >
          <NavbarMinimal />
        </Drawer> 
      </Box>
      <Outlet />
    </>
  );
}