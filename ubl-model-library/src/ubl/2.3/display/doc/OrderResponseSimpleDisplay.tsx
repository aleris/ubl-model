import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: OrderResponseSimple
  meta: FieldMeta<T>
}

export default function OrderResponseSimpleDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={OrderResponseSimpleFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseSimpleFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseSimpleFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseSimpleFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseSimpleFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseSimpleFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={OrderResponseSimpleFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseSimpleFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={OrderResponseSimpleFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={OrderResponseSimpleFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderResponseSimpleFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.AcceptedIndicator} 
          value={value.AcceptedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={OrderResponseSimpleFieldMeta.AcceptedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.RejectionNote} 
          value={value.RejectionNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderResponseSimpleFieldMeta.RejectionNote} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.CustomerReference} 
          value={value.CustomerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderResponseSimpleFieldMeta.CustomerReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderResponseSimpleFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderResponseSimpleFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay key={key} meta={OrderResponseSimpleFieldMeta.OrderReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.OrderChangeDocumentReference} 
          value={value.OrderChangeDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderResponseSimpleFieldMeta.OrderChangeDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderResponseSimpleFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={OrderResponseSimpleFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={OrderResponseSimpleFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={OrderResponseSimpleFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={OrderResponseSimpleFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={OrderResponseSimpleFieldMeta.AccountingSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseSimpleFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={OrderResponseSimpleFieldMeta.AccountingCustomerParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
