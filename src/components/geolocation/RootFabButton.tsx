import React from 'react'

import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react'
import { locateOutline } from 'ionicons/icons'

import { useWatchPosition } from './hooks/useWatchPosition'

type IonFabButtonSize = Pick<React.ComponentProps<typeof IonFabButton>, 'size'>
type IonFabListSide = Pick<React.ComponentProps<typeof IonFabList>, 'side'>
type RootFabButtonProps = React.ComponentPropsWithRef<typeof IonFab> &
  IonFabButtonSize &
  IonFabListSide & {}

const RootFabButton = ({
  size,
  side,
  children,
  ...props
}: RootFabButtonProps) => {
  const { watchPositionId } = useWatchPosition()
  const isWatchPositionActive = watchPositionId !== undefined

  return (
    <IonFab {...props}>
      <IonFabButton size={size} activated={isWatchPositionActive}>
        <IonIcon icon={locateOutline}></IonIcon>
      </IonFabButton>
      <IonFabList side={side} activated={isWatchPositionActive}>
        {children}
      </IonFabList>
    </IonFab>
  )
}

export { RootFabButton }
