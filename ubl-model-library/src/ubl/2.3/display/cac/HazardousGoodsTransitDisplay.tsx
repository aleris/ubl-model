import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: HazardousGoodsTransit
  meta: FieldMeta<T>
}

export default function HazardousGoodsTransitDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-HazardousGoodsTransit ubl-HazardousGoodsTransitType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-HazardousGoodsTransit ubl-UBLExtensions"
          meta={HazardousGoodsTransitFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={HazardousGoodsTransitFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousGoodsTransit ubl-Code ubl-TransportEmergencyCardCode"
          meta={HazardousGoodsTransitFieldMeta.TransportEmergencyCardCode} 
          value={value.TransportEmergencyCardCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transport Emergency Card Code"
              value={itemValue}
              meta={HazardousGoodsTransitFieldMeta.TransportEmergencyCardCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousGoodsTransit ubl-Code ubl-PackingCriteriaCode"
          meta={HazardousGoodsTransitFieldMeta.PackingCriteriaCode} 
          value={value.PackingCriteriaCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Packing Criteria Code"
              value={itemValue}
              meta={HazardousGoodsTransitFieldMeta.PackingCriteriaCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousGoodsTransit ubl-Code ubl-HazardousRegulationCode"
          meta={HazardousGoodsTransitFieldMeta.HazardousRegulationCode} 
          value={value.HazardousRegulationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Hazardous Regulation Code"
              value={itemValue}
              meta={HazardousGoodsTransitFieldMeta.HazardousRegulationCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousGoodsTransit ubl-Code ubl-InhalationToxicityZoneCode"
          meta={HazardousGoodsTransitFieldMeta.InhalationToxicityZoneCode} 
          value={value.InhalationToxicityZoneCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Inhalation Toxicity Zone Code"
              value={itemValue}
              meta={HazardousGoodsTransitFieldMeta.InhalationToxicityZoneCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousGoodsTransit ubl-Code ubl-TransportAuthorizationCode"
          meta={HazardousGoodsTransitFieldMeta.TransportAuthorizationCode} 
          value={value.TransportAuthorizationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transport Authorization Code"
              value={itemValue}
              meta={HazardousGoodsTransitFieldMeta.TransportAuthorizationCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-HazardousGoodsTransit ubl-Temperature ubl-MaximumTemperature"
          meta={HazardousGoodsTransitFieldMeta.MaximumTemperature} 
          value={value.MaximumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay
              key={key}
              label="Maximum Temperature"
              value={itemValue}
              meta={HazardousGoodsTransitFieldMeta.MaximumTemperature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-HazardousGoodsTransit ubl-Temperature ubl-MinimumTemperature"
          meta={HazardousGoodsTransitFieldMeta.MinimumTemperature} 
          value={value.MinimumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay
              key={key}
              label="Minimum Temperature"
              value={itemValue}
              meta={HazardousGoodsTransitFieldMeta.MinimumTemperature}
            />
          }
        />
        </div>
    </div>
  )
}
