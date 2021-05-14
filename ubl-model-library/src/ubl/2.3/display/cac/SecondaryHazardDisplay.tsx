import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: SecondaryHazard
  meta: FieldMeta<T>
}

export default function SecondaryHazardDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-SecondaryHazard ubl-SecondaryHazardType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-SecondaryHazard ubl-UBLExtensions"
          meta={SecondaryHazardFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={SecondaryHazardFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SecondaryHazard ubl-Identifier ubl-ID"
          meta={SecondaryHazardFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={SecondaryHazardFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SecondaryHazard ubl-Text ubl-PlacardNotation"
          meta={SecondaryHazardFieldMeta.PlacardNotation} 
          value={value.PlacardNotation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Placard Notation"
              value={itemValue}
              meta={SecondaryHazardFieldMeta.PlacardNotation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SecondaryHazard ubl-Text ubl-PlacardEndorsement"
          meta={SecondaryHazardFieldMeta.PlacardEndorsement} 
          value={value.PlacardEndorsement}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Placard Endorsement"
              value={itemValue}
              meta={SecondaryHazardFieldMeta.PlacardEndorsement}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SecondaryHazard ubl-Code ubl-EmergencyProceduresCode"
          meta={SecondaryHazardFieldMeta.EmergencyProceduresCode} 
          value={value.EmergencyProceduresCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Emergency Procedures Code"
              value={itemValue}
              meta={SecondaryHazardFieldMeta.EmergencyProceduresCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-SecondaryHazard ubl-Text ubl-Extension"
          meta={SecondaryHazardFieldMeta.Extension} 
          value={value.Extension}
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
