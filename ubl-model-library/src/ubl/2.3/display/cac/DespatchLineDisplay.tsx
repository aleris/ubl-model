import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: DespatchLine
  meta: FieldMeta<T>
}

export default function DespatchLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DespatchLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DespatchLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DespatchLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DespatchLineFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DespatchLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.LineStatusCode} 
          value={value.LineStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DespatchLineFieldMeta.LineStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.DeliveredQuantity} 
          value={value.DeliveredQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={DespatchLineFieldMeta.DeliveredQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.BackorderQuantity} 
          value={value.BackorderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={DespatchLineFieldMeta.BackorderQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.BackorderReason} 
          value={value.BackorderReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DespatchLineFieldMeta.BackorderReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.OutstandingQuantity} 
          value={value.OutstandingQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={DespatchLineFieldMeta.OutstandingQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.OutstandingReason} 
          value={value.OutstandingReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DespatchLineFieldMeta.OutstandingReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.OversupplyQuantity} 
          value={value.OversupplyQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={DespatchLineFieldMeta.OversupplyQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.OrderLineReference} 
          value={value.OrderLineReference}
          itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
            <OrderLineReferenceDisplay key={key} meta={DespatchLineFieldMeta.OrderLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={DespatchLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={DespatchLineFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchLineFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={DespatchLineFieldMeta.Shipment} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
