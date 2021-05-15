import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingCriterionResponse } from  '../../model/cac/TenderingCriterionResponse'
import { TenderingCriterionResponseFieldMeta } from  '../../meta/cac/TenderingCriterionResponseMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CommodityClassificationDisplay from './CommodityClassificationDisplay'
import { CommodityClassification } from '../../model/cac/CommodityClassification'
import EvidenceSuppliedDisplay from './EvidenceSuppliedDisplay'
import { EvidenceSupplied } from '../../model/cac/EvidenceSupplied'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ProcurementProjectLotReferenceDisplay from './ProcurementProjectLotReferenceDisplay'
import { ProcurementProjectLotReference } from '../../model/cac/ProcurementProjectLotReference'
import ResponseValueDisplay from './ResponseValueDisplay'
import { ResponseValue } from '../../model/cac/ResponseValue'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TenderingCriterionResponse | undefined
  meta: FieldMeta<T>
}

export default function TenderingCriterionResponseDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TenderingCriterionResponse">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderingCriterionResponseFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TenderingCriterionResponseFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={TenderingCriterionResponseFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TenderingCriterionResponseFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TenderingCriterionResponseFieldMeta.Description}
              />
            }
          />

          <IdentifierDisplay
            label="Validated Criterion Property Identifier"
            value={value.ValidatedCriterionPropertyID?.[0]}
            meta={TenderingCriterionResponseFieldMeta.ValidatedCriterionPropertyID}
          />

          <CodeDisplay
            label="Confidentiality Level Code"
            value={value.ConfidentialityLevelCode?.[0]}
            meta={TenderingCriterionResponseFieldMeta.ConfidentialityLevelCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ResponseValue"
            label="Response Value"
            items={value.ResponseValue}
            meta={TenderingCriterionResponseFieldMeta.ResponseValue} 
            itemDisplay={ (itemValue: ResponseValue, key: string | number) =>
              <ResponseValueDisplay
                key={key}
                label="Response Value"
                value={itemValue}
                meta={TenderingCriterionResponseFieldMeta.ResponseValue}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-ApplicablePeriod"
            label="Applicable Period"
            items={value.ApplicablePeriod}
            meta={TenderingCriterionResponseFieldMeta.ApplicablePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Applicable Period"
                value={itemValue}
                meta={TenderingCriterionResponseFieldMeta.ApplicablePeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EvidenceSupplied"
            label="Evidence Supplied"
            items={value.EvidenceSupplied}
            meta={TenderingCriterionResponseFieldMeta.EvidenceSupplied} 
            itemDisplay={ (itemValue: EvidenceSupplied, key: string | number) =>
              <EvidenceSuppliedDisplay
                key={key}
                label="Evidence Supplied"
                value={itemValue}
                meta={TenderingCriterionResponseFieldMeta.EvidenceSupplied}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ProcurementProjectLotReference"
            label="Procurement Project Lot Reference"
            items={value.ProcurementProjectLotReference}
            meta={TenderingCriterionResponseFieldMeta.ProcurementProjectLotReference} 
            itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
              <ProcurementProjectLotReferenceDisplay
                key={key}
                label="Procurement Project Lot Reference"
                value={itemValue}
                meta={TenderingCriterionResponseFieldMeta.ProcurementProjectLotReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CommodityClassification"
            label="Commodity Classification"
            items={value.CommodityClassification}
            meta={TenderingCriterionResponseFieldMeta.CommodityClassification} 
            itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
              <CommodityClassificationDisplay
                key={key}
                label="Commodity Classification"
                value={itemValue}
                meta={TenderingCriterionResponseFieldMeta.CommodityClassification}
              />
            }
          />
        </div>
    </div>
  )
}
