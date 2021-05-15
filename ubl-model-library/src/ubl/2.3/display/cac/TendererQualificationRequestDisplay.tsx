import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: TendererQualificationRequest | undefined
  meta: FieldMeta<T>
}

export default function TendererQualificationRequestDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TendererQualificationRequest">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TendererQualificationRequestFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Company Legal Form Code"
            value={value.CompanyLegalFormCode?.[0]}
            meta={TendererQualificationRequestFieldMeta.CompanyLegalFormCode}
          />

          <TextDisplay
            label="Company Legal Form"
            value={value.CompanyLegalForm?.[0]}
            meta={TendererQualificationRequestFieldMeta.CompanyLegalForm}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-PersonalSituation"
            label="Personal Situation"
            items={value.PersonalSituation}
            meta={TendererQualificationRequestFieldMeta.PersonalSituation} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Personal Situation"
                value={itemValue}
                meta={TendererQualificationRequestFieldMeta.PersonalSituation}
              />
            }
          />

          <QuantityDisplay
            label="Operating Years"
            value={value.OperatingYearsQuantity?.[0]}
            meta={TendererQualificationRequestFieldMeta.OperatingYearsQuantity}
          />

          <QuantityDisplay
            label="Employee"
            value={value.EmployeeQuantity?.[0]}
            meta={TendererQualificationRequestFieldMeta.EmployeeQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TendererQualificationRequestFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TendererQualificationRequestFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ClassificationScheme ubl-RequiredBusinessClassificationScheme"
            label="Required Business Classification Scheme"
            items={value.RequiredBusinessClassificationScheme}
            meta={TendererQualificationRequestFieldMeta.RequiredBusinessClassificationScheme} 
            itemDisplay={ (itemValue: ClassificationScheme, key: string | number) =>
              <ClassificationSchemeDisplay
                key={key}
                label="Required Business Classification Scheme"
                value={itemValue}
                meta={TendererQualificationRequestFieldMeta.RequiredBusinessClassificationScheme}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EvaluationCriterion ubl-TechnicalEvaluationCriterion"
            label="Technical Evaluation Criterion"
            items={value.TechnicalEvaluationCriterion}
            meta={TendererQualificationRequestFieldMeta.TechnicalEvaluationCriterion} 
            itemDisplay={ (itemValue: EvaluationCriterion, key: string | number) =>
              <EvaluationCriterionDisplay
                key={key}
                label="Technical Evaluation Criterion"
                value={itemValue}
                meta={TendererQualificationRequestFieldMeta.TechnicalEvaluationCriterion}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EvaluationCriterion ubl-FinancialEvaluationCriterion"
            label="Financial Evaluation Criterion"
            items={value.FinancialEvaluationCriterion}
            meta={TendererQualificationRequestFieldMeta.FinancialEvaluationCriterion} 
            itemDisplay={ (itemValue: EvaluationCriterion, key: string | number) =>
              <EvaluationCriterionDisplay
                key={key}
                label="Financial Evaluation Criterion"
                value={itemValue}
                meta={TendererQualificationRequestFieldMeta.FinancialEvaluationCriterion}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TendererRequirement ubl-SpecificTendererRequirement"
            label="Specific Tenderer Requirement"
            items={value.SpecificTendererRequirement}
            meta={TendererQualificationRequestFieldMeta.SpecificTendererRequirement} 
            itemDisplay={ (itemValue: TendererRequirement, key: string | number) =>
              <TendererRequirementDisplay
                key={key}
                label="Specific Tenderer Requirement"
                value={itemValue}
                meta={TendererQualificationRequestFieldMeta.SpecificTendererRequirement}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EconomicOperatorRole"
            label="Economic Operator Role"
            items={value.EconomicOperatorRole}
            meta={TendererQualificationRequestFieldMeta.EconomicOperatorRole} 
            itemDisplay={ (itemValue: EconomicOperatorRole, key: string | number) =>
              <EconomicOperatorRoleDisplay
                key={key}
                label="Economic Operator Role"
                value={itemValue}
                meta={TendererQualificationRequestFieldMeta.EconomicOperatorRole}
              />
            }
          />
        </div>
    </div>
  )
}
