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
import Configuration from './configuration/Configuration';
import Segments from './segments/Segments';
import dataProvider from './dataProvider/dataProvider';
import explosiveMaterial from './database/explosive-material';
import buildMaterial from './database/build-material';
import category from './database/category';
import destruction from './destruction';
import simple_entity from './database/simple_entity';
import course from './course';
import exercise from './exercise';

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
            <Resource name="categories" {...category} />
            <Resource name="simple-entity" {...simple_entity} />
            <Resource name="explosive-material" {...explosiveMaterial} />
            <Resource name="build-material" {...buildMaterial} />
            <Resource name="explosive-unit" {...explosiveUnit} />
            <Resource name="obstacle" {...obstacle} />
            <Resource name="destruction" {...destruction} />
            <Resource name="explosive-material-quantity" />
            <Resource name="topic" />
            <Resource name="exercise" {...exercise}/>
            <Resource name="course" {...course} />
        </Admin>
    );
};

export default App;
