import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: SecondaryHazard | undefined
  meta: FieldMeta<T>
}

export default function SecondaryHazardDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-SecondaryHazard">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={SecondaryHazardFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={SecondaryHazardFieldMeta.ID}
          />

          <TextDisplay
            label="Placard Notation"
            value={value.PlacardNotation?.[0]}
            meta={SecondaryHazardFieldMeta.PlacardNotation}
          />

          <TextDisplay
            label="Placard Endorsement"
            value={value.PlacardEndorsement?.[0]}
            meta={SecondaryHazardFieldMeta.PlacardEndorsement}
          />

          <CodeDisplay
            label="Emergency Procedures Code"
            value={value.EmergencyProceduresCode?.[0]}
            meta={SecondaryHazardFieldMeta.EmergencyProceduresCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Extension"
            label="Extension"
            items={value.Extension}
            meta={SecondaryHazardFieldMeta.Extension} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Extension"
                value={itemValue}
                meta={SecondaryHazardFieldMeta.Extension}
              />
            }
          />
        </div>
    </div>
  )
}
