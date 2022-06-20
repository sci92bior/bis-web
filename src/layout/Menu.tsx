import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LabelIcon from '@mui/icons-material/Label';

import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

import visitors from '../visitors';
import explosiveUnit from '../explosive-unit';
import explosivesMaterial from '../database/explosive-material';
import buildMaterial from '../database/build-material';
import SubMenu from './SubMenu';
import database from '../database';
import InitationSystems from '../database/initation-systems';
import Obstacle from '../obstacle';
import destruction from '../destruction';

type MenuName = 'menuBreaching' | 'menuCatalog' | 'menuSales' | 'menuDatabase' | 'menuUsers';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuDatabase: true,
        menuUsers: true,
        menuSales: true,
        menuBreaching: true
    });
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 250 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            {/* <DashboardMenuItem /> */}
            <SubMenu
                handleToggle={() => handleToggle('menuBreaching')}
                isOpen={state.menuBreaching}
                name="bis.common.breaching"
                icon={<database.breachingIcon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/explosive-unit"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`bis.explosive_unit.title`, {
                        smart_count: 2,
                    })}
                    leftIcon={<explosiveUnit.icon />}
                    dense={dense}
                />
                 <MenuItemLink
                    to="/obstacle"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`bis.obstacle.title`, {
                        smart_count: 2,
                    })}
                    leftIcon={<Obstacle.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/destruction"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`bis.destruction.title`, {
                        smart_count: 2,
                    })}
                    leftIcon={<destruction.icon />}
                    dense={dense}
                />
            </SubMenu>
           
            <SubMenu
                handleToggle={() => handleToggle('menuDatabase')}
                isOpen={state.menuDatabase}
                name="bis.common.database"
                icon={<database.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/explosive-material"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`bis.explosive_materials.title`, {
                        smart_count: 2,
                    })}
                    leftIcon={<explosivesMaterial.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/build-material"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`bis.build_materials.title`, {
                        smart_count: 2,
                    })}
                    leftIcon={<buildMaterial.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/initiation-system"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`bis.initiation_system.title`, {
                        smart_count: 2,
                    })}
                    leftIcon={<InitationSystems.icon />}
                    dense={dense}
                />
                
            </SubMenu>
            {/* <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                name="bis.explosive_materials.title"
                icon={<orders.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/explosive-material"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`bis.explosive_materials.title`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/commands"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.commands.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/invoices"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.invoices.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<invoices.icon />}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="pos.menu.catalog"
                icon={<explosiveUnit.icon />}
                dense={dense}
            >
                
                <MenuItemLink
                    to="/categories"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.categories.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<categories.icon />}
                    dense={dense}
                />
            </SubMenu> */}
            <SubMenu
                handleToggle={() => handleToggle('menuUsers')}
                isOpen={state.menuUsers}
                name="bis.user.users"
                icon={<visitors.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/user"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`bis.user.users`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon />}
                    dense={dense}
                />
                {/* <MenuItemLink
                    to="/segments"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.segments.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<LabelIcon />}
                    dense={dense}
                /> */}
            </SubMenu>
        </Box>
    );
};

export default Menu;
