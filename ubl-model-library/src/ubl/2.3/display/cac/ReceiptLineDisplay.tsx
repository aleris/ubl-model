import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ReceiptLine } from  '../../model/cac/ReceiptLine'
import { ReceiptLineFieldMeta } from  '../../meta/cac/ReceiptLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
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
  value: ReceiptLine | undefined
  meta: FieldMeta<T>
}

export default function ReceiptLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ReceiptLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ReceiptLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ReceiptLineFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ReceiptLineFieldMeta.UUID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ReceiptLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ReceiptLineFieldMeta.Note}
              />
            }
          />

          <QuantityDisplay
            label="Received Quantity"
            value={value.ReceivedQuantity?.[0]}
            meta={ReceiptLineFieldMeta.ReceivedQuantity}
          />

          <QuantityDisplay
            label="Short Quantity"
            value={value.ShortQuantity?.[0]}
            meta={ReceiptLineFieldMeta.ShortQuantity}
          />

          <CodeDisplay
            label="Shortage Action Code"
            value={value.ShortageActionCode?.[0]}
            meta={ReceiptLineFieldMeta.ShortageActionCode}
          />

          <QuantityDisplay
            label="Rejected Quantity"
            value={value.RejectedQuantity?.[0]}
            meta={ReceiptLineFieldMeta.RejectedQuantity}
          />

          <CodeDisplay
            label="Reject Reason Code"
            value={value.RejectReasonCode?.[0]}
            meta={ReceiptLineFieldMeta.RejectReasonCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-RejectReason"
            label="Reject Reason"
            items={value.RejectReason}
            meta={ReceiptLineFieldMeta.RejectReason} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Reject Reason"
                value={itemValue}
                meta={ReceiptLineFieldMeta.RejectReason}
              />
            }
          />

          <CodeDisplay
            label="Reject Action Code"
            value={value.RejectActionCode?.[0]}
            meta={ReceiptLineFieldMeta.RejectActionCode}
          />

          <CodeDisplay
            label="Quantity Discrepancy Code"
            value={value.QuantityDiscrepancyCode?.[0]}
            meta={ReceiptLineFieldMeta.QuantityDiscrepancyCode}
          />

          <QuantityDisplay
            label="Oversupply Quantity"
            value={value.OversupplyQuantity?.[0]}
            meta={ReceiptLineFieldMeta.OversupplyQuantity}
          />

          <DateDisplay
            label="Received Date"
            value={value.ReceivedDate?.[0]}
            meta={ReceiptLineFieldMeta.ReceivedDate}
          />

          <CodeDisplay
            label="Timing Complaint Code"
            value={value.TimingComplaintCode?.[0]}
            meta={ReceiptLineFieldMeta.TimingComplaintCode}
          />

          <TextDisplay
            label="Timing Complaint"
            value={value.TimingComplaint?.[0]}
            meta={ReceiptLineFieldMeta.TimingComplaint}
          />

          <OrderLineReferenceDisplay
            label="Order Line Reference"
            value={value.OrderLineReference?.[0]}
            meta={ReceiptLineFieldMeta.OrderLineReference}
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineReference ubl-DespatchLineReference"
            label="Despatch Line Reference"
            items={value.DespatchLineReference}
            meta={ReceiptLineFieldMeta.DespatchLineReference} 
            itemDisplay={ (itemValue: LineReference, key: string | number) =>
              <LineReferenceDisplay
                key={key}
                label="Despatch Line Reference"
                value={itemValue}
                meta={ReceiptLineFieldMeta.DespatchLineReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={ReceiptLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={ReceiptLineFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Item"
            label="Item"
            items={value.Item}
            meta={ReceiptLineFieldMeta.Item} 
            itemDisplay={ (itemValue: Item, key: string | number) =>
              <ItemDisplay
                key={key}
                label="Item"
                value={itemValue}
                meta={ReceiptLineFieldMeta.Item}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Shipment"
            label="Shipment"
            items={value.Shipment}
            meta={ReceiptLineFieldMeta.Shipment} 
            itemDisplay={ (itemValue: Shipment, key: string | number) =>
              <ShipmentDisplay
                key={key}
                label="Shipment"
                value={itemValue}
                meta={ReceiptLineFieldMeta.Shipment}
              />
            }
          />
        </div>
    </div>
  )
}
