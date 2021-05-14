import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Meter
  meta: FieldMeta<T>
}

export default function MeterDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Meter ubl-MeterType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Meter ubl-UBLExtensions"
          meta={MeterFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={MeterFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Meter ubl-Text ubl-MeterNumber"
          meta={MeterFieldMeta.MeterNumber} 
          value={value.MeterNumber}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Meter Number"
              value={itemValue}
              meta={MeterFieldMeta.MeterNumber}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Meter ubl-Text ubl-MeterName"
          meta={MeterFieldMeta.MeterName} 
          value={value.MeterName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Meter Name"
              value={itemValue}
              meta={MeterFieldMeta.MeterName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Meter ubl-Text ubl-MeterConstant"
          meta={MeterFieldMeta.MeterConstant} 
          value={value.MeterConstant}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Meter Constant"
              value={itemValue}
              meta={MeterFieldMeta.MeterConstant}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Meter ubl-Code ubl-MeterConstantCode"
          meta={MeterFieldMeta.MeterConstantCode} 
          value={value.MeterConstantCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Meter Constant Code"
              value={itemValue}
              meta={MeterFieldMeta.MeterConstantCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Meter ubl-Quantity ubl-TotalDeliveredQuantity"
          meta={MeterFieldMeta.TotalDeliveredQuantity} 
          value={value.TotalDeliveredQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Delivered Quantity"
              value={itemValue}
              meta={MeterFieldMeta.TotalDeliveredQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Meter ubl-MeterReading"
          meta={MeterFieldMeta.MeterReading} 
          value={value.MeterReading}
          itemDisplay={ (itemValue: MeterReading, key: string | number) =>
            <MeterReadingDisplay
              key={key}
              label="Meter Reading"
              value={itemValue}
              meta={MeterFieldMeta.MeterReading}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Meter ubl-MeterProperty"
          meta={MeterFieldMeta.MeterProperty} 
          value={value.MeterProperty}
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
