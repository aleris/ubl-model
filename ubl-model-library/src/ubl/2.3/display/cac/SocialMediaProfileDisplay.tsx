import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: SocialMediaProfile
  meta: FieldMeta<T>
}

export default function SocialMediaProfileDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-SocialMediaProfile ubl-SocialMediaProfileType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-SocialMediaProfile ubl-UBLExtensions"
          meta={SocialMediaProfileFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={SocialMediaProfileFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SocialMediaProfile ubl-Identifier ubl-ID"
          meta={SocialMediaProfileFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={SocialMediaProfileFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SocialMediaProfile ubl-Text ubl-Name"
          meta={SocialMediaProfileFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={SocialMediaProfileFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SocialMediaProfile ubl-Code ubl-SocialMediaTypeCode"
          meta={SocialMediaProfileFieldMeta.SocialMediaTypeCode} 
          value={value.SocialMediaTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Social Media Type Code"
              value={itemValue}
              meta={SocialMediaProfileFieldMeta.SocialMediaTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SocialMediaProfile ubl-Identifier ubl-URI"
          meta={SocialMediaProfileFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="URI"
              value={itemValue}
              meta={SocialMediaProfileFieldMeta.URI}
            />
          }
        />
        </div>
    </div>
  )
}
