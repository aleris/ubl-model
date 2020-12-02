import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: FulfilmentCancellation
  meta: FieldMeta<T>
}

export default function FulfilmentCancellationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={FulfilmentCancellationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FulfilmentCancellationFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FulfilmentCancellationFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FulfilmentCancellationFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FulfilmentCancellationFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FulfilmentCancellationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={FulfilmentCancellationFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FulfilmentCancellationFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={FulfilmentCancellationFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={FulfilmentCancellationFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FulfilmentCancellationFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.CancellationNote} 
          value={value.CancellationNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FulfilmentCancellationFieldMeta.CancellationNote} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.DespatchDocumentReference} 
          value={value.DespatchDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={FulfilmentCancellationFieldMeta.DespatchDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.ReceiptDocumentReference} 
          value={value.ReceiptDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={FulfilmentCancellationFieldMeta.ReceiptDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay key={key} meta={FulfilmentCancellationFieldMeta.OrderReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={FulfilmentCancellationFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={FulfilmentCancellationFieldMeta.Contract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={FulfilmentCancellationFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={FulfilmentCancellationFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={FulfilmentCancellationFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.DeliveryCustomerParty} 
          value={value.DeliveryCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={FulfilmentCancellationFieldMeta.DeliveryCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.DespatchSupplierParty} 
          value={value.DespatchSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={FulfilmentCancellationFieldMeta.DespatchSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FulfilmentCancellationFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={FulfilmentCancellationFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
