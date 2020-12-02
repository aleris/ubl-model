import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Meter
  meta: FieldMeta<T>
}

export default function MeterDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={MeterFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={MeterFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterFieldMeta.MeterNumber} 
          value={value.MeterNumber}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MeterFieldMeta.MeterNumber} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterFieldMeta.MeterName} 
          value={value.MeterName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MeterFieldMeta.MeterName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterFieldMeta.MeterConstant} 
          value={value.MeterConstant}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MeterFieldMeta.MeterConstant} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterFieldMeta.MeterConstantCode} 
          value={value.MeterConstantCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={MeterFieldMeta.MeterConstantCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterFieldMeta.TotalDeliveredQuantity} 
          value={value.TotalDeliveredQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={MeterFieldMeta.TotalDeliveredQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterFieldMeta.MeterReading} 
          value={value.MeterReading}
          itemDisplay={ (itemValue: MeterReading, key: string | number) =>
            <MeterReadingDisplay key={key} meta={MeterFieldMeta.MeterReading} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterFieldMeta.MeterProperty} 
          value={value.MeterProperty}
          itemDisplay={ (itemValue: MeterProperty, key: string | number) =>
            <MeterPropertyDisplay key={key} meta={MeterFieldMeta.MeterProperty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
