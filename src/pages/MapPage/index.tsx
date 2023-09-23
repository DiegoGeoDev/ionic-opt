import { Map } from "../../components/ol/map";
import { TileLayer } from "../../components/ol/tile-layer";
import { OpenStreetMap } from "../../components/ol/sources";

import { Geolocation } from '../../components/geolocation'

import { useMapStore } from "../../stores/mapStore";

import OlMap from 'ol/Map'

import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export function MapPage() {
  const [map] = useMapStore((state) => [state.map]);

  return (
    <IonPage id="modala-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{"Map"}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{height: "100vh", width: "100vw"}}>
          <Map zoom={0} center={[0, 0]} />
          <TileLayer source={OpenStreetMap} zIndex={0} />

        </div>
        <Geolocation.Root
            style={{display: 'absolute', top: 56, left: 0}}
            size="small"
            side="bottom"
          >
            <Geolocation.CurrentPosition map={map as OlMap} />
            <Geolocation.WatchPosition map={map as OlMap} />
          </Geolocation.Root>
      </IonContent>
    </IonPage>

  );
}
