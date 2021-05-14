import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: GoodsCertificate
  meta: FieldMeta<T>
}

export default function GoodsCertificateDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-GoodsCertificate ubl-GoodsCertificateType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-GoodsCertificate ubl-UBLExtensions"
          meta={GoodsCertificateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Identifier ubl-UBLVersionID"
          meta={GoodsCertificateFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Identifier ubl-CustomizationID"
          meta={GoodsCertificateFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Identifier ubl-ProfileID"
          meta={GoodsCertificateFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Identifier ubl-ProfileExecutionID"
          meta={GoodsCertificateFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Identifier ubl-ID"
          meta={GoodsCertificateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Identifier ubl-UUID"
          meta={GoodsCertificateFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Date ubl-IssueDate"
          meta={GoodsCertificateFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Time ubl-IssueTime"
          meta={GoodsCertificateFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Code ubl-TypeCode"
          meta={GoodsCertificateFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Type Code"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.TypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Text ubl-Description"
          meta={GoodsCertificateFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Text ubl-Note"
          meta={GoodsCertificateFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsCertificate ubl-Identifier ubl-VersionID"
          meta={GoodsCertificateFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Period ubl-ValidityPeriod"
          meta={GoodsCertificateFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Address ubl-ApplicableTerritoryAddress"
          meta={GoodsCertificateFieldMeta.ApplicableTerritoryAddress} 
          value={value.ApplicableTerritoryAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Applicable Territory Address"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.ApplicableTerritoryAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Party ubl-ExporterParty"
          meta={GoodsCertificateFieldMeta.ExporterParty} 
          value={value.ExporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Exporter Party"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.ExporterParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Party ubl-ImporterParty"
          meta={GoodsCertificateFieldMeta.ImporterParty} 
          value={value.ImporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Importer Party"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.ImporterParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Party ubl-WarehouseParty"
          meta={GoodsCertificateFieldMeta.WarehouseParty} 
          value={value.WarehouseParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Warehouse Party"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.WarehouseParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Party ubl-ConsignorParty"
          meta={GoodsCertificateFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Consignor Party"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.ConsignorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Party ubl-ConsigneeParty"
          meta={GoodsCertificateFieldMeta.ConsigneeParty} 
          value={value.ConsigneeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Consignee Party"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.ConsigneeParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Party ubl-FreightForwarderParty"
          meta={GoodsCertificateFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Freight Forwarder Party"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.FreightForwarderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Party ubl-IssuerParty"
          meta={GoodsCertificateFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.IssuerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Party ubl-LegalAuthorityParty"
          meta={GoodsCertificateFieldMeta.LegalAuthorityParty} 
          value={value.LegalAuthorityParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Legal Authority Party"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.LegalAuthorityParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Shipment"
          meta={GoodsCertificateFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Shipment"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.Shipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Attestation"
          meta={GoodsCertificateFieldMeta.Attestation} 
          value={value.Attestation}
          itemDisplay={ (itemValue: Attestation, key: string | number) =>
            <AttestationDisplay
              key={key}
              label="Attestation"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.Attestation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-GoodsProcessing"
          meta={GoodsCertificateFieldMeta.GoodsProcessing} 
          value={value.GoodsProcessing}
          itemDisplay={ (itemValue: GoodsProcessing, key: string | number) =>
            <GoodsProcessingDisplay
              key={key}
              label="Goods Processing"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.GoodsProcessing}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-DocumentReference ubl-OriginalDocumentReference"
          meta={GoodsCertificateFieldMeta.OriginalDocumentReference} 
          value={value.OriginalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Original Document Reference"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.OriginalDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-DocumentReference ubl-PreviousDocumentReference"
          meta={GoodsCertificateFieldMeta.PreviousDocumentReference} 
          value={value.PreviousDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Previous Document Reference"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.PreviousDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={GoodsCertificateFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={GoodsCertificateFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsCertificate ubl-Signature"
          meta={GoodsCertificateFieldMeta.Signature} 
          value={value.Signature}
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
