import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: GoodsItemPassport
  meta: FieldMeta<T>
}

export default function GoodsItemPassportDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-GoodsItemPassport ubl-GoodsItemPassportType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-GoodsItemPassport ubl-UBLExtensions"
          meta={GoodsItemPassportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Identifier ubl-UBLVersionID"
          meta={GoodsItemPassportFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Identifier ubl-CustomizationID"
          meta={GoodsItemPassportFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Identifier ubl-ProfileID"
          meta={GoodsItemPassportFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Identifier ubl-ProfileExecutionID"
          meta={GoodsItemPassportFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Identifier ubl-ID"
          meta={GoodsItemPassportFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Identifier ubl-UUID"
          meta={GoodsItemPassportFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Date ubl-IssueDate"
          meta={GoodsItemPassportFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Time ubl-IssueTime"
          meta={GoodsItemPassportFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Text ubl-Note"
          meta={GoodsItemPassportFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Identifier ubl-VersionID"
          meta={GoodsItemPassportFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Code ubl-ExportReasonCode"
          meta={GoodsItemPassportFieldMeta.ExportReasonCode} 
          value={value.ExportReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Export Reason"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.ExportReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-GoodsItemPassport ubl-Text ubl-ExportReason"
          meta={GoodsItemPassportFieldMeta.ExportReason} 
          value={value.ExportReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Export Reason"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.ExportReason}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-Period ubl-ValidityPeriod"
          meta={GoodsItemPassportFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-Party ubl-IssuerParty"
          meta={GoodsItemPassportFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.IssuerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-Party ubl-HolderParty"
          meta={GoodsItemPassportFieldMeta.HolderParty} 
          value={value.HolderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Holder Party"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.HolderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-Party ubl-RepresentativeParty"
          meta={GoodsItemPassportFieldMeta.RepresentativeParty} 
          value={value.RepresentativeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Representative Party"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.RepresentativeParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-Party ubl-ExportingCustomsParty"
          meta={GoodsItemPassportFieldMeta.ExportingCustomsParty} 
          value={value.ExportingCustomsParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Exporting Customs Party"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.ExportingCustomsParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-Party ubl-ImportingCustomsParty"
          meta={GoodsItemPassportFieldMeta.ImportingCustomsParty} 
          value={value.ImportingCustomsParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Importing Customs Party"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.ImportingCustomsParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-Party ubl-ImportingGuarantorParty"
          meta={GoodsItemPassportFieldMeta.ImportingGuarantorParty} 
          value={value.ImportingGuarantorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Importing Guarantor Party"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.ImportingGuarantorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-Party ubl-ExportingGuarantorParty"
          meta={GoodsItemPassportFieldMeta.ExportingGuarantorParty} 
          value={value.ExportingGuarantorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Exporting Guarantor Party"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.ExportingGuarantorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-Shipment"
          meta={GoodsItemPassportFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Shipment"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.Shipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-GoodsItemPassportCounterfoil"
          meta={GoodsItemPassportFieldMeta.GoodsItemPassportCounterfoil} 
          value={value.GoodsItemPassportCounterfoil}
          itemDisplay={ (itemValue: GoodsItemPassportCounterfoil, key: string | number) =>
            <GoodsItemPassportCounterfoilDisplay
              key={key}
              label="Goods Item Passport Counterfoil"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.GoodsItemPassportCounterfoil}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-Endorsement ubl-IssuerEndorsement"
          meta={GoodsItemPassportFieldMeta.IssuerEndorsement} 
          value={value.IssuerEndorsement}
          itemDisplay={ (itemValue: Endorsement, key: string | number) =>
            <EndorsementDisplay
              key={key}
              label="Issuer Endorsement"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.IssuerEndorsement}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={GoodsItemPassportFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-DocumentDistribution"
          meta={GoodsItemPassportFieldMeta.DocumentDistribution} 
          value={value.DocumentDistribution}
          itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
            <DocumentDistributionDisplay
              key={key}
              label="Document Distribution"
              value={itemValue}
              meta={GoodsItemPassportFieldMeta.DocumentDistribution}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemPassport ubl-Signature"
          meta={GoodsItemPassportFieldMeta.Signature} 
          value={value.Signature}
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
