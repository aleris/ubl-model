import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: ProofOfReexportation | undefined
  meta: FieldMeta<T>
}

export default function ProofOfReexportationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-ProofOfReexportation">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ProofOfReexportationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={ProofOfReexportationFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={ProofOfReexportationFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={ProofOfReexportationFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={ProofOfReexportationFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ProofOfReexportationFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ProofOfReexportationFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ProofOfReexportationFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={ProofOfReexportationFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ProofOfReexportationFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ProofOfReexportationFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={ProofOfReexportationFieldMeta.VersionID}
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={ProofOfReexportationFieldMeta.IssuerParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-GoodsItemPassportCounterfoil"
            label="Goods Item Passport Counterfoil"
            items={value.GoodsItemPassportCounterfoil}
            meta={ProofOfReexportationFieldMeta.GoodsItemPassportCounterfoil} 
            itemDisplay={ (itemValue: GoodsItemPassportCounterfoil, key: string | number) =>
              <GoodsItemPassportCounterfoilDisplay
                key={key}
                label="Goods Item Passport Counterfoil"
                value={itemValue}
                meta={ProofOfReexportationFieldMeta.GoodsItemPassportCounterfoil}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Evidence ubl-ReexportationEvidence"
            label="Reexportation Evidence"
            items={value.ReexportationEvidence}
            meta={ProofOfReexportationFieldMeta.ReexportationEvidence} 
            itemDisplay={ (itemValue: Evidence, key: string | number) =>
              <EvidenceDisplay
                key={key}
                label="Reexportation Evidence"
                value={itemValue}
                meta={ProofOfReexportationFieldMeta.ReexportationEvidence}
              />
            }
          />

          <AttachmentDisplay
            label="Goods Item Passport Attachment"
            value={value.GoodsItemPassportAttachment?.[0]}
            meta={ProofOfReexportationFieldMeta.GoodsItemPassportAttachment}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={ProofOfReexportationFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={ProofOfReexportationFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={ProofOfReexportationFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={ProofOfReexportationFieldMeta.Signature}
              />
            }
          />
        </div>
    </div>
  )
}
