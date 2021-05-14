import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ExternalReference
  meta: FieldMeta<T>
}

export default function ExternalReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ExternalReference ubl-ExternalReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ExternalReference ubl-UBLExtensions"
          meta={ExternalReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ExternalReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExternalReference ubl-Identifier ubl-URI"
          meta={ExternalReferenceFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="URI"
              value={itemValue}
              meta={ExternalReferenceFieldMeta.URI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExternalReference ubl-Text ubl-DocumentHash"
          meta={ExternalReferenceFieldMeta.DocumentHash} 
          value={value.DocumentHash}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Document Hash"
              value={itemValue}
              meta={ExternalReferenceFieldMeta.DocumentHash}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExternalReference ubl-Text ubl-HashAlgorithmMethod"
          meta={ExternalReferenceFieldMeta.HashAlgorithmMethod} 
          value={value.HashAlgorithmMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Hash Algorithm Method"
              value={itemValue}
              meta={ExternalReferenceFieldMeta.HashAlgorithmMethod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExternalReference ubl-Date ubl-ExpiryDate"
          meta={ExternalReferenceFieldMeta.ExpiryDate} 
          value={value.ExpiryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Expiry Date"
              value={itemValue}
              meta={ExternalReferenceFieldMeta.ExpiryDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExternalReference ubl-Time ubl-ExpiryTime"
          meta={ExternalReferenceFieldMeta.ExpiryTime} 
          value={value.ExpiryTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Expiry Time"
              value={itemValue}
              meta={ExternalReferenceFieldMeta.ExpiryTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExternalReference ubl-Code ubl-MimeCode"
          meta={ExternalReferenceFieldMeta.MimeCode} 
          value={value.MimeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Mime Code"
              value={itemValue}
              meta={ExternalReferenceFieldMeta.MimeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExternalReference ubl-Code ubl-FormatCode"
          meta={ExternalReferenceFieldMeta.FormatCode} 
          value={value.FormatCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Format Code"
              value={itemValue}
              meta={ExternalReferenceFieldMeta.FormatCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExternalReference ubl-Code ubl-EncodingCode"
          meta={ExternalReferenceFieldMeta.EncodingCode} 
          value={value.EncodingCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Encoding Code"
              value={itemValue}
              meta={ExternalReferenceFieldMeta.EncodingCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExternalReference ubl-Code ubl-CharacterSetCode"
          meta={ExternalReferenceFieldMeta.CharacterSetCode} 
          value={value.CharacterSetCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Character Set Code"
              value={itemValue}
              meta={ExternalReferenceFieldMeta.CharacterSetCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExternalReference ubl-Text ubl-FileName"
          meta={ExternalReferenceFieldMeta.FileName} 
          value={value.FileName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="File Name"
              value={itemValue}
              meta={ExternalReferenceFieldMeta.FileName}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ExternalReference ubl-Text ubl-Description"
          meta={ExternalReferenceFieldMeta.Description} 
          value={value.Description}
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
