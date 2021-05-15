import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { WebSite } from  '../../model/cac/WebSite'
import { WebSiteFieldMeta } from  '../../meta/cac/WebSiteMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'
import WebSiteAccessDisplay from './WebSiteAccessDisplay'
import { WebSiteAccess } from '../../model/cac/WebSiteAccess'

type Props<T> = {
  label: string
  value: WebSite | undefined
  meta: FieldMeta<T>
}

export default function WebSiteDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-WebSite">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={WebSiteFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={WebSiteFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={WebSiteFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={WebSiteFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={WebSiteFieldMeta.Description}
              />
            }
          />

          <CodeDisplay
            label="Web Site Type Code"
            value={value.WebSiteTypeCode?.[0]}
            meta={WebSiteFieldMeta.WebSiteTypeCode}
          />

          <IdentifierDisplay
            label="URI"
            value={value.URI?.[0]}
            meta={WebSiteFieldMeta.URI}
          />

          <ElementListDisplay
            className="ubl-cac ubl-WebSiteAccess"
            label="Web Site Access"
            items={value.WebSiteAccess}
            meta={WebSiteFieldMeta.WebSiteAccess} 
            itemDisplay={ (itemValue: WebSiteAccess, key: string | number) =>
              <WebSiteAccessDisplay
                key={key}
                label="Web Site Access"
                value={itemValue}
                meta={WebSiteFieldMeta.WebSiteAccess}
              />
            }
          />
        </div>
    </div>
  )
}
