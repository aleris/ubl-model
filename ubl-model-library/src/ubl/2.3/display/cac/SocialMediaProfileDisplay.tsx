import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { SocialMediaProfile } from  '../../model/cac/SocialMediaProfile'
import { SocialMediaProfileFieldMeta } from  '../../meta/cac/SocialMediaProfileMeta'
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
  value: SocialMediaProfile | undefined
  meta: FieldMeta<T>
}

export default function SocialMediaProfileDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-SocialMediaProfile">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={SocialMediaProfileFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={SocialMediaProfileFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={SocialMediaProfileFieldMeta.Name}
          />

          <CodeDisplay
            label="Social Media Type Code"
            value={value.SocialMediaTypeCode?.[0]}
            meta={SocialMediaProfileFieldMeta.SocialMediaTypeCode}
          />

          <IdentifierDisplay
            label="URI"
            value={value.URI?.[0]}
            meta={SocialMediaProfileFieldMeta.URI}
          />
        </div>
    </div>
  )
}
