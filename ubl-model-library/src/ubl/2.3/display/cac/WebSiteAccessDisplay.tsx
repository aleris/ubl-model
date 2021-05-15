import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { WebSiteAccess } from  '../../model/cac/WebSiteAccess'
import { WebSiteAccessFieldMeta } from  '../../meta/cac/WebSiteAccessMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: WebSiteAccess | undefined
  meta: FieldMeta<T>
}

export default function WebSiteAccessDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-WebSiteAccess">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={WebSiteAccessFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="URI"
            value={value.URI?.[0]}
            meta={WebSiteAccessFieldMeta.URI}
          />

          <TextDisplay
            label="Password"
            value={value.Password?.[0]}
            meta={WebSiteAccessFieldMeta.Password}
          />

          <TextDisplay
            label="Login"
            value={value.Login?.[0]}
            meta={WebSiteAccessFieldMeta.Login}
          />
        </div>
    </div>
  )
}
