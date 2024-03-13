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

            <Group h="100%" gap={0} visibleFrom="md">
              <a href="#" className={classes.link}>
                Accueil 
              </a>
              <a href="#" className={classes.link}>
                Services
              </a>
              {/* 
              <HoverCard zIndex={999} width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Services
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.orange[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard> 
              */}
              <a href="#" className={classes.link}>
                A propos
              </a>
              <a href="#" className={classes.link}>
                Contact
              </a>
            </Group>

            <Group style={{width:140, justifyContent:"flex-end"}}  visibleFrom="md">
              <ActionIcon
                variant="gradient"
                size="xl"
                aria-label="Gradient action icon"
                gradient={{ from: '#2b2a28', to: '#0c0c0c', deg: 90 }}
              >
                <IconUser />
              </ActionIcon>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="xs"
          title="Navigation"
          hiddenFrom="md"
          zIndex={999}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              Services
            </a>
            {/* <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.orange[6]}
                />
              </Center>
            </UnstyledButton> */}
            {/* <Collapse in={linksOpened}>{links}</Collapse> */}
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>

            <Divider my="sm" />

            <div className={classes.wrapperBtn} >
              <Group className={classes.connectBtn} justify="center" grow pb="xl" px="md">
                <ActionIcon
                  variant="gradient"
                  size="xl"
                  aria-label="Gradient action icon"
                  gradient={{ from: 'black', to: '#2b2a28', deg: 90 }}
                >
                  <IconUser />
                </ActionIcon>
              </Group>
            </div>
          </ScrollArea>
        </Drawer>
      </Box>
      <Outlet />
    </>
  );
}