import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { HazardousGoodsTransit } from  '../../model/cac/HazardousGoodsTransit'
import { HazardousGoodsTransitFieldMeta } from  '../../meta/cac/HazardousGoodsTransitMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TemperatureDisplay from './TemperatureDisplay'
import { Temperature } from '../../model/cac/Temperature'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: HazardousGoodsTransit | undefined
  meta: FieldMeta<T>
}

export default function HazardousGoodsTransitDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-HazardousGoodsTransit">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={HazardousGoodsTransitFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Transport Emergency Card Code"
            value={value.TransportEmergencyCardCode?.[0]}
            meta={HazardousGoodsTransitFieldMeta.TransportEmergencyCardCode}
          />

          <CodeDisplay
            label="Packing Criteria Code"
            value={value.PackingCriteriaCode?.[0]}
            meta={HazardousGoodsTransitFieldMeta.PackingCriteriaCode}
          />

          <CodeDisplay
            label="Hazardous Regulation Code"
            value={value.HazardousRegulationCode?.[0]}
            meta={HazardousGoodsTransitFieldMeta.HazardousRegulationCode}
          />

          <CodeDisplay
            label="Inhalation Toxicity Zone Code"
            value={value.InhalationToxicityZoneCode?.[0]}
            meta={HazardousGoodsTransitFieldMeta.InhalationToxicityZoneCode}
          />

          <CodeDisplay
            label="Transport Authorization Code"
            value={value.TransportAuthorizationCode?.[0]}
            meta={HazardousGoodsTransitFieldMeta.TransportAuthorizationCode}
          />

          <TemperatureDisplay
            label="Maximum Temperature"
            value={value.MaximumTemperature?.[0]}
            meta={HazardousGoodsTransitFieldMeta.MaximumTemperature}
          />

          <TemperatureDisplay
            label="Minimum Temperature"
            value={value.MinimumTemperature?.[0]}
            meta={HazardousGoodsTransitFieldMeta.MinimumTemperature}
          />
        </div>
    </div>
  )
}
