import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Authorization } from  '../../model/cac/Authorization'
import { AuthorizationFieldMeta } from  '../../meta/cac/AuthorizationMeta'
import CertificateDisplay from './CertificateDisplay'
import { Certificate } from '../../model/cac/Certificate'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Authorization
  meta: FieldMeta<T>
}

export default function AuthorizationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AuthorizationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AuthorizationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AuthorizationFieldMeta.PurposeCode} 
          value={value.PurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AuthorizationFieldMeta.PurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AuthorizationFieldMeta.Purpose} 
          value={value.Purpose}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AuthorizationFieldMeta.Purpose} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AuthorizationFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={AuthorizationFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AuthorizationFieldMeta.Certificate} 
          value={value.Certificate}
          itemDisplay={ (itemValue: Certificate, key: string | number) =>
            <CertificateDisplay key={key} meta={AuthorizationFieldMeta.Certificate} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
