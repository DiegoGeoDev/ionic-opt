import React from 'react'

import { WatchPositionProvider } from './geolocation/hooks/useWatchPosition'

type ContextProvidersProps = {
  children: React.ReactNode
}

const ContextProviders = ({ children }: ContextProvidersProps) => {
  return <WatchPositionProvider>{children}</WatchPositionProvider>
}

export { ContextProviders }
