import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { HazardousGoodsTransit } from  '../../model/cac/HazardousGoodsTransit'
import { HazardousGoodsTransitFieldMeta } from  '../../meta/cac/HazardousGoodsTransitMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TemperatureDisplay from './TemperatureDisplay'
import { Temperature } from '../../model/cac/Temperature'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: HazardousGoodsTransit
  meta: FieldMeta<T>
}

export default function HazardousGoodsTransitDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={HazardousGoodsTransitFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={HazardousGoodsTransitFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousGoodsTransitFieldMeta.TransportEmergencyCardCode} 
          value={value.TransportEmergencyCardCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={HazardousGoodsTransitFieldMeta.TransportEmergencyCardCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousGoodsTransitFieldMeta.PackingCriteriaCode} 
          value={value.PackingCriteriaCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={HazardousGoodsTransitFieldMeta.PackingCriteriaCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousGoodsTransitFieldMeta.HazardousRegulationCode} 
          value={value.HazardousRegulationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={HazardousGoodsTransitFieldMeta.HazardousRegulationCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousGoodsTransitFieldMeta.InhalationToxicityZoneCode} 
          value={value.InhalationToxicityZoneCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={HazardousGoodsTransitFieldMeta.InhalationToxicityZoneCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousGoodsTransitFieldMeta.TransportAuthorizationCode} 
          value={value.TransportAuthorizationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={HazardousGoodsTransitFieldMeta.TransportAuthorizationCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousGoodsTransitFieldMeta.MaximumTemperature} 
          value={value.MaximumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={HazardousGoodsTransitFieldMeta.MaximumTemperature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousGoodsTransitFieldMeta.MinimumTemperature} 
          value={value.MinimumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={HazardousGoodsTransitFieldMeta.MinimumTemperature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
