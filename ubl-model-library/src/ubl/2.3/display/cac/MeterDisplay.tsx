import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Meter } from  '../../model/cac/Meter'
import { MeterFieldMeta } from  '../../meta/cac/MeterMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import MeterPropertyDisplay from './MeterPropertyDisplay'
import { MeterProperty } from '../../model/cac/MeterProperty'
import MeterReadingDisplay from './MeterReadingDisplay'
import { MeterReading } from '../../model/cac/MeterReading'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Meter | undefined
  meta: FieldMeta<T>
}

export default function MeterDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Meter">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={MeterFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Meter Number"
            value={value.MeterNumber?.[0]}
            meta={MeterFieldMeta.MeterNumber}
          />

          <TextDisplay
            label="Meter Name"
            value={value.MeterName?.[0]}
            meta={MeterFieldMeta.MeterName}
          />

          <TextDisplay
            label="Meter Constant"
            value={value.MeterConstant?.[0]}
            meta={MeterFieldMeta.MeterConstant}
          />

          <CodeDisplay
            label="Meter Constant Code"
            value={value.MeterConstantCode?.[0]}
            meta={MeterFieldMeta.MeterConstantCode}
          />

          <QuantityDisplay
            label="Total Delivered Quantity"
            value={value.TotalDeliveredQuantity?.[0]}
            meta={MeterFieldMeta.TotalDeliveredQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-MeterReading"
            label="Meter Reading"
            items={value.MeterReading}
            meta={MeterFieldMeta.MeterReading} 
            itemDisplay={ (itemValue: MeterReading, key: string | number) =>
              <MeterReadingDisplay
                key={key}
                label="Meter Reading"
                value={itemValue}
                meta={MeterFieldMeta.MeterReading}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-MeterProperty"
            label="Meter Property"
            items={value.MeterProperty}
            meta={MeterFieldMeta.MeterProperty} 
            itemDisplay={ (itemValue: MeterProperty, key: string | number) =>
              <MeterPropertyDisplay
                key={key}
                label="Meter Property"
                value={itemValue}
                meta={MeterFieldMeta.MeterProperty}
              />
            }
          />
        </div>
    </div>
  )
}
