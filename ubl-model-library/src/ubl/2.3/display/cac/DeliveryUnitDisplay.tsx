import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DeliveryUnit } from  '../../model/cac/DeliveryUnit'
import { DeliveryUnitFieldMeta } from  '../../meta/cac/DeliveryUnitMeta'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: DeliveryUnit
  meta: FieldMeta<T>
}

export default function DeliveryUnitDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DeliveryUnit ubl-DeliveryUnitType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DeliveryUnit ubl-UBLExtensions"
          meta={DeliveryUnitFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DeliveryUnitFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DeliveryUnit ubl-Quantity ubl-BatchQuantity"
          meta={DeliveryUnitFieldMeta.BatchQuantity} 
          value={value.BatchQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Batch Quantity"
              value={itemValue}
              meta={DeliveryUnitFieldMeta.BatchQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DeliveryUnit ubl-Quantity ubl-ConsumerUnitQuantity"
          meta={DeliveryUnitFieldMeta.ConsumerUnitQuantity} 
          value={value.ConsumerUnitQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Consumer Unit"
              value={itemValue}
              meta={DeliveryUnitFieldMeta.ConsumerUnitQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DeliveryUnit ubl-Indicator ubl-HazardousRiskIndicator"
          meta={DeliveryUnitFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Hazardous Risk Indicator"
              value={itemValue}
              meta={DeliveryUnitFieldMeta.HazardousRiskIndicator}
            />
          }
        />
        </div>
    </div>
  )
}
