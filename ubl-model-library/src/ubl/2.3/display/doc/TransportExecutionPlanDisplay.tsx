import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportExecutionPlan
  meta: FieldMeta<T>
}

export default function TransportExecutionPlanDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportExecutionPlanFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportExecutionPlanFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TransportExecutionPlanFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TransportExecutionPlanFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportExecutionPlanFieldMeta.DocumentStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonCode} 
          value={value.DocumentStatusReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonDescription} 
          value={value.DocumentStatusReasonDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportExecutionPlanFieldMeta.DocumentStatusReasonDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportExecutionPlanFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.TransportUserRemarks} 
          value={value.TransportUserRemarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportExecutionPlanFieldMeta.TransportUserRemarks} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.TransportServiceProviderRemarks} 
          value={value.TransportServiceProviderRemarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportExecutionPlanFieldMeta.TransportServiceProviderRemarks} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportExecutionPlanFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportExecutionPlanFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.TransportUserParty} 
          value={value.TransportUserParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportExecutionPlanFieldMeta.TransportUserParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.TransportServiceProviderParty} 
          value={value.TransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportExecutionPlanFieldMeta.TransportServiceProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.BillToParty} 
          value={value.BillToParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportExecutionPlanFieldMeta.BillToParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TransportExecutionPlanFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanRequestDocumentReference} 
          value={value.TransportExecutionPlanRequestDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanRequestDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanDocumentReference} 
          value={value.TransportExecutionPlanDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportExecutionPlanFieldMeta.TransportExecutionPlanDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.TransportServiceDescriptionDocumentReference} 
          value={value.TransportServiceDescriptionDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportExecutionPlanFieldMeta.TransportServiceDescriptionDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportExecutionPlanFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.TransportContract} 
          value={value.TransportContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={TransportExecutionPlanFieldMeta.TransportContract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.TransportServiceProviderResponseRequiredPeriod} 
          value={value.TransportServiceProviderResponseRequiredPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportExecutionPlanFieldMeta.TransportServiceProviderResponseRequiredPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.TransportUserResponseRequiredPeriod} 
          value={value.TransportUserResponseRequiredPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportExecutionPlanFieldMeta.TransportUserResponseRequiredPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportExecutionPlanFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.MainTransportationService} 
          value={value.MainTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay key={key} meta={TransportExecutionPlanFieldMeta.MainTransportationService} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.AdditionalTransportationService} 
          value={value.AdditionalTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay key={key} meta={TransportExecutionPlanFieldMeta.AdditionalTransportationService} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.ServiceStartTimePeriod} 
          value={value.ServiceStartTimePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportExecutionPlanFieldMeta.ServiceStartTimePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.ServiceEndTimePeriod} 
          value={value.ServiceEndTimePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportExecutionPlanFieldMeta.ServiceEndTimePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.FromLocation} 
          value={value.FromLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportExecutionPlanFieldMeta.FromLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.ToLocation} 
          value={value.ToLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportExecutionPlanFieldMeta.ToLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.AtLocation} 
          value={value.AtLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportExecutionPlanFieldMeta.AtLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.TransportExecutionTerms} 
          value={value.TransportExecutionTerms}
          itemDisplay={ (itemValue: TransportExecutionTerms, key: string | number) =>
            <TransportExecutionTermsDisplay key={key} meta={TransportExecutionPlanFieldMeta.TransportExecutionTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanFieldMeta.Consignment} 
          value={value.Consignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay key={key} meta={TransportExecutionPlanFieldMeta.Consignment} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
