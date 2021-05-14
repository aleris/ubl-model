import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: AppealTerms
  meta: FieldMeta<T>
}

export default function AppealTermsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-AppealTerms ubl-AppealTermsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-AppealTerms ubl-UBLExtensions"
          meta={AppealTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AppealTermsFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AppealTerms ubl-Text ubl-Description"
          meta={AppealTermsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={AppealTermsFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-AppealTerms ubl-Period ubl-PresentationPeriod"
          meta={AppealTermsFieldMeta.PresentationPeriod} 
          value={value.PresentationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Presentation Period"
              value={itemValue}
              meta={AppealTermsFieldMeta.PresentationPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-AppealTerms ubl-Party ubl-AppealInformationParty"
          meta={AppealTermsFieldMeta.AppealInformationParty} 
          value={value.AppealInformationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Appeal Information Party"
              value={itemValue}
              meta={AppealTermsFieldMeta.AppealInformationParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-AppealTerms ubl-Party ubl-AppealReceiverParty"
          meta={AppealTermsFieldMeta.AppealReceiverParty} 
          value={value.AppealReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Appeal Receiver Party"
              value={itemValue}
              meta={AppealTermsFieldMeta.AppealReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-AppealTerms ubl-Party ubl-MediationParty"
          meta={AppealTermsFieldMeta.MediationParty} 
          value={value.MediationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Mediation Party"
              value={itemValue}
              meta={AppealTermsFieldMeta.MediationParty}
            />
          }
        />
        </div>
    </div>
  )
}
