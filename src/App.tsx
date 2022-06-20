import * as React from 'react';
import { Admin, CustomRoutes, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Route } from 'react-router';

import authProvider from './authProvider';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import englishMessages from './i18n/en';
import { lightTheme } from './layout/themes';

import visitors from './visitors';
import orders from './orders';
import explosiveUnit from './explosive-unit';
import obstacle from './obstacle';
import invoices from './invoices';
import categories from './categories';
import reviews from './database/explosive-material';
import Configuration from './configuration/Configuration';
import Segments from './segments/Segments';
import dataProvider from './dataProvider/dataProvider';
import initationSystems from './database/initation-systems';
import explosiveMaterial from './database/explosive-material';
import buildMaterial from './database/build-material';
import destruction from './destruction';

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    }

    // Always fallback on english
    return englishMessages;
}, 'en');

const App = () => {
    return (
        <Admin
            title=""
            dataProvider={dataProvider}
            authProvider={authProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
            i18nProvider={i18nProvider}
            disableTelemetry
            theme={lightTheme}
        >
            <Resource name="initiation-system" {...initationSystems}/>

            <CustomRoutes>
                <Route path="/configuration" element={<Configuration />} />
                <Route path="/segments" element={<Segments />} />
            </CustomRoutes>
            <Resource name="user" {...visitors} />
            <Resource
                name="commands"
                {...orders}
                options={{ label: 'Orders' }}
            />
            <Resource name="invoices" {...invoices} />
            <Resource name="categories" {...categories} />
            <Resource name="explosive-material" {...explosiveMaterial} />
            <Resource name="build-material" {...buildMaterial} />
            <Resource name="explosive-unit" {...explosiveUnit} />
            <Resource name="obstacle" {...obstacle} />
            <Resource name="destruction" {...destruction} />
            <Resource name="explosive-material-quantity" />
        </Admin>
    );
};

export default App;
