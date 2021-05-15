import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TendererRequirement | undefined
  meta: FieldMeta<T>
}

export default function TendererRequirementDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TendererRequirement">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TendererRequirementFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Name"
            label="Name"
            items={value.Name}
            meta={TendererRequirementFieldMeta.Name} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Name"
                value={itemValue}
                meta={TendererRequirementFieldMeta.Name}
              />
            }
          />

          <CodeDisplay
            label="Tenderer Requirement Type Code"
            value={value.TendererRequirementTypeCode?.[0]}
            meta={TendererRequirementFieldMeta.TendererRequirementTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TendererRequirementFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TendererRequirementFieldMeta.Description}
              />
            }
          />

          <TextDisplay
            label="Legal Reference"
            value={value.LegalReference?.[0]}
            meta={TendererRequirementFieldMeta.LegalReference}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Evidence ubl-SuggestedEvidence"
            label="Suggested Evidence"
            items={value.SuggestedEvidence}
            meta={TendererRequirementFieldMeta.SuggestedEvidence} 
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
