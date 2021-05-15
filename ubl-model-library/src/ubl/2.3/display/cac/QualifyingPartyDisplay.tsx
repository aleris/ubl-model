import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { QualifyingParty } from  '../../model/cac/QualifyingParty'
import { QualifyingPartyFieldMeta } from  '../../meta/cac/QualifyingPartyMeta'
import CapabilityDisplay from './CapabilityDisplay'
import { Capability } from '../../model/cac/Capability'
import ClassificationSchemeDisplay from './ClassificationSchemeDisplay'
import { ClassificationScheme } from '../../model/cac/ClassificationScheme'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CompletedTaskDisplay from './CompletedTaskDisplay'
import { CompletedTask } from '../../model/cac/CompletedTask'
import DeclarationDisplay from './DeclarationDisplay'
import { Declaration } from '../../model/cac/Declaration'
import EconomicOperatorRoleDisplay from './EconomicOperatorRoleDisplay'
import { EconomicOperatorRole } from '../../model/cac/EconomicOperatorRole'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: QualifyingParty | undefined
  meta: FieldMeta<T>
}

export default function QualifyingPartyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-QualifyingParty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={QualifyingPartyFieldMeta.UBLExtensions}
          />

          <NumericDisplay
            label="Participation"
            value={value.ParticipationPercent?.[0]}
            meta={QualifyingPartyFieldMeta.ParticipationPercent}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-PersonalSituation"
            label="Personal Situation"
            items={value.PersonalSituation}
            meta={QualifyingPartyFieldMeta.PersonalSituation} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Personal Situation"
                value={itemValue}
                meta={QualifyingPartyFieldMeta.PersonalSituation}
              />
            }
          />

          <QuantityDisplay
            label="Operating Years"
            value={value.OperatingYearsQuantity?.[0]}
            meta={QualifyingPartyFieldMeta.OperatingYearsQuantity}
          />

          <QuantityDisplay
            label="Employee"
            value={value.EmployeeQuantity?.[0]}
            meta={QualifyingPartyFieldMeta.EmployeeQuantity}
          />

          <IdentifierDisplay
            label="Business Classification Evidence"
            value={value.BusinessClassificationEvidenceID?.[0]}
            meta={QualifyingPartyFieldMeta.BusinessClassificationEvidenceID}
          />

          <IdentifierDisplay
            label="Business Identity Evidence"
            value={value.BusinessIdentityEvidenceID?.[0]}
            meta={QualifyingPartyFieldMeta.BusinessIdentityEvidenceID}
          />

          <CodeDisplay
            label="Tenderer Role Code"
            value={value.TendererRoleCode?.[0]}
            meta={QualifyingPartyFieldMeta.TendererRoleCode}
          />

          <ClassificationSchemeDisplay
            label="Business Classification Scheme"
            value={value.BusinessClassificationScheme?.[0]}
            meta={QualifyingPartyFieldMeta.BusinessClassificationScheme}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Capability ubl-TechnicalCapability"
            label="Technical Capability"
            items={value.TechnicalCapability}
            meta={QualifyingPartyFieldMeta.TechnicalCapability} 
            itemDisplay={ (itemValue: Capability, key: string | number) =>
              <CapabilityDisplay
                key={key}
                label="Technical Capability"
                value={itemValue}
                meta={QualifyingPartyFieldMeta.TechnicalCapability}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Capability ubl-FinancialCapability"
            label="Financial Capability"
            items={value.FinancialCapability}
            meta={QualifyingPartyFieldMeta.FinancialCapability} 
            itemDisplay={ (itemValue: Capability, key: string | number) =>
              <CapabilityDisplay
                key={key}
                label="Financial Capability"
                value={itemValue}
                meta={QualifyingPartyFieldMeta.FinancialCapability}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CompletedTask"
            label="Completed Task"
            items={value.CompletedTask}
            meta={QualifyingPartyFieldMeta.CompletedTask} 
            itemDisplay={ (itemValue: CompletedTask, key: string | number) =>
              <CompletedTaskDisplay
                key={key}
                label="Completed Task"
                value={itemValue}
                meta={QualifyingPartyFieldMeta.CompletedTask}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Declaration"
            label="Declaration"
            items={value.Declaration}
            meta={QualifyingPartyFieldMeta.Declaration} 
            itemDisplay={ (itemValue: Declaration, key: string | number) =>
              <DeclarationDisplay
                key={key}
                label="Declaration"
                value={itemValue}
                meta={QualifyingPartyFieldMeta.Declaration}
              />
            }
          />

          <PartyDisplay
            label="Party"
            value={value.Party?.[0]}
            meta={QualifyingPartyFieldMeta.Party}
          />

          <EconomicOperatorRoleDisplay
            label="Economic Operator Role"
            value={value.EconomicOperatorRole?.[0]}
            meta={QualifyingPartyFieldMeta.EconomicOperatorRole}
          />
        </div>
    </div>
  )
}
