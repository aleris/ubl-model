import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DespatchLine } from  '../../model/cac/DespatchLine'
import { DespatchLineFieldMeta } from  '../../meta/cac/DespatchLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import OrderLineReferenceDisplay from './OrderLineReferenceDisplay'
import { OrderLineReference } from '../../model/cac/OrderLineReference'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import ShipmentDisplay from './ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: DespatchLine | undefined
  meta: FieldMeta<T>
}

export default function DespatchLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DespatchLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DespatchLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DespatchLineFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={DespatchLineFieldMeta.UUID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={DespatchLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={DespatchLineFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Line Status Code"
            value={value.LineStatusCode?.[0]}
            meta={DespatchLineFieldMeta.LineStatusCode}
          />

          <QuantityDisplay
            label="Delivered Quantity"
            value={value.DeliveredQuantity?.[0]}
            meta={DespatchLineFieldMeta.DeliveredQuantity}
          />

          <QuantityDisplay
            label="Backorder Quantity"
            value={value.BackorderQuantity?.[0]}
            meta={DespatchLineFieldMeta.BackorderQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-BackorderReason"
            label="Backorder Reason"
            items={value.BackorderReason}
            meta={DespatchLineFieldMeta.BackorderReason} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Backorder Reason"
                value={itemValue}
                meta={DespatchLineFieldMeta.BackorderReason}
              />
            }
          />

          <QuantityDisplay
            label="Outstanding Quantity"
            value={value.OutstandingQuantity?.[0]}
            meta={DespatchLineFieldMeta.OutstandingQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-OutstandingReason"
            label="Outstanding Reason"
            items={value.OutstandingReason}
            meta={DespatchLineFieldMeta.OutstandingReason} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Outstanding Reason"
                value={itemValue}
                meta={DespatchLineFieldMeta.OutstandingReason}
              />
            }
          />

          <QuantityDisplay
            label="Oversupply Quantity"
            value={value.OversupplyQuantity?.[0]}
            meta={DespatchLineFieldMeta.OversupplyQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-OrderLineReference"
            label="Order Line Reference"
            items={value.OrderLineReference}
            meta={DespatchLineFieldMeta.OrderLineReference} 
            itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
              <OrderLineReferenceDisplay
                key={key}
                label="Order Line Reference"
                value={itemValue}
                meta={DespatchLineFieldMeta.OrderLineReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={DespatchLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={DespatchLineFieldMeta.DocumentReference}
              />
            }
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={DespatchLineFieldMeta.Item}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Shipment"
            label="Shipment"
            items={value.Shipment}
            meta={DespatchLineFieldMeta.Shipment} 
            itemDisplay={ (itemValue: Shipment, key: string | number) =>
              <ShipmentDisplay
                key={key}
                label="Shipment"
                value={itemValue}
                meta={DespatchLineFieldMeta.Shipment}
              />
            }
          />
        </div>
    </div>
  )
}
