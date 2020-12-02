import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Regulation } from  '../../model/cac/Regulation'
import { RegulationFieldMeta } from  '../../meta/cac/RegulationMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Regulation
  meta: FieldMeta<T>
}

export default function RegulationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={RegulationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={RegulationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RegulationFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RegulationFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RegulationFieldMeta.LegalReference} 
          value={value.LegalReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RegulationFieldMeta.LegalReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RegulationFieldMeta.OntologyURI} 
          value={value.OntologyURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RegulationFieldMeta.OntologyURI} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
