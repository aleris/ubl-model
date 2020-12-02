import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererQualification } from  '../../model/doc/TendererQualification'
import { TendererQualificationFieldMeta } from  '../../meta/doc/TendererQualificationMeta'
import ContractingPartyDisplay from '../cac/ContractingPartyDisplay'
import { ContractingParty } from '../../model/cac/ContractingParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import EvidenceDisplay from '../cac/EvidenceDisplay'
import { Evidence } from '../../model/cac/Evidence'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TendererPartyQualificationDisplay from '../cac/TendererPartyQualificationDisplay'
import { TendererPartyQualification } from '../../model/cac/TendererPartyQualification'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TendererQualification
  meta: FieldMeta<T>
}

export default function TendererQualificationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TendererQualificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TendererQualificationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TendererQualificationFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TendererQualificationFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TendererQualificationFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TendererQualificationFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationFieldMeta.PreviousVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TendererQualificationFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.TendererPartyQualification} 
          value={value.TendererPartyQualification}
          itemDisplay={ (itemValue: TendererPartyQualification, key: string | number) =>
            <TendererPartyQualificationDisplay key={key} meta={TendererQualificationFieldMeta.TendererPartyQualification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={TendererQualificationFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.Evidence} 
          value={value.Evidence}
          itemDisplay={ (itemValue: Evidence, key: string | number) =>
            <EvidenceDisplay key={key} meta={TendererQualificationFieldMeta.Evidence} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TendererQualificationFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
