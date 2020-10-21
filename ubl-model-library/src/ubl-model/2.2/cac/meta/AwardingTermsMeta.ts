import { FieldMeta } from '../../FieldMeta'

export enum AwardingTermsField {
  WeightingAlgorithmCode = 'WeightingAlgorithmCode',
  Description = 'Description',
  TechnicalCommitteeDescription = 'TechnicalCommitteeDescription',
  LowTendersDescription = 'LowTendersDescription',
  PrizeIndicator = 'PrizeIndicator',
  PrizeDescription = 'PrizeDescription',
  PaymentDescription = 'PaymentDescription',
  FollowupContractIndicator = 'FollowupContractIndicator',
  BindingOnBuyerIndicator = 'BindingOnBuyerIndicator',
  NoFurtherNegotiationIndicator = 'NoFurtherNegotiationIndicator',
  AwardingCriterion = 'AwardingCriterion',
  TechnicalCommitteePerson = 'TechnicalCommitteePerson'
}

export const AwardingTermsFieldMetaWeightingAlgorithmCode = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.WeightingAlgorithmCode,
  'WeightingAlgorithmCode',
  'Weighting Algorithm Code',
  'Code',
  'A code signifying the weighting algorithm for awarding criteria. When multiple awarding criteria is used, different weighting and choices management algorithms based upon scores and weights of all award criteria can be used. An algorithm for weighting criteria shall be reported in the call for tenders document. It is used to determine how to perform the final management of tenders based on the results in each of the established award criteria',
  '0..1',
  undefined,
  undefined
)

export const AwardingTermsFieldMetaDescription = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing terms under which the contract is to be awarded.',
  '0..n',
  undefined,
  undefined
)

export const AwardingTermsFieldMetaTechnicalCommitteeDescription = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.TechnicalCommitteeDescription,
  'TechnicalCommitteeDescription',
  'Description',
  'Text',
  'Text describing the committee of experts evaluating the subjective criteria for awarding the contract.',
  '0..n',
  undefined,
  undefined
)

export const AwardingTermsFieldMetaLowTendersDescription = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.LowTendersDescription,
  'LowTendersDescription',
  'Description',
  'Text',
  'Text describing the exclusion criterion for abnormally low tenders.',
  '0..n',
  undefined,
  undefined
)

export const AwardingTermsFieldMetaPrizeIndicator = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.PrizeIndicator,
  'PrizeIndicator',
  'Prize Indicator',
  'Indicator',
  'Indicates whether a prize will be awarded (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const AwardingTermsFieldMetaPrizeDescription = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.PrizeDescription,
  'PrizeDescription',
  'Prize Description',
  'Text',
  'Number and value of the prizes to be awarded.',
  '0..n',
  undefined,
  undefined
)

export const AwardingTermsFieldMetaPaymentDescription = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.PaymentDescription,
  'PaymentDescription',
  'Payment Description',
  'Text',
  'Details of payments to all participants.',
  '0..n',
  undefined,
  undefined
)

export const AwardingTermsFieldMetaFollowupContractIndicator = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.FollowupContractIndicator,
  'FollowupContractIndicator',
  'Followup Contract Indicator',
  'Indicator',
  'Indicates if any service contract following the contest will be awarded to the winner or one of the winners of the contest (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const AwardingTermsFieldMetaBindingOnBuyerIndicator = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.BindingOnBuyerIndicator,
  'BindingOnBuyerIndicator',
  'Binding On Buyer Indicator',
  'Indicator',
  'Indicates if the decision is binding on the buyer (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const AwardingTermsFieldMetaNoFurtherNegotiationIndicator = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.NoFurtherNegotiationIndicator,
  'NoFurtherNegotiationIndicator',
  'No Further Negotiation Indicator',
  'Indicator',
  'Indicates if no further negotiation is allowed (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const AwardingTermsFieldMetaAwardingCriterion = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.AwardingCriterion,
  'AwardingCriterion',
  'Awarding Criterion',
  'AwardingCriterion',
  'Defines a criterion for awarding this tender.',
  '0..n',
  undefined,
  undefined
)

export const AwardingTermsFieldMetaTechnicalCommitteePerson = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.TechnicalCommitteePerson,
  'TechnicalCommitteePerson',
  'Person',
  'Person',
  'A member of a committee of experts evaluating the subjective criteria for awarding the contract.',
  '0..n',
  undefined,
  undefined
)

export class AwardingTermsFieldMeta {
  public static readonly WeightingAlgorithmCode = AwardingTermsFieldMetaWeightingAlgorithmCode
  public static readonly Description = AwardingTermsFieldMetaDescription
  public static readonly TechnicalCommitteeDescription = AwardingTermsFieldMetaTechnicalCommitteeDescription
  public static readonly LowTendersDescription = AwardingTermsFieldMetaLowTendersDescription
  public static readonly PrizeIndicator = AwardingTermsFieldMetaPrizeIndicator
  public static readonly PrizeDescription = AwardingTermsFieldMetaPrizeDescription
  public static readonly PaymentDescription = AwardingTermsFieldMetaPaymentDescription
  public static readonly FollowupContractIndicator = AwardingTermsFieldMetaFollowupContractIndicator
  public static readonly BindingOnBuyerIndicator = AwardingTermsFieldMetaBindingOnBuyerIndicator
  public static readonly NoFurtherNegotiationIndicator = AwardingTermsFieldMetaNoFurtherNegotiationIndicator
  public static readonly AwardingCriterion = AwardingTermsFieldMetaAwardingCriterion
  public static readonly TechnicalCommitteePerson = AwardingTermsFieldMetaTechnicalCommitteePerson
}

export const AwardingTermsFieldMap = new Map([
  [AwardingTermsField.WeightingAlgorithmCode, AwardingTermsFieldMetaWeightingAlgorithmCode],
  [AwardingTermsField.Description, AwardingTermsFieldMetaDescription],
  [AwardingTermsField.TechnicalCommitteeDescription, AwardingTermsFieldMetaTechnicalCommitteeDescription],
  [AwardingTermsField.LowTendersDescription, AwardingTermsFieldMetaLowTendersDescription],
  [AwardingTermsField.PrizeIndicator, AwardingTermsFieldMetaPrizeIndicator],
  [AwardingTermsField.PrizeDescription, AwardingTermsFieldMetaPrizeDescription],
  [AwardingTermsField.PaymentDescription, AwardingTermsFieldMetaPaymentDescription],
  [AwardingTermsField.FollowupContractIndicator, AwardingTermsFieldMetaFollowupContractIndicator],
  [AwardingTermsField.BindingOnBuyerIndicator, AwardingTermsFieldMetaBindingOnBuyerIndicator],
  [AwardingTermsField.NoFurtherNegotiationIndicator, AwardingTermsFieldMetaNoFurtherNegotiationIndicator],
  [AwardingTermsField.AwardingCriterion, AwardingTermsFieldMetaAwardingCriterion],
  [AwardingTermsField.TechnicalCommitteePerson, AwardingTermsFieldMetaTechnicalCommitteePerson]
])
