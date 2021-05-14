import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TendererQualificationRequest
  meta: FieldMeta<T>
}

export default function TendererQualificationRequestDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TendererQualificationRequest ubl-TendererQualificationRequestType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TendererQualificationRequest ubl-UBLExtensions"
          meta={TendererQualificationRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TendererQualificationRequestFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationRequest ubl-Code ubl-CompanyLegalFormCode"
          meta={TendererQualificationRequestFieldMeta.CompanyLegalFormCode} 
          value={value.CompanyLegalFormCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Company Legal Form Code"
              value={itemValue}
              meta={TendererQualificationRequestFieldMeta.CompanyLegalFormCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationRequest ubl-Text ubl-CompanyLegalForm"
          meta={TendererQualificationRequestFieldMeta.CompanyLegalForm} 
          value={value.CompanyLegalForm}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Company Legal Form"
              value={itemValue}
              meta={TendererQualificationRequestFieldMeta.CompanyLegalForm}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TendererQualificationRequest ubl-Text ubl-PersonalSituation"
          meta={TendererQualificationRequestFieldMeta.PersonalSituation} 
          value={value.PersonalSituation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Personal Situation"
              value={itemValue}
              meta={TendererQualificationRequestFieldMeta.PersonalSituation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationRequest ubl-Quantity ubl-OperatingYearsQuantity"
          meta={TendererQualificationRequestFieldMeta.OperatingYearsQuantity} 
          value={value.OperatingYearsQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Operating Years"
              value={itemValue}
              meta={TendererQualificationRequestFieldMeta.OperatingYearsQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationRequest ubl-Quantity ubl-EmployeeQuantity"
          meta={TendererQualificationRequestFieldMeta.EmployeeQuantity} 
          value={value.EmployeeQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Employee"
              value={itemValue}
              meta={TendererQualificationRequestFieldMeta.EmployeeQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TendererQualificationRequest ubl-Text ubl-Description"
          meta={TendererQualificationRequestFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TendererQualificationRequestFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererQualificationRequest ubl-ClassificationScheme ubl-RequiredBusinessClassificationScheme"
          meta={TendererQualificationRequestFieldMeta.RequiredBusinessClassificationScheme} 
          value={value.RequiredBusinessClassificationScheme}
          itemDisplay={ (itemValue: ClassificationScheme, key: string | number) =>
            <ClassificationSchemeDisplay
              key={key}
              label="Required Business Classification Scheme"
              value={itemValue}
              meta={TendererQualificationRequestFieldMeta.RequiredBusinessClassificationScheme}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererQualificationRequest ubl-EvaluationCriterion ubl-TechnicalEvaluationCriterion"
          meta={TendererQualificationRequestFieldMeta.TechnicalEvaluationCriterion} 
          value={value.TechnicalEvaluationCriterion}
          itemDisplay={ (itemValue: EvaluationCriterion, key: string | number) =>
            <EvaluationCriterionDisplay
              key={key}
              label="Technical Evaluation Criterion"
              value={itemValue}
              meta={TendererQualificationRequestFieldMeta.TechnicalEvaluationCriterion}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererQualificationRequest ubl-EvaluationCriterion ubl-FinancialEvaluationCriterion"
          meta={TendererQualificationRequestFieldMeta.FinancialEvaluationCriterion} 
          value={value.FinancialEvaluationCriterion}
          itemDisplay={ (itemValue: EvaluationCriterion, key: string | number) =>
            <EvaluationCriterionDisplay
              key={key}
              label="Financial Evaluation Criterion"
              value={itemValue}
              meta={TendererQualificationRequestFieldMeta.FinancialEvaluationCriterion}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererQualificationRequest ubl-TendererRequirement ubl-SpecificTendererRequirement"
          meta={TendererQualificationRequestFieldMeta.SpecificTendererRequirement} 
          value={value.SpecificTendererRequirement}
          itemDisplay={ (itemValue: TendererRequirement, key: string | number) =>
            <TendererRequirementDisplay
              key={key}
              label="Specific Tenderer Requirement"
              value={itemValue}
              meta={TendererQualificationRequestFieldMeta.SpecificTendererRequirement}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererQualificationRequest ubl-EconomicOperatorRole"
          meta={TendererQualificationRequestFieldMeta.EconomicOperatorRole} 
          value={value.EconomicOperatorRole}
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
