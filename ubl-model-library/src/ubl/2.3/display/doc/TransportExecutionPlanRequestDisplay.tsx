import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportExecutionPlanRequest } from  '../../model/doc/TransportExecutionPlanRequest'
import { TransportExecutionPlanRequestFieldMeta } from  '../../meta/doc/TransportExecutionPlanRequestMeta'
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
  value: TransportExecutionPlanRequest
  meta: FieldMeta<T>
}

export default function TransportExecutionPlanRequestDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TransportExecutionPlanRequest ubl-TransportExecutionPlanRequestType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportExecutionPlanRequest ubl-UBLExtensions"
          meta={TransportExecutionPlanRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Identifier ubl-UBLVersionID"
          meta={TransportExecutionPlanRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Identifier ubl-CustomizationID"
          meta={TransportExecutionPlanRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Identifier ubl-ProfileID"
          meta={TransportExecutionPlanRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Identifier ubl-ProfileExecutionID"
          meta={TransportExecutionPlanRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Identifier ubl-ID"
          meta={TransportExecutionPlanRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Identifier ubl-VersionID"
          meta={TransportExecutionPlanRequestFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Indicator ubl-CopyIndicator"
          meta={TransportExecutionPlanRequestFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Identifier ubl-UUID"
          meta={TransportExecutionPlanRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Date ubl-IssueDate"
          meta={TransportExecutionPlanRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Time ubl-IssueTime"
          meta={TransportExecutionPlanRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Code ubl-DocumentStatusCode"
          meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Status Code"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Code ubl-DocumentStatusReasonCode"
          meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonCode} 
          value={value.DocumentStatusReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Status Reason Code"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Text ubl-DocumentStatusReasonDescription"
          meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonDescription} 
          value={value.DocumentStatusReasonDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Document Status Reason Description"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Text ubl-Note"
          meta={TransportExecutionPlanRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportExecutionPlanRequest ubl-Text ubl-TransportUserRemarks"
          meta={TransportExecutionPlanRequestFieldMeta.TransportUserRemarks} 
          value={value.TransportUserRemarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Transport User Remarks"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.TransportUserRemarks}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Party ubl-SenderParty"
          meta={TransportExecutionPlanRequestFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Party ubl-ReceiverParty"
          meta={TransportExecutionPlanRequestFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Party ubl-TransportUserParty"
          meta={TransportExecutionPlanRequestFieldMeta.TransportUserParty} 
          value={value.TransportUserParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Transport User Party"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.TransportUserParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Party ubl-TransportServiceProviderParty"
          meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderParty} 
          value={value.TransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Transport Service Provider Party"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Party ubl-PayeeParty"
          meta={TransportExecutionPlanRequestFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Payee Party"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.PayeeParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Signature"
          meta={TransportExecutionPlanRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-DocumentReference ubl-TransportExecutionPlanDocumentReference"
          meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionPlanDocumentReference} 
          value={value.TransportExecutionPlanDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Transport Execution Plan Document Reference"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionPlanDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-DocumentReference ubl-TransportServiceDescriptionDocumentReference"
          meta={TransportExecutionPlanRequestFieldMeta.TransportServiceDescriptionDocumentReference} 
          value={value.TransportServiceDescriptionDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Transport Service Description Document Reference"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.TransportServiceDescriptionDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={TransportExecutionPlanRequestFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Contract ubl-TransportContract"
          meta={TransportExecutionPlanRequestFieldMeta.TransportContract} 
          value={value.TransportContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Transport Contract"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.TransportContract}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Period ubl-TransportServiceProviderResponseDeadlinePeriod"
          meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderResponseDeadlinePeriod} 
          value={value.TransportServiceProviderResponseDeadlinePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Transport Service Provider Response Deadline Period"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderResponseDeadlinePeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-TransportationService ubl-MainTransportationService"
          meta={TransportExecutionPlanRequestFieldMeta.MainTransportationService} 
          value={value.MainTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay
              key={key}
              label="Main Transportation Service"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.MainTransportationService}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-TransportationService ubl-AdditionalTransportationService"
          meta={TransportExecutionPlanRequestFieldMeta.AdditionalTransportationService} 
          value={value.AdditionalTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay
              key={key}
              label="Additional Transportation Service"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.AdditionalTransportationService}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Period ubl-ServiceStartTimePeriod"
          meta={TransportExecutionPlanRequestFieldMeta.ServiceStartTimePeriod} 
          value={value.ServiceStartTimePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Service Start Time Period"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.ServiceStartTimePeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Period ubl-ServiceEndTimePeriod"
          meta={TransportExecutionPlanRequestFieldMeta.ServiceEndTimePeriod} 
          value={value.ServiceEndTimePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Service End Time Period"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.ServiceEndTimePeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Location ubl-FromLocation"
          meta={TransportExecutionPlanRequestFieldMeta.FromLocation} 
          value={value.FromLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="From Location"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.FromLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Location ubl-ToLocation"
          meta={TransportExecutionPlanRequestFieldMeta.ToLocation} 
          value={value.ToLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="To Location"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.ToLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Location ubl-AtLocation"
          meta={TransportExecutionPlanRequestFieldMeta.AtLocation} 
          value={value.AtLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="At Location"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.AtLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-TransportExecutionTerms"
          meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionTerms} 
          value={value.TransportExecutionTerms}
          itemDisplay={ (itemValue: TransportExecutionTerms, key: string | number) =>
            <TransportExecutionTermsDisplay
              key={key}
              label="Transport Execution Terms"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionPlanRequest ubl-Consignment"
          meta={TransportExecutionPlanRequestFieldMeta.Consignment} 
          value={value.Consignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay
              key={key}
              label="Consignment"
              value={itemValue}
              meta={TransportExecutionPlanRequestFieldMeta.Consignment}
            />
          }
        />
        </div>
    </div>
  )
}
