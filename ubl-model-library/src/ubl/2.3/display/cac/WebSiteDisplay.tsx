import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: WebSite
  meta: FieldMeta<T>
}

export default function WebSiteDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={WebSiteFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={WebSiteFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WebSiteFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WebSiteFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WebSiteFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={WebSiteFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WebSiteFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={WebSiteFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WebSiteFieldMeta.WebSiteTypeCode} 
          value={value.WebSiteTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={WebSiteFieldMeta.WebSiteTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WebSiteFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WebSiteFieldMeta.URI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WebSiteFieldMeta.WebSiteAccess} 
          value={value.WebSiteAccess}
          itemDisplay={ (itemValue: WebSiteAccess, key: string | number) =>
            <WebSiteAccessDisplay key={key} meta={WebSiteFieldMeta.WebSiteAccess} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
