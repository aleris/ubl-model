import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ReceiptAdvice
  meta: FieldMeta<T>
}

export default function ReceiptAdviceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ReceiptAdviceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ReceiptAdviceFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ReceiptAdviceFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ReceiptAdviceFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ReceiptAdviceFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ReceiptAdviceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ReceiptAdviceFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ReceiptAdviceFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ReceiptAdviceFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ReceiptAdviceFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ReceiptAdviceFieldMeta.DocumentStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.ReceiptAdviceTypeCode} 
          value={value.ReceiptAdviceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ReceiptAdviceFieldMeta.ReceiptAdviceTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ReceiptAdviceFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ReceiptAdviceFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay key={key} meta={ReceiptAdviceFieldMeta.OrderReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.DespatchDocumentReference} 
          value={value.DespatchDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ReceiptAdviceFieldMeta.DespatchDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ReceiptAdviceFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={ReceiptAdviceFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.DeliveryCustomerParty} 
          value={value.DeliveryCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={ReceiptAdviceFieldMeta.DeliveryCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.DespatchSupplierParty} 
          value={value.DespatchSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={ReceiptAdviceFieldMeta.DespatchSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={ReceiptAdviceFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={ReceiptAdviceFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={ReceiptAdviceFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReceiptAdviceFieldMeta.ReceiptLine} 
          value={value.ReceiptLine}
          itemDisplay={ (itemValue: ReceiptLine, key: string | number) =>
            <ReceiptLineDisplay key={key} meta={ReceiptAdviceFieldMeta.ReceiptLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
