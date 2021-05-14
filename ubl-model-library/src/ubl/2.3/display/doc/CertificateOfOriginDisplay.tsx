import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CertificateOfOrigin
  meta: FieldMeta<T>
}

export default function CertificateOfOriginDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-CertificateOfOrigin ubl-CertificateOfOriginType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CertificateOfOrigin ubl-UBLExtensions"
          meta={CertificateOfOriginFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOrigin ubl-Identifier ubl-UBLVersionID"
          meta={CertificateOfOriginFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOrigin ubl-Identifier ubl-CustomizationID"
          meta={CertificateOfOriginFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOrigin ubl-Identifier ubl-ProfileID"
          meta={CertificateOfOriginFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOrigin ubl-Identifier ubl-ProfileExecutionID"
          meta={CertificateOfOriginFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOrigin ubl-Identifier ubl-ID"
          meta={CertificateOfOriginFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOrigin ubl-Identifier ubl-UUID"
          meta={CertificateOfOriginFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOrigin ubl-Date ubl-IssueDate"
          meta={CertificateOfOriginFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOrigin ubl-Time ubl-IssueTime"
          meta={CertificateOfOriginFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CertificateOfOrigin ubl-Text ubl-Description"
          meta={CertificateOfOriginFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CertificateOfOrigin ubl-Text ubl-Note"
          meta={CertificateOfOriginFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOrigin ubl-Identifier ubl-VersionID"
          meta={CertificateOfOriginFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.VersionID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CertificateOfOrigin ubl-Signature"
          meta={CertificateOfOriginFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOrigin ubl-Party ubl-ExporterParty"
          meta={CertificateOfOriginFieldMeta.ExporterParty} 
          value={value.ExporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Exporter Party"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.ExporterParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOrigin ubl-Party ubl-ImporterParty"
          meta={CertificateOfOriginFieldMeta.ImporterParty} 
          value={value.ImporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Importer Party"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.ImporterParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CertificateOfOrigin ubl-EndorserParty"
          meta={CertificateOfOriginFieldMeta.EndorserParty} 
          value={value.EndorserParty}
          itemDisplay={ (itemValue: EndorserParty, key: string | number) =>
            <EndorserPartyDisplay
              key={key}
              label="Endorser Party"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.EndorserParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOrigin ubl-CertificateOfOriginApplication"
          meta={CertificateOfOriginFieldMeta.CertificateOfOriginApplication} 
          value={value.CertificateOfOriginApplication}
          itemDisplay={ (itemValue: CertificateOfOriginApplication, key: string | number) =>
            <CertificateOfOriginApplicationDisplay
              key={key}
              label="Certificate Of Origin Application"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.CertificateOfOriginApplication}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOrigin ubl-Endorsement ubl-IssuerEndorsement"
          meta={CertificateOfOriginFieldMeta.IssuerEndorsement} 
          value={value.IssuerEndorsement}
          itemDisplay={ (itemValue: Endorsement, key: string | number) =>
            <EndorsementDisplay
              key={key}
              label="Issuer Endorsement"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.IssuerEndorsement}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOrigin ubl-Endorsement ubl-EmbassyEndorsement"
          meta={CertificateOfOriginFieldMeta.EmbassyEndorsement} 
          value={value.EmbassyEndorsement}
          itemDisplay={ (itemValue: Endorsement, key: string | number) =>
            <EndorsementDisplay
              key={key}
              label="Embassy Endorsement"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.EmbassyEndorsement}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOrigin ubl-Endorsement ubl-InsuranceEndorsement"
          meta={CertificateOfOriginFieldMeta.InsuranceEndorsement} 
          value={value.InsuranceEndorsement}
          itemDisplay={ (itemValue: Endorsement, key: string | number) =>
            <EndorsementDisplay
              key={key}
              label="Insurance Endorsement"
              value={itemValue}
              meta={CertificateOfOriginFieldMeta.InsuranceEndorsement}
            />
          }
        />
        </div>
    </div>
  )
}
