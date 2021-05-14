import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: LineReference
  meta: FieldMeta<T>
}

export default function LineReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-LineReference ubl-LineReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-LineReference ubl-UBLExtensions"
          meta={LineReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={LineReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineReference ubl-Identifier ubl-LineID"
          meta={LineReferenceFieldMeta.LineID} 
          value={value.LineID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Line Identifier"
              value={itemValue}
              meta={LineReferenceFieldMeta.LineID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineReference ubl-Identifier ubl-UUID"
          meta={LineReferenceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={LineReferenceFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineReference ubl-Code ubl-LineStatusCode"
          meta={LineReferenceFieldMeta.LineStatusCode} 
          value={value.LineStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Line Status Code"
              value={itemValue}
              meta={LineReferenceFieldMeta.LineStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-LineReference ubl-DocumentReference"
          meta={LineReferenceFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={LineReferenceFieldMeta.DocumentReference}
            />
          }
        />
        </div>
    </div>
  )
}
