import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { WebSiteAccess } from  '../../model/cac/WebSiteAccess'
import { WebSiteAccessFieldMeta } from  '../../meta/cac/WebSiteAccessMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: WebSiteAccess
  meta: FieldMeta<T>
}

export default function WebSiteAccessDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={WebSiteAccessFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={WebSiteAccessFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WebSiteAccessFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WebSiteAccessFieldMeta.URI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WebSiteAccessFieldMeta.Password} 
          value={value.Password}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={WebSiteAccessFieldMeta.Password} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WebSiteAccessFieldMeta.Login} 
          value={value.Login}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={WebSiteAccessFieldMeta.Login} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
