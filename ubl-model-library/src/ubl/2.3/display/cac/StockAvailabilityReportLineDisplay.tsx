import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { StockAvailabilityReportLine } from  '../../model/cac/StockAvailabilityReportLine'
import { StockAvailabilityReportLineFieldMeta } from  '../../meta/cac/StockAvailabilityReportLineMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: StockAvailabilityReportLine | undefined
  meta: FieldMeta<T>
}

export default function StockAvailabilityReportLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-StockAvailabilityReportLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={StockAvailabilityReportLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={StockAvailabilityReportLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={StockAvailabilityReportLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={StockAvailabilityReportLineFieldMeta.Note}
              />
            }
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={StockAvailabilityReportLineFieldMeta.Quantity}
          />

          <AmountDisplay
            label="Value"
            value={value.ValueAmount?.[0]}
            meta={StockAvailabilityReportLineFieldMeta.ValueAmount}
          />

          <DateDisplay
            label="Availability Date"
            value={value.AvailabilityDate?.[0]}
            meta={StockAvailabilityReportLineFieldMeta.AvailabilityDate}
          />

          <CodeDisplay
            label="Availability Status Code"
            value={value.AvailabilityStatusCode?.[0]}
            meta={StockAvailabilityReportLineFieldMeta.AvailabilityStatusCode}
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={StockAvailabilityReportLineFieldMeta.Item}
          />
        </div>
    </div>
  )
}
