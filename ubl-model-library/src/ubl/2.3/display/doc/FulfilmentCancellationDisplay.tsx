import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { FulfilmentCancellation } from  '../../model/doc/FulfilmentCancellation'
import { FulfilmentCancellationFieldMeta } from  '../../meta/doc/FulfilmentCancellationMeta'
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
  value: FulfilmentCancellation | undefined
  meta: FieldMeta<T>
}

export default function FulfilmentCancellationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-FulfilmentCancellation">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={FulfilmentCancellationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={FulfilmentCancellationFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={FulfilmentCancellationFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={FulfilmentCancellationFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={FulfilmentCancellationFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={FulfilmentCancellationFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={FulfilmentCancellationFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={FulfilmentCancellationFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={FulfilmentCancellationFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={FulfilmentCancellationFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={FulfilmentCancellationFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={FulfilmentCancellationFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-CancellationNote"
            label="Cancellation Note"
            items={value.CancellationNote}
            meta={FulfilmentCancellationFieldMeta.CancellationNote} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Cancellation Note"
                value={itemValue}
                meta={FulfilmentCancellationFieldMeta.CancellationNote}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-DespatchDocumentReference"
            label="Despatch Document Reference"
            items={value.DespatchDocumentReference}
            meta={FulfilmentCancellationFieldMeta.DespatchDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Despatch Document Reference"
                value={itemValue}
                meta={FulfilmentCancellationFieldMeta.DespatchDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-ReceiptDocumentReference"
            label="Receipt Document Reference"
            items={value.ReceiptDocumentReference}
            meta={FulfilmentCancellationFieldMeta.ReceiptDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Receipt Document Reference"
                value={itemValue}
                meta={FulfilmentCancellationFieldMeta.ReceiptDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-OrderReference"
            label="Order Reference"
            items={value.OrderReference}
            meta={FulfilmentCancellationFieldMeta.OrderReference} 
            itemDisplay={ (itemValue: OrderReference, key: string | number) =>
              <OrderReferenceDisplay
                key={key}
                label="Order Reference"
                value={itemValue}
                meta={FulfilmentCancellationFieldMeta.OrderReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={FulfilmentCancellationFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={FulfilmentCancellationFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Contract"
            label="Contract"
            items={value.Contract}
            meta={FulfilmentCancellationFieldMeta.Contract} 
            itemDisplay={ (itemValue: Contract, key: string | number) =>
              <ContractDisplay
                key={key}
                label="Contract"
                value={itemValue}
                meta={FulfilmentCancellationFieldMeta.Contract}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={FulfilmentCancellationFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={FulfilmentCancellationFieldMeta.Signature}
              />
            }
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={FulfilmentCancellationFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={FulfilmentCancellationFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Delivery Customer Party"
            value={value.DeliveryCustomerParty?.[0]}
            meta={FulfilmentCancellationFieldMeta.DeliveryCustomerParty}
          />

          <SupplierPartyDisplay
            label="Despatch Supplier Party"
            value={value.DespatchSupplierParty?.[0]}
            meta={FulfilmentCancellationFieldMeta.DespatchSupplierParty}
          />

          <CustomerPartyDisplay
            label="Originator Customer Party"
            value={value.OriginatorCustomerParty?.[0]}
            meta={FulfilmentCancellationFieldMeta.OriginatorCustomerParty}
          />
        </div>
    </div>
  )
}
