import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExternalReference } from  '../../model/cac/ExternalReference'
import { ExternalReferenceFieldMeta } from  '../../meta/cac/ExternalReferenceMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ExternalReference | undefined
  meta: FieldMeta<T>
}

export default function ExternalReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ExternalReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ExternalReferenceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="URI"
            value={value.URI?.[0]}
            meta={ExternalReferenceFieldMeta.URI}
          />

          <TextDisplay
            label="Document Hash"
            value={value.DocumentHash?.[0]}
            meta={ExternalReferenceFieldMeta.DocumentHash}
          />

          <TextDisplay
            label="Hash Algorithm Method"
            value={value.HashAlgorithmMethod?.[0]}
            meta={ExternalReferenceFieldMeta.HashAlgorithmMethod}
          />

          <DateDisplay
            label="Expiry Date"
            value={value.ExpiryDate?.[0]}
            meta={ExternalReferenceFieldMeta.ExpiryDate}
          />

          <TimeDisplay
            label="Expiry Time"
            value={value.ExpiryTime?.[0]}
            meta={ExternalReferenceFieldMeta.ExpiryTime}
          />

          <CodeDisplay
            label="Mime Code"
            value={value.MimeCode?.[0]}
            meta={ExternalReferenceFieldMeta.MimeCode}
          />

          <CodeDisplay
            label="Format Code"
            value={value.FormatCode?.[0]}
            meta={ExternalReferenceFieldMeta.FormatCode}
          />

          <CodeDisplay
            label="Encoding Code"
            value={value.EncodingCode?.[0]}
            meta={ExternalReferenceFieldMeta.EncodingCode}
          />

          <CodeDisplay
            label="Character Set Code"
            value={value.CharacterSetCode?.[0]}
            meta={ExternalReferenceFieldMeta.CharacterSetCode}
          />

          <TextDisplay
            label="File Name"
            value={value.FileName?.[0]}
            meta={ExternalReferenceFieldMeta.FileName}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ExternalReferenceFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ExternalReferenceFieldMeta.Description}
              />
            }
          />
        </div>
    </div>
  )
}
