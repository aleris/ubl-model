import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PartyName } from  '../../model/cac/PartyName'
import { PartyNameFieldMeta } from  '../../meta/cac/PartyNameMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PartyName
  meta: FieldMeta<T>
}

export default function PartyNameDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PartyName ubl-PartyNameType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PartyName ubl-UBLExtensions"
          meta={PartyNameFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PartyNameFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyName ubl-Text ubl-Name"
          meta={PartyNameFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={PartyNameFieldMeta.Name}
            />
          }
        />
        </div>
    </div>
  )
}
