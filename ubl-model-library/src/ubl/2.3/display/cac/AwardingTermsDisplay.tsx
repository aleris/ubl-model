import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AwardingTerms } from  '../../model/cac/AwardingTerms'
import { AwardingTermsFieldMeta } from  '../../meta/cac/AwardingTermsMeta'
import AwardingCriterionDisplay from './AwardingCriterionDisplay'
import { AwardingCriterion } from '../../model/cac/AwardingCriterion'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PersonDisplay from './PersonDisplay'
import { Person } from '../../model/cac/Person'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: AwardingTerms
  meta: FieldMeta<T>
}

export default function AwardingTermsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AwardingTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AwardingTermsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.WeightingAlgorithmCode} 
          value={value.WeightingAlgorithmCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AwardingTermsFieldMeta.WeightingAlgorithmCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingTermsFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.TechnicalCommitteeDescription} 
          value={value.TechnicalCommitteeDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingTermsFieldMeta.TechnicalCommitteeDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.LowTendersDescription} 
          value={value.LowTendersDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingTermsFieldMeta.LowTendersDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.PrizeIndicator} 
          value={value.PrizeIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={AwardingTermsFieldMeta.PrizeIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.PrizeDescription} 
          value={value.PrizeDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingTermsFieldMeta.PrizeDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.PaymentDescription} 
          value={value.PaymentDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingTermsFieldMeta.PaymentDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.FollowupContractIndicator} 
          value={value.FollowupContractIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={AwardingTermsFieldMeta.FollowupContractIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.BindingOnBuyerIndicator} 
          value={value.BindingOnBuyerIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={AwardingTermsFieldMeta.BindingOnBuyerIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.NoFurtherNegotiationIndicator} 
          value={value.NoFurtherNegotiationIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={AwardingTermsFieldMeta.NoFurtherNegotiationIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.AwardingCriterion} 
          value={value.AwardingCriterion}
          itemDisplay={ (itemValue: AwardingCriterion, key: string | number) =>
            <AwardingCriterionDisplay key={key} meta={AwardingTermsFieldMeta.AwardingCriterion} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingTermsFieldMeta.TechnicalCommitteePerson} 
          value={value.TechnicalCommitteePerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay key={key} meta={AwardingTermsFieldMeta.TechnicalCommitteePerson} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
