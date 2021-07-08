import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { GuaranteeCertificate } from  '../../model/doc/GuaranteeCertificate'
import { GuaranteeCertificateField, GuaranteeCertificateFieldMeta, GuaranteeCertificateTypeName } from  '../../meta/doc/GuaranteeCertificateMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ImmobilizedSecurityDisplay } from '../cac/ImmobilizedSecurityDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { RegulationDisplay } from '../cac/RegulationDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<GuaranteeCertificate, void>
  guaranteeCertificate: GuaranteeCertificate[] | undefined
  renderContext: RenderContext
}

export const GuaranteeCertificateSubElementsMap: SubElementsTemplatesMap<GuaranteeCertificateField, GuaranteeCertificate, void> = new Map([
    [
      GuaranteeCertificateField.UBLExtensions,
      { meta: GuaranteeCertificateFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={GuaranteeCertificateField.UBLExtensions}
          meta={GuaranteeCertificateFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.UBLVersionID,
      { meta: GuaranteeCertificateFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GuaranteeCertificateField.UBLVersionID}
          meta={GuaranteeCertificateFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.CustomizationID,
      { meta: GuaranteeCertificateFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GuaranteeCertificateField.CustomizationID}
          meta={GuaranteeCertificateFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.ProfileID,
      { meta: GuaranteeCertificateFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GuaranteeCertificateField.ProfileID}
          meta={GuaranteeCertificateFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.ProfileExecutionID,
      { meta: GuaranteeCertificateFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GuaranteeCertificateField.ProfileExecutionID}
          meta={GuaranteeCertificateFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.ID,
      { meta: GuaranteeCertificateFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GuaranteeCertificateField.ID}
          meta={GuaranteeCertificateFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.CopyIndicator,
      { meta: GuaranteeCertificateFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={GuaranteeCertificateField.CopyIndicator}
          meta={GuaranteeCertificateFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.UUID,
      { meta: GuaranteeCertificateFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GuaranteeCertificateField.UUID}
          meta={GuaranteeCertificateFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.ContractFolderID,
      { meta: GuaranteeCertificateFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GuaranteeCertificateField.ContractFolderID}
          meta={GuaranteeCertificateFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.IssueDate,
      { meta: GuaranteeCertificateFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={GuaranteeCertificateField.IssueDate}
          meta={GuaranteeCertificateFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.IssueTime,
      { meta: GuaranteeCertificateFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={GuaranteeCertificateField.IssueTime}
          meta={GuaranteeCertificateFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.GuaranteeTypeCode,
      { meta: GuaranteeCertificateFieldMeta.GuaranteeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={GuaranteeCertificateField.GuaranteeTypeCode}
          meta={GuaranteeCertificateFieldMeta.GuaranteeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.GuaranteeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.Purpose,
      { meta: GuaranteeCertificateFieldMeta.Purpose,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={GuaranteeCertificateField.Purpose}
          meta={GuaranteeCertificateFieldMeta.Purpose}
          fieldConfig={fieldConfig}
          text={value?.Purpose}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.LiabilityAmount,
      { meta: GuaranteeCertificateFieldMeta.LiabilityAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={GuaranteeCertificateField.LiabilityAmount}
          meta={GuaranteeCertificateFieldMeta.LiabilityAmount}
          fieldConfig={fieldConfig}
          amount={value?.LiabilityAmount}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.ConstitutionCode,
      { meta: GuaranteeCertificateFieldMeta.ConstitutionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={GuaranteeCertificateField.ConstitutionCode}
          meta={GuaranteeCertificateFieldMeta.ConstitutionCode}
          fieldConfig={fieldConfig}
          code={value?.ConstitutionCode}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.Note,
      { meta: GuaranteeCertificateFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={GuaranteeCertificateField.Note}
          meta={GuaranteeCertificateFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.ApplicablePeriod,
      { meta: GuaranteeCertificateFieldMeta.ApplicablePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={GuaranteeCertificateField.ApplicablePeriod}
          meta={GuaranteeCertificateFieldMeta.ApplicablePeriod}
          fieldConfig={fieldConfig}
          period={value?.ApplicablePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.ApplicableRegulation,
      { meta: GuaranteeCertificateFieldMeta.ApplicableRegulation,
        template: ({value, renderContext, fieldConfig}) => <RegulationDisplay
          key={GuaranteeCertificateField.ApplicableRegulation}
          meta={GuaranteeCertificateFieldMeta.ApplicableRegulation}
          fieldConfig={fieldConfig}
          regulation={value?.ApplicableRegulation}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.GuaranteeDocumentReference,
      { meta: GuaranteeCertificateFieldMeta.GuaranteeDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={GuaranteeCertificateField.GuaranteeDocumentReference}
          meta={GuaranteeCertificateFieldMeta.GuaranteeDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.GuaranteeDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.ImmobilizedSecurity,
      { meta: GuaranteeCertificateFieldMeta.ImmobilizedSecurity,
        template: ({value, renderContext, fieldConfig}) => <ImmobilizedSecurityDisplay
          key={GuaranteeCertificateField.ImmobilizedSecurity}
          meta={GuaranteeCertificateFieldMeta.ImmobilizedSecurity}
          fieldConfig={fieldConfig}
          immobilizedSecurity={value?.ImmobilizedSecurity}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.Signature,
      { meta: GuaranteeCertificateFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={GuaranteeCertificateField.Signature}
          meta={GuaranteeCertificateFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.GuarantorParty,
      { meta: GuaranteeCertificateFieldMeta.GuarantorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GuaranteeCertificateField.GuarantorParty}
          meta={GuaranteeCertificateFieldMeta.GuarantorParty}
          fieldConfig={fieldConfig}
          party={value?.GuarantorParty}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.InterestedParty,
      { meta: GuaranteeCertificateFieldMeta.InterestedParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GuaranteeCertificateField.InterestedParty}
          meta={GuaranteeCertificateFieldMeta.InterestedParty}
          fieldConfig={fieldConfig}
          party={value?.InterestedParty}
          renderContext={renderContext}
        />}
    ],

    [
      GuaranteeCertificateField.BeneficiaryParty,
      { meta: GuaranteeCertificateFieldMeta.BeneficiaryParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={GuaranteeCertificateField.BeneficiaryParty}
          meta={GuaranteeCertificateFieldMeta.BeneficiaryParty}
          fieldConfig={fieldConfig}
          party={value?.BeneficiaryParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function GuaranteeCertificateDisplay<TFieldMeta>({ meta, fieldConfig, guaranteeCertificate, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    GuaranteeCertificateTypeName,
    meta,
    fieldConfig,
    guaranteeCertificate,
    renderContext,
    GuaranteeCertificateSubElementsMap,
  )
}
