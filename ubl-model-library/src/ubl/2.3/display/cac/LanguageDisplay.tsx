import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Language } from  '../../model/cac/Language'
import { LanguageFieldMeta } from  '../../meta/cac/LanguageMeta'
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
  value: Language | undefined
  meta: FieldMeta<T>
}

export default function LanguageDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Language">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={LanguageFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={LanguageFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={LanguageFieldMeta.Name}
          />

          <CodeDisplay
            label="Locale Code"
            value={value.LocaleCode?.[0]}
            meta={LanguageFieldMeta.LocaleCode}
          />
        </div>
    </div>
  )
}
