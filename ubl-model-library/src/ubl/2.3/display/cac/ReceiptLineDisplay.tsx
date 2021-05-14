import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ReceiptLine
  meta: FieldMeta<T>
}

export default function ReceiptLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ReceiptLine ubl-ReceiptLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ReceiptLine ubl-UBLExtensions"
          meta={ReceiptLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ReceiptLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Identifier ubl-ID"
          meta={ReceiptLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ReceiptLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Identifier ubl-UUID"
          meta={ReceiptLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ReceiptLineFieldMeta.UUID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Text ubl-Note"
          meta={ReceiptLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ReceiptLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Quantity ubl-ReceivedQuantity"
          meta={ReceiptLineFieldMeta.ReceivedQuantity} 
          value={value.ReceivedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Received Quantity"
              value={itemValue}
              meta={ReceiptLineFieldMeta.ReceivedQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Quantity ubl-ShortQuantity"
          meta={ReceiptLineFieldMeta.ShortQuantity} 
          value={value.ShortQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Short Quantity"
              value={itemValue}
              meta={ReceiptLineFieldMeta.ShortQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Code ubl-ShortageActionCode"
          meta={ReceiptLineFieldMeta.ShortageActionCode} 
          value={value.ShortageActionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Shortage Action Code"
              value={itemValue}
              meta={ReceiptLineFieldMeta.ShortageActionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Quantity ubl-RejectedQuantity"
          meta={ReceiptLineFieldMeta.RejectedQuantity} 
          value={value.RejectedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Rejected Quantity"
              value={itemValue}
              meta={ReceiptLineFieldMeta.RejectedQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Code ubl-RejectReasonCode"
          meta={ReceiptLineFieldMeta.RejectReasonCode} 
          value={value.RejectReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Reject Reason Code"
              value={itemValue}
              meta={ReceiptLineFieldMeta.RejectReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Text ubl-RejectReason"
          meta={ReceiptLineFieldMeta.RejectReason} 
          value={value.RejectReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Reject Reason"
              value={itemValue}
              meta={ReceiptLineFieldMeta.RejectReason}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Code ubl-RejectActionCode"
          meta={ReceiptLineFieldMeta.RejectActionCode} 
          value={value.RejectActionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Reject Action Code"
              value={itemValue}
              meta={ReceiptLineFieldMeta.RejectActionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Code ubl-QuantityDiscrepancyCode"
          meta={ReceiptLineFieldMeta.QuantityDiscrepancyCode} 
          value={value.QuantityDiscrepancyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Quantity Discrepancy Code"
              value={itemValue}
              meta={ReceiptLineFieldMeta.QuantityDiscrepancyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Quantity ubl-OversupplyQuantity"
          meta={ReceiptLineFieldMeta.OversupplyQuantity} 
          value={value.OversupplyQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Oversupply Quantity"
              value={itemValue}
              meta={ReceiptLineFieldMeta.OversupplyQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Date ubl-ReceivedDate"
          meta={ReceiptLineFieldMeta.ReceivedDate} 
          value={value.ReceivedDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Received Date"
              value={itemValue}
              meta={ReceiptLineFieldMeta.ReceivedDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Code ubl-TimingComplaintCode"
          meta={ReceiptLineFieldMeta.TimingComplaintCode} 
          value={value.TimingComplaintCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Timing Complaint Code"
              value={itemValue}
              meta={ReceiptLineFieldMeta.TimingComplaintCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptLine ubl-Text ubl-TimingComplaint"
          meta={ReceiptLineFieldMeta.TimingComplaint} 
          value={value.TimingComplaint}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Timing Complaint"
              value={itemValue}
              meta={ReceiptLineFieldMeta.TimingComplaint}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ReceiptLine ubl-OrderLineReference"
          meta={ReceiptLineFieldMeta.OrderLineReference} 
          value={value.OrderLineReference}
          itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
            <OrderLineReferenceDisplay
              key={key}
              label="Order Line Reference"
              value={itemValue}
              meta={ReceiptLineFieldMeta.OrderLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ReceiptLine ubl-LineReference ubl-DespatchLineReference"
          meta={ReceiptLineFieldMeta.DespatchLineReference} 
          value={value.DespatchLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Despatch Line Reference"
              value={itemValue}
              meta={ReceiptLineFieldMeta.DespatchLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ReceiptLine ubl-DocumentReference"
          meta={ReceiptLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={ReceiptLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ReceiptLine ubl-Item"
          meta={ReceiptLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={ReceiptLineFieldMeta.Item}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ReceiptLine ubl-Shipment"
          meta={ReceiptLineFieldMeta.Shipment} 
          value={value.Shipment}
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
