import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalAgreementTerms } from  '../../model/cac/DigitalAgreementTerms'
import { DigitalAgreementTermsFieldMeta } from  '../../meta/cac/DigitalAgreementTermsMeta'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ServiceLevelAgreementDisplay from './ServiceLevelAgreementDisplay'
import { ServiceLevelAgreement } from '../../model/cac/ServiceLevelAgreement'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: DigitalAgreementTerms
  meta: FieldMeta<T>
}

export default function DigitalAgreementTermsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DigitalAgreementTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DigitalAgreementTermsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementTermsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DigitalAgreementTermsFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementTermsFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={DigitalAgreementTermsFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementTermsFieldMeta.AdoptionPeriod} 
          value={value.AdoptionPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={DigitalAgreementTermsFieldMeta.AdoptionPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementTermsFieldMeta.ServiceLevelAgreement} 
          value={value.ServiceLevelAgreement}
          itemDisplay={ (itemValue: ServiceLevelAgreement, key: string | number) =>
            <ServiceLevelAgreementDisplay key={key} meta={DigitalAgreementTermsFieldMeta.ServiceLevelAgreement} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
