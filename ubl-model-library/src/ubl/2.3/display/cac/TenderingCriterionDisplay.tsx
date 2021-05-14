import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TenderingCriterion
  meta: FieldMeta<T>
}

export default function TenderingCriterionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TenderingCriterion ubl-TenderingCriterionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderingCriterion ubl-UBLExtensions"
          meta={TenderingCriterionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterion ubl-Identifier ubl-ID"
          meta={TenderingCriterionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterion ubl-Code ubl-CriterionTypeCode"
          meta={TenderingCriterionFieldMeta.CriterionTypeCode} 
          value={value.CriterionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Criterion Type Code"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.CriterionTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingCriterion ubl-Text ubl-Name"
          meta={TenderingCriterionFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingCriterion ubl-Text ubl-Description"
          meta={TenderingCriterionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterion ubl-Numeric ubl-WeightNumeric"
          meta={TenderingCriterionFieldMeta.WeightNumeric} 
          value={value.WeightNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Weight Numeric"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.WeightNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterion ubl-Indicator ubl-FulfilmentIndicator"
          meta={TenderingCriterionFieldMeta.FulfilmentIndicator} 
          value={value.FulfilmentIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Fulfilment Indicator"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.FulfilmentIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterion ubl-Code ubl-FulfilmentIndicatorTypeCode"
          meta={TenderingCriterionFieldMeta.FulfilmentIndicatorTypeCode} 
          value={value.FulfilmentIndicatorTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Fulfilment Indicator Type Code"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.FulfilmentIndicatorTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterion ubl-Code ubl-EvaluationMethodTypeCode"
          meta={TenderingCriterionFieldMeta.EvaluationMethodTypeCode} 
          value={value.EvaluationMethodTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Evaluation Method Type Code"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.EvaluationMethodTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingCriterion ubl-Text ubl-WeightingConsiderationDescription"
          meta={TenderingCriterionFieldMeta.WeightingConsiderationDescription} 
          value={value.WeightingConsiderationDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Weighting Consideration Description"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.WeightingConsiderationDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterion ubl-ProcurementProjectLotReference"
          meta={TenderingCriterionFieldMeta.ProcurementProjectLotReference} 
          value={value.ProcurementProjectLotReference}
          itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
            <ProcurementProjectLotReferenceDisplay
              key={key}
              label="Procurement Project Lot Reference"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.ProcurementProjectLotReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterion ubl-CommodityClassification"
          meta={TenderingCriterionFieldMeta.CommodityClassification} 
          value={value.CommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay
              key={key}
              label="Commodity Classification"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.CommodityClassification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterion ubl-SubTenderingCriterion"
          meta={TenderingCriterionFieldMeta.SubTenderingCriterion} 
          value={value.SubTenderingCriterion}
          itemDisplay={ (itemValue: TenderingCriterion, key: string | number) =>
            <TenderingCriterionDisplay
              key={key}
              label="Sub Tendering Criterion"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.SubTenderingCriterion}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterion ubl-Legislation"
          meta={TenderingCriterionFieldMeta.Legislation} 
          value={value.Legislation}
          itemDisplay={ (itemValue: Legislation, key: string | number) =>
            <LegislationDisplay
              key={key}
              label="Legislation"
              value={itemValue}
              meta={TenderingCriterionFieldMeta.Legislation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterion ubl-TenderingCriterionPropertyGroup"
          meta={TenderingCriterionFieldMeta.TenderingCriterionPropertyGroup} 
          value={value.TenderingCriterionPropertyGroup}
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
