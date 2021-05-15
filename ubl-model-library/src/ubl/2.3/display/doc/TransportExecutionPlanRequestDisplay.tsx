import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TransportExecutionPlanRequest | undefined
  meta: FieldMeta<T>
}

export default function TransportExecutionPlanRequestDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-TransportExecutionPlanRequest">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.VersionID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.IssueTime}
          />

          <CodeDisplay
            label="Document Status Code"
            value={value.DocumentStatusCode?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusCode}
          />

          <CodeDisplay
            label="Document Status Reason Code"
            value={value.DocumentStatusReasonCode?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-DocumentStatusReasonDescription"
            label="Document Status Reason Description"
            items={value.DocumentStatusReasonDescription}
            meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Document Status Reason Description"
                value={itemValue}
                meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TransportExecutionPlanRequestFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TransportExecutionPlanRequestFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-TransportUserRemarks"
            label="Transport User Remarks"
            items={value.TransportUserRemarks}
            meta={TransportExecutionPlanRequestFieldMeta.TransportUserRemarks} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Transport User Remarks"
                value={itemValue}
                meta={TransportExecutionPlanRequestFieldMeta.TransportUserRemarks}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.ReceiverParty}
          />

          <PartyDisplay
            label="Transport User Party"
            value={value.TransportUserParty?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.TransportUserParty}
          />

          <PartyDisplay
            label="Transport Service Provider Party"
            value={value.TransportServiceProviderParty?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderParty}
          />

          <PartyDisplay
            label="Payee Party"
            value={value.PayeeParty?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.PayeeParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TransportExecutionPlanRequestFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TransportExecutionPlanRequestFieldMeta.Signature}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Transport Execution Plan Document Reference"
            value={value.TransportExecutionPlanDocumentReference?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionPlanDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Transport Service Description Document Reference"
            value={value.TransportServiceDescriptionDocumentReference?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.TransportServiceDescriptionDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={TransportExecutionPlanRequestFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={TransportExecutionPlanRequestFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ContractDisplay
            label="Transport Contract"
            value={value.TransportContract?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.TransportContract}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-TransportServiceProviderResponseDeadlinePeriod"
            label="Transport Service Provider Response Deadline Period"
            items={value.TransportServiceProviderResponseDeadlinePeriod}
            meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderResponseDeadlinePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Transport Service Provider Response Deadline Period"
                value={itemValue}
                meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderResponseDeadlinePeriod}
              />
            }
          />

          <TransportationServiceDisplay
            label="Main Transportation Service"
            value={value.MainTransportationService?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.MainTransportationService}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TransportationService ubl-AdditionalTransportationService"
            label="Additional Transportation Service"
            items={value.AdditionalTransportationService}
            meta={TransportExecutionPlanRequestFieldMeta.AdditionalTransportationService} 
            itemDisplay={ (itemValue: TransportationService, key: string | number) =>
              <TransportationServiceDisplay
                key={key}
                label="Additional Transportation Service"
                value={itemValue}
                meta={TransportExecutionPlanRequestFieldMeta.AdditionalTransportationService}
              />
            }
          />

          <PeriodDisplay
            label="Service Start Time Period"
            value={value.ServiceStartTimePeriod?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.ServiceStartTimePeriod}
          />

          <PeriodDisplay
            label="Service End Time Period"
            value={value.ServiceEndTimePeriod?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.ServiceEndTimePeriod}
          />

          <LocationDisplay
            label="From Location"
            value={value.FromLocation?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.FromLocation}
          />

          <LocationDisplay
            label="To Location"
            value={value.ToLocation?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.ToLocation}
          />

          <LocationDisplay
            label="At Location"
            value={value.AtLocation?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.AtLocation}
          />

          <TransportExecutionTermsDisplay
            label="Transport Execution Terms"
            value={value.TransportExecutionTerms?.[0]}
            meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionTerms}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Consignment"
            label="Consignment"
            items={value.Consignment}
            meta={TransportExecutionPlanRequestFieldMeta.Consignment} 
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
