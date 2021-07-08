import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { QualificationApplicationRequest } from  '../../model/doc/QualificationApplicationRequest'
import { QualificationApplicationRequestField, QualificationApplicationRequestFieldMeta, QualificationApplicationRequestTypeName } from  '../../meta/doc/QualificationApplicationRequestMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { EconomicOperatorPartyDisplay } from '../cac/EconomicOperatorPartyDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { ProcurementProjectDisplay } from '../cac/ProcurementProjectDisplay'
import { ProcurementProjectLotDisplay } from '../cac/ProcurementProjectLotDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TenderingCriterionDisplay } from '../cac/TenderingCriterionDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<QualificationApplicationRequest, void>
  qualificationApplicationRequest: QualificationApplicationRequest[] | undefined
  renderContext: RenderContext
}

export const QualificationApplicationRequestSubElementsMap: SubElementsTemplatesMap<QualificationApplicationRequestField, QualificationApplicationRequest, void> = new Map([
    [
      QualificationApplicationRequestField.UBLExtensions,
      { meta: QualificationApplicationRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={QualificationApplicationRequestField.UBLExtensions}
          meta={QualificationApplicationRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.UBLVersionID,
      { meta: QualificationApplicationRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationRequestField.UBLVersionID}
          meta={QualificationApplicationRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.CustomizationID,
      { meta: QualificationApplicationRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationRequestField.CustomizationID}
          meta={QualificationApplicationRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.ProfileID,
      { meta: QualificationApplicationRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationRequestField.ProfileID}
          meta={QualificationApplicationRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.ProfileExecutionID,
      { meta: QualificationApplicationRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationRequestField.ProfileExecutionID}
          meta={QualificationApplicationRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.ID,
      { meta: QualificationApplicationRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationRequestField.ID}
          meta={QualificationApplicationRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.CopyIndicator,
      { meta: QualificationApplicationRequestFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={QualificationApplicationRequestField.CopyIndicator}
          meta={QualificationApplicationRequestFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.UUID,
      { meta: QualificationApplicationRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationRequestField.UUID}
          meta={QualificationApplicationRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.ContractFolderID,
      { meta: QualificationApplicationRequestFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationRequestField.ContractFolderID}
          meta={QualificationApplicationRequestFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.ContractName,
      { meta: QualificationApplicationRequestFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QualificationApplicationRequestField.ContractName}
          meta={QualificationApplicationRequestFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.IssueDate,
      { meta: QualificationApplicationRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={QualificationApplicationRequestField.IssueDate}
          meta={QualificationApplicationRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.IssueTime,
      { meta: QualificationApplicationRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={QualificationApplicationRequestField.IssueTime}
          meta={QualificationApplicationRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.VersionID,
      { meta: QualificationApplicationRequestFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationRequestField.VersionID}
          meta={QualificationApplicationRequestFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.PreviousVersionID,
      { meta: QualificationApplicationRequestFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationRequestField.PreviousVersionID}
          meta={QualificationApplicationRequestFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.ProcedureCode,
      { meta: QualificationApplicationRequestFieldMeta.ProcedureCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={QualificationApplicationRequestField.ProcedureCode}
          meta={QualificationApplicationRequestFieldMeta.ProcedureCode}
          fieldConfig={fieldConfig}
          code={value?.ProcedureCode}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.QualificationApplicationTypeCode,
      { meta: QualificationApplicationRequestFieldMeta.QualificationApplicationTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={QualificationApplicationRequestField.QualificationApplicationTypeCode}
          meta={QualificationApplicationRequestFieldMeta.QualificationApplicationTypeCode}
          fieldConfig={fieldConfig}
          code={value?.QualificationApplicationTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.WeightScoringMethodologyNote,
      { meta: QualificationApplicationRequestFieldMeta.WeightScoringMethodologyNote,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QualificationApplicationRequestField.WeightScoringMethodologyNote}
          meta={QualificationApplicationRequestFieldMeta.WeightScoringMethodologyNote}
          fieldConfig={fieldConfig}
          text={value?.WeightScoringMethodologyNote}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.WeightingTypeCode,
      { meta: QualificationApplicationRequestFieldMeta.WeightingTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={QualificationApplicationRequestField.WeightingTypeCode}
          meta={QualificationApplicationRequestFieldMeta.WeightingTypeCode}
          fieldConfig={fieldConfig}
          code={value?.WeightingTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.Note,
      { meta: QualificationApplicationRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QualificationApplicationRequestField.Note}
          meta={QualificationApplicationRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.ContractingParty,
      { meta: QualificationApplicationRequestFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={QualificationApplicationRequestField.ContractingParty}
          meta={QualificationApplicationRequestFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.EconomicOperatorParty,
      { meta: QualificationApplicationRequestFieldMeta.EconomicOperatorParty,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorPartyDisplay
          key={QualificationApplicationRequestField.EconomicOperatorParty}
          meta={QualificationApplicationRequestFieldMeta.EconomicOperatorParty}
          fieldConfig={fieldConfig}
          economicOperatorParty={value?.EconomicOperatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.ProcurementProject,
      { meta: QualificationApplicationRequestFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={QualificationApplicationRequestField.ProcurementProject}
          meta={QualificationApplicationRequestFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.ProcurementProjectLot,
      { meta: QualificationApplicationRequestFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={QualificationApplicationRequestField.ProcurementProjectLot}
          meta={QualificationApplicationRequestFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.TenderingCriterion,
      { meta: QualificationApplicationRequestFieldMeta.TenderingCriterion,
        template: ({value, renderContext, fieldConfig}) => <TenderingCriterionDisplay
          key={QualificationApplicationRequestField.TenderingCriterion}
          meta={QualificationApplicationRequestFieldMeta.TenderingCriterion}
          fieldConfig={fieldConfig}
          tenderingCriterion={value?.TenderingCriterion}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.AdditionalDocumentReference,
      { meta: QualificationApplicationRequestFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={QualificationApplicationRequestField.AdditionalDocumentReference}
          meta={QualificationApplicationRequestFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationRequestField.Signature,
      { meta: QualificationApplicationRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={QualificationApplicationRequestField.Signature}
          meta={QualificationApplicationRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function QualificationApplicationRequestDisplay<TFieldMeta>({ meta, fieldConfig, qualificationApplicationRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    QualificationApplicationRequestTypeName,
    meta,
    fieldConfig,
    qualificationApplicationRequest,
    renderContext,
    QualificationApplicationRequestSubElementsMap,
  )
}
