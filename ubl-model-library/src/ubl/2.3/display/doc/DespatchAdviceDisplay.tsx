import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: DespatchAdvice
  meta: FieldMeta<T>
}

export default function DespatchAdviceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DespatchAdviceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DespatchAdviceFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DespatchAdviceFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DespatchAdviceFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DespatchAdviceFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DespatchAdviceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={DespatchAdviceFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DespatchAdviceFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DespatchAdviceFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DespatchAdviceFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DespatchAdviceFieldMeta.DocumentStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.DespatchAdviceTypeCode} 
          value={value.DespatchAdviceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DespatchAdviceFieldMeta.DespatchAdviceTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DespatchAdviceFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={DespatchAdviceFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay key={key} meta={DespatchAdviceFieldMeta.OrderReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={DespatchAdviceFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={DespatchAdviceFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.DespatchSupplierParty} 
          value={value.DespatchSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={DespatchAdviceFieldMeta.DespatchSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.DeliveryCustomerParty} 
          value={value.DeliveryCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={DespatchAdviceFieldMeta.DeliveryCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={DespatchAdviceFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={DespatchAdviceFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={DespatchAdviceFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={DespatchAdviceFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchAdviceFieldMeta.DespatchLine} 
          value={value.DespatchLine}
          itemDisplay={ (itemValue: DespatchLine, key: string | number) =>
            <DespatchLineDisplay key={key} meta={DespatchAdviceFieldMeta.DespatchLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
