import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: OrderLineReference
  meta: FieldMeta<T>
}

export default function OrderLineReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-OrderLineReference ubl-OrderLineReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-OrderLineReference ubl-UBLExtensions"
          meta={OrderLineReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={OrderLineReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderLineReference ubl-Identifier ubl-LineID"
          meta={OrderLineReferenceFieldMeta.LineID} 
          value={value.LineID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Line Identifier"
              value={itemValue}
              meta={OrderLineReferenceFieldMeta.LineID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderLineReference ubl-Identifier ubl-SalesOrderLineID"
          meta={OrderLineReferenceFieldMeta.SalesOrderLineID} 
          value={value.SalesOrderLineID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Sales Order Line Identifier"
              value={itemValue}
              meta={OrderLineReferenceFieldMeta.SalesOrderLineID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderLineReference ubl-Identifier ubl-UUID"
          meta={OrderLineReferenceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={OrderLineReferenceFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderLineReference ubl-Code ubl-LineStatusCode"
          meta={OrderLineReferenceFieldMeta.LineStatusCode} 
          value={value.LineStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Line Status Code"
              value={itemValue}
              meta={OrderLineReferenceFieldMeta.LineStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderLineReference ubl-OrderReference"
          meta={OrderLineReferenceFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay
              key={key}
              label="Order Reference"
              value={itemValue}
              meta={OrderLineReferenceFieldMeta.OrderReference}
            />
          }
        />
        </div>
    </div>
  )
}
