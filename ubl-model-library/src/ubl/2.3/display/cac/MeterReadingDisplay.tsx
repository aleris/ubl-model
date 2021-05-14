import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: MeterReading
  meta: FieldMeta<T>
}

export default function MeterReadingDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-MeterReading ubl-MeterReadingType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-MeterReading ubl-UBLExtensions"
          meta={MeterReadingFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={MeterReadingFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Identifier ubl-ID"
          meta={MeterReadingFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={MeterReadingFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Text ubl-MeterReadingType"
          meta={MeterReadingFieldMeta.MeterReadingType} 
          value={value.MeterReadingType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Meter Reading Type"
              value={itemValue}
              meta={MeterReadingFieldMeta.MeterReadingType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Code ubl-MeterReadingTypeCode"
          meta={MeterReadingFieldMeta.MeterReadingTypeCode} 
          value={value.MeterReadingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Meter Reading Type Code"
              value={itemValue}
              meta={MeterReadingFieldMeta.MeterReadingTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Date ubl-PreviousMeterReadingDate"
          meta={MeterReadingFieldMeta.PreviousMeterReadingDate} 
          value={value.PreviousMeterReadingDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Previous Meter Reading Date"
              value={itemValue}
              meta={MeterReadingFieldMeta.PreviousMeterReadingDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Quantity ubl-PreviousMeterQuantity"
          meta={MeterReadingFieldMeta.PreviousMeterQuantity} 
          value={value.PreviousMeterQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Previous Meter Quantity"
              value={itemValue}
              meta={MeterReadingFieldMeta.PreviousMeterQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Date ubl-LatestMeterReadingDate"
          meta={MeterReadingFieldMeta.LatestMeterReadingDate} 
          value={value.LatestMeterReadingDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Latest Meter Reading Date"
              value={itemValue}
              meta={MeterReadingFieldMeta.LatestMeterReadingDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Quantity ubl-LatestMeterQuantity"
          meta={MeterReadingFieldMeta.LatestMeterQuantity} 
          value={value.LatestMeterQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Latest Meter Quantity"
              value={itemValue}
              meta={MeterReadingFieldMeta.LatestMeterQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Text ubl-PreviousMeterReadingMethod"
          meta={MeterReadingFieldMeta.PreviousMeterReadingMethod} 
          value={value.PreviousMeterReadingMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Previous Meter Reading Method"
              value={itemValue}
              meta={MeterReadingFieldMeta.PreviousMeterReadingMethod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Code ubl-PreviousMeterReadingMethodCode"
          meta={MeterReadingFieldMeta.PreviousMeterReadingMethodCode} 
          value={value.PreviousMeterReadingMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Previous Meter Reading Method Code"
              value={itemValue}
              meta={MeterReadingFieldMeta.PreviousMeterReadingMethodCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Text ubl-LatestMeterReadingMethod"
          meta={MeterReadingFieldMeta.LatestMeterReadingMethod} 
          value={value.LatestMeterReadingMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Latest Meter Reading Method"
              value={itemValue}
              meta={MeterReadingFieldMeta.LatestMeterReadingMethod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Code ubl-LatestMeterReadingMethodCode"
          meta={MeterReadingFieldMeta.LatestMeterReadingMethodCode} 
          value={value.LatestMeterReadingMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Latest Meter Reading Method Code"
              value={itemValue}
              meta={MeterReadingFieldMeta.LatestMeterReadingMethodCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-MeterReading ubl-Text ubl-MeterReadingComments"
          meta={MeterReadingFieldMeta.MeterReadingComments} 
          value={value.MeterReadingComments}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Meter Reading Comments"
              value={itemValue}
              meta={MeterReadingFieldMeta.MeterReadingComments}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterReading ubl-Quantity ubl-DeliveredQuantity"
          meta={MeterReadingFieldMeta.DeliveredQuantity} 
          value={value.DeliveredQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Delivered Quantity"
              value={itemValue}
              meta={MeterReadingFieldMeta.DeliveredQuantity}
            />
          }
        />
        </div>
    </div>
  )
}
