import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: InventoryReportLine
  meta: FieldMeta<T>
}

export default function InventoryReportLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-InventoryReportLine ubl-InventoryReportLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-InventoryReportLine ubl-UBLExtensions"
          meta={InventoryReportLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={InventoryReportLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReportLine ubl-Identifier ubl-ID"
          meta={InventoryReportLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={InventoryReportLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-InventoryReportLine ubl-Text ubl-Note"
          meta={InventoryReportLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={InventoryReportLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReportLine ubl-Quantity"
          meta={InventoryReportLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={InventoryReportLineFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReportLine ubl-Amount ubl-InventoryValueAmount"
          meta={InventoryReportLineFieldMeta.InventoryValueAmount} 
          value={value.InventoryValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Inventory Value"
              value={itemValue}
              meta={InventoryReportLineFieldMeta.InventoryValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReportLine ubl-Date ubl-AvailabilityDate"
          meta={InventoryReportLineFieldMeta.AvailabilityDate} 
          value={value.AvailabilityDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Availability Date"
              value={itemValue}
              meta={InventoryReportLineFieldMeta.AvailabilityDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReportLine ubl-Code ubl-AvailabilityStatusCode"
          meta={InventoryReportLineFieldMeta.AvailabilityStatusCode} 
          value={value.AvailabilityStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Availability Status Code"
              value={itemValue}
              meta={InventoryReportLineFieldMeta.AvailabilityStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InventoryReportLine ubl-Item"
          meta={InventoryReportLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={InventoryReportLineFieldMeta.Item}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InventoryReportLine ubl-Location ubl-InventoryLocation"
          meta={InventoryReportLineFieldMeta.InventoryLocation} 
          value={value.InventoryLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Inventory Location"
              value={itemValue}
              meta={InventoryReportLineFieldMeta.InventoryLocation}
            />
          }
        />
        </div>
    </div>
  )
}
