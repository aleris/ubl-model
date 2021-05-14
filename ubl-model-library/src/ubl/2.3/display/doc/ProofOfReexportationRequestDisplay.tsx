import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ProofOfReexportationRequest
  meta: FieldMeta<T>
}

export default function ProofOfReexportationRequestDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-ProofOfReexportationRequest ubl-ProofOfReexportationRequestType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ProofOfReexportationRequest ubl-UBLExtensions"
          meta={ProofOfReexportationRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Identifier ubl-UBLVersionID"
          meta={ProofOfReexportationRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Identifier ubl-CustomizationID"
          meta={ProofOfReexportationRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Identifier ubl-ProfileID"
          meta={ProofOfReexportationRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Identifier ubl-ProfileExecutionID"
          meta={ProofOfReexportationRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Identifier ubl-ID"
          meta={ProofOfReexportationRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Identifier ubl-UUID"
          meta={ProofOfReexportationRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Date ubl-IssueDate"
          meta={ProofOfReexportationRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Time ubl-IssueTime"
          meta={ProofOfReexportationRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Text ubl-Note"
          meta={ProofOfReexportationRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Identifier ubl-VersionID"
          meta={ProofOfReexportationRequestFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Identifier ubl-GoodsItemPassportID"
          meta={ProofOfReexportationRequestFieldMeta.GoodsItemPassportID} 
          value={value.GoodsItemPassportID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Goods Item Passport"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.GoodsItemPassportID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProofOfReexportationRequest ubl-Identifier ubl-GoodsItemPassportCounterfoilID"
          meta={ProofOfReexportationRequestFieldMeta.GoodsItemPassportCounterfoilID} 
          value={value.GoodsItemPassportCounterfoilID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Goods Item Passport Counterfoil"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.GoodsItemPassportCounterfoilID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ProofOfReexportationRequest ubl-Party ubl-IssuerParty"
          meta={ProofOfReexportationRequestFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.IssuerParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProofOfReexportationRequest ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={ProofOfReexportationRequestFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={ProofOfReexportationRequestFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProofOfReexportationRequest ubl-Signature"
          meta={ProofOfReexportationRequestFieldMeta.Signature} 
          value={value.Signature}
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
