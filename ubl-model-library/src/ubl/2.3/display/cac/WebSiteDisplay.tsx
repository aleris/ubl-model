import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: WebSite
  meta: FieldMeta<T>
}

export default function WebSiteDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-WebSite ubl-WebSiteType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-WebSite ubl-UBLExtensions"
          meta={WebSiteFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={WebSiteFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WebSite ubl-Identifier ubl-ID"
          meta={WebSiteFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={WebSiteFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WebSite ubl-Text ubl-Name"
          meta={WebSiteFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={WebSiteFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-WebSite ubl-Text ubl-Description"
          meta={WebSiteFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={WebSiteFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WebSite ubl-Code ubl-WebSiteTypeCode"
          meta={WebSiteFieldMeta.WebSiteTypeCode} 
          value={value.WebSiteTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Web Site Type Code"
              value={itemValue}
              meta={WebSiteFieldMeta.WebSiteTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WebSite ubl-Identifier ubl-URI"
          meta={WebSiteFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="URI"
              value={itemValue}
              meta={WebSiteFieldMeta.URI}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-WebSite ubl-WebSiteAccess"
          meta={WebSiteFieldMeta.WebSiteAccess} 
          value={value.WebSiteAccess}
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
