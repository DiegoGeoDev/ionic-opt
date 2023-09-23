import OlFill from 'ol/style/Fill'
import OlStroke from 'ol/style/Stroke'
import OlStyle from 'ol/style/Style'
import OlCircle from 'ol/style/Circle'

const pointFill = new OlFill({
  color: 'rgba(5, 74, 41, 0.3)',
})

const pointStroke = new OlStroke({
  color: 'rgba(5, 74, 41, 1)',
  width: 4,
})

export const pointStyle = new OlStyle({
  image: new OlCircle({
    radius: 16,
    fill: pointFill,
    stroke: pointStroke,
  }),
})
