import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: GoodsCertificate
  meta: FieldMeta<T>
}

export default function GoodsCertificateDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={GoodsCertificateFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsCertificateFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsCertificateFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsCertificateFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsCertificateFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsCertificateFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsCertificateFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={GoodsCertificateFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={GoodsCertificateFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={GoodsCertificateFieldMeta.TypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={GoodsCertificateFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={GoodsCertificateFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsCertificateFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={GoodsCertificateFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.ApplicableTerritoryAddress} 
          value={value.ApplicableTerritoryAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={GoodsCertificateFieldMeta.ApplicableTerritoryAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.ExporterParty} 
          value={value.ExporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsCertificateFieldMeta.ExporterParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.ImporterParty} 
          value={value.ImporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsCertificateFieldMeta.ImporterParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.WarehouseParty} 
          value={value.WarehouseParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsCertificateFieldMeta.WarehouseParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsCertificateFieldMeta.ConsignorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.ConsigneeParty} 
          value={value.ConsigneeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsCertificateFieldMeta.ConsigneeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsCertificateFieldMeta.FreightForwarderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsCertificateFieldMeta.IssuerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.LegalAuthorityParty} 
          value={value.LegalAuthorityParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsCertificateFieldMeta.LegalAuthorityParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={GoodsCertificateFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.Attestation} 
          value={value.Attestation}
          itemDisplay={ (itemValue: Attestation, key: string | number) =>
            <AttestationDisplay key={key} meta={GoodsCertificateFieldMeta.Attestation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.GoodsProcessing} 
          value={value.GoodsProcessing}
          itemDisplay={ (itemValue: GoodsProcessing, key: string | number) =>
            <GoodsProcessingDisplay key={key} meta={GoodsCertificateFieldMeta.GoodsProcessing} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.OriginalDocumentReference} 
          value={value.OriginalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={GoodsCertificateFieldMeta.OriginalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.PreviousDocumentReference} 
          value={value.PreviousDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={GoodsCertificateFieldMeta.PreviousDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={GoodsCertificateFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsCertificateFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={GoodsCertificateFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
