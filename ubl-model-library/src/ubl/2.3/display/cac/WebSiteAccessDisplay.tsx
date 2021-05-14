import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: WebSiteAccess
  meta: FieldMeta<T>
}

export default function WebSiteAccessDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-WebSiteAccess ubl-WebSiteAccessType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-WebSiteAccess ubl-UBLExtensions"
          meta={WebSiteAccessFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={WebSiteAccessFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WebSiteAccess ubl-Identifier ubl-URI"
          meta={WebSiteAccessFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="URI"
              value={itemValue}
              meta={WebSiteAccessFieldMeta.URI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WebSiteAccess ubl-Text ubl-Password"
          meta={WebSiteAccessFieldMeta.Password} 
          value={value.Password}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Password"
              value={itemValue}
              meta={WebSiteAccessFieldMeta.Password}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WebSiteAccess ubl-Text ubl-Login"
          meta={WebSiteAccessFieldMeta.Login} 
          value={value.Login}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Login"
              value={itemValue}
              meta={WebSiteAccessFieldMeta.Login}
            />
          }
        />
        </div>
    </div>
  )
}
