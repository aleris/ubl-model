import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderLineReference } from  '../../model/cac/OrderLineReference'
import { OrderLineReferenceFieldMeta } from  '../../meta/cac/OrderLineReferenceMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import OrderReferenceDisplay from './OrderReferenceDisplay'
import { OrderReference } from '../../model/cac/OrderReference'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: OrderLineReference
  meta: FieldMeta<T>
}

export default function OrderLineReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={OrderLineReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={OrderLineReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineReferenceFieldMeta.LineID} 
          value={value.LineID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderLineReferenceFieldMeta.LineID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineReferenceFieldMeta.SalesOrderLineID} 
          value={value.SalesOrderLineID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderLineReferenceFieldMeta.SalesOrderLineID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineReferenceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderLineReferenceFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineReferenceFieldMeta.LineStatusCode} 
          value={value.LineStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderLineReferenceFieldMeta.LineStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineReferenceFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay key={key} meta={OrderLineReferenceFieldMeta.OrderReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
