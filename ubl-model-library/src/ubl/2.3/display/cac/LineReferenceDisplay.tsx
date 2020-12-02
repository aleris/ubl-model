import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { LineReference } from  '../../model/cac/LineReference'
import { LineReferenceFieldMeta } from  '../../meta/cac/LineReferenceMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: LineReference
  meta: FieldMeta<T>
}

export default function LineReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={LineReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={LineReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineReferenceFieldMeta.LineID} 
          value={value.LineID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={LineReferenceFieldMeta.LineID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineReferenceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={LineReferenceFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineReferenceFieldMeta.LineStatusCode} 
          value={value.LineStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={LineReferenceFieldMeta.LineStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineReferenceFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={LineReferenceFieldMeta.DocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
