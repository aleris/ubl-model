import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderResponseSimple } from  '../../model/doc/OrderResponseSimple'
import { OrderResponseSimpleFieldMeta } from  '../../meta/doc/OrderResponseSimpleMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import OrderReferenceDisplay from '../cac/OrderReferenceDisplay'
import { OrderReference } from '../../model/cac/OrderReference'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import SupplierPartyDisplay from '../cac/SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: OrderResponseSimple | undefined
  meta: FieldMeta<T>
}

export default function OrderResponseSimpleDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-OrderResponseSimple">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={OrderResponseSimpleFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={OrderResponseSimpleFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={OrderResponseSimpleFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={OrderResponseSimpleFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={OrderResponseSimpleFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={OrderResponseSimpleFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={OrderResponseSimpleFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={OrderResponseSimpleFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={OrderResponseSimpleFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={OrderResponseSimpleFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={OrderResponseSimpleFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={OrderResponseSimpleFieldMeta.Note}
              />
            }
          />

          <IndicatorDisplay
            label="Accepted Indicator"
            value={value.AcceptedIndicator?.[0]}
            meta={OrderResponseSimpleFieldMeta.AcceptedIndicator}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-RejectionNote"
            label="Rejection Note"
            items={value.RejectionNote}
            meta={OrderResponseSimpleFieldMeta.RejectionNote} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Rejection Note"
                value={itemValue}
                meta={OrderResponseSimpleFieldMeta.RejectionNote}
              />
            }
          />

          <TextDisplay
            label="Customer Reference"
            value={value.CustomerReference?.[0]}
            meta={OrderResponseSimpleFieldMeta.CustomerReference}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={OrderResponseSimpleFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={OrderResponseSimpleFieldMeta.AccountingCost}
          />

          <OrderReferenceDisplay
            label="Order Reference"
            value={value.OrderReference?.[0]}
            meta={OrderResponseSimpleFieldMeta.OrderReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-OrderChangeDocumentReference"
            label="Order Change Document Reference"
            items={value.OrderChangeDocumentReference}
            meta={OrderResponseSimpleFieldMeta.OrderChangeDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Order Change Document Reference"
                value={itemValue}
                meta={OrderResponseSimpleFieldMeta.OrderChangeDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={OrderResponseSimpleFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={OrderResponseSimpleFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={OrderResponseSimpleFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={OrderResponseSimpleFieldMeta.Signature}
              />
            }
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={OrderResponseSimpleFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={OrderResponseSimpleFieldMeta.BuyerCustomerParty}
          />

          <CustomerPartyDisplay
            label="Originator Customer Party"
            value={value.OriginatorCustomerParty?.[0]}
            meta={OrderResponseSimpleFieldMeta.OriginatorCustomerParty}
          />

          <SupplierPartyDisplay
            label="Accounting Supplier Party"
            value={value.AccountingSupplierParty?.[0]}
            meta={OrderResponseSimpleFieldMeta.AccountingSupplierParty}
          />

          <CustomerPartyDisplay
            label="Accounting Customer Party"
            value={value.AccountingCustomerParty?.[0]}
            meta={OrderResponseSimpleFieldMeta.AccountingCustomerParty}
          />
        </div>
    </div>
  )
}
