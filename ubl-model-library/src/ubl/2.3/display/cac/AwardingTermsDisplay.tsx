import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: AwardingTerms
  meta: FieldMeta<T>
}

export default function AwardingTermsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-AwardingTerms ubl-AwardingTermsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-AwardingTerms ubl-UBLExtensions"
          meta={AwardingTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AwardingTermsFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingTerms ubl-Code ubl-WeightingAlgorithmCode"
          meta={AwardingTermsFieldMeta.WeightingAlgorithmCode} 
          value={value.WeightingAlgorithmCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Weighting Algorithm Code"
              value={itemValue}
              meta={AwardingTermsFieldMeta.WeightingAlgorithmCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingTerms ubl-Text ubl-Description"
          meta={AwardingTermsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={AwardingTermsFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingTerms ubl-Text ubl-TechnicalCommitteeDescription"
          meta={AwardingTermsFieldMeta.TechnicalCommitteeDescription} 
          value={value.TechnicalCommitteeDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Technical Committee Description"
              value={itemValue}
              meta={AwardingTermsFieldMeta.TechnicalCommitteeDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingTerms ubl-Text ubl-LowTendersDescription"
          meta={AwardingTermsFieldMeta.LowTendersDescription} 
          value={value.LowTendersDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Low Tenders Description"
              value={itemValue}
              meta={AwardingTermsFieldMeta.LowTendersDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingTerms ubl-Indicator ubl-PrizeIndicator"
          meta={AwardingTermsFieldMeta.PrizeIndicator} 
          value={value.PrizeIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Prize Indicator"
              value={itemValue}
              meta={AwardingTermsFieldMeta.PrizeIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingTerms ubl-Text ubl-PrizeDescription"
          meta={AwardingTermsFieldMeta.PrizeDescription} 
          value={value.PrizeDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Prize Description"
              value={itemValue}
              meta={AwardingTermsFieldMeta.PrizeDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingTerms ubl-Text ubl-PaymentDescription"
          meta={AwardingTermsFieldMeta.PaymentDescription} 
          value={value.PaymentDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Payment Description"
              value={itemValue}
              meta={AwardingTermsFieldMeta.PaymentDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingTerms ubl-Indicator ubl-FollowupContractIndicator"
          meta={AwardingTermsFieldMeta.FollowupContractIndicator} 
          value={value.FollowupContractIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Followup Contract Indicator"
              value={itemValue}
              meta={AwardingTermsFieldMeta.FollowupContractIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingTerms ubl-Indicator ubl-BindingOnBuyerIndicator"
          meta={AwardingTermsFieldMeta.BindingOnBuyerIndicator} 
          value={value.BindingOnBuyerIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Binding On Buyer Indicator"
              value={itemValue}
              meta={AwardingTermsFieldMeta.BindingOnBuyerIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingTerms ubl-Indicator ubl-NoFurtherNegotiationIndicator"
          meta={AwardingTermsFieldMeta.NoFurtherNegotiationIndicator} 
          value={value.NoFurtherNegotiationIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="No Further Negotiation Indicator"
              value={itemValue}
              meta={AwardingTermsFieldMeta.NoFurtherNegotiationIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AwardingTerms ubl-AwardingCriterion"
          meta={AwardingTermsFieldMeta.AwardingCriterion} 
          value={value.AwardingCriterion}
          itemDisplay={ (itemValue: AwardingCriterion, key: string | number) =>
            <AwardingCriterionDisplay
              key={key}
              label="Awarding Criterion"
              value={itemValue}
              meta={AwardingTermsFieldMeta.AwardingCriterion}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AwardingTerms ubl-Person ubl-TechnicalCommitteePerson"
          meta={AwardingTermsFieldMeta.TechnicalCommitteePerson} 
          value={value.TechnicalCommitteePerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay
              key={key}
              label="Technical Committee Person"
              value={itemValue}
              meta={AwardingTermsFieldMeta.TechnicalCommitteePerson}
            />
          }
        />
        </div>
    </div>
  )
}
