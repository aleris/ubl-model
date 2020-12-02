import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DeliveryUnit } from  '../../model/cac/DeliveryUnit'
import { DeliveryUnitFieldMeta } from  '../../meta/cac/DeliveryUnitMeta'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: DeliveryUnit
  meta: FieldMeta<T>
}

export default function DeliveryUnitDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DeliveryUnitFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DeliveryUnitFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryUnitFieldMeta.BatchQuantity} 
          value={value.BatchQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={DeliveryUnitFieldMeta.BatchQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryUnitFieldMeta.ConsumerUnitQuantity} 
          value={value.ConsumerUnitQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={DeliveryUnitFieldMeta.ConsumerUnitQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryUnitFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={DeliveryUnitFieldMeta.HazardousRiskIndicator} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
