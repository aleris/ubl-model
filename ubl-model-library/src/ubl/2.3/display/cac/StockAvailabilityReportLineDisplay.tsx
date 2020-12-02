import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: StockAvailabilityReportLine
  meta: FieldMeta<T>
}

export default function StockAvailabilityReportLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={StockAvailabilityReportLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={StockAvailabilityReportLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StockAvailabilityReportLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={StockAvailabilityReportLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={StockAvailabilityReportLineFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportLineFieldMeta.ValueAmount} 
          value={value.ValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={StockAvailabilityReportLineFieldMeta.ValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportLineFieldMeta.AvailabilityDate} 
          value={value.AvailabilityDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={StockAvailabilityReportLineFieldMeta.AvailabilityDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportLineFieldMeta.AvailabilityStatusCode} 
          value={value.AvailabilityStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={StockAvailabilityReportLineFieldMeta.AvailabilityStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={StockAvailabilityReportLineFieldMeta.Item} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
