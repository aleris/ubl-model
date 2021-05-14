import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: FulfilmentCancellation
  meta: FieldMeta<T>
}

export default function FulfilmentCancellationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-FulfilmentCancellation ubl-FulfilmentCancellationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-FulfilmentCancellation ubl-UBLExtensions"
          meta={FulfilmentCancellationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FulfilmentCancellation ubl-Identifier ubl-UBLVersionID"
          meta={FulfilmentCancellationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FulfilmentCancellation ubl-Identifier ubl-CustomizationID"
          meta={FulfilmentCancellationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FulfilmentCancellation ubl-Identifier ubl-ProfileID"
          meta={FulfilmentCancellationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FulfilmentCancellation ubl-Identifier ubl-ProfileExecutionID"
          meta={FulfilmentCancellationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FulfilmentCancellation ubl-Identifier ubl-ID"
          meta={FulfilmentCancellationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FulfilmentCancellation ubl-Indicator ubl-CopyIndicator"
          meta={FulfilmentCancellationFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FulfilmentCancellation ubl-Identifier ubl-UUID"
          meta={FulfilmentCancellationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FulfilmentCancellation ubl-Date ubl-IssueDate"
          meta={FulfilmentCancellationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FulfilmentCancellation ubl-Time ubl-IssueTime"
          meta={FulfilmentCancellationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-FulfilmentCancellation ubl-Text ubl-Note"
          meta={FulfilmentCancellationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-FulfilmentCancellation ubl-Text ubl-CancellationNote"
          meta={FulfilmentCancellationFieldMeta.CancellationNote} 
          value={value.CancellationNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Cancellation Note"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.CancellationNote}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-FulfilmentCancellation ubl-DocumentReference ubl-DespatchDocumentReference"
          meta={FulfilmentCancellationFieldMeta.DespatchDocumentReference} 
          value={value.DespatchDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Despatch Document Reference"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.DespatchDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-FulfilmentCancellation ubl-DocumentReference ubl-ReceiptDocumentReference"
          meta={FulfilmentCancellationFieldMeta.ReceiptDocumentReference} 
          value={value.ReceiptDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Receipt Document Reference"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.ReceiptDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-FulfilmentCancellation ubl-OrderReference"
          meta={FulfilmentCancellationFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay
              key={key}
              label="Order Reference"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.OrderReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-FulfilmentCancellation ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={FulfilmentCancellationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-FulfilmentCancellation ubl-Contract"
          meta={FulfilmentCancellationFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Contract"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.Contract}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-FulfilmentCancellation ubl-Signature"
          meta={FulfilmentCancellationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-FulfilmentCancellation ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={FulfilmentCancellationFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-FulfilmentCancellation ubl-SupplierParty ubl-SellerSupplierParty"
          meta={FulfilmentCancellationFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-FulfilmentCancellation ubl-CustomerParty ubl-DeliveryCustomerParty"
          meta={FulfilmentCancellationFieldMeta.DeliveryCustomerParty} 
          value={value.DeliveryCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Delivery Customer Party"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.DeliveryCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-FulfilmentCancellation ubl-SupplierParty ubl-DespatchSupplierParty"
          meta={FulfilmentCancellationFieldMeta.DespatchSupplierParty} 
          value={value.DespatchSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Despatch Supplier Party"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.DespatchSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-FulfilmentCancellation ubl-CustomerParty ubl-OriginatorCustomerParty"
          meta={FulfilmentCancellationFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Originator Customer Party"
              value={itemValue}
              meta={FulfilmentCancellationFieldMeta.OriginatorCustomerParty}
            />
          }
        />
        </div>
    </div>
  )
}
