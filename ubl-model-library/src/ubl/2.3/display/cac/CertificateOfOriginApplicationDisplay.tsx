import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: CertificateOfOriginApplication | undefined
  meta: FieldMeta<T>
}

export default function CertificateOfOriginApplicationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CertificateOfOriginApplication">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Reference"
            value={value.ReferenceID?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.ReferenceID}
          />

          <TextDisplay
            label="Certificate Type"
            value={value.CertificateType?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.CertificateType}
          />

          <CodeDisplay
            label="Application Status Code"
            value={value.ApplicationStatusCode?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.ApplicationStatusCode}
          />

          <IdentifierDisplay
            label="Original Job Identifier"
            value={value.OriginalJobID?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.OriginalJobID}
          />

          <IdentifierDisplay
            label="Previous Job Identifier"
            value={value.PreviousJobID?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.PreviousJobID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Remarks"
            label="Remarks"
            items={value.Remarks}
            meta={CertificateOfOriginApplicationFieldMeta.Remarks} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Remarks"
                value={itemValue}
                meta={CertificateOfOriginApplicationFieldMeta.Remarks}
              />
            }
          />

          <ShipmentDisplay
            label="Shipment"
            value={value.Shipment?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.Shipment}
          />

          <ElementListDisplay
            className="ubl-cac ubl-EndorserParty"
            label="Endorser Party"
            items={value.EndorserParty}
            meta={CertificateOfOriginApplicationFieldMeta.EndorserParty} 
            itemDisplay={ (itemValue: EndorserParty, key: string | number) =>
              <EndorserPartyDisplay
                key={key}
                label="Endorser Party"
                value={itemValue}
                meta={CertificateOfOriginApplicationFieldMeta.EndorserParty}
              />
            }
          />

          <PartyDisplay
            label="Preparation Party"
            value={value.PreparationParty?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.PreparationParty}
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.IssuerParty}
          />

          <PartyDisplay
            label="Exporter Party"
            value={value.ExporterParty?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.ExporterParty}
          />

          <PartyDisplay
            label="Importer Party"
            value={value.ImporterParty?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.ImporterParty}
          />

          <CountryDisplay
            label="Issuing Country"
            value={value.IssuingCountry?.[0]}
            meta={CertificateOfOriginApplicationFieldMeta.IssuingCountry}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentDistribution"
            label="Document Distribution"
            items={value.DocumentDistribution}
            meta={CertificateOfOriginApplicationFieldMeta.DocumentDistribution} 
            itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
              <DocumentDistributionDisplay
                key={key}
                label="Document Distribution"
                value={itemValue}
                meta={CertificateOfOriginApplicationFieldMeta.DocumentDistribution}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-SupportingDocumentReference"
            label="Supporting Document Reference"
            items={value.SupportingDocumentReference}
            meta={CertificateOfOriginApplicationFieldMeta.SupportingDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Supporting Document Reference"
                value={itemValue}
                meta={CertificateOfOriginApplicationFieldMeta.SupportingDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={CertificateOfOriginApplicationFieldMeta.Signature} 
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
