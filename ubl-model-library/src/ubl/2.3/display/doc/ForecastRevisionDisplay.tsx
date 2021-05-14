import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastRevision } from  '../../model/doc/ForecastRevision'
import { ForecastRevisionFieldMeta } from  '../../meta/doc/ForecastRevisionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import ForecastRevisionLineDisplay from '../cac/ForecastRevisionLineDisplay'
import { ForecastRevisionLine } from '../../model/cac/ForecastRevisionLine'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
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
  value: ForecastRevision
  meta: FieldMeta<T>
}

export default function ForecastRevisionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-ForecastRevision ubl-ForecastRevisionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ForecastRevision ubl-UBLExtensions"
          meta={ForecastRevisionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Identifier ubl-UBLVersionID"
          meta={ForecastRevisionFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Identifier ubl-CustomizationID"
          meta={ForecastRevisionFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Identifier ubl-ProfileID"
          meta={ForecastRevisionFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Identifier ubl-ProfileExecutionID"
          meta={ForecastRevisionFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Identifier ubl-ID"
          meta={ForecastRevisionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Indicator ubl-CopyIndicator"
          meta={ForecastRevisionFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Identifier ubl-UUID"
          meta={ForecastRevisionFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Date ubl-IssueDate"
          meta={ForecastRevisionFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Time ubl-IssueTime"
          meta={ForecastRevisionFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Text ubl-Note"
          meta={ForecastRevisionFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Identifier ubl-SequenceNumberID"
          meta={ForecastRevisionFieldMeta.SequenceNumberID} 
          value={value.SequenceNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Sequence Number"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.SequenceNumberID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Code ubl-RevisionStatusCode"
          meta={ForecastRevisionFieldMeta.RevisionStatusCode} 
          value={value.RevisionStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Revision Status Code"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.RevisionStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevision ubl-Code ubl-PurposeCode"
          meta={ForecastRevisionFieldMeta.PurposeCode} 
          value={value.PurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Purpose Code"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.PurposeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ForecastRevision ubl-Period ubl-ForecastPeriod"
          meta={ForecastRevisionFieldMeta.ForecastPeriod} 
          value={value.ForecastPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Forecast Period"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.ForecastPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ForecastRevision ubl-DocumentReference ubl-OriginalDocumentReference"
          meta={ForecastRevisionFieldMeta.OriginalDocumentReference} 
          value={value.OriginalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Original Document Reference"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.OriginalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ForecastRevision ubl-Signature"
          meta={ForecastRevisionFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ForecastRevision ubl-Party ubl-SenderParty"
          meta={ForecastRevisionFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ForecastRevision ubl-Party ubl-ReceiverParty"
          meta={ForecastRevisionFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ForecastRevision ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={ForecastRevisionFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ForecastRevision ubl-SupplierParty ubl-SellerSupplierParty"
          meta={ForecastRevisionFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ForecastRevision ubl-ForecastRevisionLine"
          meta={ForecastRevisionFieldMeta.ForecastRevisionLine} 
          value={value.ForecastRevisionLine}
          itemDisplay={ (itemValue: ForecastRevisionLine, key: string | number) =>
            <ForecastRevisionLineDisplay
              key={key}
              label="Forecast Revision Line"
              value={itemValue}
              meta={ForecastRevisionFieldMeta.ForecastRevisionLine}
            />
          }
        />
        </div>
    </div>
  )
}
