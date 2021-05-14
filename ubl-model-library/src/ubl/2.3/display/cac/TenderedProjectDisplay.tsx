import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderedProject } from  '../../model/cac/TenderedProject'
import { TenderedProjectFieldMeta } from  '../../meta/cac/TenderedProjectMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import AwardingCriterionResponseDisplay from './AwardingCriterionResponseDisplay'
import { AwardingCriterionResponse } from '../../model/cac/AwardingCriterionResponse'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import FeeDisplay from './FeeDisplay'
import { Fee } from '../../model/cac/Fee'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import MonetaryTotalDisplay from './MonetaryTotalDisplay'
import { MonetaryTotal } from '../../model/cac/MonetaryTotal'
import ProcurementProjectLotDisplay from './ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import TenderLineDisplay from './TenderLineDisplay'
import { TenderLine } from '../../model/cac/TenderLine'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TenderedProject
  meta: FieldMeta<T>
}

export default function TenderedProjectDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TenderedProject ubl-TenderedProjectType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderedProject ubl-UBLExtensions"
          meta={TenderedProjectFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderedProjectFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderedProject ubl-Identifier ubl-VariantID"
          meta={TenderedProjectFieldMeta.VariantID} 
          value={value.VariantID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Variant"
              value={itemValue}
              meta={TenderedProjectFieldMeta.VariantID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderedProject ubl-Amount ubl-FeeAmount"
          meta={TenderedProjectFieldMeta.FeeAmount} 
          value={value.FeeAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Fee"
              value={itemValue}
              meta={TenderedProjectFieldMeta.FeeAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderedProject ubl-Text ubl-FeeDescription"
          meta={TenderedProjectFieldMeta.FeeDescription} 
          value={value.FeeDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Fee Description"
              value={itemValue}
              meta={TenderedProjectFieldMeta.FeeDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderedProject ubl-Identifier ubl-TenderEnvelopeID"
          meta={TenderedProjectFieldMeta.TenderEnvelopeID} 
          value={value.TenderEnvelopeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Tender Envelope Identifier"
              value={itemValue}
              meta={TenderedProjectFieldMeta.TenderEnvelopeID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderedProject ubl-Code ubl-TenderEnvelopeTypeCode"
          meta={TenderedProjectFieldMeta.TenderEnvelopeTypeCode} 
          value={value.TenderEnvelopeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tender Envelope Type Code"
              value={itemValue}
              meta={TenderedProjectFieldMeta.TenderEnvelopeTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderedProject ubl-ProcurementProjectLot"
          meta={TenderedProjectFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay
              key={key}
              label="Procurement Project Lot"
              value={itemValue}
              meta={TenderedProjectFieldMeta.ProcurementProjectLot}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderedProject ubl-DocumentReference ubl-EvidenceDocumentReference"
          meta={TenderedProjectFieldMeta.EvidenceDocumentReference} 
          value={value.EvidenceDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Evidence Document Reference"
              value={itemValue}
              meta={TenderedProjectFieldMeta.EvidenceDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderedProject ubl-TaxTotal"
          meta={TenderedProjectFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={TenderedProjectFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderedProject ubl-MonetaryTotal ubl-LegalMonetaryTotal"
          meta={TenderedProjectFieldMeta.LegalMonetaryTotal} 
          value={value.LegalMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay
              key={key}
              label="Legal Monetary Total"
              value={itemValue}
              meta={TenderedProjectFieldMeta.LegalMonetaryTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderedProject ubl-TenderLine"
          meta={TenderedProjectFieldMeta.TenderLine} 
          value={value.TenderLine}
          itemDisplay={ (itemValue: TenderLine, key: string | number) =>
            <TenderLineDisplay
              key={key}
              label="Tender Line"
              value={itemValue}
              meta={TenderedProjectFieldMeta.TenderLine}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderedProject ubl-AwardingCriterionResponse"
          meta={TenderedProjectFieldMeta.AwardingCriterionResponse} 
          value={value.AwardingCriterionResponse}
          itemDisplay={ (itemValue: AwardingCriterionResponse, key: string | number) =>
            <AwardingCriterionResponseDisplay
              key={key}
              label="Awarding Criterion Response"
              value={itemValue}
              meta={TenderedProjectFieldMeta.AwardingCriterionResponse}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderedProject ubl-Fee ubl-AdditionalFee"
          meta={TenderedProjectFieldMeta.AdditionalFee} 
          value={value.AdditionalFee}
          itemDisplay={ (itemValue: Fee, key: string | number) =>
            <FeeDisplay
              key={key}
              label="Additional Fee"
              value={itemValue}
              meta={TenderedProjectFieldMeta.AdditionalFee}
            />
          }
        />
        </div>
    </div>
  )
}
