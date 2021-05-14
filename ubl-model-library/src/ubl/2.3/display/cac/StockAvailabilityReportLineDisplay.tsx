import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: StockAvailabilityReportLine
  meta: FieldMeta<T>
}

export default function StockAvailabilityReportLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-StockAvailabilityReportLine ubl-StockAvailabilityReportLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-StockAvailabilityReportLine ubl-UBLExtensions"
          meta={StockAvailabilityReportLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={StockAvailabilityReportLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReportLine ubl-Identifier ubl-ID"
          meta={StockAvailabilityReportLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={StockAvailabilityReportLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-StockAvailabilityReportLine ubl-Text ubl-Note"
          meta={StockAvailabilityReportLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={StockAvailabilityReportLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReportLine ubl-Quantity"
          meta={StockAvailabilityReportLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={StockAvailabilityReportLineFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReportLine ubl-Amount ubl-ValueAmount"
          meta={StockAvailabilityReportLineFieldMeta.ValueAmount} 
          value={value.ValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Value"
              value={itemValue}
              meta={StockAvailabilityReportLineFieldMeta.ValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReportLine ubl-Date ubl-AvailabilityDate"
          meta={StockAvailabilityReportLineFieldMeta.AvailabilityDate} 
          value={value.AvailabilityDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Availability Date"
              value={itemValue}
              meta={StockAvailabilityReportLineFieldMeta.AvailabilityDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReportLine ubl-Code ubl-AvailabilityStatusCode"
          meta={StockAvailabilityReportLineFieldMeta.AvailabilityStatusCode} 
          value={value.AvailabilityStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Availability Status Code"
              value={itemValue}
              meta={StockAvailabilityReportLineFieldMeta.AvailabilityStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-StockAvailabilityReportLine ubl-Item"
          meta={StockAvailabilityReportLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={StockAvailabilityReportLineFieldMeta.Item}
            />
          }
        />
        </div>
    </div>
  )
}
