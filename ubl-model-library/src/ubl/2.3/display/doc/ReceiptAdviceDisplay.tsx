import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ReceiptAdvice } from  '../../model/doc/ReceiptAdvice'
import { ReceiptAdviceFieldMeta } from  '../../meta/doc/ReceiptAdviceMeta'
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
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import OrderReferenceDisplay from '../cac/OrderReferenceDisplay'
import { OrderReference } from '../../model/cac/OrderReference'
import ReceiptLineDisplay from '../cac/ReceiptLineDisplay'
import { ReceiptLine } from '../../model/cac/ReceiptLine'
import ShipmentDisplay from '../cac/ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
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
  value: ReceiptAdvice
  meta: FieldMeta<T>
}

export default function ReceiptAdviceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-ReceiptAdvice ubl-ReceiptAdviceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ReceiptAdvice ubl-UBLExtensions"
          meta={ReceiptAdviceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Identifier ubl-UBLVersionID"
          meta={ReceiptAdviceFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Identifier ubl-CustomizationID"
          meta={ReceiptAdviceFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Identifier ubl-ProfileID"
          meta={ReceiptAdviceFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Identifier ubl-ProfileExecutionID"
          meta={ReceiptAdviceFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Identifier ubl-ID"
          meta={ReceiptAdviceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Indicator ubl-CopyIndicator"
          meta={ReceiptAdviceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Identifier ubl-UUID"
          meta={ReceiptAdviceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Date ubl-IssueDate"
          meta={ReceiptAdviceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Time ubl-IssueTime"
          meta={ReceiptAdviceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Code ubl-DocumentStatusCode"
          meta={ReceiptAdviceFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Status Code"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.DocumentStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Code ubl-ReceiptAdviceTypeCode"
          meta={ReceiptAdviceFieldMeta.ReceiptAdviceTypeCode} 
          value={value.ReceiptAdviceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Receipt Advice Type Code"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.ReceiptAdviceTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Text ubl-Note"
          meta={ReceiptAdviceFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReceiptAdvice ubl-Numeric ubl-LineCountNumeric"
          meta={ReceiptAdviceFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ReceiptAdvice ubl-OrderReference"
          meta={ReceiptAdviceFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay
              key={key}
              label="Order Reference"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.OrderReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ReceiptAdvice ubl-DocumentReference ubl-DespatchDocumentReference"
          meta={ReceiptAdviceFieldMeta.DespatchDocumentReference} 
          value={value.DespatchDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Despatch Document Reference"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.DespatchDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ReceiptAdvice ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={ReceiptAdviceFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ReceiptAdvice ubl-Signature"
          meta={ReceiptAdviceFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ReceiptAdvice ubl-CustomerParty ubl-DeliveryCustomerParty"
          meta={ReceiptAdviceFieldMeta.DeliveryCustomerParty} 
          value={value.DeliveryCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Delivery Customer Party"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.DeliveryCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ReceiptAdvice ubl-SupplierParty ubl-DespatchSupplierParty"
          meta={ReceiptAdviceFieldMeta.DespatchSupplierParty} 
          value={value.DespatchSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Despatch Supplier Party"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.DespatchSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ReceiptAdvice ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={ReceiptAdviceFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ReceiptAdvice ubl-SupplierParty ubl-SellerSupplierParty"
          meta={ReceiptAdviceFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ReceiptAdvice ubl-Shipment"
          meta={ReceiptAdviceFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Shipment"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.Shipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ReceiptAdvice ubl-ReceiptLine"
          meta={ReceiptAdviceFieldMeta.ReceiptLine} 
          value={value.ReceiptLine}
          itemDisplay={ (itemValue: ReceiptLine, key: string | number) =>
            <ReceiptLineDisplay
              key={key}
              label="Receipt Line"
              value={itemValue}
              meta={ReceiptAdviceFieldMeta.ReceiptLine}
            />
          }
        />
        </div>
    </div>
  )
}
