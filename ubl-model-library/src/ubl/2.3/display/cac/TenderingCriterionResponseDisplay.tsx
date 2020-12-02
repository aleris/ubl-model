import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TenderingCriterionResponse
  meta: FieldMeta<T>
}

export default function TenderingCriterionResponseDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderingCriterionResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderingCriterionResponseFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderingCriterionResponseFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionResponseFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingCriterionResponseFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionResponseFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingCriterionResponseFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionResponseFieldMeta.ValidatedCriterionPropertyID} 
          value={value.ValidatedCriterionPropertyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderingCriterionResponseFieldMeta.ValidatedCriterionPropertyID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionResponseFieldMeta.ConfidentialityLevelCode} 
          value={value.ConfidentialityLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionResponseFieldMeta.ConfidentialityLevelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionResponseFieldMeta.ResponseValue} 
          value={value.ResponseValue}
          itemDisplay={ (itemValue: ResponseValue, key: string | number) =>
            <ResponseValueDisplay key={key} meta={TenderingCriterionResponseFieldMeta.ResponseValue} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionResponseFieldMeta.ApplicablePeriod} 
          value={value.ApplicablePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderingCriterionResponseFieldMeta.ApplicablePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionResponseFieldMeta.EvidenceSupplied} 
          value={value.EvidenceSupplied}
          itemDisplay={ (itemValue: EvidenceSupplied, key: string | number) =>
            <EvidenceSuppliedDisplay key={key} meta={TenderingCriterionResponseFieldMeta.EvidenceSupplied} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionResponseFieldMeta.ProcurementProjectLotReference} 
          value={value.ProcurementProjectLotReference}
          itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
            <ProcurementProjectLotReferenceDisplay key={key} meta={TenderingCriterionResponseFieldMeta.ProcurementProjectLotReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionResponseFieldMeta.CommodityClassification} 
          value={value.CommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay key={key} meta={TenderingCriterionResponseFieldMeta.CommodityClassification} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
