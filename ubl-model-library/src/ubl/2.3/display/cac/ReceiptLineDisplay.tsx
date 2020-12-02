import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ReceiptLine
  meta: FieldMeta<T>
}

export default function ReceiptLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ReceiptLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ReceiptLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ReceiptLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ReceiptLineFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ReceiptLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.ReceivedQuantity} 
          value={value.ReceivedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ReceiptLineFieldMeta.ReceivedQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.ShortQuantity} 
          value={value.ShortQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ReceiptLineFieldMeta.ShortQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.ShortageActionCode} 
          value={value.ShortageActionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ReceiptLineFieldMeta.ShortageActionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.RejectedQuantity} 
          value={value.RejectedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ReceiptLineFieldMeta.RejectedQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.RejectReasonCode} 
          value={value.RejectReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ReceiptLineFieldMeta.RejectReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.RejectReason} 
          value={value.RejectReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ReceiptLineFieldMeta.RejectReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.RejectActionCode} 
          value={value.RejectActionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ReceiptLineFieldMeta.RejectActionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.QuantityDiscrepancyCode} 
          value={value.QuantityDiscrepancyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ReceiptLineFieldMeta.QuantityDiscrepancyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.OversupplyQuantity} 
          value={value.OversupplyQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ReceiptLineFieldMeta.OversupplyQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.ReceivedDate} 
          value={value.ReceivedDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ReceiptLineFieldMeta.ReceivedDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.TimingComplaintCode} 
          value={value.TimingComplaintCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ReceiptLineFieldMeta.TimingComplaintCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.TimingComplaint} 
          value={value.TimingComplaint}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ReceiptLineFieldMeta.TimingComplaint} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.OrderLineReference} 
          value={value.OrderLineReference}
          itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
            <OrderLineReferenceDisplay key={key} meta={ReceiptLineFieldMeta.OrderLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.DespatchLineReference} 
          value={value.DespatchLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={ReceiptLineFieldMeta.DespatchLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ReceiptLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={ReceiptLineFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptLineFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={ReceiptLineFieldMeta.Shipment} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
