import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ReceiptAdvice | undefined
  meta: FieldMeta<T>
}

export default function ReceiptAdviceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-ReceiptAdvice">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ReceiptAdviceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={ReceiptAdviceFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={ReceiptAdviceFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={ReceiptAdviceFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={ReceiptAdviceFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ReceiptAdviceFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={ReceiptAdviceFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ReceiptAdviceFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ReceiptAdviceFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={ReceiptAdviceFieldMeta.IssueTime}
          />

          <CodeDisplay
            label="Document Status Code"
            value={value.DocumentStatusCode?.[0]}
            meta={ReceiptAdviceFieldMeta.DocumentStatusCode}
          />

          <CodeDisplay
            label="Receipt Advice Type Code"
            value={value.ReceiptAdviceTypeCode?.[0]}
            meta={ReceiptAdviceFieldMeta.ReceiptAdviceTypeCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ReceiptAdviceFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ReceiptAdviceFieldMeta.Note}
              />
            }
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={ReceiptAdviceFieldMeta.LineCountNumeric}
          />

          <ElementListDisplay
            className="ubl-doc ubl-OrderReference"
            label="Order Reference"
            items={value.OrderReference}
            meta={ReceiptAdviceFieldMeta.OrderReference} 
            itemDisplay={ (itemValue: OrderReference, key: string | number) =>
              <OrderReferenceDisplay
                key={key}
                label="Order Reference"
                value={itemValue}
                meta={ReceiptAdviceFieldMeta.OrderReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-DespatchDocumentReference"
            label="Despatch Document Reference"
            items={value.DespatchDocumentReference}
            meta={ReceiptAdviceFieldMeta.DespatchDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Despatch Document Reference"
                value={itemValue}
                meta={ReceiptAdviceFieldMeta.DespatchDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={ReceiptAdviceFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={ReceiptAdviceFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={ReceiptAdviceFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={ReceiptAdviceFieldMeta.Signature}
              />
            }
          />

          <CustomerPartyDisplay
            label="Delivery Customer Party"
            value={value.DeliveryCustomerParty?.[0]}
            meta={ReceiptAdviceFieldMeta.DeliveryCustomerParty}
          />

          <SupplierPartyDisplay
            label="Despatch Supplier Party"
            value={value.DespatchSupplierParty?.[0]}
            meta={ReceiptAdviceFieldMeta.DespatchSupplierParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={ReceiptAdviceFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={ReceiptAdviceFieldMeta.SellerSupplierParty}
          />

          <ShipmentDisplay
            label="Shipment"
            value={value.Shipment?.[0]}
            meta={ReceiptAdviceFieldMeta.Shipment}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ReceiptLine"
            label="Receipt Line"
            items={value.ReceiptLine}
            meta={ReceiptAdviceFieldMeta.ReceiptLine} 
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
