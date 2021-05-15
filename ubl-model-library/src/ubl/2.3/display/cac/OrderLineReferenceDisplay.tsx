import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: OrderLineReference | undefined
  meta: FieldMeta<T>
}

export default function OrderLineReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-OrderLineReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={OrderLineReferenceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Line Identifier"
            value={value.LineID?.[0]}
            meta={OrderLineReferenceFieldMeta.LineID}
          />

          <IdentifierDisplay
            label="Sales Order Line Identifier"
            value={value.SalesOrderLineID?.[0]}
            meta={OrderLineReferenceFieldMeta.SalesOrderLineID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={OrderLineReferenceFieldMeta.UUID}
          />

          <CodeDisplay
            label="Line Status Code"
            value={value.LineStatusCode?.[0]}
            meta={OrderLineReferenceFieldMeta.LineStatusCode}
          />

          <OrderReferenceDisplay
            label="Order Reference"
            value={value.OrderReference?.[0]}
            meta={OrderLineReferenceFieldMeta.OrderReference}
          />
        </div>
    </div>
  )
}
