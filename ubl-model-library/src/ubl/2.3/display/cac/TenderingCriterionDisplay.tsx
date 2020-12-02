import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TenderingCriterion
  meta: FieldMeta<T>
}

export default function TenderingCriterionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderingCriterionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderingCriterionFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.CriterionTypeCode} 
          value={value.CriterionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionFieldMeta.CriterionTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingCriterionFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingCriterionFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.WeightNumeric} 
          value={value.WeightNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TenderingCriterionFieldMeta.WeightNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.FulfilmentIndicator} 
          value={value.FulfilmentIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderingCriterionFieldMeta.FulfilmentIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.FulfilmentIndicatorTypeCode} 
          value={value.FulfilmentIndicatorTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionFieldMeta.FulfilmentIndicatorTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.EvaluationMethodTypeCode} 
          value={value.EvaluationMethodTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionFieldMeta.EvaluationMethodTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.WeightingConsiderationDescription} 
          value={value.WeightingConsiderationDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingCriterionFieldMeta.WeightingConsiderationDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.ProcurementProjectLotReference} 
          value={value.ProcurementProjectLotReference}
          itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
            <ProcurementProjectLotReferenceDisplay key={key} meta={TenderingCriterionFieldMeta.ProcurementProjectLotReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.CommodityClassification} 
          value={value.CommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay key={key} meta={TenderingCriterionFieldMeta.CommodityClassification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.SubTenderingCriterion} 
          value={value.SubTenderingCriterion}
          itemDisplay={ (itemValue: TenderingCriterion, key: string | number) =>
            <TenderingCriterionDisplay key={key} meta={TenderingCriterionFieldMeta.SubTenderingCriterion} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.Legislation} 
          value={value.Legislation}
          itemDisplay={ (itemValue: Legislation, key: string | number) =>
            <LegislationDisplay key={key} meta={TenderingCriterionFieldMeta.Legislation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionFieldMeta.TenderingCriterionPropertyGroup} 
          value={value.TenderingCriterionPropertyGroup}
          itemDisplay={ (itemValue: TenderingCriterionPropertyGroup, key: string | number) =>
            <TenderingCriterionPropertyGroupDisplay key={key} meta={TenderingCriterionFieldMeta.TenderingCriterionPropertyGroup} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
