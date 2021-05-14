import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: OrderReference
  meta: FieldMeta<T>
}

export default function OrderReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-OrderReference ubl-OrderReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-OrderReference ubl-UBLExtensions"
          meta={OrderReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={OrderReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderReference ubl-Identifier ubl-ID"
          meta={OrderReferenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={OrderReferenceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderReference ubl-Identifier ubl-SalesOrderID"
          meta={OrderReferenceFieldMeta.SalesOrderID} 
          value={value.SalesOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Sales Order Identifier"
              value={itemValue}
              meta={OrderReferenceFieldMeta.SalesOrderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderReference ubl-Indicator ubl-CopyIndicator"
          meta={OrderReferenceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={OrderReferenceFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderReference ubl-Identifier ubl-UUID"
          meta={OrderReferenceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={OrderReferenceFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderReference ubl-Date ubl-IssueDate"
          meta={OrderReferenceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={OrderReferenceFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderReference ubl-Time ubl-IssueTime"
          meta={OrderReferenceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={OrderReferenceFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderReference ubl-Text ubl-CustomerReference"
          meta={OrderReferenceFieldMeta.CustomerReference} 
          value={value.CustomerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Customer Reference"
              value={itemValue}
              meta={OrderReferenceFieldMeta.CustomerReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderReference ubl-Code ubl-OrderTypeCode"
          meta={OrderReferenceFieldMeta.OrderTypeCode} 
          value={value.OrderTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Order Type Code"
              value={itemValue}
              meta={OrderReferenceFieldMeta.OrderTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderReference ubl-DocumentReference"
          meta={OrderReferenceFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={OrderReferenceFieldMeta.DocumentReference}
            />
          }
        />
        </div>
    </div>
  )
}
