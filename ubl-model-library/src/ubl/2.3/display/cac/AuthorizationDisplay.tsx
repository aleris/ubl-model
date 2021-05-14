import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Authorization
  meta: FieldMeta<T>
}

export default function AuthorizationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Authorization ubl-AuthorizationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Authorization ubl-UBLExtensions"
          meta={AuthorizationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AuthorizationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Authorization ubl-Code ubl-PurposeCode"
          meta={AuthorizationFieldMeta.PurposeCode} 
          value={value.PurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Purpose Code"
              value={itemValue}
              meta={AuthorizationFieldMeta.PurposeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Authorization ubl-Text ubl-Purpose"
          meta={AuthorizationFieldMeta.Purpose} 
          value={value.Purpose}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Purpose"
              value={itemValue}
              meta={AuthorizationFieldMeta.Purpose}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Authorization ubl-Period ubl-ValidityPeriod"
          meta={AuthorizationFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={AuthorizationFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Authorization ubl-Certificate"
          meta={AuthorizationFieldMeta.Certificate} 
          value={value.Certificate}
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
