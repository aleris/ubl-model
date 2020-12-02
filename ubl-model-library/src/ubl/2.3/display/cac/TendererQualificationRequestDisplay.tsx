import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererQualificationRequest } from  '../../model/cac/TendererQualificationRequest'
import { TendererQualificationRequestFieldMeta } from  '../../meta/cac/TendererQualificationRequestMeta'
import ClassificationSchemeDisplay from './ClassificationSchemeDisplay'
import { ClassificationScheme } from '../../model/cac/ClassificationScheme'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EconomicOperatorRoleDisplay from './EconomicOperatorRoleDisplay'
import { EconomicOperatorRole } from '../../model/cac/EconomicOperatorRole'
import EvaluationCriterionDisplay from './EvaluationCriterionDisplay'
import { EvaluationCriterion } from '../../model/cac/EvaluationCriterion'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TendererRequirementDisplay from './TendererRequirementDisplay'
import { TendererRequirement } from '../../model/cac/TendererRequirement'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TendererQualificationRequest
  meta: FieldMeta<T>
}

export default function TendererQualificationRequestDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TendererQualificationRequestFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.CompanyLegalFormCode} 
          value={value.CompanyLegalFormCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TendererQualificationRequestFieldMeta.CompanyLegalFormCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.CompanyLegalForm} 
          value={value.CompanyLegalForm}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TendererQualificationRequestFieldMeta.CompanyLegalForm} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.PersonalSituation} 
          value={value.PersonalSituation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TendererQualificationRequestFieldMeta.PersonalSituation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.OperatingYearsQuantity} 
          value={value.OperatingYearsQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TendererQualificationRequestFieldMeta.OperatingYearsQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.EmployeeQuantity} 
          value={value.EmployeeQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TendererQualificationRequestFieldMeta.EmployeeQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TendererQualificationRequestFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.RequiredBusinessClassificationScheme} 
          value={value.RequiredBusinessClassificationScheme}
          itemDisplay={ (itemValue: ClassificationScheme, key: string | number) =>
            <ClassificationSchemeDisplay key={key} meta={TendererQualificationRequestFieldMeta.RequiredBusinessClassificationScheme} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.TechnicalEvaluationCriterion} 
          value={value.TechnicalEvaluationCriterion}
          itemDisplay={ (itemValue: EvaluationCriterion, key: string | number) =>
            <EvaluationCriterionDisplay key={key} meta={TendererQualificationRequestFieldMeta.TechnicalEvaluationCriterion} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.FinancialEvaluationCriterion} 
          value={value.FinancialEvaluationCriterion}
          itemDisplay={ (itemValue: EvaluationCriterion, key: string | number) =>
            <EvaluationCriterionDisplay key={key} meta={TendererQualificationRequestFieldMeta.FinancialEvaluationCriterion} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.SpecificTendererRequirement} 
          value={value.SpecificTendererRequirement}
          itemDisplay={ (itemValue: TendererRequirement, key: string | number) =>
            <TendererRequirementDisplay key={key} meta={TendererQualificationRequestFieldMeta.SpecificTendererRequirement} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererQualificationRequestFieldMeta.EconomicOperatorRole} 
          value={value.EconomicOperatorRole}
          itemDisplay={ (itemValue: EconomicOperatorRole, key: string | number) =>
            <EconomicOperatorRoleDisplay key={key} meta={TendererQualificationRequestFieldMeta.EconomicOperatorRole} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
