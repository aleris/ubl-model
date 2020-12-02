import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: SocialMediaProfile
  meta: FieldMeta<T>
}

export default function SocialMediaProfileDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={SocialMediaProfileFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={SocialMediaProfileFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SocialMediaProfileFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SocialMediaProfileFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SocialMediaProfileFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SocialMediaProfileFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SocialMediaProfileFieldMeta.SocialMediaTypeCode} 
          value={value.SocialMediaTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SocialMediaProfileFieldMeta.SocialMediaTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SocialMediaProfileFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SocialMediaProfileFieldMeta.URI} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
