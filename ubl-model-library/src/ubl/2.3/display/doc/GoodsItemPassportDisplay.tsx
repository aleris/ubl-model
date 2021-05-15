import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItemPassport } from  '../../model/doc/GoodsItemPassport'
import { GoodsItemPassportFieldMeta } from  '../../meta/doc/GoodsItemPassportMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentDistributionDisplay from '../cac/DocumentDistributionDisplay'
import { DocumentDistribution } from '../../model/cac/DocumentDistribution'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import EndorsementDisplay from '../cac/EndorsementDisplay'
import { Endorsement } from '../../model/cac/Endorsement'
import GoodsItemPassportCounterfoilDisplay from '../cac/GoodsItemPassportCounterfoilDisplay'
import { GoodsItemPassportCounterfoil } from '../../model/cac/GoodsItemPassportCounterfoil'
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
  value: GoodsItemPassport | undefined
  meta: FieldMeta<T>
}

export default function GoodsItemPassportDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-GoodsItemPassport">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={GoodsItemPassportFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={GoodsItemPassportFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={GoodsItemPassportFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={GoodsItemPassportFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={GoodsItemPassportFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={GoodsItemPassportFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={GoodsItemPassportFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={GoodsItemPassportFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={GoodsItemPassportFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={GoodsItemPassportFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={GoodsItemPassportFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={GoodsItemPassportFieldMeta.VersionID}
          />

          <CodeDisplay
            label="Export Reason"
            value={value.ExportReasonCode?.[0]}
            meta={GoodsItemPassportFieldMeta.ExportReasonCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-ExportReason"
            label="Export Reason"
            items={value.ExportReason}
            meta={GoodsItemPassportFieldMeta.ExportReason} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Export Reason"
                value={itemValue}
                meta={GoodsItemPassportFieldMeta.ExportReason}
              />
            }
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={GoodsItemPassportFieldMeta.ValidityPeriod}
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={GoodsItemPassportFieldMeta.IssuerParty}
          />

          <PartyDisplay
            label="Holder Party"
            value={value.HolderParty?.[0]}
            meta={GoodsItemPassportFieldMeta.HolderParty}
          />

          <PartyDisplay
            label="Representative Party"
            value={value.RepresentativeParty?.[0]}
            meta={GoodsItemPassportFieldMeta.RepresentativeParty}
          />

          <PartyDisplay
            label="Exporting Customs Party"
            value={value.ExportingCustomsParty?.[0]}
            meta={GoodsItemPassportFieldMeta.ExportingCustomsParty}
          />

          <PartyDisplay
            label="Importing Customs Party"
            value={value.ImportingCustomsParty?.[0]}
            meta={GoodsItemPassportFieldMeta.ImportingCustomsParty}
          />

          <PartyDisplay
            label="Importing Guarantor Party"
            value={value.ImportingGuarantorParty?.[0]}
            meta={GoodsItemPassportFieldMeta.ImportingGuarantorParty}
          />

          <PartyDisplay
            label="Exporting Guarantor Party"
            value={value.ExportingGuarantorParty?.[0]}
            meta={GoodsItemPassportFieldMeta.ExportingGuarantorParty}
          />

          <ShipmentDisplay
            label="Shipment"
            value={value.Shipment?.[0]}
            meta={GoodsItemPassportFieldMeta.Shipment}
          />

          <ElementListDisplay
            className="ubl-doc ubl-GoodsItemPassportCounterfoil"
            label="Goods Item Passport Counterfoil"
            items={value.GoodsItemPassportCounterfoil}
            meta={GoodsItemPassportFieldMeta.GoodsItemPassportCounterfoil} 
            itemDisplay={ (itemValue: GoodsItemPassportCounterfoil, key: string | number) =>
              <GoodsItemPassportCounterfoilDisplay
                key={key}
                label="Goods Item Passport Counterfoil"
                value={itemValue}
                meta={GoodsItemPassportFieldMeta.GoodsItemPassportCounterfoil}
              />
            }
          />

          <EndorsementDisplay
            label="Issuer Endorsement"
            value={value.IssuerEndorsement?.[0]}
            meta={GoodsItemPassportFieldMeta.IssuerEndorsement}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={GoodsItemPassportFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={GoodsItemPassportFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentDistribution"
            label="Document Distribution"
            items={value.DocumentDistribution}
            meta={GoodsItemPassportFieldMeta.DocumentDistribution} 
            itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
              <DocumentDistributionDisplay
                key={key}
                label="Document Distribution"
                value={itemValue}
                meta={GoodsItemPassportFieldMeta.DocumentDistribution}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={GoodsItemPassportFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={GoodsItemPassportFieldMeta.Signature}
              />
            }
          />
        </div>
    </div>
  )
}
