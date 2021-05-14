import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererRequirement } from  '../../model/cac/TendererRequirement'
import { TendererRequirementFieldMeta } from  '../../meta/cac/TendererRequirementMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EvidenceDisplay from './EvidenceDisplay'
import { Evidence } from '../../model/cac/Evidence'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TendererRequirement
  meta: FieldMeta<T>
}

export default function TendererRequirementDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TendererRequirement ubl-TendererRequirementType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TendererRequirement ubl-UBLExtensions"
          meta={TendererRequirementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TendererRequirementFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TendererRequirement ubl-Text ubl-Name"
          meta={TendererRequirementFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={TendererRequirementFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererRequirement ubl-Code ubl-TendererRequirementTypeCode"
          meta={TendererRequirementFieldMeta.TendererRequirementTypeCode} 
          value={value.TendererRequirementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tenderer Requirement Type Code"
              value={itemValue}
              meta={TendererRequirementFieldMeta.TendererRequirementTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TendererRequirement ubl-Text ubl-Description"
          meta={TendererRequirementFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TendererRequirementFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererRequirement ubl-Text ubl-LegalReference"
          meta={TendererRequirementFieldMeta.LegalReference} 
          value={value.LegalReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Legal Reference"
              value={itemValue}
              meta={TendererRequirementFieldMeta.LegalReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererRequirement ubl-Evidence ubl-SuggestedEvidence"
          meta={TendererRequirementFieldMeta.SuggestedEvidence} 
          value={value.SuggestedEvidence}
          itemDisplay={ (itemValue: Evidence, key: string | number) =>
            <EvidenceDisplay
              key={key}
              label="Suggested Evidence"
              value={itemValue}
              meta={TendererRequirementFieldMeta.SuggestedEvidence}
            />
          }
        />
        </div>
    </div>
  )
}
