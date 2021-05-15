import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UBLExtension } from  '../../model/ext/UBLExtension'
import { UBLExtensionFieldMeta } from  '../../meta/ext/UBLExtensionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ExtensionContentDisplay from './ExtensionContentDisplay'
import { ExtensionContent } from '../../model/ext/ExtensionContent'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'

type Props<T> = {
  label: string
  value: UBLExtension | undefined
  meta: FieldMeta<T>
}

export default function UBLExtensionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-ext ubl-UBLExtension">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <IdentifierDisplay
            label="undefined"
            value={value.ID?.[0]}
            meta={UBLExtensionFieldMeta.ID}
          />

          <TextDisplay
            label="undefined"
            value={value.Name?.[0]}
            meta={UBLExtensionFieldMeta.Name}
          />

          <IdentifierDisplay
            label="undefined"
            value={value.ExtensionAgencyID?.[0]}
            meta={UBLExtensionFieldMeta.ExtensionAgencyID}
          />

          <TextDisplay
            label="undefined"
            value={value.ExtensionAgencyName?.[0]}
            meta={UBLExtensionFieldMeta.ExtensionAgencyName}
          />

          <IdentifierDisplay
            label="undefined"
            value={value.ExtensionVersionID?.[0]}
            meta={UBLExtensionFieldMeta.ExtensionVersionID}
          />

          <IdentifierDisplay
            label="undefined"
            value={value.ExtensionAgencyURI?.[0]}
            meta={UBLExtensionFieldMeta.ExtensionAgencyURI}
          />

          <IdentifierDisplay
            label="undefined"
            value={value.ExtensionURI?.[0]}
            meta={UBLExtensionFieldMeta.ExtensionURI}
          />

          <CodeDisplay
            label="undefined"
            value={value.ExtensionReasonCode?.[0]}
            meta={UBLExtensionFieldMeta.ExtensionReasonCode}
          />

          <TextDisplay
            label="undefined"
            value={value.ExtensionReason?.[0]}
            meta={UBLExtensionFieldMeta.ExtensionReason}
          />

          <ExtensionContentDisplay
            label="undefined"
            value={value.ExtensionContent?.[0]}
            meta={UBLExtensionFieldMeta.ExtensionContent}
          />
        </div>
    </div>
  )
}
