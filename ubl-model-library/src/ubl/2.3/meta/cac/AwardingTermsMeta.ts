import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AwardingCriterionType } from './AwardingCriterionMeta'
import { CodeType } from '../cbc/CodeMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PersonType } from './PersonMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum AwardingTermsField {
  UBLExtensions = 'UBLExtensions',
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

export const AwardingTermsFieldMetaUBLExtensions = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaWeightingAlgorithmCode = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.WeightingAlgorithmCode,
  'WeightingAlgorithmCode',
  'Weighting Algorithm Code',
  CodeType.name,
  'A code signifying the weighting algorithm for awarding criteria. When multiple awarding criteria is used, different weighting and choices management algorithms based upon scores and weights of all award criteria can be used. An algorithm for weighting criteria shall be reported in the call for tenders document. It is used to determine how to perform the final management of tenders based on the results in each of the established award criteria',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaDescription = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing terms under which the contract is to be awarded.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaTechnicalCommitteeDescription = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.TechnicalCommitteeDescription,
  'TechnicalCommitteeDescription',
  'Technical Committee Description',
  TextType.name,
  'Text describing the committee of experts evaluating the subjective criteria for awarding the contract.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaLowTendersDescription = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.LowTendersDescription,
  'LowTendersDescription',
  'Low Tenders Description',
  TextType.name,
  'Text describing the exclusion criterion for abnormally low tenders.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaPrizeIndicator = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.PrizeIndicator,
  'PrizeIndicator',
  'Prize Indicator',
  IndicatorType.name,
  'Indicates whether a prize will be awarded (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaPrizeDescription = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.PrizeDescription,
  'PrizeDescription',
  'Prize Description',
  TextType.name,
  'Number and value of the prizes to be awarded.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaPaymentDescription = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.PaymentDescription,
  'PaymentDescription',
  'Payment Description',
  TextType.name,
  'Details of payments to all participants.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaFollowupContractIndicator = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.FollowupContractIndicator,
  'FollowupContractIndicator',
  'Followup Contract Indicator',
  IndicatorType.name,
  'Indicates if any service contract following the contest will be awarded to the winner or one of the winners of the contest (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaBindingOnBuyerIndicator = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.BindingOnBuyerIndicator,
  'BindingOnBuyerIndicator',
  'Binding On Buyer Indicator',
  IndicatorType.name,
  'Indicates if the decision is binding on the buyer (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaNoFurtherNegotiationIndicator = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.NoFurtherNegotiationIndicator,
  'NoFurtherNegotiationIndicator',
  'No Further Negotiation Indicator',
  IndicatorType.name,
  'Indicates if no further negotiation is allowed (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaAwardingCriterion = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.AwardingCriterion,
  'AwardingCriterion',
  'Awarding Criterion',
  AwardingCriterionType.name,
  'Defines a criterion for awarding this tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AwardingTermsFieldMetaTechnicalCommitteePerson = new FieldMeta<AwardingTermsField>(
  AwardingTermsField.TechnicalCommitteePerson,
  'TechnicalCommitteePerson',
  'Technical Committee Person',
  PersonType.name,
  'A member of a committee of experts evaluating the subjective criteria for awarding the contract.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class AwardingTermsFieldMeta {
  public static readonly UBLExtensions = AwardingTermsFieldMetaUBLExtensions
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
  [AwardingTermsField.UBLExtensions, AwardingTermsFieldMetaUBLExtensions],
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

export const AwardingTermsType: Type<AwardingTermsField> = {
  name: 'AwardingTerms',
  label: 'Awarding Terms',
  module: TypeModule.cac,
  definition: 'A class to define the terms for awarding a contract.',
  fields: AwardingTermsFieldMap,
}
