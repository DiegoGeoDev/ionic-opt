import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import HomePage from "./pages/HomePage";
import ModalAPage from "./pages/ModalAPage";
import ModalBPage from "./pages/ModalBPage";
import { MapPage } from "./pages/MapPage";

import { ContextProviders } from "./components/ContextProviders";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  return (
    <ContextProviders>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/modal-a" component={ModalAPage} />
            <Route exact path="/modal-b" component={ModalBPage} />
            <Route exact path="/map" component={MapPage} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </ContextProviders>
  );
};

export default App;
