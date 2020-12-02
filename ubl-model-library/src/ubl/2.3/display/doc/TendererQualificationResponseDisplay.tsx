import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererQualificationResponse } from  '../../model/doc/TendererQualificationResponse'
import { TendererQualificationResponseFieldMeta } from  '../../meta/doc/TendererQualificationResponseMeta'
import AppealTermsDisplay from '../cac/AppealTermsDisplay'
import { AppealTerms } from '../../model/cac/AppealTerms'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import QualificationResolutionDisplay from '../cac/QualificationResolutionDisplay'
import { QualificationResolution } from '../../model/cac/QualificationResolution'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TendererQualificationResponse
  meta: FieldMeta<T>
}

export default function TendererQualificationResponseDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TendererQualificationResponseFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationResponseFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationResponseFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationResponseFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationResponseFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationResponseFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TendererQualificationResponseFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationResponseFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TendererQualificationResponseFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TendererQualificationResponseFieldMeta.ContractName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TendererQualificationResponseFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TendererQualificationResponseFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TendererQualificationResponseFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TendererQualificationResponseFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TendererQualificationResponseFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.ResolutionDocumentReference} 
          value={value.ResolutionDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TendererQualificationResponseFieldMeta.ResolutionDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.QualificationResolution} 
          value={value.QualificationResolution}
          itemDisplay={ (itemValue: QualificationResolution, key: string | number) =>
            <QualificationResolutionDisplay key={key} meta={TendererQualificationResponseFieldMeta.QualificationResolution} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.AppealTerms} 
          value={value.AppealTerms}
          itemDisplay={ (itemValue: AppealTerms, key: string | number) =>
            <AppealTermsDisplay key={key} meta={TendererQualificationResponseFieldMeta.AppealTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationResponseFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TendererQualificationResponseFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
