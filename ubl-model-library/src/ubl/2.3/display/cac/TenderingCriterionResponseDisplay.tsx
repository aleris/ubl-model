import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TenderingCriterionResponse
  meta: FieldMeta<T>
}

export default function TenderingCriterionResponseDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TenderingCriterionResponse ubl-TenderingCriterionResponseType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderingCriterionResponse ubl-UBLExtensions"
          meta={TenderingCriterionResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderingCriterionResponseFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionResponse ubl-Identifier ubl-ID"
          meta={TenderingCriterionResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TenderingCriterionResponseFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionResponse ubl-Text ubl-Name"
          meta={TenderingCriterionResponseFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={TenderingCriterionResponseFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingCriterionResponse ubl-Text ubl-Description"
          meta={TenderingCriterionResponseFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TenderingCriterionResponseFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionResponse ubl-Identifier ubl-ValidatedCriterionPropertyID"
          meta={TenderingCriterionResponseFieldMeta.ValidatedCriterionPropertyID} 
          value={value.ValidatedCriterionPropertyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Validated Criterion Property Identifier"
              value={itemValue}
              meta={TenderingCriterionResponseFieldMeta.ValidatedCriterionPropertyID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionResponse ubl-Code ubl-ConfidentialityLevelCode"
          meta={TenderingCriterionResponseFieldMeta.ConfidentialityLevelCode} 
          value={value.ConfidentialityLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Confidentiality Level Code"
              value={itemValue}
              meta={TenderingCriterionResponseFieldMeta.ConfidentialityLevelCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterionResponse ubl-ResponseValue"
          meta={TenderingCriterionResponseFieldMeta.ResponseValue} 
          value={value.ResponseValue}
          itemDisplay={ (itemValue: ResponseValue, key: string | number) =>
            <ResponseValueDisplay
              key={key}
              label="Response Value"
              value={itemValue}
              meta={TenderingCriterionResponseFieldMeta.ResponseValue}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterionResponse ubl-Period ubl-ApplicablePeriod"
          meta={TenderingCriterionResponseFieldMeta.ApplicablePeriod} 
          value={value.ApplicablePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Applicable Period"
              value={itemValue}
              meta={TenderingCriterionResponseFieldMeta.ApplicablePeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterionResponse ubl-EvidenceSupplied"
          meta={TenderingCriterionResponseFieldMeta.EvidenceSupplied} 
          value={value.EvidenceSupplied}
          itemDisplay={ (itemValue: EvidenceSupplied, key: string | number) =>
            <EvidenceSuppliedDisplay
              key={key}
              label="Evidence Supplied"
              value={itemValue}
              meta={TenderingCriterionResponseFieldMeta.EvidenceSupplied}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterionResponse ubl-ProcurementProjectLotReference"
          meta={TenderingCriterionResponseFieldMeta.ProcurementProjectLotReference} 
          value={value.ProcurementProjectLotReference}
          itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
            <ProcurementProjectLotReferenceDisplay
              key={key}
              label="Procurement Project Lot Reference"
              value={itemValue}
              meta={TenderingCriterionResponseFieldMeta.ProcurementProjectLotReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterionResponse ubl-CommodityClassification"
          meta={TenderingCriterionResponseFieldMeta.CommodityClassification} 
          value={value.CommodityClassification}
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
