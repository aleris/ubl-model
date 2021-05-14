import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: QualifyingParty
  meta: FieldMeta<T>
}

export default function QualifyingPartyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-QualifyingParty ubl-QualifyingPartyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-QualifyingParty ubl-UBLExtensions"
          meta={QualifyingPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualifyingParty ubl-Numeric ubl-ParticipationPercent"
          meta={QualifyingPartyFieldMeta.ParticipationPercent} 
          value={value.ParticipationPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Participation"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.ParticipationPercent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-QualifyingParty ubl-Text ubl-PersonalSituation"
          meta={QualifyingPartyFieldMeta.PersonalSituation} 
          value={value.PersonalSituation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Personal Situation"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.PersonalSituation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualifyingParty ubl-Quantity ubl-OperatingYearsQuantity"
          meta={QualifyingPartyFieldMeta.OperatingYearsQuantity} 
          value={value.OperatingYearsQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Operating Years"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.OperatingYearsQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualifyingParty ubl-Quantity ubl-EmployeeQuantity"
          meta={QualifyingPartyFieldMeta.EmployeeQuantity} 
          value={value.EmployeeQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Employee"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.EmployeeQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualifyingParty ubl-Identifier ubl-BusinessClassificationEvidenceID"
          meta={QualifyingPartyFieldMeta.BusinessClassificationEvidenceID} 
          value={value.BusinessClassificationEvidenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Business Classification Evidence"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.BusinessClassificationEvidenceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualifyingParty ubl-Identifier ubl-BusinessIdentityEvidenceID"
          meta={QualifyingPartyFieldMeta.BusinessIdentityEvidenceID} 
          value={value.BusinessIdentityEvidenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Business Identity Evidence"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.BusinessIdentityEvidenceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualifyingParty ubl-Code ubl-TendererRoleCode"
          meta={QualifyingPartyFieldMeta.TendererRoleCode} 
          value={value.TendererRoleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tenderer Role Code"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.TendererRoleCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-QualifyingParty ubl-ClassificationScheme ubl-BusinessClassificationScheme"
          meta={QualifyingPartyFieldMeta.BusinessClassificationScheme} 
          value={value.BusinessClassificationScheme}
          itemDisplay={ (itemValue: ClassificationScheme, key: string | number) =>
            <ClassificationSchemeDisplay
              key={key}
              label="Business Classification Scheme"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.BusinessClassificationScheme}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualifyingParty ubl-Capability ubl-TechnicalCapability"
          meta={QualifyingPartyFieldMeta.TechnicalCapability} 
          value={value.TechnicalCapability}
          itemDisplay={ (itemValue: Capability, key: string | number) =>
            <CapabilityDisplay
              key={key}
              label="Technical Capability"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.TechnicalCapability}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualifyingParty ubl-Capability ubl-FinancialCapability"
          meta={QualifyingPartyFieldMeta.FinancialCapability} 
          value={value.FinancialCapability}
          itemDisplay={ (itemValue: Capability, key: string | number) =>
            <CapabilityDisplay
              key={key}
              label="Financial Capability"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.FinancialCapability}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualifyingParty ubl-CompletedTask"
          meta={QualifyingPartyFieldMeta.CompletedTask} 
          value={value.CompletedTask}
          itemDisplay={ (itemValue: CompletedTask, key: string | number) =>
            <CompletedTaskDisplay
              key={key}
              label="Completed Task"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.CompletedTask}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualifyingParty ubl-Declaration"
          meta={QualifyingPartyFieldMeta.Declaration} 
          value={value.Declaration}
          itemDisplay={ (itemValue: Declaration, key: string | number) =>
            <DeclarationDisplay
              key={key}
              label="Declaration"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.Declaration}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-QualifyingParty ubl-Party"
          meta={QualifyingPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Party"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.Party}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-QualifyingParty ubl-EconomicOperatorRole"
          meta={QualifyingPartyFieldMeta.EconomicOperatorRole} 
          value={value.EconomicOperatorRole}
          itemDisplay={ (itemValue: EconomicOperatorRole, key: string | number) =>
            <EconomicOperatorRoleDisplay
              key={key}
              label="Economic Operator Role"
              value={itemValue}
              meta={QualifyingPartyFieldMeta.EconomicOperatorRole}
            />
          }
        />
        </div>
    </div>
  )
}
