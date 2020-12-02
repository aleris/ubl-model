import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: AppealTerms
  meta: FieldMeta<T>
}

export default function AppealTermsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AppealTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AppealTermsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AppealTermsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AppealTermsFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AppealTermsFieldMeta.PresentationPeriod} 
          value={value.PresentationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={AppealTermsFieldMeta.PresentationPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AppealTermsFieldMeta.AppealInformationParty} 
          value={value.AppealInformationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={AppealTermsFieldMeta.AppealInformationParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AppealTermsFieldMeta.AppealReceiverParty} 
          value={value.AppealReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={AppealTermsFieldMeta.AppealReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AppealTermsFieldMeta.MediationParty} 
          value={value.MediationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={AppealTermsFieldMeta.MediationParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
