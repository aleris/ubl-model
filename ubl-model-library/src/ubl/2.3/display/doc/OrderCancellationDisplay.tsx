import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderCancellation } from  '../../model/doc/OrderCancellation'
import { OrderCancellationFieldMeta } from  '../../meta/doc/OrderCancellationMeta'
import ContractDisplay from '../cac/ContractDisplay'
import { Contract } from '../../model/cac/Contract'
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
  value: OrderCancellation | undefined
  meta: FieldMeta<T>
}

export default function OrderCancellationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-OrderCancellation">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={OrderCancellationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={OrderCancellationFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={OrderCancellationFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={OrderCancellationFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={OrderCancellationFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={OrderCancellationFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={OrderCancellationFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={OrderCancellationFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={OrderCancellationFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={OrderCancellationFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={OrderCancellationFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={OrderCancellationFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-CancellationNote"
            label="Cancellation Note"
            items={value.CancellationNote}
            meta={OrderCancellationFieldMeta.CancellationNote} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Cancellation Note"
                value={itemValue}
                meta={OrderCancellationFieldMeta.CancellationNote}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-OrderReference"
            label="Order Reference"
            items={value.OrderReference}
            meta={OrderCancellationFieldMeta.OrderReference} 
            itemDisplay={ (itemValue: OrderReference, key: string | number) =>
              <OrderReferenceDisplay
                key={key}
                label="Order Reference"
                value={itemValue}
                meta={OrderCancellationFieldMeta.OrderReference}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Originator Document Reference"
            value={value.OriginatorDocumentReference?.[0]}
            meta={OrderCancellationFieldMeta.OriginatorDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={OrderCancellationFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={OrderCancellationFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Contract"
            label="Contract"
            items={value.Contract}
            meta={OrderCancellationFieldMeta.Contract} 
            itemDisplay={ (itemValue: Contract, key: string | number) =>
              <ContractDisplay
                key={key}
                label="Contract"
                value={itemValue}
                meta={OrderCancellationFieldMeta.Contract}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={OrderCancellationFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={OrderCancellationFieldMeta.Signature}
              />
            }
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={OrderCancellationFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={OrderCancellationFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Originator Customer Party"
            value={value.OriginatorCustomerParty?.[0]}
            meta={OrderCancellationFieldMeta.OriginatorCustomerParty}
          />
        </div>
    </div>
  )
}
