import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CertificateOfOriginApplication } from  '../../model/cac/CertificateOfOriginApplication'
import { CertificateOfOriginApplicationFieldMeta } from  '../../meta/cac/CertificateOfOriginApplicationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CountryDisplay from './CountryDisplay'
import { Country } from '../../model/cac/Country'
import DocumentDistributionDisplay from './DocumentDistributionDisplay'
import { DocumentDistribution } from '../../model/cac/DocumentDistribution'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import EndorserPartyDisplay from './EndorserPartyDisplay'
import { EndorserParty } from '../../model/cac/EndorserParty'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import ShipmentDisplay from './ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import SignatureDisplay from './SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: CertificateOfOriginApplication
  meta: FieldMeta<T>
}

export default function CertificateOfOriginApplicationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.ReferenceID} 
          value={value.ReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.ReferenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.CertificateType} 
          value={value.CertificateType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.CertificateType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.ApplicationStatusCode} 
          value={value.ApplicationStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.ApplicationStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.OriginalJobID} 
          value={value.OriginalJobID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.OriginalJobID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.PreviousJobID} 
          value={value.PreviousJobID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.PreviousJobID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.Remarks} 
          value={value.Remarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.Remarks} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.EndorserParty} 
          value={value.EndorserParty}
          itemDisplay={ (itemValue: EndorserParty, key: string | number) =>
            <EndorserPartyDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.EndorserParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.PreparationParty} 
          value={value.PreparationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.PreparationParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.IssuerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.ExporterParty} 
          value={value.ExporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.ExporterParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.ImporterParty} 
          value={value.ImporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.ImporterParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.IssuingCountry} 
          value={value.IssuingCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.IssuingCountry} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.DocumentDistribution} 
          value={value.DocumentDistribution}
          itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
            <DocumentDistributionDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.DocumentDistribution} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.SupportingDocumentReference} 
          value={value.SupportingDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.SupportingDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateOfOriginApplicationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={CertificateOfOriginApplicationFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
