import { useState } from 'react'

import { Geolocation, PositionOptions } from '@capacitor/geolocation'

import { Location } from '../@types'

const initialState: Location = {
  isLoading: false,
  coordinates: undefined,
  error: undefined,
  options: undefined,
}

export const useCurrentPosition = () => {
  const [location, setLocation] = useState<Location>(initialState)

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

  async function getCurrentPosition() {
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

    setLocation((state) => ({
      ...state,
      isLoading: true,
    }))

    try {
      const position = await Geolocation.getCurrentPosition(location.options)
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
    } catch ({ message }: any) {
      setLocation((state) => ({
        ...state,
        isLoading: false,
        error: message as string,
      }))
    }
  }

  return {
    location,
    updateIsloading,
    updateError,
    updateOptions,
    getCurrentPosition,
  }
}
