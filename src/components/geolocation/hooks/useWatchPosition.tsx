import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from 'react'

import { Geolocation, Position, PositionOptions } from '@capacitor/geolocation'

import { Location } from '../@types'

const initialState: Location = {
  isLoading: false,
  coordinates: undefined,
  error: undefined,
  options: undefined,
}

type WatchPositionProps = {
  children: ReactNode
}

type TWatchPositionContext = {
  location: Location
  watchPositionId?: string
  updateIsloading: (isLoading: boolean) => void
  updateError: (error: string | undefined) => void
  updateOptions: (options: PositionOptions | undefined) => void
  startWatchPosition: () => void
  stopWatchPosition: () => void
  resetWatchPosition: () => void
}

const WatchPositionContext = createContext<TWatchPositionContext>(
  {} as TWatchPositionContext,
)

export function WatchPositionProvider({ children }: WatchPositionProps) {
  const [location, setLocation] = useState<Location>(initialState)
  const [watchPositionId, setWatchPositionId] = useState<string | undefined>()

  function updateIsloading(isLoading: boolean) {
    setLocation((state) => ({
      ...state,
      isLoading,
      error: undefined,
    }))
  }

  function updateError(error: string | undefined) {
    setLocation((state) => ({
      ...state,
      isLoading: false,
      error,
    }))
  }

  function updateOptions(options: PositionOptions | undefined) {
    setLocation((state) => ({
      ...state,
      options,
    }))
  }

  function watchPositionCallback(position: Position | null, error: any) {
    if (error !== undefined) {
      setLocation((state) => ({
        ...state,
        isLoading: false,
        error,
      }))

      return
    }

    if (position === null) {
      setLocation((state) => ({
        ...state,
        isLoading: false,
        error: 'Não foi possível obter a localização.',
      }))

      return
    }

    const { latitude, longitude, altitude, accuracy } = position.coords
    setLocation((state) => ({
      ...state,
      isLoading: false,
      coordinates: {
        longitude,
        latitude,
        altitude,
        accuracy,
      },
      error: undefined,
    }))
  }

  async function startWatchPosition() {
    if (!navigator.geolocation) {
      setLocation((state) => ({
        ...state,
        isLoading: false,
        error: 'O navegador não tem suporte para a API de geolocalização.',
      }))

      return
    }

    const hasGeolocationPermission = await navigator.permissions.query({
      name: 'geolocation',
    })
    if (hasGeolocationPermission.state === 'denied') {
      setLocation((state) => ({
        ...state,
        isLoading: false,
        error: 'o usuário negou a permissão para acessar a localização.',
      }))

      return
    }

    if (watchPositionId !== undefined) return

    setLocation((state) => ({
      ...state,
      isLoading: true,
    }))

    const id = await Geolocation.watchPosition(
      location.options ?? {},
      watchPositionCallback,
    )

    setWatchPositionId(id)
  }

  function resetWatchPosition() {
    setLocation(initialState)
  }

  async function stopWatchPosition() {
    if (watchPositionId !== undefined) {
      await Geolocation.clearWatch({ id: watchPositionId })
      setLocation(initialState)
      setWatchPositionId(undefined)
    }
  }

  return (
    <WatchPositionContext.Provider
      value={{
        location,
        watchPositionId,
        updateIsloading,
        updateError,
        updateOptions,
        startWatchPosition,
        stopWatchPosition,
        resetWatchPosition,
      }}
    >
      {children}
    </WatchPositionContext.Provider>
  )
}

export const useWatchPosition = () => {
  const context = useContext(WatchPositionContext)

  useEffect(() => {
    context.stopWatchPosition()
    return () => {
      context.resetWatchPosition()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return context
}
