import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProofOfReexportation } from  '../../model/doc/ProofOfReexportation'
import { ProofOfReexportationFieldMeta } from  '../../meta/doc/ProofOfReexportationMeta'
import AttachmentDisplay from '../cac/AttachmentDisplay'
import { Attachment } from '../../model/cac/Attachment'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import EvidenceDisplay from '../cac/EvidenceDisplay'
import { Evidence } from '../../model/cac/Evidence'
import GoodsItemPassportCounterfoilDisplay from '../cac/GoodsItemPassportCounterfoilDisplay'
import { GoodsItemPassportCounterfoil } from '../../model/cac/GoodsItemPassportCounterfoil'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ProofOfReexportation
  meta: FieldMeta<T>
}

export default function ProofOfReexportationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ProofOfReexportationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProofOfReexportationFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProofOfReexportationFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProofOfReexportationFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProofOfReexportationFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProofOfReexportationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProofOfReexportationFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ProofOfReexportationFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ProofOfReexportationFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ProofOfReexportationFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProofOfReexportationFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ProofOfReexportationFieldMeta.IssuerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.GoodsItemPassportCounterfoil} 
          value={value.GoodsItemPassportCounterfoil}
          itemDisplay={ (itemValue: GoodsItemPassportCounterfoil, key: string | number) =>
            <GoodsItemPassportCounterfoilDisplay key={key} meta={ProofOfReexportationFieldMeta.GoodsItemPassportCounterfoil} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.ReexportationEvidence} 
          value={value.ReexportationEvidence}
          itemDisplay={ (itemValue: Evidence, key: string | number) =>
            <EvidenceDisplay key={key} meta={ProofOfReexportationFieldMeta.ReexportationEvidence} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.GoodsItemPassportAttachment} 
          value={value.GoodsItemPassportAttachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay key={key} meta={ProofOfReexportationFieldMeta.GoodsItemPassportAttachment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ProofOfReexportationFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProofOfReexportationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={ProofOfReexportationFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
