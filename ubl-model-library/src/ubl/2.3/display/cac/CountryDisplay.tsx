import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Country } from  '../../model/cac/Country'
import { CountryFieldMeta } from  '../../meta/cac/CountryMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Country
  meta: FieldMeta<T>
}

export default function CountryDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Country ubl-CountryType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Country ubl-UBLExtensions"
          meta={CountryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CountryFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Country ubl-Code ubl-IdentificationCode"
          meta={CountryFieldMeta.IdentificationCode} 
          value={value.IdentificationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Identification Code"
              value={itemValue}
              meta={CountryFieldMeta.IdentificationCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Country ubl-Text ubl-Name"
          meta={CountryFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={CountryFieldMeta.Name}
            />
          }
        />
        </div>
    </div>
  )
}
