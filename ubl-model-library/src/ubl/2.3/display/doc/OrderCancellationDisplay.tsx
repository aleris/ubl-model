import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: OrderCancellation
  meta: FieldMeta<T>
}

export default function OrderCancellationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={OrderCancellationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={OrderCancellationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderCancellationFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderCancellationFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderCancellationFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderCancellationFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderCancellationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={OrderCancellationFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderCancellationFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={OrderCancellationFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={OrderCancellationFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderCancellationFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.CancellationNote} 
          value={value.CancellationNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderCancellationFieldMeta.CancellationNote} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay key={key} meta={OrderCancellationFieldMeta.OrderReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.OriginatorDocumentReference} 
          value={value.OriginatorDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderCancellationFieldMeta.OriginatorDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderCancellationFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={OrderCancellationFieldMeta.Contract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={OrderCancellationFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={OrderCancellationFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={OrderCancellationFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderCancellationFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={OrderCancellationFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
