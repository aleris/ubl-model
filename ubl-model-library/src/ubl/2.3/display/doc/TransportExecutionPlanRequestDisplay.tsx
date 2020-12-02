import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportExecutionPlanRequest
  meta: FieldMeta<T>
}

export default function TransportExecutionPlanRequestDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonCode} 
          value={value.DocumentStatusReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonDescription} 
          value={value.DocumentStatusReasonDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.DocumentStatusReasonDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.TransportUserRemarks} 
          value={value.TransportUserRemarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.TransportUserRemarks} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.TransportUserParty} 
          value={value.TransportUserParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.TransportUserParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderParty} 
          value={value.TransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.PayeeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionPlanDocumentReference} 
          value={value.TransportExecutionPlanDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionPlanDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.TransportServiceDescriptionDocumentReference} 
          value={value.TransportServiceDescriptionDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.TransportServiceDescriptionDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.TransportContract} 
          value={value.TransportContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.TransportContract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderResponseDeadlinePeriod} 
          value={value.TransportServiceProviderResponseDeadlinePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.TransportServiceProviderResponseDeadlinePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.MainTransportationService} 
          value={value.MainTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.MainTransportationService} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.AdditionalTransportationService} 
          value={value.AdditionalTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.AdditionalTransportationService} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.ServiceStartTimePeriod} 
          value={value.ServiceStartTimePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.ServiceStartTimePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.ServiceEndTimePeriod} 
          value={value.ServiceEndTimePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.ServiceEndTimePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.FromLocation} 
          value={value.FromLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.FromLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.ToLocation} 
          value={value.ToLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.ToLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.AtLocation} 
          value={value.AtLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.AtLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionTerms} 
          value={value.TransportExecutionTerms}
          itemDisplay={ (itemValue: TransportExecutionTerms, key: string | number) =>
            <TransportExecutionTermsDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.TransportExecutionTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionPlanRequestFieldMeta.Consignment} 
          value={value.Consignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay key={key} meta={TransportExecutionPlanRequestFieldMeta.Consignment} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
