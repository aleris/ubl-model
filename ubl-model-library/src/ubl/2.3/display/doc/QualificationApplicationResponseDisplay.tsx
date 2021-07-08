import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { QualificationApplicationResponse } from  '../../model/doc/QualificationApplicationResponse'
import { QualificationApplicationResponseField, QualificationApplicationResponseFieldMeta, QualificationApplicationResponseTypeName } from  '../../meta/doc/QualificationApplicationResponseMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { EconomicOperatorPartyDisplay } from '../cac/EconomicOperatorPartyDisplay'
import { EvidenceDisplay } from '../cac/EvidenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { ProcurementProjectDisplay } from '../cac/ProcurementProjectDisplay'
import { ProcurementProjectLotDisplay } from '../cac/ProcurementProjectLotDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TenderingCriterionDisplay } from '../cac/TenderingCriterionDisplay'
import { TenderingCriterionResponseDisplay } from '../cac/TenderingCriterionResponseDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<QualificationApplicationResponse, void>
  qualificationApplicationResponse: QualificationApplicationResponse[] | undefined
  renderContext: RenderContext
}

export const QualificationApplicationResponseSubElementsMap: SubElementsTemplatesMap<QualificationApplicationResponseField, QualificationApplicationResponse, void> = new Map([
    [
      QualificationApplicationResponseField.UBLExtensions,
      { meta: QualificationApplicationResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={QualificationApplicationResponseField.UBLExtensions}
          meta={QualificationApplicationResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.UBLVersionID,
      { meta: QualificationApplicationResponseFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationResponseField.UBLVersionID}
          meta={QualificationApplicationResponseFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.CustomizationID,
      { meta: QualificationApplicationResponseFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationResponseField.CustomizationID}
          meta={QualificationApplicationResponseFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.ProfileID,
      { meta: QualificationApplicationResponseFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationResponseField.ProfileID}
          meta={QualificationApplicationResponseFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.ProfileExecutionID,
      { meta: QualificationApplicationResponseFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationResponseField.ProfileExecutionID}
          meta={QualificationApplicationResponseFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.ID,
      { meta: QualificationApplicationResponseFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationResponseField.ID}
          meta={QualificationApplicationResponseFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.CopyIndicator,
      { meta: QualificationApplicationResponseFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={QualificationApplicationResponseField.CopyIndicator}
          meta={QualificationApplicationResponseFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.UUID,
      { meta: QualificationApplicationResponseFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationResponseField.UUID}
          meta={QualificationApplicationResponseFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.ContractFolderID,
      { meta: QualificationApplicationResponseFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationResponseField.ContractFolderID}
          meta={QualificationApplicationResponseFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.ContractName,
      { meta: QualificationApplicationResponseFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QualificationApplicationResponseField.ContractName}
          meta={QualificationApplicationResponseFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.IssueDate,
      { meta: QualificationApplicationResponseFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={QualificationApplicationResponseField.IssueDate}
          meta={QualificationApplicationResponseFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.IssueTime,
      { meta: QualificationApplicationResponseFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={QualificationApplicationResponseField.IssueTime}
          meta={QualificationApplicationResponseFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.EconomicOperatorGroupName,
      { meta: QualificationApplicationResponseFieldMeta.EconomicOperatorGroupName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QualificationApplicationResponseField.EconomicOperatorGroupName}
          meta={QualificationApplicationResponseFieldMeta.EconomicOperatorGroupName}
          fieldConfig={fieldConfig}
          text={value?.EconomicOperatorGroupName}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.VersionID,
      { meta: QualificationApplicationResponseFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationResponseField.VersionID}
          meta={QualificationApplicationResponseFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.PreviousVersionID,
      { meta: QualificationApplicationResponseFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualificationApplicationResponseField.PreviousVersionID}
          meta={QualificationApplicationResponseFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.ProcedureCode,
      { meta: QualificationApplicationResponseFieldMeta.ProcedureCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={QualificationApplicationResponseField.ProcedureCode}
          meta={QualificationApplicationResponseFieldMeta.ProcedureCode}
          fieldConfig={fieldConfig}
          code={value?.ProcedureCode}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.QualificationApplicationTypeCode,
      { meta: QualificationApplicationResponseFieldMeta.QualificationApplicationTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={QualificationApplicationResponseField.QualificationApplicationTypeCode}
          meta={QualificationApplicationResponseFieldMeta.QualificationApplicationTypeCode}
          fieldConfig={fieldConfig}
          code={value?.QualificationApplicationTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.WeightScoringMethodologyNote,
      { meta: QualificationApplicationResponseFieldMeta.WeightScoringMethodologyNote,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QualificationApplicationResponseField.WeightScoringMethodologyNote}
          meta={QualificationApplicationResponseFieldMeta.WeightScoringMethodologyNote}
          fieldConfig={fieldConfig}
          text={value?.WeightScoringMethodologyNote}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.WeightingTypeCode,
      { meta: QualificationApplicationResponseFieldMeta.WeightingTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={QualificationApplicationResponseField.WeightingTypeCode}
          meta={QualificationApplicationResponseFieldMeta.WeightingTypeCode}
          fieldConfig={fieldConfig}
          code={value?.WeightingTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.Note,
      { meta: QualificationApplicationResponseFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QualificationApplicationResponseField.Note}
          meta={QualificationApplicationResponseFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.ContractingParty,
      { meta: QualificationApplicationResponseFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={QualificationApplicationResponseField.ContractingParty}
          meta={QualificationApplicationResponseFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.EconomicOperatorParty,
      { meta: QualificationApplicationResponseFieldMeta.EconomicOperatorParty,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorPartyDisplay
          key={QualificationApplicationResponseField.EconomicOperatorParty}
          meta={QualificationApplicationResponseFieldMeta.EconomicOperatorParty}
          fieldConfig={fieldConfig}
          economicOperatorParty={value?.EconomicOperatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.ProcurementProject,
      { meta: QualificationApplicationResponseFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={QualificationApplicationResponseField.ProcurementProject}
          meta={QualificationApplicationResponseFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.ProcurementProjectLot,
      { meta: QualificationApplicationResponseFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={QualificationApplicationResponseField.ProcurementProjectLot}
          meta={QualificationApplicationResponseFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.TenderingCriterion,
      { meta: QualificationApplicationResponseFieldMeta.TenderingCriterion,
        template: ({value, renderContext, fieldConfig}) => <TenderingCriterionDisplay
          key={QualificationApplicationResponseField.TenderingCriterion}
          meta={QualificationApplicationResponseFieldMeta.TenderingCriterion}
          fieldConfig={fieldConfig}
          tenderingCriterion={value?.TenderingCriterion}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.TenderingCriterionResponse,
      { meta: QualificationApplicationResponseFieldMeta.TenderingCriterionResponse,
        template: ({value, renderContext, fieldConfig}) => <TenderingCriterionResponseDisplay
          key={QualificationApplicationResponseField.TenderingCriterionResponse}
          meta={QualificationApplicationResponseFieldMeta.TenderingCriterionResponse}
          fieldConfig={fieldConfig}
          tenderingCriterionResponse={value?.TenderingCriterionResponse}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.AdditionalDocumentReference,
      { meta: QualificationApplicationResponseFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={QualificationApplicationResponseField.AdditionalDocumentReference}
          meta={QualificationApplicationResponseFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.Evidence,
      { meta: QualificationApplicationResponseFieldMeta.Evidence,
        template: ({value, renderContext, fieldConfig}) => <EvidenceDisplay
          key={QualificationApplicationResponseField.Evidence}
          meta={QualificationApplicationResponseFieldMeta.Evidence}
          fieldConfig={fieldConfig}
          evidence={value?.Evidence}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationApplicationResponseField.Signature,
      { meta: QualificationApplicationResponseFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={QualificationApplicationResponseField.Signature}
          meta={QualificationApplicationResponseFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function QualificationApplicationResponseDisplay<TFieldMeta>({ meta, fieldConfig, qualificationApplicationResponse, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    QualificationApplicationResponseTypeName,
    meta,
    fieldConfig,
    qualificationApplicationResponse,
    renderContext,
    QualificationApplicationResponseSubElementsMap,
  )
}
