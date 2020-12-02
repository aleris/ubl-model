import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ExternalReference
  meta: FieldMeta<T>
}

export default function ExternalReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ExternalReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExternalReferenceFieldMeta.URI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.DocumentHash} 
          value={value.DocumentHash}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ExternalReferenceFieldMeta.DocumentHash} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.HashAlgorithmMethod} 
          value={value.HashAlgorithmMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ExternalReferenceFieldMeta.HashAlgorithmMethod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.ExpiryDate} 
          value={value.ExpiryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ExternalReferenceFieldMeta.ExpiryDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.ExpiryTime} 
          value={value.ExpiryTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ExternalReferenceFieldMeta.ExpiryTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.MimeCode} 
          value={value.MimeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExternalReferenceFieldMeta.MimeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.FormatCode} 
          value={value.FormatCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExternalReferenceFieldMeta.FormatCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.EncodingCode} 
          value={value.EncodingCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExternalReferenceFieldMeta.EncodingCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.CharacterSetCode} 
          value={value.CharacterSetCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExternalReferenceFieldMeta.CharacterSetCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.FileName} 
          value={value.FileName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ExternalReferenceFieldMeta.FileName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExternalReferenceFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ExternalReferenceFieldMeta.Description} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
