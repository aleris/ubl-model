import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: UBLExtension
  meta: FieldMeta<T>
}

export default function UBLExtensionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-ext ubl-UBLExtension ubl-UBLExtensionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-cbc ubl-UBLExtension ubl-Identifier ubl-ID"
          meta={UBLExtensionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UBLExtensionFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UBLExtension ubl-Text ubl-Name"
          meta={UBLExtensionFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UBLExtensionFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UBLExtension ubl-Identifier ubl-ExtensionAgencyID"
          meta={UBLExtensionFieldMeta.ExtensionAgencyID} 
          value={value.ExtensionAgencyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UBLExtensionFieldMeta.ExtensionAgencyID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UBLExtension ubl-Text ubl-ExtensionAgencyName"
          meta={UBLExtensionFieldMeta.ExtensionAgencyName} 
          value={value.ExtensionAgencyName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UBLExtensionFieldMeta.ExtensionAgencyName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UBLExtension ubl-Identifier ubl-ExtensionVersionID"
          meta={UBLExtensionFieldMeta.ExtensionVersionID} 
          value={value.ExtensionVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UBLExtensionFieldMeta.ExtensionVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UBLExtension ubl-Identifier ubl-ExtensionAgencyURI"
          meta={UBLExtensionFieldMeta.ExtensionAgencyURI} 
          value={value.ExtensionAgencyURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UBLExtensionFieldMeta.ExtensionAgencyURI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UBLExtension ubl-Identifier ubl-ExtensionURI"
          meta={UBLExtensionFieldMeta.ExtensionURI} 
          value={value.ExtensionURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UBLExtensionFieldMeta.ExtensionURI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UBLExtension ubl-Code ubl-ExtensionReasonCode"
          meta={UBLExtensionFieldMeta.ExtensionReasonCode} 
          value={value.ExtensionReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UBLExtensionFieldMeta.ExtensionReasonCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UBLExtension ubl-Text ubl-ExtensionReason"
          meta={UBLExtensionFieldMeta.ExtensionReason} 
          value={value.ExtensionReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UBLExtensionFieldMeta.ExtensionReason}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-ext ubl-UBLExtension ubl-ExtensionContent"
          meta={UBLExtensionFieldMeta.ExtensionContent} 
          value={value.ExtensionContent}
          itemDisplay={ (itemValue: ExtensionContent, key: string | number) =>
            <ExtensionContentDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UBLExtensionFieldMeta.ExtensionContent}
            />
          }
        />
        </div>
    </div>
  )
}
