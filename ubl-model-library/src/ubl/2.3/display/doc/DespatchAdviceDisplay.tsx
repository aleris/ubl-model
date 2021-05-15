import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: DespatchAdvice | undefined
  meta: FieldMeta<T>
}

export default function DespatchAdviceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-DespatchAdvice">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DespatchAdviceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={DespatchAdviceFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={DespatchAdviceFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={DespatchAdviceFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={DespatchAdviceFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DespatchAdviceFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={DespatchAdviceFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={DespatchAdviceFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={DespatchAdviceFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={DespatchAdviceFieldMeta.IssueTime}
          />

          <CodeDisplay
            label="Document Status Code"
            value={value.DocumentStatusCode?.[0]}
            meta={DespatchAdviceFieldMeta.DocumentStatusCode}
          />

          <CodeDisplay
            label="Despatch Advice Type Code"
            value={value.DespatchAdviceTypeCode?.[0]}
            meta={DespatchAdviceFieldMeta.DespatchAdviceTypeCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={DespatchAdviceFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={DespatchAdviceFieldMeta.Note}
              />
            }
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={DespatchAdviceFieldMeta.LineCountNumeric}
          />

          <ElementListDisplay
            className="ubl-doc ubl-OrderReference"
            label="Order Reference"
            items={value.OrderReference}
            meta={DespatchAdviceFieldMeta.OrderReference} 
            itemDisplay={ (itemValue: OrderReference, key: string | number) =>
              <OrderReferenceDisplay
                key={key}
                label="Order Reference"
                value={itemValue}
                meta={DespatchAdviceFieldMeta.OrderReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={DespatchAdviceFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={DespatchAdviceFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={DespatchAdviceFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={DespatchAdviceFieldMeta.Signature}
              />
            }
          />

          <SupplierPartyDisplay
            label="Despatch Supplier Party"
            value={value.DespatchSupplierParty?.[0]}
            meta={DespatchAdviceFieldMeta.DespatchSupplierParty}
          />

          <CustomerPartyDisplay
            label="Delivery Customer Party"
            value={value.DeliveryCustomerParty?.[0]}
            meta={DespatchAdviceFieldMeta.DeliveryCustomerParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={DespatchAdviceFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={DespatchAdviceFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Originator Customer Party"
            value={value.OriginatorCustomerParty?.[0]}
            meta={DespatchAdviceFieldMeta.OriginatorCustomerParty}
          />

          <ShipmentDisplay
            label="Shipment"
            value={value.Shipment?.[0]}
            meta={DespatchAdviceFieldMeta.Shipment}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DespatchLine"
            label="Despatch Line"
            items={value.DespatchLine}
            meta={DespatchAdviceFieldMeta.DespatchLine} 
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
