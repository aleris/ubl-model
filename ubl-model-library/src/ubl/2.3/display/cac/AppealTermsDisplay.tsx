import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AppealTerms } from  '../../model/cac/AppealTerms'
import { AppealTermsFieldMeta } from  '../../meta/cac/AppealTermsMeta'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: AppealTerms | undefined
  meta: FieldMeta<T>
}

export default function AppealTermsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-AppealTerms">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AppealTermsFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={AppealTermsFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={AppealTermsFieldMeta.Description}
              />
            }
          />

          <PeriodDisplay
            label="Presentation Period"
            value={value.PresentationPeriod?.[0]}
            meta={AppealTermsFieldMeta.PresentationPeriod}
          />

          <PartyDisplay
            label="Appeal Information Party"
            value={value.AppealInformationParty?.[0]}
            meta={AppealTermsFieldMeta.AppealInformationParty}
          />

          <PartyDisplay
            label="Appeal Receiver Party"
            value={value.AppealReceiverParty?.[0]}
            meta={AppealTermsFieldMeta.AppealReceiverParty}
          />

          <PartyDisplay
            label="Mediation Party"
            value={value.MediationParty?.[0]}
            meta={AppealTermsFieldMeta.MediationParty}
          />
        </div>
    </div>
  )
}
