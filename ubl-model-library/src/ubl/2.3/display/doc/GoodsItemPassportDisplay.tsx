import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: GoodsItemPassport
  meta: FieldMeta<T>
}

export default function GoodsItemPassportDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={GoodsItemPassportFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemPassportFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemPassportFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemPassportFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemPassportFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemPassportFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemPassportFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={GoodsItemPassportFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={GoodsItemPassportFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={GoodsItemPassportFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemPassportFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.ExportReasonCode} 
          value={value.ExportReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={GoodsItemPassportFieldMeta.ExportReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.ExportReason} 
          value={value.ExportReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={GoodsItemPassportFieldMeta.ExportReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={GoodsItemPassportFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsItemPassportFieldMeta.IssuerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.HolderParty} 
          value={value.HolderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsItemPassportFieldMeta.HolderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.RepresentativeParty} 
          value={value.RepresentativeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsItemPassportFieldMeta.RepresentativeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.ExportingCustomsParty} 
          value={value.ExportingCustomsParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsItemPassportFieldMeta.ExportingCustomsParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.ImportingCustomsParty} 
          value={value.ImportingCustomsParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsItemPassportFieldMeta.ImportingCustomsParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.ImportingGuarantorParty} 
          value={value.ImportingGuarantorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsItemPassportFieldMeta.ImportingGuarantorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.ExportingGuarantorParty} 
          value={value.ExportingGuarantorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsItemPassportFieldMeta.ExportingGuarantorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={GoodsItemPassportFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.GoodsItemPassportCounterfoil} 
          value={value.GoodsItemPassportCounterfoil}
          itemDisplay={ (itemValue: GoodsItemPassportCounterfoil, key: string | number) =>
            <GoodsItemPassportCounterfoilDisplay key={key} meta={GoodsItemPassportFieldMeta.GoodsItemPassportCounterfoil} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.IssuerEndorsement} 
          value={value.IssuerEndorsement}
          itemDisplay={ (itemValue: Endorsement, key: string | number) =>
            <EndorsementDisplay key={key} meta={GoodsItemPassportFieldMeta.IssuerEndorsement} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={GoodsItemPassportFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.DocumentDistribution} 
          value={value.DocumentDistribution}
          itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
            <DocumentDistributionDisplay key={key} meta={GoodsItemPassportFieldMeta.DocumentDistribution} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemPassportFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={GoodsItemPassportFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
