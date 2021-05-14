import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: DespatchLine
  meta: FieldMeta<T>
}

export default function DespatchLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DespatchLine ubl-DespatchLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DespatchLine ubl-UBLExtensions"
          meta={DespatchLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DespatchLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchLine ubl-Identifier ubl-ID"
          meta={DespatchLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DespatchLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchLine ubl-Identifier ubl-UUID"
          meta={DespatchLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={DespatchLineFieldMeta.UUID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DespatchLine ubl-Text ubl-Note"
          meta={DespatchLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={DespatchLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchLine ubl-Code ubl-LineStatusCode"
          meta={DespatchLineFieldMeta.LineStatusCode} 
          value={value.LineStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Line Status Code"
              value={itemValue}
              meta={DespatchLineFieldMeta.LineStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchLine ubl-Quantity ubl-DeliveredQuantity"
          meta={DespatchLineFieldMeta.DeliveredQuantity} 
          value={value.DeliveredQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Delivered Quantity"
              value={itemValue}
              meta={DespatchLineFieldMeta.DeliveredQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchLine ubl-Quantity ubl-BackorderQuantity"
          meta={DespatchLineFieldMeta.BackorderQuantity} 
          value={value.BackorderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Backorder Quantity"
              value={itemValue}
              meta={DespatchLineFieldMeta.BackorderQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DespatchLine ubl-Text ubl-BackorderReason"
          meta={DespatchLineFieldMeta.BackorderReason} 
          value={value.BackorderReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Backorder Reason"
              value={itemValue}
              meta={DespatchLineFieldMeta.BackorderReason}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchLine ubl-Quantity ubl-OutstandingQuantity"
          meta={DespatchLineFieldMeta.OutstandingQuantity} 
          value={value.OutstandingQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Outstanding Quantity"
              value={itemValue}
              meta={DespatchLineFieldMeta.OutstandingQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DespatchLine ubl-Text ubl-OutstandingReason"
          meta={DespatchLineFieldMeta.OutstandingReason} 
          value={value.OutstandingReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Outstanding Reason"
              value={itemValue}
              meta={DespatchLineFieldMeta.OutstandingReason}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchLine ubl-Quantity ubl-OversupplyQuantity"
          meta={DespatchLineFieldMeta.OversupplyQuantity} 
          value={value.OversupplyQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Oversupply Quantity"
              value={itemValue}
              meta={DespatchLineFieldMeta.OversupplyQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DespatchLine ubl-OrderLineReference"
          meta={DespatchLineFieldMeta.OrderLineReference} 
          value={value.OrderLineReference}
          itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
            <OrderLineReferenceDisplay
              key={key}
              label="Order Line Reference"
              value={itemValue}
              meta={DespatchLineFieldMeta.OrderLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DespatchLine ubl-DocumentReference"
          meta={DespatchLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={DespatchLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DespatchLine ubl-Item"
          meta={DespatchLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={DespatchLineFieldMeta.Item}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DespatchLine ubl-Shipment"
          meta={DespatchLineFieldMeta.Shipment} 
          value={value.Shipment}
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
