import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsCertificate } from  '../../model/doc/GoodsCertificate'
import { GoodsCertificateFieldMeta } from  '../../meta/doc/GoodsCertificateMeta'
import AddressDisplay from '../cac/AddressDisplay'
import { Address } from '../../model/cac/Address'
import AttestationDisplay from '../cac/AttestationDisplay'
import { Attestation } from '../../model/cac/Attestation'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import GoodsProcessingDisplay from '../cac/GoodsProcessingDisplay'
import { GoodsProcessing } from '../../model/cac/GoodsProcessing'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ShipmentDisplay from '../cac/ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
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
  value: GoodsCertificate | undefined
  meta: FieldMeta<T>
}

export default function GoodsCertificateDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-GoodsCertificate">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={GoodsCertificateFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={GoodsCertificateFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={GoodsCertificateFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={GoodsCertificateFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={GoodsCertificateFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={GoodsCertificateFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={GoodsCertificateFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={GoodsCertificateFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={GoodsCertificateFieldMeta.IssueTime}
          />

          <CodeDisplay
            label="Type Code"
            value={value.TypeCode?.[0]}
            meta={GoodsCertificateFieldMeta.TypeCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={GoodsCertificateFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={GoodsCertificateFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={GoodsCertificateFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={GoodsCertificateFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={GoodsCertificateFieldMeta.VersionID}
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={GoodsCertificateFieldMeta.ValidityPeriod}
          />

          <AddressDisplay
            label="Applicable Territory Address"
            value={value.ApplicableTerritoryAddress?.[0]}
            meta={GoodsCertificateFieldMeta.ApplicableTerritoryAddress}
          />

          <PartyDisplay
            label="Exporter Party"
            value={value.ExporterParty?.[0]}
            meta={GoodsCertificateFieldMeta.ExporterParty}
          />

          <PartyDisplay
            label="Importer Party"
            value={value.ImporterParty?.[0]}
            meta={GoodsCertificateFieldMeta.ImporterParty}
          />

          <PartyDisplay
            label="Warehouse Party"
            value={value.WarehouseParty?.[0]}
            meta={GoodsCertificateFieldMeta.WarehouseParty}
          />

          <PartyDisplay
            label="Consignor Party"
            value={value.ConsignorParty?.[0]}
            meta={GoodsCertificateFieldMeta.ConsignorParty}
          />

          <PartyDisplay
            label="Consignee Party"
            value={value.ConsigneeParty?.[0]}
            meta={GoodsCertificateFieldMeta.ConsigneeParty}
          />

          <PartyDisplay
            label="Freight Forwarder Party"
            value={value.FreightForwarderParty?.[0]}
            meta={GoodsCertificateFieldMeta.FreightForwarderParty}
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={GoodsCertificateFieldMeta.IssuerParty}
          />

          <PartyDisplay
            label="Legal Authority Party"
            value={value.LegalAuthorityParty?.[0]}
            meta={GoodsCertificateFieldMeta.LegalAuthorityParty}
          />

          <ShipmentDisplay
            label="Shipment"
            value={value.Shipment?.[0]}
            meta={GoodsCertificateFieldMeta.Shipment}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Attestation"
            label="Attestation"
            items={value.Attestation}
            meta={GoodsCertificateFieldMeta.Attestation} 
            itemDisplay={ (itemValue: Attestation, key: string | number) =>
              <AttestationDisplay
                key={key}
                label="Attestation"
                value={itemValue}
                meta={GoodsCertificateFieldMeta.Attestation}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-GoodsProcessing"
            label="Goods Processing"
            items={value.GoodsProcessing}
            meta={GoodsCertificateFieldMeta.GoodsProcessing} 
            itemDisplay={ (itemValue: GoodsProcessing, key: string | number) =>
              <GoodsProcessingDisplay
                key={key}
                label="Goods Processing"
                value={itemValue}
                meta={GoodsCertificateFieldMeta.GoodsProcessing}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Original Document Reference"
            value={value.OriginalDocumentReference?.[0]}
            meta={GoodsCertificateFieldMeta.OriginalDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Previous Document Reference"
            value={value.PreviousDocumentReference?.[0]}
            meta={GoodsCertificateFieldMeta.PreviousDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={GoodsCertificateFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={GoodsCertificateFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={GoodsCertificateFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={GoodsCertificateFieldMeta.Signature}
              />
            }
          />
        </div>
    </div>
  )
}
