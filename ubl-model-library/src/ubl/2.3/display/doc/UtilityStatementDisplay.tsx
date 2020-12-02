import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UtilityStatement } from  '../../model/doc/UtilityStatement'
import { UtilityStatementFieldMeta } from  '../../meta/doc/UtilityStatementMeta'
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
import OnAccountPaymentDisplay from '../cac/OnAccountPaymentDisplay'
import { OnAccountPayment } from '../../model/cac/OnAccountPayment'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import SubscriberConsumptionDisplay from '../cac/SubscriberConsumptionDisplay'
import { SubscriberConsumption } from '../../model/cac/SubscriberConsumption'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: UtilityStatement
  meta: FieldMeta<T>
}

export default function UtilityStatementDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={UtilityStatementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={UtilityStatementFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UtilityStatementFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UtilityStatementFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UtilityStatementFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UtilityStatementFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UtilityStatementFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={UtilityStatementFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UtilityStatementFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={UtilityStatementFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={UtilityStatementFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.UtilityStatementTypeCode} 
          value={value.UtilityStatementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={UtilityStatementFieldMeta.UtilityStatementTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UtilityStatementFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={UtilityStatementFieldMeta.DocumentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={UtilityStatementFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UtilityStatementFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.ParentDocumentReference} 
          value={value.ParentDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={UtilityStatementFieldMeta.ParentDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={UtilityStatementFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={UtilityStatementFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={UtilityStatementFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={UtilityStatementFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.CustomerParty} 
          value={value.CustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={UtilityStatementFieldMeta.CustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.SubscriberParty} 
          value={value.SubscriberParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={UtilityStatementFieldMeta.SubscriberParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.MainOnAccountPayment} 
          value={value.MainOnAccountPayment}
          itemDisplay={ (itemValue: OnAccountPayment, key: string | number) =>
            <OnAccountPaymentDisplay key={key} meta={UtilityStatementFieldMeta.MainOnAccountPayment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityStatementFieldMeta.SubscriberConsumption} 
          value={value.SubscriberConsumption}
          itemDisplay={ (itemValue: SubscriberConsumption, key: string | number) =>
            <SubscriberConsumptionDisplay key={key} meta={UtilityStatementFieldMeta.SubscriberConsumption} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
