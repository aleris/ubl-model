import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportExecutionPlan } from  '../../model/doc/TransportExecutionPlan'
import { TransportExecutionPlanFieldMeta } from  '../../meta/doc/TransportExecutionPlanMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ConsignmentDisplay from '../cac/ConsignmentDisplay'
import { Consignment } from '../../model/cac/Consignment'
import ContractDisplay from '../cac/ContractDisplay'
import { Contract } from '../../model/cac/Contract'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LocationDisplay from '../cac/LocationDisplay'
import { Location } from '../../model/cac/Location'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import TransportationServiceDisplay from '../cac/TransportationServiceDisplay'
import { TransportationService } from '../../model/cac/TransportationService'
import TransportExecutionTermsDisplay from '../cac/TransportExecutionTermsDisplay'
import { TransportExecutionTerms } from '../../model/cac/TransportExecutionTerms'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportExecutionPlan
  meta: FieldMeta<T>
}

export default function TransportExecutionPlanDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TransportExecutionPlan ubl-TransportExecutionPlanType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportExecutionPlan ubl-UBLExtensions"
          meta={TransportExecutionPlanFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Identifier ubl-UBLVersionID"
          meta={TransportExecutionPlanFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Identifier ubl-CustomizationID"
          meta={TransportExecutionPlanFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Identifier ubl-ProfileID"
          meta={TransportExecutionPlanFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Identifier ubl-ProfileExecutionID"
          meta={TransportExecutionPlanFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Identifier ubl-ID"
          meta={TransportExecutionPlanFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Identifier ubl-VersionID"
          meta={TransportExecutionPlanFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Indicator ubl-CopyIndicator"
          meta={TransportExecutionPlanFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Identifier ubl-UUID"
          meta={TransportExecutionPlanFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Date ubl-IssueDate"
          meta={TransportExecutionPlanFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Time ubl-IssueTime"
          meta={TransportExecutionPlanFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Code ubl-DocumentStatusCode"
          meta={TransportExecutionPlanFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Status Code"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.DocumentStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Code ubl-DocumentStatusReasonCode"
          meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonCode} 
          value={value.DocumentStatusReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Status Reason Code"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Text ubl-DocumentStatusReasonDescription"
          meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonDescription} 
          value={value.DocumentStatusReasonDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Document Status Reason Description"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Text ubl-Note"
          meta={TransportExecutionPlanFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Text ubl-TransportUserRemarks"
          meta={TransportExecutionPlanFieldMeta.TransportUserRemarks} 
          value={value.TransportUserRemarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Transport User Remarks"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.TransportUserRemarks}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportExecutionPlan ubl-Text ubl-TransportServiceProviderRemarks"
          meta={TransportExecutionPlanFieldMeta.TransportServiceProviderRemarks} 
          value={value.TransportServiceProviderRemarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Transport Service Provider Remarks"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.TransportServiceProviderRemarks}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Party ubl-SenderParty"
          meta={TransportExecutionPlanFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Party ubl-ReceiverParty"
          meta={TransportExecutionPlanFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Party ubl-TransportUserParty"
          meta={TransportExecutionPlanFieldMeta.TransportUserParty} 
          value={value.TransportUserParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Transport User Party"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.TransportUserParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Party ubl-TransportServiceProviderParty"
          meta={TransportExecutionPlanFieldMeta.TransportServiceProviderParty} 
          value={value.TransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Transport Service Provider Party"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.TransportServiceProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Party ubl-BillToParty"
          meta={TransportExecutionPlanFieldMeta.BillToParty} 
          value={value.BillToParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Bill To Party"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.BillToParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Signature"
          meta={TransportExecutionPlanFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-DocumentReference ubl-TransportExecutionPlanRequestDocumentReference"
          meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanRequestDocumentReference} 
          value={value.TransportExecutionPlanRequestDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Transport Execution Plan Request Document Reference"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanRequestDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-DocumentReference ubl-TransportExecutionPlanDocumentReference"
          meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanDocumentReference} 
          value={value.TransportExecutionPlanDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Transport Execution Plan Document Reference"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-DocumentReference ubl-TransportServiceDescriptionDocumentReference"
          meta={TransportExecutionPlanFieldMeta.TransportServiceDescriptionDocumentReference} 
          value={value.TransportServiceDescriptionDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Transport Service Description Document Reference"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.TransportServiceDescriptionDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={TransportExecutionPlanFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Contract ubl-TransportContract"
          meta={TransportExecutionPlanFieldMeta.TransportContract} 
          value={value.TransportContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Transport Contract"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.TransportContract}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Period ubl-TransportServiceProviderResponseRequiredPeriod"
          meta={TransportExecutionPlanFieldMeta.TransportServiceProviderResponseRequiredPeriod} 
          value={value.TransportServiceProviderResponseRequiredPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Transport Service Provider Response Required Period"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.TransportServiceProviderResponseRequiredPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Period ubl-TransportUserResponseRequiredPeriod"
          meta={TransportExecutionPlanFieldMeta.TransportUserResponseRequiredPeriod} 
          value={value.TransportUserResponseRequiredPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Transport User Response Required Period"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.TransportUserResponseRequiredPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Period ubl-ValidityPeriod"
          meta={TransportExecutionPlanFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-TransportationService ubl-MainTransportationService"
          meta={TransportExecutionPlanFieldMeta.MainTransportationService} 
          value={value.MainTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay
              key={key}
              label="Main Transportation Service"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.MainTransportationService}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-TransportationService ubl-AdditionalTransportationService"
          meta={TransportExecutionPlanFieldMeta.AdditionalTransportationService} 
          value={value.AdditionalTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay
              key={key}
              label="Additional Transportation Service"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.AdditionalTransportationService}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Period ubl-ServiceStartTimePeriod"
          meta={TransportExecutionPlanFieldMeta.ServiceStartTimePeriod} 
          value={value.ServiceStartTimePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Service Start Time Period"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.ServiceStartTimePeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Period ubl-ServiceEndTimePeriod"
          meta={TransportExecutionPlanFieldMeta.ServiceEndTimePeriod} 
          value={value.ServiceEndTimePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Service End Time Period"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.ServiceEndTimePeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Location ubl-FromLocation"
          meta={TransportExecutionPlanFieldMeta.FromLocation} 
          value={value.FromLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="From Location"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.FromLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Location ubl-ToLocation"
          meta={TransportExecutionPlanFieldMeta.ToLocation} 
          value={value.ToLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="To Location"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.ToLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Location ubl-AtLocation"
          meta={TransportExecutionPlanFieldMeta.AtLocation} 
          value={value.AtLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="At Location"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.AtLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-TransportExecutionTerms"
          meta={TransportExecutionPlanFieldMeta.TransportExecutionTerms} 
          value={value.TransportExecutionTerms}
          itemDisplay={ (itemValue: TransportExecutionTerms, key: string | number) =>
            <TransportExecutionTermsDisplay
              key={key}
              label="Transport Execution Terms"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.TransportExecutionTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionPlan ubl-Consignment"
          meta={TransportExecutionPlanFieldMeta.Consignment} 
          value={value.Consignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay
              key={key}
              label="Consignment"
              value={itemValue}
              meta={TransportExecutionPlanFieldMeta.Consignment}
            />
          }
        />
        </div>
    </div>
  )
}
