import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TenderedProject | undefined
  meta: FieldMeta<T>
}

export default function TenderedProjectDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TenderedProject">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderedProjectFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Variant"
            value={value.VariantID?.[0]}
            meta={TenderedProjectFieldMeta.VariantID}
          />

          <AmountDisplay
            label="Fee"
            value={value.FeeAmount?.[0]}
            meta={TenderedProjectFieldMeta.FeeAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-FeeDescription"
            label="Fee Description"
            items={value.FeeDescription}
            meta={TenderedProjectFieldMeta.FeeDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Fee Description"
                value={itemValue}
                meta={TenderedProjectFieldMeta.FeeDescription}
              />
            }
          />

          <IdentifierDisplay
            label="Tender Envelope Identifier"
            value={value.TenderEnvelopeID?.[0]}
            meta={TenderedProjectFieldMeta.TenderEnvelopeID}
          />

          <CodeDisplay
            label="Tender Envelope Type Code"
            value={value.TenderEnvelopeTypeCode?.[0]}
            meta={TenderedProjectFieldMeta.TenderEnvelopeTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ProcurementProjectLot"
            label="Procurement Project Lot"
            items={value.ProcurementProjectLot}
            meta={TenderedProjectFieldMeta.ProcurementProjectLot} 
            itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
              <ProcurementProjectLotDisplay
                key={key}
                label="Procurement Project Lot"
                value={itemValue}
                meta={TenderedProjectFieldMeta.ProcurementProjectLot}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-EvidenceDocumentReference"
            label="Evidence Document Reference"
            items={value.EvidenceDocumentReference}
            meta={TenderedProjectFieldMeta.EvidenceDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Evidence Document Reference"
                value={itemValue}
                meta={TenderedProjectFieldMeta.EvidenceDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={TenderedProjectFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={TenderedProjectFieldMeta.TaxTotal}
              />
            }
          />

          <MonetaryTotalDisplay
            label="Legal Monetary Total"
            value={value.LegalMonetaryTotal?.[0]}
            meta={TenderedProjectFieldMeta.LegalMonetaryTotal}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TenderLine"
            label="Tender Line"
            items={value.TenderLine}
            meta={TenderedProjectFieldMeta.TenderLine} 
            itemDisplay={ (itemValue: TenderLine, key: string | number) =>
              <TenderLineDisplay
                key={key}
                label="Tender Line"
                value={itemValue}
                meta={TenderedProjectFieldMeta.TenderLine}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AwardingCriterionResponse"
            label="Awarding Criterion Response"
            items={value.AwardingCriterionResponse}
            meta={TenderedProjectFieldMeta.AwardingCriterionResponse} 
            itemDisplay={ (itemValue: AwardingCriterionResponse, key: string | number) =>
              <AwardingCriterionResponseDisplay
                key={key}
                label="Awarding Criterion Response"
                value={itemValue}
                meta={TenderedProjectFieldMeta.AwardingCriterionResponse}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Fee ubl-AdditionalFee"
            label="Additional Fee"
            items={value.AdditionalFee}
            meta={TenderedProjectFieldMeta.AdditionalFee} 
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
