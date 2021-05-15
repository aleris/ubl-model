import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderReference } from  '../../model/cac/OrderReference'
import { OrderReferenceFieldMeta } from  '../../meta/cac/OrderReferenceMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: OrderReference | undefined
  meta: FieldMeta<T>
}

export default function OrderReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-OrderReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={OrderReferenceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={OrderReferenceFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Sales Order Identifier"
            value={value.SalesOrderID?.[0]}
            meta={OrderReferenceFieldMeta.SalesOrderID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={OrderReferenceFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={OrderReferenceFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={OrderReferenceFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={OrderReferenceFieldMeta.IssueTime}
          />

          <TextDisplay
            label="Customer Reference"
            value={value.CustomerReference?.[0]}
            meta={OrderReferenceFieldMeta.CustomerReference}
          />

          <CodeDisplay
            label="Order Type Code"
            value={value.OrderTypeCode?.[0]}
            meta={OrderReferenceFieldMeta.OrderTypeCode}
          />

          <DocumentReferenceDisplay
            label="Document Reference"
            value={value.DocumentReference?.[0]}
            meta={OrderReferenceFieldMeta.DocumentReference}
          />
        </div>
    </div>
  )
}
