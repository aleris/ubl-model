import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: DocumentMetadata
  meta: FieldMeta<T>
}

export default function DocumentMetadataDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DocumentMetadata ubl-DocumentMetadataType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DocumentMetadata ubl-UBLExtensions"
          meta={DocumentMetadataFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DocumentMetadataFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentMetadata ubl-Identifier ubl-ID"
          meta={DocumentMetadataFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DocumentMetadataFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentMetadata ubl-Identifier ubl-FormatID"
          meta={DocumentMetadataFieldMeta.FormatID} 
          value={value.FormatID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Format Identifier"
              value={itemValue}
              meta={DocumentMetadataFieldMeta.FormatID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentMetadata ubl-Identifier ubl-VersionID"
          meta={DocumentMetadataFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version Identifier"
              value={itemValue}
              meta={DocumentMetadataFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentMetadata ubl-Identifier ubl-SchemaURI"
          meta={DocumentMetadataFieldMeta.SchemaURI} 
          value={value.SchemaURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Schema URI"
              value={itemValue}
              meta={DocumentMetadataFieldMeta.SchemaURI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentMetadata ubl-Code ubl-DocumentTypeCode"
          meta={DocumentMetadataFieldMeta.DocumentTypeCode} 
          value={value.DocumentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Type Code"
              value={itemValue}
              meta={DocumentMetadataFieldMeta.DocumentTypeCode}
            />
          }
        />
        </div>
    </div>
  )
}
