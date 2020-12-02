import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { MeterReading } from  '../../model/cac/MeterReading'
import { MeterReadingFieldMeta } from  '../../meta/cac/MeterReadingMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: MeterReading
  meta: FieldMeta<T>
}

export default function MeterReadingDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={MeterReadingFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={MeterReadingFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={MeterReadingFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.MeterReadingType} 
          value={value.MeterReadingType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MeterReadingFieldMeta.MeterReadingType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.MeterReadingTypeCode} 
          value={value.MeterReadingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={MeterReadingFieldMeta.MeterReadingTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.PreviousMeterReadingDate} 
          value={value.PreviousMeterReadingDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={MeterReadingFieldMeta.PreviousMeterReadingDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.PreviousMeterQuantity} 
          value={value.PreviousMeterQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={MeterReadingFieldMeta.PreviousMeterQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.LatestMeterReadingDate} 
          value={value.LatestMeterReadingDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={MeterReadingFieldMeta.LatestMeterReadingDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.LatestMeterQuantity} 
          value={value.LatestMeterQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={MeterReadingFieldMeta.LatestMeterQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.PreviousMeterReadingMethod} 
          value={value.PreviousMeterReadingMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MeterReadingFieldMeta.PreviousMeterReadingMethod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.PreviousMeterReadingMethodCode} 
          value={value.PreviousMeterReadingMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={MeterReadingFieldMeta.PreviousMeterReadingMethodCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.LatestMeterReadingMethod} 
          value={value.LatestMeterReadingMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MeterReadingFieldMeta.LatestMeterReadingMethod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.LatestMeterReadingMethodCode} 
          value={value.LatestMeterReadingMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={MeterReadingFieldMeta.LatestMeterReadingMethodCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.MeterReadingComments} 
          value={value.MeterReadingComments}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MeterReadingFieldMeta.MeterReadingComments} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterReadingFieldMeta.DeliveredQuantity} 
          value={value.DeliveredQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={MeterReadingFieldMeta.DeliveredQuantity} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
