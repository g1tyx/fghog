export { default as BuildingDetails } from '../../components/BuildingDetails.vue'
export { default as BuildingSummary } from '../../components/BuildingSummary.vue'
export { default as FleetsGroundDetails } from '../../components/FleetsGroundDetails.vue'
export { default as FleetsGroundSummary } from '../../components/FleetsGroundSummary.vue'
export { default as FleetsOrbittingDetails } from '../../components/FleetsOrbittingDetails.vue'
export { default as FleetsOrbittingSummary } from '../../components/FleetsOrbittingSummary.vue'
export { default as FormatNumber } from '../../components/FormatNumber.vue'
export { default as FormatTime } from '../../components/FormatTime.vue'
export { default as MapPlanet } from '../../components/MapPlanet.vue'
export { default as MapRoute } from '../../components/MapRoute.vue'
export { default as PlanetEnergy } from '../../components/PlanetEnergy.vue'
export { default as PlanetInfo } from '../../components/PlanetInfo.vue'
export { default as PlanetResources } from '../../components/PlanetResources.vue'
export { default as PlanetVignet } from '../../components/PlanetVignet.vue'
export { default as ResearchDetails } from '../../components/ResearchDetails.vue'
export { default as ResearchSummary } from '../../components/ResearchSummary.vue'
export { default as ShipDetails } from '../../components/ShipDetails.vue'
export { default as ShipSummary } from '../../components/ShipSummary.vue'
export { default as TravelDetails } from '../../components/TravelDetails.vue'
export { default as TravelSummary } from '../../components/TravelSummary.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
