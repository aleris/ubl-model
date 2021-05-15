import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentMetadata } from  '../../model/cac/DocumentMetadata'
import { DocumentMetadataFieldMeta } from  '../../meta/cac/DocumentMetadataMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: DocumentMetadata | undefined
  meta: FieldMeta<T>
}

export default function DocumentMetadataDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DocumentMetadata">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DocumentMetadataFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DocumentMetadataFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Format Identifier"
            value={value.FormatID?.[0]}
            meta={DocumentMetadataFieldMeta.FormatID}
          />

          <IdentifierDisplay
            label="Version Identifier"
            value={value.VersionID?.[0]}
            meta={DocumentMetadataFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Schema URI"
            value={value.SchemaURI?.[0]}
            meta={DocumentMetadataFieldMeta.SchemaURI}
          />

          <CodeDisplay
            label="Document Type Code"
            value={value.DocumentTypeCode?.[0]}
            meta={DocumentMetadataFieldMeta.DocumentTypeCode}
          />
        </div>
    </div>
  )
}
