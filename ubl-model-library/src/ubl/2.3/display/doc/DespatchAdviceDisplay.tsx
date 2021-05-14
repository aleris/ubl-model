import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DespatchAdvice } from  '../../model/doc/DespatchAdvice'
import { DespatchAdviceFieldMeta } from  '../../meta/doc/DespatchAdviceMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DespatchLineDisplay from '../cac/DespatchLineDisplay'
import { DespatchLine } from '../../model/cac/DespatchLine'
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
  value: DespatchAdvice
  meta: FieldMeta<T>
}

export default function DespatchAdviceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-DespatchAdvice ubl-DespatchAdviceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DespatchAdvice ubl-UBLExtensions"
          meta={DespatchAdviceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Identifier ubl-UBLVersionID"
          meta={DespatchAdviceFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Identifier ubl-CustomizationID"
          meta={DespatchAdviceFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Identifier ubl-ProfileID"
          meta={DespatchAdviceFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Identifier ubl-ProfileExecutionID"
          meta={DespatchAdviceFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Identifier ubl-ID"
          meta={DespatchAdviceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Indicator ubl-CopyIndicator"
          meta={DespatchAdviceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Identifier ubl-UUID"
          meta={DespatchAdviceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Date ubl-IssueDate"
          meta={DespatchAdviceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Time ubl-IssueTime"
          meta={DespatchAdviceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Code ubl-DocumentStatusCode"
          meta={DespatchAdviceFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Status Code"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.DocumentStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Code ubl-DespatchAdviceTypeCode"
          meta={DespatchAdviceFieldMeta.DespatchAdviceTypeCode} 
          value={value.DespatchAdviceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Despatch Advice Type Code"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.DespatchAdviceTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Text ubl-Note"
          meta={DespatchAdviceFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DespatchAdvice ubl-Numeric ubl-LineCountNumeric"
          meta={DespatchAdviceFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DespatchAdvice ubl-OrderReference"
          meta={DespatchAdviceFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay
              key={key}
              label="Order Reference"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.OrderReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DespatchAdvice ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={DespatchAdviceFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DespatchAdvice ubl-Signature"
          meta={DespatchAdviceFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DespatchAdvice ubl-SupplierParty ubl-DespatchSupplierParty"
          meta={DespatchAdviceFieldMeta.DespatchSupplierParty} 
          value={value.DespatchSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Despatch Supplier Party"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.DespatchSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DespatchAdvice ubl-CustomerParty ubl-DeliveryCustomerParty"
          meta={DespatchAdviceFieldMeta.DeliveryCustomerParty} 
          value={value.DeliveryCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Delivery Customer Party"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.DeliveryCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DespatchAdvice ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={DespatchAdviceFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DespatchAdvice ubl-SupplierParty ubl-SellerSupplierParty"
          meta={DespatchAdviceFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DespatchAdvice ubl-CustomerParty ubl-OriginatorCustomerParty"
          meta={DespatchAdviceFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Originator Customer Party"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.OriginatorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DespatchAdvice ubl-Shipment"
          meta={DespatchAdviceFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Shipment"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.Shipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DespatchAdvice ubl-DespatchLine"
          meta={DespatchAdviceFieldMeta.DespatchLine} 
          value={value.DespatchLine}
          itemDisplay={ (itemValue: DespatchLine, key: string | number) =>
            <DespatchLineDisplay
              key={key}
              label="Despatch Line"
              value={itemValue}
              meta={DespatchAdviceFieldMeta.DespatchLine}
            />
          }
        />
        </div>
    </div>
  )
}
