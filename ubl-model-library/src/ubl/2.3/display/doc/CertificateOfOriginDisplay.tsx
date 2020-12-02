import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: CertificateOfOrigin
  meta: FieldMeta<T>
}

export default function CertificateOfOriginDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CertificateOfOriginFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CertificateOfOriginFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CertificateOfOriginFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CertificateOfOriginFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CertificateOfOriginFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CertificateOfOriginFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CertificateOfOriginFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CertificateOfOriginFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={CertificateOfOriginFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CertificateOfOriginFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CertificateOfOriginFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CertificateOfOriginFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={CertificateOfOriginFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.ExporterParty} 
          value={value.ExporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CertificateOfOriginFieldMeta.ExporterParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.ImporterParty} 
          value={value.ImporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CertificateOfOriginFieldMeta.ImporterParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.EndorserParty} 
          value={value.EndorserParty}
          itemDisplay={ (itemValue: EndorserParty, key: string | number) =>
            <EndorserPartyDisplay key={key} meta={CertificateOfOriginFieldMeta.EndorserParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.CertificateOfOriginApplication} 
          value={value.CertificateOfOriginApplication}
          itemDisplay={ (itemValue: CertificateOfOriginApplication, key: string | number) =>
            <CertificateOfOriginApplicationDisplay key={key} meta={CertificateOfOriginFieldMeta.CertificateOfOriginApplication} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.IssuerEndorsement} 
          value={value.IssuerEndorsement}
          itemDisplay={ (itemValue: Endorsement, key: string | number) =>
            <EndorsementDisplay key={key} meta={CertificateOfOriginFieldMeta.IssuerEndorsement} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.EmbassyEndorsement} 
          value={value.EmbassyEndorsement}
          itemDisplay={ (itemValue: Endorsement, key: string | number) =>
            <EndorsementDisplay key={key} meta={CertificateOfOriginFieldMeta.EmbassyEndorsement} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginFieldMeta.InsuranceEndorsement} 
          value={value.InsuranceEndorsement}
          itemDisplay={ (itemValue: Endorsement, key: string | number) =>
            <EndorsementDisplay key={key} meta={CertificateOfOriginFieldMeta.InsuranceEndorsement} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
