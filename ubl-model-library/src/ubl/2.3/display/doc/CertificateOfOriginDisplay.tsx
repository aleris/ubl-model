import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CertificateOfOrigin } from  '../../model/doc/CertificateOfOrigin'
import { CertificateOfOriginFieldMeta } from  '../../meta/doc/CertificateOfOriginMeta'
import CertificateOfOriginApplicationDisplay from '../cac/CertificateOfOriginApplicationDisplay'
import { CertificateOfOriginApplication } from '../../model/cac/CertificateOfOriginApplication'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import EndorsementDisplay from '../cac/EndorsementDisplay'
import { Endorsement } from '../../model/cac/Endorsement'
import EndorserPartyDisplay from '../cac/EndorserPartyDisplay'
import { EndorserParty } from '../../model/cac/EndorserParty'
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
  value: CertificateOfOrigin | undefined
  meta: FieldMeta<T>
}

export default function CertificateOfOriginDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-CertificateOfOrigin">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CertificateOfOriginFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={CertificateOfOriginFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={CertificateOfOriginFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={CertificateOfOriginFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={CertificateOfOriginFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CertificateOfOriginFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={CertificateOfOriginFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={CertificateOfOriginFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={CertificateOfOriginFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={CertificateOfOriginFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={CertificateOfOriginFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={CertificateOfOriginFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={CertificateOfOriginFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={CertificateOfOriginFieldMeta.VersionID}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={CertificateOfOriginFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={CertificateOfOriginFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Exporter Party"
            value={value.ExporterParty?.[0]}
            meta={CertificateOfOriginFieldMeta.ExporterParty}
          />

          <PartyDisplay
            label="Importer Party"
            value={value.ImporterParty?.[0]}
            meta={CertificateOfOriginFieldMeta.ImporterParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-EndorserParty"
            label="Endorser Party"
            items={value.EndorserParty}
            meta={CertificateOfOriginFieldMeta.EndorserParty} 
            itemDisplay={ (itemValue: EndorserParty, key: string | number) =>
              <EndorserPartyDisplay
                key={key}
                label="Endorser Party"
                value={itemValue}
                meta={CertificateOfOriginFieldMeta.EndorserParty}
              />
            }
          />

          <CertificateOfOriginApplicationDisplay
            label="Certificate Of Origin Application"
            value={value.CertificateOfOriginApplication?.[0]}
            meta={CertificateOfOriginFieldMeta.CertificateOfOriginApplication}
          />

          <EndorsementDisplay
            label="Issuer Endorsement"
            value={value.IssuerEndorsement?.[0]}
            meta={CertificateOfOriginFieldMeta.IssuerEndorsement}
          />

          <EndorsementDisplay
            label="Embassy Endorsement"
            value={value.EmbassyEndorsement?.[0]}
            meta={CertificateOfOriginFieldMeta.EmbassyEndorsement}
          />

          <EndorsementDisplay
            label="Insurance Endorsement"
            value={value.InsuranceEndorsement?.[0]}
            meta={CertificateOfOriginFieldMeta.InsuranceEndorsement}
          />
        </div>
    </div>
  )
}
