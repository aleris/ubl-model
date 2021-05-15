import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: LineReference | undefined
  meta: FieldMeta<T>
}

export default function LineReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-LineReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={LineReferenceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Line Identifier"
            value={value.LineID?.[0]}
            meta={LineReferenceFieldMeta.LineID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={LineReferenceFieldMeta.UUID}
          />

          <CodeDisplay
            label="Line Status Code"
            value={value.LineStatusCode?.[0]}
            meta={LineReferenceFieldMeta.LineStatusCode}
          />

          <DocumentReferenceDisplay
            label="Document Reference"
            value={value.DocumentReference?.[0]}
            meta={LineReferenceFieldMeta.DocumentReference}
          />
        </div>
    </div>
  )
}
