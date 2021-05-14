import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: DigitalAgreementTerms
  meta: FieldMeta<T>
}

export default function DigitalAgreementTermsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DigitalAgreementTerms ubl-DigitalAgreementTermsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DigitalAgreementTerms ubl-UBLExtensions"
          meta={DigitalAgreementTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DigitalAgreementTermsFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DigitalAgreementTerms ubl-Text ubl-Description"
          meta={DigitalAgreementTermsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={DigitalAgreementTermsFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DigitalAgreementTerms ubl-Period ubl-ValidityPeriod"
          meta={DigitalAgreementTermsFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={DigitalAgreementTermsFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DigitalAgreementTerms ubl-Period ubl-AdoptionPeriod"
          meta={DigitalAgreementTermsFieldMeta.AdoptionPeriod} 
          value={value.AdoptionPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Adoption Period"
              value={itemValue}
              meta={DigitalAgreementTermsFieldMeta.AdoptionPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalAgreementTerms ubl-ServiceLevelAgreement"
          meta={DigitalAgreementTermsFieldMeta.ServiceLevelAgreement} 
          value={value.ServiceLevelAgreement}
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
