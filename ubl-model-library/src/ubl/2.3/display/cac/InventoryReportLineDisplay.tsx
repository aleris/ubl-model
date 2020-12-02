import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { InventoryReportLine } from  '../../model/cac/InventoryReportLine'
import { InventoryReportLineFieldMeta } from  '../../meta/cac/InventoryReportLineMeta'
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
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: InventoryReportLine
  meta: FieldMeta<T>
}

export default function InventoryReportLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={InventoryReportLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={InventoryReportLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InventoryReportLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={InventoryReportLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={InventoryReportLineFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportLineFieldMeta.InventoryValueAmount} 
          value={value.InventoryValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={InventoryReportLineFieldMeta.InventoryValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportLineFieldMeta.AvailabilityDate} 
          value={value.AvailabilityDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={InventoryReportLineFieldMeta.AvailabilityDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportLineFieldMeta.AvailabilityStatusCode} 
          value={value.AvailabilityStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={InventoryReportLineFieldMeta.AvailabilityStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={InventoryReportLineFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportLineFieldMeta.InventoryLocation} 
          value={value.InventoryLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={InventoryReportLineFieldMeta.InventoryLocation} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
