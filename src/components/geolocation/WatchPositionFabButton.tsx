import React, { useEffect } from 'react'

import { IonFabButton, IonIcon, IonLoading, IonToast } from '@ionic/react'
import { navigateOutline, closeOutline } from 'ionicons/icons'

import OlMap from 'ol/Map'

import { useWatchPosition } from './hooks/useWatchPosition'
import { useGeolocationMapPoint } from './hooks/useGeolocationMapPoint'

type WatchPositionFabButtonProps = React.ComponentPropsWithRef<
  typeof IonFabButton
> & { map: OlMap }

const WatchPositionFabButton = ({
  map,
  ...props
}: WatchPositionFabButtonProps) => {
  const {
    location,
    watchPositionId,
    updateIsloading,
    updateError,
    startWatchPosition,
    stopWatchPosition,
  } = useWatchPosition()
  const isWatchPositionActive = watchPositionId !== undefined
  const icon = isWatchPositionActive ? closeOutline : navigateOutline
  const color = isWatchPositionActive ? 'danger' : undefined

  const { addGeolocationMapPoint, removeGeolocationMapPoint } =
    useGeolocationMapPoint()

  useEffect(() => {
    if (location.coordinates) {
      addGeolocationMapPoint(location.coordinates, map)
    }
    return () => {
      removeGeolocationMapPoint(map)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.coordinates])

  function handleWatchPosition() {
    if (watchPositionId) {
      removeGeolocationMapPoint(map)
      stopWatchPosition()
      return
    }

    startWatchPosition()
  }

  return (
    <>
      <IonFabButton {...props} onClick={handleWatchPosition} color={color}>
        <IonIcon icon={icon}></IonIcon>
      </IonFabButton>
      <IonLoading
        isOpen={location.isLoading}
        onDidDismiss={() => updateIsloading(false)}
        message={'Obtendo a Localização...'}
      />
      <IonToast
        isOpen={location.error !== undefined}
        onDidDismiss={() => updateError(undefined)}
        message={location.error}
        duration={5000}
      />
    </>
  )
}

export { WatchPositionFabButton }
