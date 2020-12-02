import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: QualifyingParty
  meta: FieldMeta<T>
}

export default function QualifyingPartyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={QualifyingPartyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.ParticipationPercent} 
          value={value.ParticipationPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={QualifyingPartyFieldMeta.ParticipationPercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.PersonalSituation} 
          value={value.PersonalSituation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={QualifyingPartyFieldMeta.PersonalSituation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.OperatingYearsQuantity} 
          value={value.OperatingYearsQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={QualifyingPartyFieldMeta.OperatingYearsQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.EmployeeQuantity} 
          value={value.EmployeeQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={QualifyingPartyFieldMeta.EmployeeQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.BusinessClassificationEvidenceID} 
          value={value.BusinessClassificationEvidenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualifyingPartyFieldMeta.BusinessClassificationEvidenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.BusinessIdentityEvidenceID} 
          value={value.BusinessIdentityEvidenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualifyingPartyFieldMeta.BusinessIdentityEvidenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.TendererRoleCode} 
          value={value.TendererRoleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={QualifyingPartyFieldMeta.TendererRoleCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.BusinessClassificationScheme} 
          value={value.BusinessClassificationScheme}
          itemDisplay={ (itemValue: ClassificationScheme, key: string | number) =>
            <ClassificationSchemeDisplay key={key} meta={QualifyingPartyFieldMeta.BusinessClassificationScheme} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.TechnicalCapability} 
          value={value.TechnicalCapability}
          itemDisplay={ (itemValue: Capability, key: string | number) =>
            <CapabilityDisplay key={key} meta={QualifyingPartyFieldMeta.TechnicalCapability} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.FinancialCapability} 
          value={value.FinancialCapability}
          itemDisplay={ (itemValue: Capability, key: string | number) =>
            <CapabilityDisplay key={key} meta={QualifyingPartyFieldMeta.FinancialCapability} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.CompletedTask} 
          value={value.CompletedTask}
          itemDisplay={ (itemValue: CompletedTask, key: string | number) =>
            <CompletedTaskDisplay key={key} meta={QualifyingPartyFieldMeta.CompletedTask} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.Declaration} 
          value={value.Declaration}
          itemDisplay={ (itemValue: Declaration, key: string | number) =>
            <DeclarationDisplay key={key} meta={QualifyingPartyFieldMeta.Declaration} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={QualifyingPartyFieldMeta.Party} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualifyingPartyFieldMeta.EconomicOperatorRole} 
          value={value.EconomicOperatorRole}
          itemDisplay={ (itemValue: EconomicOperatorRole, key: string | number) =>
            <EconomicOperatorRoleDisplay key={key} meta={QualifyingPartyFieldMeta.EconomicOperatorRole} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
