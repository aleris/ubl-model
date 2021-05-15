import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: MeterReading | undefined
  meta: FieldMeta<T>
}

export default function MeterReadingDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-MeterReading">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={MeterReadingFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={MeterReadingFieldMeta.ID}
          />

          <TextDisplay
            label="Meter Reading Type"
            value={value.MeterReadingType?.[0]}
            meta={MeterReadingFieldMeta.MeterReadingType}
          />

          <CodeDisplay
            label="Meter Reading Type Code"
            value={value.MeterReadingTypeCode?.[0]}
            meta={MeterReadingFieldMeta.MeterReadingTypeCode}
          />

          <DateDisplay
            label="Previous Meter Reading Date"
            value={value.PreviousMeterReadingDate?.[0]}
            meta={MeterReadingFieldMeta.PreviousMeterReadingDate}
          />

          <QuantityDisplay
            label="Previous Meter Quantity"
            value={value.PreviousMeterQuantity?.[0]}
            meta={MeterReadingFieldMeta.PreviousMeterQuantity}
          />

          <DateDisplay
            label="Latest Meter Reading Date"
            value={value.LatestMeterReadingDate?.[0]}
            meta={MeterReadingFieldMeta.LatestMeterReadingDate}
          />

          <QuantityDisplay
            label="Latest Meter Quantity"
            value={value.LatestMeterQuantity?.[0]}
            meta={MeterReadingFieldMeta.LatestMeterQuantity}
          />

          <TextDisplay
            label="Previous Meter Reading Method"
            value={value.PreviousMeterReadingMethod?.[0]}
            meta={MeterReadingFieldMeta.PreviousMeterReadingMethod}
          />

          <CodeDisplay
            label="Previous Meter Reading Method Code"
            value={value.PreviousMeterReadingMethodCode?.[0]}
            meta={MeterReadingFieldMeta.PreviousMeterReadingMethodCode}
          />

          <TextDisplay
            label="Latest Meter Reading Method"
            value={value.LatestMeterReadingMethod?.[0]}
            meta={MeterReadingFieldMeta.LatestMeterReadingMethod}
          />

          <CodeDisplay
            label="Latest Meter Reading Method Code"
            value={value.LatestMeterReadingMethodCode?.[0]}
            meta={MeterReadingFieldMeta.LatestMeterReadingMethodCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-MeterReadingComments"
            label="Meter Reading Comments"
            items={value.MeterReadingComments}
            meta={MeterReadingFieldMeta.MeterReadingComments} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Meter Reading Comments"
                value={itemValue}
                meta={MeterReadingFieldMeta.MeterReadingComments}
              />
            }
          />

          <QuantityDisplay
            label="Delivered Quantity"
            value={value.DeliveredQuantity?.[0]}
            meta={MeterReadingFieldMeta.DeliveredQuantity}
          />
        </div>
    </div>
  )
}
