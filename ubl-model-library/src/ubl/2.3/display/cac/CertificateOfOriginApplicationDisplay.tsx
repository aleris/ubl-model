import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: CertificateOfOriginApplication
  meta: FieldMeta<T>
}

export default function CertificateOfOriginApplicationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CertificateOfOriginApplication ubl-CertificateOfOriginApplicationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CertificateOfOriginApplication ubl-UBLExtensions"
          meta={CertificateOfOriginApplicationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOriginApplication ubl-Identifier ubl-ReferenceID"
          meta={CertificateOfOriginApplicationFieldMeta.ReferenceID} 
          value={value.ReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Reference"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.ReferenceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOriginApplication ubl-Text ubl-CertificateType"
          meta={CertificateOfOriginApplicationFieldMeta.CertificateType} 
          value={value.CertificateType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Certificate Type"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.CertificateType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOriginApplication ubl-Code ubl-ApplicationStatusCode"
          meta={CertificateOfOriginApplicationFieldMeta.ApplicationStatusCode} 
          value={value.ApplicationStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Application Status Code"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.ApplicationStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOriginApplication ubl-Identifier ubl-OriginalJobID"
          meta={CertificateOfOriginApplicationFieldMeta.OriginalJobID} 
          value={value.OriginalJobID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Original Job Identifier"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.OriginalJobID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CertificateOfOriginApplication ubl-Identifier ubl-PreviousJobID"
          meta={CertificateOfOriginApplicationFieldMeta.PreviousJobID} 
          value={value.PreviousJobID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Job Identifier"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.PreviousJobID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CertificateOfOriginApplication ubl-Text ubl-Remarks"
          meta={CertificateOfOriginApplicationFieldMeta.Remarks} 
          value={value.Remarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Remarks"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.Remarks}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOriginApplication ubl-Shipment"
          meta={CertificateOfOriginApplicationFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Shipment"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.Shipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CertificateOfOriginApplication ubl-EndorserParty"
          meta={CertificateOfOriginApplicationFieldMeta.EndorserParty} 
          value={value.EndorserParty}
          itemDisplay={ (itemValue: EndorserParty, key: string | number) =>
            <EndorserPartyDisplay
              key={key}
              label="Endorser Party"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.EndorserParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOriginApplication ubl-Party ubl-PreparationParty"
          meta={CertificateOfOriginApplicationFieldMeta.PreparationParty} 
          value={value.PreparationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Preparation Party"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.PreparationParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOriginApplication ubl-Party ubl-IssuerParty"
          meta={CertificateOfOriginApplicationFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.IssuerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOriginApplication ubl-Party ubl-ExporterParty"
          meta={CertificateOfOriginApplicationFieldMeta.ExporterParty} 
          value={value.ExporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Exporter Party"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.ExporterParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOriginApplication ubl-Party ubl-ImporterParty"
          meta={CertificateOfOriginApplicationFieldMeta.ImporterParty} 
          value={value.ImporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Importer Party"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.ImporterParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CertificateOfOriginApplication ubl-Country ubl-IssuingCountry"
          meta={CertificateOfOriginApplicationFieldMeta.IssuingCountry} 
          value={value.IssuingCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Issuing Country"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.IssuingCountry}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CertificateOfOriginApplication ubl-DocumentDistribution"
          meta={CertificateOfOriginApplicationFieldMeta.DocumentDistribution} 
          value={value.DocumentDistribution}
          itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
            <DocumentDistributionDisplay
              key={key}
              label="Document Distribution"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.DocumentDistribution}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CertificateOfOriginApplication ubl-DocumentReference ubl-SupportingDocumentReference"
          meta={CertificateOfOriginApplicationFieldMeta.SupportingDocumentReference} 
          value={value.SupportingDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Supporting Document Reference"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.SupportingDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CertificateOfOriginApplication ubl-Signature"
          meta={CertificateOfOriginApplicationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={CertificateOfOriginApplicationFieldMeta.Signature}
            />
          }
        />
        </div>
    </div>
  )
}
