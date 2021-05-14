import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: OrderCancellation
  meta: FieldMeta<T>
}

export default function OrderCancellationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-OrderCancellation ubl-OrderCancellationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-OrderCancellation ubl-UBLExtensions"
          meta={OrderCancellationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={OrderCancellationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderCancellation ubl-Identifier ubl-UBLVersionID"
          meta={OrderCancellationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={OrderCancellationFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderCancellation ubl-Identifier ubl-CustomizationID"
          meta={OrderCancellationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={OrderCancellationFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderCancellation ubl-Identifier ubl-ProfileID"
          meta={OrderCancellationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={OrderCancellationFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderCancellation ubl-Identifier ubl-ProfileExecutionID"
          meta={OrderCancellationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={OrderCancellationFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderCancellation ubl-Identifier ubl-ID"
          meta={OrderCancellationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={OrderCancellationFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderCancellation ubl-Indicator ubl-CopyIndicator"
          meta={OrderCancellationFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={OrderCancellationFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderCancellation ubl-Identifier ubl-UUID"
          meta={OrderCancellationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={OrderCancellationFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderCancellation ubl-Date ubl-IssueDate"
          meta={OrderCancellationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={OrderCancellationFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderCancellation ubl-Time ubl-IssueTime"
          meta={OrderCancellationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={OrderCancellationFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-OrderCancellation ubl-Text ubl-Note"
          meta={OrderCancellationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={OrderCancellationFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-OrderCancellation ubl-Text ubl-CancellationNote"
          meta={OrderCancellationFieldMeta.CancellationNote} 
          value={value.CancellationNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Cancellation Note"
              value={itemValue}
              meta={OrderCancellationFieldMeta.CancellationNote}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderCancellation ubl-OrderReference"
          meta={OrderCancellationFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay
              key={key}
              label="Order Reference"
              value={itemValue}
              meta={OrderCancellationFieldMeta.OrderReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderCancellation ubl-DocumentReference ubl-OriginatorDocumentReference"
          meta={OrderCancellationFieldMeta.OriginatorDocumentReference} 
          value={value.OriginatorDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Originator Document Reference"
              value={itemValue}
              meta={OrderCancellationFieldMeta.OriginatorDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderCancellation ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={OrderCancellationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={OrderCancellationFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderCancellation ubl-Contract"
          meta={OrderCancellationFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Contract"
              value={itemValue}
              meta={OrderCancellationFieldMeta.Contract}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderCancellation ubl-Signature"
          meta={OrderCancellationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={OrderCancellationFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderCancellation ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={OrderCancellationFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={OrderCancellationFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderCancellation ubl-SupplierParty ubl-SellerSupplierParty"
          meta={OrderCancellationFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={OrderCancellationFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderCancellation ubl-CustomerParty ubl-OriginatorCustomerParty"
          meta={OrderCancellationFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Originator Customer Party"
              value={itemValue}
              meta={OrderCancellationFieldMeta.OriginatorCustomerParty}
            />
          }
        />
        </div>
    </div>
  )
}
