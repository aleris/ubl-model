import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: DigitalAgreementTerms | undefined
  meta: FieldMeta<T>
}

export default function DigitalAgreementTermsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DigitalAgreementTerms">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DigitalAgreementTermsFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={DigitalAgreementTermsFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={DigitalAgreementTermsFieldMeta.Description}
              />
            }
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={DigitalAgreementTermsFieldMeta.ValidityPeriod}
          />

          <PeriodDisplay
            label="Adoption Period"
            value={value.AdoptionPeriod?.[0]}
            meta={DigitalAgreementTermsFieldMeta.AdoptionPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ServiceLevelAgreement"
            label="Service Level Agreement"
            items={value.ServiceLevelAgreement}
            meta={DigitalAgreementTermsFieldMeta.ServiceLevelAgreement} 
            itemDisplay={ (itemValue: ServiceLevelAgreement, key: string | number) =>
              <ServiceLevelAgreementDisplay
                key={key}
                label="Service Level Agreement"
                value={itemValue}
                meta={DigitalAgreementTermsFieldMeta.ServiceLevelAgreement}
              />
            }
          />
        </div>
    </div>
  )
}
