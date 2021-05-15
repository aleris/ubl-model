import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingCriterion } from  '../../model/cac/TenderingCriterion'
import { TenderingCriterionFieldMeta } from  '../../meta/cac/TenderingCriterionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CommodityClassificationDisplay from './CommodityClassificationDisplay'
import { CommodityClassification } from '../../model/cac/CommodityClassification'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LegislationDisplay from './LegislationDisplay'
import { Legislation } from '../../model/cac/Legislation'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import ProcurementProjectLotReferenceDisplay from './ProcurementProjectLotReferenceDisplay'
import { ProcurementProjectLotReference } from '../../model/cac/ProcurementProjectLotReference'
import TenderingCriterionPropertyGroupDisplay from './TenderingCriterionPropertyGroupDisplay'
import { TenderingCriterionPropertyGroup } from '../../model/cac/TenderingCriterionPropertyGroup'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TenderingCriterion | undefined
  meta: FieldMeta<T>
}

export default function TenderingCriterionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TenderingCriterion">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderingCriterionFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TenderingCriterionFieldMeta.ID}
          />

          <CodeDisplay
            label="Criterion Type Code"
            value={value.CriterionTypeCode?.[0]}
            meta={TenderingCriterionFieldMeta.CriterionTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Name"
            label="Name"
            items={value.Name}
            meta={TenderingCriterionFieldMeta.Name} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Name"
                value={itemValue}
                meta={TenderingCriterionFieldMeta.Name}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TenderingCriterionFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TenderingCriterionFieldMeta.Description}
              />
            }
          />

          <NumericDisplay
            label="Weight Numeric"
            value={value.WeightNumeric?.[0]}
            meta={TenderingCriterionFieldMeta.WeightNumeric}
          />

          <IndicatorDisplay
            label="Fulfilment Indicator"
            value={value.FulfilmentIndicator?.[0]}
            meta={TenderingCriterionFieldMeta.FulfilmentIndicator}
          />

          <CodeDisplay
            label="Fulfilment Indicator Type Code"
            value={value.FulfilmentIndicatorTypeCode?.[0]}
            meta={TenderingCriterionFieldMeta.FulfilmentIndicatorTypeCode}
          />

          <CodeDisplay
            label="Evaluation Method Type Code"
            value={value.EvaluationMethodTypeCode?.[0]}
            meta={TenderingCriterionFieldMeta.EvaluationMethodTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-WeightingConsiderationDescription"
            label="Weighting Consideration Description"
            items={value.WeightingConsiderationDescription}
            meta={TenderingCriterionFieldMeta.WeightingConsiderationDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Weighting Consideration Description"
                value={itemValue}
                meta={TenderingCriterionFieldMeta.WeightingConsiderationDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ProcurementProjectLotReference"
            label="Procurement Project Lot Reference"
            items={value.ProcurementProjectLotReference}
            meta={TenderingCriterionFieldMeta.ProcurementProjectLotReference} 
            itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
              <ProcurementProjectLotReferenceDisplay
                key={key}
                label="Procurement Project Lot Reference"
                value={itemValue}
                meta={TenderingCriterionFieldMeta.ProcurementProjectLotReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CommodityClassification"
            label="Commodity Classification"
            items={value.CommodityClassification}
            meta={TenderingCriterionFieldMeta.CommodityClassification} 
            itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
              <CommodityClassificationDisplay
                key={key}
                label="Commodity Classification"
                value={itemValue}
                meta={TenderingCriterionFieldMeta.CommodityClassification}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TenderingCriterion ubl-SubTenderingCriterion"
            label="Sub Tendering Criterion"
            items={value.SubTenderingCriterion}
            meta={TenderingCriterionFieldMeta.SubTenderingCriterion} 
            itemDisplay={ (itemValue: TenderingCriterion, key: string | number) =>
              <TenderingCriterionDisplay
                key={key}
                label="Sub Tendering Criterion"
                value={itemValue}
                meta={TenderingCriterionFieldMeta.SubTenderingCriterion}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Legislation"
            label="Legislation"
            items={value.Legislation}
            meta={TenderingCriterionFieldMeta.Legislation} 
            itemDisplay={ (itemValue: Legislation, key: string | number) =>
              <LegislationDisplay
                key={key}
                label="Legislation"
                value={itemValue}
                meta={TenderingCriterionFieldMeta.Legislation}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TenderingCriterionPropertyGroup"
            label="Tendering Criterion Property Group"
            items={value.TenderingCriterionPropertyGroup}
            meta={TenderingCriterionFieldMeta.TenderingCriterionPropertyGroup} 
            itemDisplay={ (itemValue: TenderingCriterionPropertyGroup, key: string | number) =>
              <TenderingCriterionPropertyGroupDisplay
                key={key}
                label="Tendering Criterion Property Group"
                value={itemValue}
                meta={TenderingCriterionFieldMeta.TenderingCriterionPropertyGroup}
              />
            }
          />
        </div>
    </div>
  )
}
