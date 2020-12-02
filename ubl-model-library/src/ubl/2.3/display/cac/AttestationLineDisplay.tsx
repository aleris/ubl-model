import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AttestationLine } from  '../../model/cac/AttestationLine'
import { AttestationLineFieldMeta } from  '../../meta/cac/AttestationLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CriterionItemDisplay from './CriterionItemDisplay'
import { CriterionItem } from '../../model/cac/CriterionItem'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: AttestationLine
  meta: FieldMeta<T>
}

export default function AttestationLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AttestationLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AttestationLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttestationLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AttestationLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttestationLineFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AttestationLineFieldMeta.TypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttestationLineFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AttestationLineFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttestationLineFieldMeta.CriterionItem} 
          value={value.CriterionItem}
          itemDisplay={ (itemValue: CriterionItem, key: string | number) =>
            <CriterionItemDisplay key={key} meta={AttestationLineFieldMeta.CriterionItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttestationLineFieldMeta.SubAttestationLine} 
          value={value.SubAttestationLine}
          itemDisplay={ (itemValue: AttestationLine, key: string | number) =>
            <AttestationLineDisplay key={key} meta={AttestationLineFieldMeta.SubAttestationLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
