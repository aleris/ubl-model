import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExpressionOfInterestResponse } from  '../../model/doc/ExpressionOfInterestResponse'
import { ExpressionOfInterestResponseField, ExpressionOfInterestResponseFieldMeta, ExpressionOfInterestResponseTypeName } from  '../../meta/doc/ExpressionOfInterestResponseMeta'
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
import { ProcurementProjectLotReferenceDisplay } from '../cac/ProcurementProjectLotReferenceDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ExpressionOfInterestResponse, void>
  expressionOfInterestResponse: ExpressionOfInterestResponse[] | undefined
  renderContext: RenderContext
}

export const ExpressionOfInterestResponseSubElementsMap: SubElementsTemplatesMap<ExpressionOfInterestResponseField, ExpressionOfInterestResponse, void> = new Map([
    [
      ExpressionOfInterestResponseField.UBLExtensions,
      { meta: ExpressionOfInterestResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ExpressionOfInterestResponseField.UBLExtensions}
          meta={ExpressionOfInterestResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.UBLVersionID,
      { meta: ExpressionOfInterestResponseFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestResponseField.UBLVersionID}
          meta={ExpressionOfInterestResponseFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.CustomizationID,
      { meta: ExpressionOfInterestResponseFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestResponseField.CustomizationID}
          meta={ExpressionOfInterestResponseFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.ProfileID,
      { meta: ExpressionOfInterestResponseFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestResponseField.ProfileID}
          meta={ExpressionOfInterestResponseFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.ProfileExecutionID,
      { meta: ExpressionOfInterestResponseFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestResponseField.ProfileExecutionID}
          meta={ExpressionOfInterestResponseFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.ID,
      { meta: ExpressionOfInterestResponseFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestResponseField.ID}
          meta={ExpressionOfInterestResponseFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.CopyIndicator,
      { meta: ExpressionOfInterestResponseFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ExpressionOfInterestResponseField.CopyIndicator}
          meta={ExpressionOfInterestResponseFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.UUID,
      { meta: ExpressionOfInterestResponseFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestResponseField.UUID}
          meta={ExpressionOfInterestResponseFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.ContractFolderID,
      { meta: ExpressionOfInterestResponseFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestResponseField.ContractFolderID}
          meta={ExpressionOfInterestResponseFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.IssueDate,
      { meta: ExpressionOfInterestResponseFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ExpressionOfInterestResponseField.IssueDate}
          meta={ExpressionOfInterestResponseFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.IssueTime,
      { meta: ExpressionOfInterestResponseFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ExpressionOfInterestResponseField.IssueTime}
          meta={ExpressionOfInterestResponseFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.ContractName,
      { meta: ExpressionOfInterestResponseFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExpressionOfInterestResponseField.ContractName}
          meta={ExpressionOfInterestResponseFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.TenderLanguageLocaleCode,
      { meta: ExpressionOfInterestResponseFieldMeta.TenderLanguageLocaleCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExpressionOfInterestResponseField.TenderLanguageLocaleCode}
          meta={ExpressionOfInterestResponseFieldMeta.TenderLanguageLocaleCode}
          fieldConfig={fieldConfig}
          code={value?.TenderLanguageLocaleCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.Note,
      { meta: ExpressionOfInterestResponseFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExpressionOfInterestResponseField.Note}
          meta={ExpressionOfInterestResponseFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.ExpressionOfInterestDocumentReference,
      { meta: ExpressionOfInterestResponseFieldMeta.ExpressionOfInterestDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ExpressionOfInterestResponseField.ExpressionOfInterestDocumentReference}
          meta={ExpressionOfInterestResponseFieldMeta.ExpressionOfInterestDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ExpressionOfInterestDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.Signature,
      { meta: ExpressionOfInterestResponseFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ExpressionOfInterestResponseField.Signature}
          meta={ExpressionOfInterestResponseFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.EconomicOperatorParty,
      { meta: ExpressionOfInterestResponseFieldMeta.EconomicOperatorParty,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorPartyDisplay
          key={ExpressionOfInterestResponseField.EconomicOperatorParty}
          meta={ExpressionOfInterestResponseFieldMeta.EconomicOperatorParty}
          fieldConfig={fieldConfig}
          economicOperatorParty={value?.EconomicOperatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.ContractingParty,
      { meta: ExpressionOfInterestResponseFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={ExpressionOfInterestResponseField.ContractingParty}
          meta={ExpressionOfInterestResponseFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.ProcurementProject,
      { meta: ExpressionOfInterestResponseFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={ExpressionOfInterestResponseField.ProcurementProject}
          meta={ExpressionOfInterestResponseFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestResponseField.ProcurementProjectLotReference,
      { meta: ExpressionOfInterestResponseFieldMeta.ProcurementProjectLotReference,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotReferenceDisplay
          key={ExpressionOfInterestResponseField.ProcurementProjectLotReference}
          meta={ExpressionOfInterestResponseFieldMeta.ProcurementProjectLotReference}
          fieldConfig={fieldConfig}
          procurementProjectLotReference={value?.ProcurementProjectLotReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function ExpressionOfInterestResponseDisplay<TFieldMeta>({ meta, fieldConfig, expressionOfInterestResponse, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ExpressionOfInterestResponseTypeName,
    meta,
    fieldConfig,
    expressionOfInterestResponse,
    renderContext,
    ExpressionOfInterestResponseSubElementsMap,
  )
}
