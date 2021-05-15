import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: UtilityStatement | undefined
  meta: FieldMeta<T>
}

export default function UtilityStatementDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-UtilityStatement">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={UtilityStatementFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={UtilityStatementFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={UtilityStatementFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={UtilityStatementFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={UtilityStatementFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={UtilityStatementFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={UtilityStatementFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={UtilityStatementFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={UtilityStatementFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={UtilityStatementFieldMeta.IssueTime}
          />

          <CodeDisplay
            label="Utility Statement Type Code"
            value={value.UtilityStatementTypeCode?.[0]}
            meta={UtilityStatementFieldMeta.UtilityStatementTypeCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={UtilityStatementFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={UtilityStatementFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Document Currency Code"
            value={value.DocumentCurrencyCode?.[0]}
            meta={UtilityStatementFieldMeta.DocumentCurrencyCode}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={UtilityStatementFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={UtilityStatementFieldMeta.AccountingCost}
          />

          <DocumentReferenceDisplay
            label="Parent Document Reference"
            value={value.ParentDocumentReference?.[0]}
            meta={UtilityStatementFieldMeta.ParentDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={UtilityStatementFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={UtilityStatementFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={UtilityStatementFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={UtilityStatementFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={UtilityStatementFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={UtilityStatementFieldMeta.ReceiverParty}
          />

          <CustomerPartyDisplay
            label="Customer Party"
            value={value.CustomerParty?.[0]}
            meta={UtilityStatementFieldMeta.CustomerParty}
          />

          <PartyDisplay
            label="Subscriber Party"
            value={value.SubscriberParty?.[0]}
            meta={UtilityStatementFieldMeta.SubscriberParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-OnAccountPayment ubl-MainOnAccountPayment"
            label="Main On Account Payment"
            items={value.MainOnAccountPayment}
            meta={UtilityStatementFieldMeta.MainOnAccountPayment} 
            itemDisplay={ (itemValue: OnAccountPayment, key: string | number) =>
              <OnAccountPaymentDisplay
                key={key}
                label="Main On Account Payment"
                value={itemValue}
                meta={UtilityStatementFieldMeta.MainOnAccountPayment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-SubscriberConsumption"
            label="Subscriber Consumption"
            items={value.SubscriberConsumption}
            meta={UtilityStatementFieldMeta.SubscriberConsumption} 
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
