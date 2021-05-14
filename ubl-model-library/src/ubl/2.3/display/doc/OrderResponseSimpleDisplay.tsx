import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: OrderResponseSimple
  meta: FieldMeta<T>
}

export default function OrderResponseSimpleDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-OrderResponseSimple ubl-OrderResponseSimpleType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-OrderResponseSimple ubl-UBLExtensions"
          meta={OrderResponseSimpleFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Identifier ubl-UBLVersionID"
          meta={OrderResponseSimpleFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Identifier ubl-CustomizationID"
          meta={OrderResponseSimpleFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Identifier ubl-ProfileID"
          meta={OrderResponseSimpleFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Identifier ubl-ProfileExecutionID"
          meta={OrderResponseSimpleFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Identifier ubl-ID"
          meta={OrderResponseSimpleFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Indicator ubl-CopyIndicator"
          meta={OrderResponseSimpleFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Identifier ubl-UUID"
          meta={OrderResponseSimpleFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Date ubl-IssueDate"
          meta={OrderResponseSimpleFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Time ubl-IssueTime"
          meta={OrderResponseSimpleFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Text ubl-Note"
          meta={OrderResponseSimpleFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Indicator ubl-AcceptedIndicator"
          meta={OrderResponseSimpleFieldMeta.AcceptedIndicator} 
          value={value.AcceptedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Accepted Indicator"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.AcceptedIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Text ubl-RejectionNote"
          meta={OrderResponseSimpleFieldMeta.RejectionNote} 
          value={value.RejectionNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Rejection Note"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.RejectionNote}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Text ubl-CustomerReference"
          meta={OrderResponseSimpleFieldMeta.CustomerReference} 
          value={value.CustomerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Customer Reference"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.CustomerReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Code ubl-AccountingCostCode"
          meta={OrderResponseSimpleFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderResponseSimple ubl-Text ubl-AccountingCost"
          meta={OrderResponseSimpleFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderResponseSimple ubl-OrderReference"
          meta={OrderResponseSimpleFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay
              key={key}
              label="Order Reference"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.OrderReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderResponseSimple ubl-DocumentReference ubl-OrderChangeDocumentReference"
          meta={OrderResponseSimpleFieldMeta.OrderChangeDocumentReference} 
          value={value.OrderChangeDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Order Change Document Reference"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.OrderChangeDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderResponseSimple ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={OrderResponseSimpleFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderResponseSimple ubl-Signature"
          meta={OrderResponseSimpleFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderResponseSimple ubl-SupplierParty ubl-SellerSupplierParty"
          meta={OrderResponseSimpleFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderResponseSimple ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={OrderResponseSimpleFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderResponseSimple ubl-CustomerParty ubl-OriginatorCustomerParty"
          meta={OrderResponseSimpleFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Originator Customer Party"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.OriginatorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderResponseSimple ubl-SupplierParty ubl-AccountingSupplierParty"
          meta={OrderResponseSimpleFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Accounting Supplier Party"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.AccountingSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderResponseSimple ubl-CustomerParty ubl-AccountingCustomerParty"
          meta={OrderResponseSimpleFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Accounting Customer Party"
              value={itemValue}
              meta={OrderResponseSimpleFieldMeta.AccountingCustomerParty}
            />
          }
        />
        </div>
    </div>
  )
}
