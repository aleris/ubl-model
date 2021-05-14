import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: UtilityStatement
  meta: FieldMeta<T>
}

export default function UtilityStatementDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-UtilityStatement ubl-UtilityStatementType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-UtilityStatement ubl-UBLExtensions"
          meta={UtilityStatementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UtilityStatementFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Identifier ubl-UBLVersionID"
          meta={UtilityStatementFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={UtilityStatementFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Identifier ubl-CustomizationID"
          meta={UtilityStatementFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={UtilityStatementFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Identifier ubl-ProfileID"
          meta={UtilityStatementFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={UtilityStatementFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Identifier ubl-ProfileExecutionID"
          meta={UtilityStatementFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={UtilityStatementFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Identifier ubl-ID"
          meta={UtilityStatementFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={UtilityStatementFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Indicator ubl-CopyIndicator"
          meta={UtilityStatementFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={UtilityStatementFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Identifier ubl-UUID"
          meta={UtilityStatementFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={UtilityStatementFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Date ubl-IssueDate"
          meta={UtilityStatementFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={UtilityStatementFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Time ubl-IssueTime"
          meta={UtilityStatementFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={UtilityStatementFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Code ubl-UtilityStatementTypeCode"
          meta={UtilityStatementFieldMeta.UtilityStatementTypeCode} 
          value={value.UtilityStatementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Utility Statement Type Code"
              value={itemValue}
              meta={UtilityStatementFieldMeta.UtilityStatementTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Text ubl-Note"
          meta={UtilityStatementFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={UtilityStatementFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Code ubl-DocumentCurrencyCode"
          meta={UtilityStatementFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Currency Code"
              value={itemValue}
              meta={UtilityStatementFieldMeta.DocumentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Code ubl-AccountingCostCode"
          meta={UtilityStatementFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={UtilityStatementFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityStatement ubl-Text ubl-AccountingCost"
          meta={UtilityStatementFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={UtilityStatementFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UtilityStatement ubl-DocumentReference ubl-ParentDocumentReference"
          meta={UtilityStatementFieldMeta.ParentDocumentReference} 
          value={value.ParentDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Parent Document Reference"
              value={itemValue}
              meta={UtilityStatementFieldMeta.ParentDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-UtilityStatement ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={UtilityStatementFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={UtilityStatementFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-UtilityStatement ubl-Signature"
          meta={UtilityStatementFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={UtilityStatementFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UtilityStatement ubl-Party ubl-SenderParty"
          meta={UtilityStatementFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={UtilityStatementFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UtilityStatement ubl-Party ubl-ReceiverParty"
          meta={UtilityStatementFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={UtilityStatementFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UtilityStatement ubl-CustomerParty"
          meta={UtilityStatementFieldMeta.CustomerParty} 
          value={value.CustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Customer Party"
              value={itemValue}
              meta={UtilityStatementFieldMeta.CustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UtilityStatement ubl-Party ubl-SubscriberParty"
          meta={UtilityStatementFieldMeta.SubscriberParty} 
          value={value.SubscriberParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Subscriber Party"
              value={itemValue}
              meta={UtilityStatementFieldMeta.SubscriberParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-UtilityStatement ubl-OnAccountPayment ubl-MainOnAccountPayment"
          meta={UtilityStatementFieldMeta.MainOnAccountPayment} 
          value={value.MainOnAccountPayment}
          itemDisplay={ (itemValue: OnAccountPayment, key: string | number) =>
            <OnAccountPaymentDisplay
              key={key}
              label="Main On Account Payment"
              value={itemValue}
              meta={UtilityStatementFieldMeta.MainOnAccountPayment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-UtilityStatement ubl-SubscriberConsumption"
          meta={UtilityStatementFieldMeta.SubscriberConsumption} 
          value={value.SubscriberConsumption}
          itemDisplay={ (itemValue: SubscriberConsumption, key: string | number) =>
            <SubscriberConsumptionDisplay
              key={key}
              label="Subscriber Consumption"
              value={itemValue}
              meta={UtilityStatementFieldMeta.SubscriberConsumption}
            />
          }
        />
        </div>
    </div>
  )
}
