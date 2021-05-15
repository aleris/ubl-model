import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProofOfReexportationRequest } from  '../../model/doc/ProofOfReexportationRequest'
import { ProofOfReexportationRequestFieldMeta } from  '../../meta/doc/ProofOfReexportationRequestMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
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
  value: ProofOfReexportationRequest | undefined
  meta: FieldMeta<T>
}

export default function ProofOfReexportationRequestDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-ProofOfReexportationRequest">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ProofOfReexportationRequestFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ProofOfReexportationRequestFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Goods Item Passport"
            value={value.GoodsItemPassportID?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.GoodsItemPassportID}
          />

          <IdentifierDisplay
            label="Goods Item Passport Counterfoil"
            value={value.GoodsItemPassportCounterfoilID?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.GoodsItemPassportCounterfoilID}
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={ProofOfReexportationRequestFieldMeta.IssuerParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={ProofOfReexportationRequestFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={ProofOfReexportationRequestFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={ProofOfReexportationRequestFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={ProofOfReexportationRequestFieldMeta.Signature}
              />
            }
          />
        </div>
    </div>
  )
}
