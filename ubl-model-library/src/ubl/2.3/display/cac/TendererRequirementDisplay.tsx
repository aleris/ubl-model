import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TendererRequirement
  meta: FieldMeta<T>
}

export default function TendererRequirementDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TendererRequirementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TendererRequirementFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererRequirementFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TendererRequirementFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererRequirementFieldMeta.TendererRequirementTypeCode} 
          value={value.TendererRequirementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TendererRequirementFieldMeta.TendererRequirementTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererRequirementFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TendererRequirementFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererRequirementFieldMeta.LegalReference} 
          value={value.LegalReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TendererRequirementFieldMeta.LegalReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererRequirementFieldMeta.SuggestedEvidence} 
          value={value.SuggestedEvidence}
          itemDisplay={ (itemValue: Evidence, key: string | number) =>
            <EvidenceDisplay key={key} meta={TendererRequirementFieldMeta.SuggestedEvidence} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
