import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Country | undefined
  meta: FieldMeta<T>
}

export default function CountryDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Country">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CountryFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Identification Code"
            value={value.IdentificationCode?.[0]}
            meta={CountryFieldMeta.IdentificationCode}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={CountryFieldMeta.Name}
          />
        </div>
    </div>
  )
}
