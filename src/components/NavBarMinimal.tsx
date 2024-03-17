import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconCalendarStats,
    IconUser,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal,
} from '@tabler/icons-react';
import logo from "../assets/logo_makki.png"
import classes from './NavbarMinimal.module.css';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        // <div style={{minWidth:"120px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        //     <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        //         <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        //     </UnstyledButton>
        //     <p>{label}</p>
        // </div>
        <div style={{ width: '100%', height: 50, margin: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ width: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }} >
                <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
                    <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                </UnstyledButton>
            </div>
            <div style={{ width: '65%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: "center" }} >
                <p>{label}</p>
            </div>
        </div>

    );
}

const mockdata = [
    { icon: IconHome2, label: 'Acceuil' },
    { icon: IconGauge, label: 'Nos Occasions' },
    { icon: IconDeviceDesktopAnalytics, label: 'Nos Services' },
    { icon: IconUser, label: 'Qui nous sommes' },
    { icon: IconCalendarStats, label: 'Contact' },
];

export function NavbarMinimal() {
    const [active, setActive] = useState(2);

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>
        </nav>
    );
}