import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { SecondaryHazard } from  '../../model/cac/SecondaryHazard'
import { SecondaryHazardFieldMeta } from  '../../meta/cac/SecondaryHazardMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: SecondaryHazard
  meta: FieldMeta<T>
}

export default function SecondaryHazardDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={SecondaryHazardFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={SecondaryHazardFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SecondaryHazardFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SecondaryHazardFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SecondaryHazardFieldMeta.PlacardNotation} 
          value={value.PlacardNotation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SecondaryHazardFieldMeta.PlacardNotation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SecondaryHazardFieldMeta.PlacardEndorsement} 
          value={value.PlacardEndorsement}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SecondaryHazardFieldMeta.PlacardEndorsement} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SecondaryHazardFieldMeta.EmergencyProceduresCode} 
          value={value.EmergencyProceduresCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SecondaryHazardFieldMeta.EmergencyProceduresCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SecondaryHazardFieldMeta.Extension} 
          value={value.Extension}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SecondaryHazardFieldMeta.Extension} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
