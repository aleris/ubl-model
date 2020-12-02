import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentMetadata } from  '../../model/cac/DocumentMetadata'
import { DocumentMetadataFieldMeta } from  '../../meta/cac/DocumentMetadataMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: DocumentMetadata
  meta: FieldMeta<T>
}

export default function DocumentMetadataDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DocumentMetadataFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DocumentMetadataFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentMetadataFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentMetadataFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentMetadataFieldMeta.FormatID} 
          value={value.FormatID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentMetadataFieldMeta.FormatID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentMetadataFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentMetadataFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentMetadataFieldMeta.SchemaURI} 
          value={value.SchemaURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentMetadataFieldMeta.SchemaURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentMetadataFieldMeta.DocumentTypeCode} 
          value={value.DocumentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DocumentMetadataFieldMeta.DocumentTypeCode} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
