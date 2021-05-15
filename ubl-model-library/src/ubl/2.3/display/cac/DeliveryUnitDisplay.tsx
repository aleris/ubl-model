import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: DeliveryUnit | undefined
  meta: FieldMeta<T>
}

export default function DeliveryUnitDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DeliveryUnit">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DeliveryUnitFieldMeta.UBLExtensions}
          />

          <QuantityDisplay
            label="Batch Quantity"
            value={value.BatchQuantity?.[0]}
            meta={DeliveryUnitFieldMeta.BatchQuantity}
          />

          <QuantityDisplay
            label="Consumer Unit"
            value={value.ConsumerUnitQuantity?.[0]}
            meta={DeliveryUnitFieldMeta.ConsumerUnitQuantity}
          />

          <IndicatorDisplay
            label="Hazardous Risk Indicator"
            value={value.HazardousRiskIndicator?.[0]}
            meta={DeliveryUnitFieldMeta.HazardousRiskIndicator}
          />
        </div>
    </div>
  )
}
