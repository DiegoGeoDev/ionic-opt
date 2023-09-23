import OlMap from 'ol/Map'
import { Vector as OlVector } from 'ol/layer'
import { Vector as OlVectorSource } from 'ol/source'
import { Geometry, Point } from 'ol/geom'
import OlFeature from 'ol/Feature'
import { buffer } from 'ol/extent'

import { pointStyle } from '../utils'

import { Coordinates } from '../@types'

export const useGeolocationMapPoint = () => {
  let vectorLayer: OlVector<OlVectorSource<Geometry>>

  function addGeolocationMapPoint(
    coordinates: Coordinates,
    map: OlMap,
    timeOut?: number,
  ) {
    const point = new Point([
      coordinates.longitude,
      coordinates.latitude,
    ]).transform('EPSG:4326', 'EPSG:3857')

    vectorLayer = new OlVector({
      source: new OlVectorSource(),
      style: pointStyle,
      zIndex: map.getLayers().getLength() + 1,
    })

    map.addLayer(vectorLayer)

    const feature = new OlFeature({
      geometry: point,
    })

    vectorLayer.getSource()!.addFeature(feature)

    map.getView().fit(buffer(point.getExtent(), 200))

    if (timeOut !== undefined) {
      setTimeout(() => {
        vectorLayer.getSource()?.clear()
        map.removeLayer(vectorLayer)
      }, timeOut)
    }
  }

  function removeGeolocationMapPoint(map: OlMap) {
    if (vectorLayer !== undefined) {
      vectorLayer.getSource()?.clear()
      map.removeLayer(vectorLayer)
    }
  }

  return { addGeolocationMapPoint, removeGeolocationMapPoint }
}
