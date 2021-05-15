import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: AwardingTerms | undefined
  meta: FieldMeta<T>
}

export default function AwardingTermsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-AwardingTerms">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AwardingTermsFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Weighting Algorithm Code"
            value={value.WeightingAlgorithmCode?.[0]}
            meta={AwardingTermsFieldMeta.WeightingAlgorithmCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={AwardingTermsFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={AwardingTermsFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-TechnicalCommitteeDescription"
            label="Technical Committee Description"
            items={value.TechnicalCommitteeDescription}
            meta={AwardingTermsFieldMeta.TechnicalCommitteeDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Technical Committee Description"
                value={itemValue}
                meta={AwardingTermsFieldMeta.TechnicalCommitteeDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-LowTendersDescription"
            label="Low Tenders Description"
            items={value.LowTendersDescription}
            meta={AwardingTermsFieldMeta.LowTendersDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Low Tenders Description"
                value={itemValue}
                meta={AwardingTermsFieldMeta.LowTendersDescription}
              />
            }
          />

          <IndicatorDisplay
            label="Prize Indicator"
            value={value.PrizeIndicator?.[0]}
            meta={AwardingTermsFieldMeta.PrizeIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-PrizeDescription"
            label="Prize Description"
            items={value.PrizeDescription}
            meta={AwardingTermsFieldMeta.PrizeDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Prize Description"
                value={itemValue}
                meta={AwardingTermsFieldMeta.PrizeDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-PaymentDescription"
            label="Payment Description"
            items={value.PaymentDescription}
            meta={AwardingTermsFieldMeta.PaymentDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Payment Description"
                value={itemValue}
                meta={AwardingTermsFieldMeta.PaymentDescription}
              />
            }
          />

          <IndicatorDisplay
            label="Followup Contract Indicator"
            value={value.FollowupContractIndicator?.[0]}
            meta={AwardingTermsFieldMeta.FollowupContractIndicator}
          />

          <IndicatorDisplay
            label="Binding On Buyer Indicator"
            value={value.BindingOnBuyerIndicator?.[0]}
            meta={AwardingTermsFieldMeta.BindingOnBuyerIndicator}
          />

          <IndicatorDisplay
            label="No Further Negotiation Indicator"
            value={value.NoFurtherNegotiationIndicator?.[0]}
            meta={AwardingTermsFieldMeta.NoFurtherNegotiationIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AwardingCriterion"
            label="Awarding Criterion"
            items={value.AwardingCriterion}
            meta={AwardingTermsFieldMeta.AwardingCriterion} 
            itemDisplay={ (itemValue: AwardingCriterion, key: string | number) =>
              <AwardingCriterionDisplay
                key={key}
                label="Awarding Criterion"
                value={itemValue}
                meta={AwardingTermsFieldMeta.AwardingCriterion}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Person ubl-TechnicalCommitteePerson"
            label="Technical Committee Person"
            items={value.TechnicalCommitteePerson}
            meta={AwardingTermsFieldMeta.TechnicalCommitteePerson} 
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
