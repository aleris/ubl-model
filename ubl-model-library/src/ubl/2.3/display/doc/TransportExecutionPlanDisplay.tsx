import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TransportExecutionPlan | undefined
  meta: FieldMeta<T>
}

export default function TransportExecutionPlanDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-TransportExecutionPlan">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportExecutionPlanFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TransportExecutionPlanFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TransportExecutionPlanFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TransportExecutionPlanFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TransportExecutionPlanFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TransportExecutionPlanFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={TransportExecutionPlanFieldMeta.VersionID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={TransportExecutionPlanFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TransportExecutionPlanFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TransportExecutionPlanFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TransportExecutionPlanFieldMeta.IssueTime}
          />

          <CodeDisplay
            label="Document Status Code"
            value={value.DocumentStatusCode?.[0]}
            meta={TransportExecutionPlanFieldMeta.DocumentStatusCode}
          />

          <CodeDisplay
            label="Document Status Reason Code"
            value={value.DocumentStatusReasonCode?.[0]}
            meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-DocumentStatusReasonDescription"
            label="Document Status Reason Description"
            items={value.DocumentStatusReasonDescription}
            meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Document Status Reason Description"
                value={itemValue}
                meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TransportExecutionPlanFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TransportExecutionPlanFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-TransportUserRemarks"
            label="Transport User Remarks"
            items={value.TransportUserRemarks}
            meta={TransportExecutionPlanFieldMeta.TransportUserRemarks} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Transport User Remarks"
                value={itemValue}
                meta={TransportExecutionPlanFieldMeta.TransportUserRemarks}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-TransportServiceProviderRemarks"
            label="Transport Service Provider Remarks"
            items={value.TransportServiceProviderRemarks}
            meta={TransportExecutionPlanFieldMeta.TransportServiceProviderRemarks} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Transport Service Provider Remarks"
                value={itemValue}
                meta={TransportExecutionPlanFieldMeta.TransportServiceProviderRemarks}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={TransportExecutionPlanFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={TransportExecutionPlanFieldMeta.ReceiverParty}
          />

          <PartyDisplay
            label="Transport User Party"
            value={value.TransportUserParty?.[0]}
            meta={TransportExecutionPlanFieldMeta.TransportUserParty}
          />

          <PartyDisplay
            label="Transport Service Provider Party"
            value={value.TransportServiceProviderParty?.[0]}
            meta={TransportExecutionPlanFieldMeta.TransportServiceProviderParty}
          />

          <PartyDisplay
            label="Bill To Party"
            value={value.BillToParty?.[0]}
            meta={TransportExecutionPlanFieldMeta.BillToParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TransportExecutionPlanFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TransportExecutionPlanFieldMeta.Signature}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Transport Execution Plan Request Document Reference"
            value={value.TransportExecutionPlanRequestDocumentReference?.[0]}
            meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanRequestDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Transport Execution Plan Document Reference"
            value={value.TransportExecutionPlanDocumentReference?.[0]}
            meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Transport Service Description Document Reference"
            value={value.TransportServiceDescriptionDocumentReference?.[0]}
            meta={TransportExecutionPlanFieldMeta.TransportServiceDescriptionDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={TransportExecutionPlanFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={TransportExecutionPlanFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ContractDisplay
            label="Transport Contract"
            value={value.TransportContract?.[0]}
            meta={TransportExecutionPlanFieldMeta.TransportContract}
          />

          <PeriodDisplay
            label="Transport Service Provider Response Required Period"
            value={value.TransportServiceProviderResponseRequiredPeriod?.[0]}
            meta={TransportExecutionPlanFieldMeta.TransportServiceProviderResponseRequiredPeriod}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-TransportUserResponseRequiredPeriod"
            label="Transport User Response Required Period"
            items={value.TransportUserResponseRequiredPeriod}
            meta={TransportExecutionPlanFieldMeta.TransportUserResponseRequiredPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Transport User Response Required Period"
                value={itemValue}
                meta={TransportExecutionPlanFieldMeta.TransportUserResponseRequiredPeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-ValidityPeriod"
            label="Validity Period"
            items={value.ValidityPeriod}
            meta={TransportExecutionPlanFieldMeta.ValidityPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Validity Period"
                value={itemValue}
                meta={TransportExecutionPlanFieldMeta.ValidityPeriod}
              />
            }
          />

          <TransportationServiceDisplay
            label="Main Transportation Service"
            value={value.MainTransportationService?.[0]}
            meta={TransportExecutionPlanFieldMeta.MainTransportationService}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TransportationService ubl-AdditionalTransportationService"
            label="Additional Transportation Service"
            items={value.AdditionalTransportationService}
            meta={TransportExecutionPlanFieldMeta.AdditionalTransportationService} 
            itemDisplay={ (itemValue: TransportationService, key: string | number) =>
              <TransportationServiceDisplay
                key={key}
                label="Additional Transportation Service"
                value={itemValue}
                meta={TransportExecutionPlanFieldMeta.AdditionalTransportationService}
              />
            }
          />

          <PeriodDisplay
            label="Service Start Time Period"
            value={value.ServiceStartTimePeriod?.[0]}
            meta={TransportExecutionPlanFieldMeta.ServiceStartTimePeriod}
          />

          <PeriodDisplay
            label="Service End Time Period"
            value={value.ServiceEndTimePeriod?.[0]}
            meta={TransportExecutionPlanFieldMeta.ServiceEndTimePeriod}
          />

          <LocationDisplay
            label="From Location"
            value={value.FromLocation?.[0]}
            meta={TransportExecutionPlanFieldMeta.FromLocation}
          />

          <LocationDisplay
            label="To Location"
            value={value.ToLocation?.[0]}
            meta={TransportExecutionPlanFieldMeta.ToLocation}
          />

          <LocationDisplay
            label="At Location"
            value={value.AtLocation?.[0]}
            meta={TransportExecutionPlanFieldMeta.AtLocation}
          />

          <TransportExecutionTermsDisplay
            label="Transport Execution Terms"
            value={value.TransportExecutionTerms?.[0]}
            meta={TransportExecutionPlanFieldMeta.TransportExecutionTerms}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Consignment"
            label="Consignment"
            items={value.Consignment}
            meta={TransportExecutionPlanFieldMeta.Consignment} 
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
