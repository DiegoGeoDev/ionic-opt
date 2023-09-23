import { PositionOptions } from '@capacitor/geolocation'

export type Coordinates = {
  longitude: number
  latitude: number
  altitude: number | null
  accuracy: number
}

export type Location = {
  isLoading: boolean
  coordinates?: Coordinates
  error?: string
  options?: PositionOptions
}
