import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: Authorization | undefined
  meta: FieldMeta<T>
}

export default function AuthorizationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Authorization">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AuthorizationFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Purpose Code"
            value={value.PurposeCode?.[0]}
            meta={AuthorizationFieldMeta.PurposeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Purpose"
            label="Purpose"
            items={value.Purpose}
            meta={AuthorizationFieldMeta.Purpose} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Purpose"
                value={itemValue}
                meta={AuthorizationFieldMeta.Purpose}
              />
            }
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={AuthorizationFieldMeta.ValidityPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Certificate"
            label="Certificate"
            items={value.Certificate}
            meta={AuthorizationFieldMeta.Certificate} 
            itemDisplay={ (itemValue: Certificate, key: string | number) =>
              <CertificateDisplay
                key={key}
                label="Certificate"
                value={itemValue}
                meta={AuthorizationFieldMeta.Certificate}
              />
            }
          />
        </div>
    </div>
  )
}
