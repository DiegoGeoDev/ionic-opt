import React, { useEffect } from 'react'

import { IonFabButton, IonIcon, IonLoading, IonToast } from '@ionic/react'
import { pinOutline } from 'ionicons/icons'

import OlMap from 'ol/Map'

import { useCurrentPosition } from './hooks/useCurrentPosition'
import { useGeolocationMapPoint } from './hooks/useGeolocationMapPoint'
import { useWatchPosition } from './hooks/useWatchPosition'

type CurrentPositionFabButtonProps = React.ComponentPropsWithRef<
  typeof IonFabButton
> & { map: OlMap }

const CurrentPositionFabButton = ({
  map,
  ...props
}: CurrentPositionFabButtonProps) => {
  const { watchPositionId } = useWatchPosition()
  const isWatchPositionActive = watchPositionId !== undefined
  const color = isWatchPositionActive ? 'medium' : undefined

  const { location, updateIsloading, updateError, getCurrentPosition } =
    useCurrentPosition()

  const { addGeolocationMapPoint, removeGeolocationMapPoint } =
    useGeolocationMapPoint()

  useEffect(() => {
    if (location.coordinates) {
      addGeolocationMapPoint(location.coordinates, map, 5000)
    }
    return () => {
      removeGeolocationMapPoint(map)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.coordinates])

  return (
    <>
      <IonFabButton
        {...props}
        onClick={getCurrentPosition}
        disabled={isWatchPositionActive}
        color={color}
      >
        <IonIcon icon={pinOutline}></IonIcon>
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

export { CurrentPositionFabButton }
