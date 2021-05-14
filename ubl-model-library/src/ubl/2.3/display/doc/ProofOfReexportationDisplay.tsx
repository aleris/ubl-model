import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ProofOfReexportation
  meta: FieldMeta<T>
}

export default function ProofOfReexportationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-ProofOfReexportation ubl-ProofOfReexportationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ProofOfReexportation ubl-UBLExtensions"
          meta={ProofOfReexportationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportation ubl-Identifier ubl-UBLVersionID"
          meta={ProofOfReexportationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportation ubl-Identifier ubl-CustomizationID"
          meta={ProofOfReexportationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportation ubl-Identifier ubl-ProfileID"
          meta={ProofOfReexportationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportation ubl-Identifier ubl-ProfileExecutionID"
          meta={ProofOfReexportationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportation ubl-Identifier ubl-ID"
          meta={ProofOfReexportationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportation ubl-Identifier ubl-UUID"
          meta={ProofOfReexportationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportation ubl-Date ubl-IssueDate"
          meta={ProofOfReexportationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportation ubl-Time ubl-IssueTime"
          meta={ProofOfReexportationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ProofOfReexportation ubl-Text ubl-Note"
          meta={ProofOfReexportationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportation ubl-Identifier ubl-VersionID"
          meta={ProofOfReexportationFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ProofOfReexportation ubl-Party ubl-IssuerParty"
          meta={ProofOfReexportationFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.IssuerParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProofOfReexportation ubl-GoodsItemPassportCounterfoil"
          meta={ProofOfReexportationFieldMeta.GoodsItemPassportCounterfoil} 
          value={value.GoodsItemPassportCounterfoil}
          itemDisplay={ (itemValue: GoodsItemPassportCounterfoil, key: string | number) =>
            <GoodsItemPassportCounterfoilDisplay
              key={key}
              label="Goods Item Passport Counterfoil"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.GoodsItemPassportCounterfoil}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProofOfReexportation ubl-Evidence ubl-ReexportationEvidence"
          meta={ProofOfReexportationFieldMeta.ReexportationEvidence} 
          value={value.ReexportationEvidence}
          itemDisplay={ (itemValue: Evidence, key: string | number) =>
            <EvidenceDisplay
              key={key}
              label="Reexportation Evidence"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.ReexportationEvidence}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ProofOfReexportation ubl-Attachment ubl-GoodsItemPassportAttachment"
          meta={ProofOfReexportationFieldMeta.GoodsItemPassportAttachment} 
          value={value.GoodsItemPassportAttachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay
              key={key}
              label="Goods Item Passport Attachment"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.GoodsItemPassportAttachment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProofOfReexportation ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={ProofOfReexportationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={ProofOfReexportationFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProofOfReexportation ubl-Signature"
          meta={ProofOfReexportationFieldMeta.Signature} 
          value={value.Signature}
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
