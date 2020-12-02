import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: UBLExtension
  meta: FieldMeta<T>
}

export default function UBLExtensionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={UBLExtensionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UBLExtensionFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UBLExtensionFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UBLExtensionFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UBLExtensionFieldMeta.ExtensionAgencyID} 
          value={value.ExtensionAgencyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UBLExtensionFieldMeta.ExtensionAgencyID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UBLExtensionFieldMeta.ExtensionAgencyName} 
          value={value.ExtensionAgencyName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UBLExtensionFieldMeta.ExtensionAgencyName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UBLExtensionFieldMeta.ExtensionVersionID} 
          value={value.ExtensionVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UBLExtensionFieldMeta.ExtensionVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UBLExtensionFieldMeta.ExtensionAgencyURI} 
          value={value.ExtensionAgencyURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UBLExtensionFieldMeta.ExtensionAgencyURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UBLExtensionFieldMeta.ExtensionURI} 
          value={value.ExtensionURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UBLExtensionFieldMeta.ExtensionURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UBLExtensionFieldMeta.ExtensionReasonCode} 
          value={value.ExtensionReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={UBLExtensionFieldMeta.ExtensionReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UBLExtensionFieldMeta.ExtensionReason} 
          value={value.ExtensionReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UBLExtensionFieldMeta.ExtensionReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UBLExtensionFieldMeta.ExtensionContent} 
          value={value.ExtensionContent}
          itemDisplay={ (itemValue: ExtensionContent, key: string | number) =>
            <ExtensionContentDisplay key={key} meta={UBLExtensionFieldMeta.ExtensionContent} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
