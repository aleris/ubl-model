import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExpressionOfInterestRequest } from  '../../model/doc/ExpressionOfInterestRequest'
import { ExpressionOfInterestRequestField, ExpressionOfInterestRequestFieldMeta, ExpressionOfInterestRequestTypeName } from  '../../meta/doc/ExpressionOfInterestRequestMeta'
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
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { ProcurementProjectDisplay } from '../cac/ProcurementProjectDisplay'
import { ProcurementProjectLotReferenceDisplay } from '../cac/ProcurementProjectLotReferenceDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ExpressionOfInterestRequest, void>
  expressionOfInterestRequest: ExpressionOfInterestRequest[] | undefined
  renderContext: RenderContext
}

export const ExpressionOfInterestRequestSubElementsMap: SubElementsTemplatesMap<ExpressionOfInterestRequestField, ExpressionOfInterestRequest, void> = new Map([
    [
      ExpressionOfInterestRequestField.UBLExtensions,
      { meta: ExpressionOfInterestRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ExpressionOfInterestRequestField.UBLExtensions}
          meta={ExpressionOfInterestRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.UBLVersionID,
      { meta: ExpressionOfInterestRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestRequestField.UBLVersionID}
          meta={ExpressionOfInterestRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.CustomizationID,
      { meta: ExpressionOfInterestRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestRequestField.CustomizationID}
          meta={ExpressionOfInterestRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.ProfileID,
      { meta: ExpressionOfInterestRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestRequestField.ProfileID}
          meta={ExpressionOfInterestRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.ProfileExecutionID,
      { meta: ExpressionOfInterestRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestRequestField.ProfileExecutionID}
          meta={ExpressionOfInterestRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.ID,
      { meta: ExpressionOfInterestRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestRequestField.ID}
          meta={ExpressionOfInterestRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.CopyIndicator,
      { meta: ExpressionOfInterestRequestFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ExpressionOfInterestRequestField.CopyIndicator}
          meta={ExpressionOfInterestRequestFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.UUID,
      { meta: ExpressionOfInterestRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestRequestField.UUID}
          meta={ExpressionOfInterestRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.ContractFolderID,
      { meta: ExpressionOfInterestRequestFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExpressionOfInterestRequestField.ContractFolderID}
          meta={ExpressionOfInterestRequestFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.IssueDate,
      { meta: ExpressionOfInterestRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ExpressionOfInterestRequestField.IssueDate}
          meta={ExpressionOfInterestRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.IssueTime,
      { meta: ExpressionOfInterestRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ExpressionOfInterestRequestField.IssueTime}
          meta={ExpressionOfInterestRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.ContractName,
      { meta: ExpressionOfInterestRequestFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExpressionOfInterestRequestField.ContractName}
          meta={ExpressionOfInterestRequestFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.PreferredLanguageLocaleCode,
      { meta: ExpressionOfInterestRequestFieldMeta.PreferredLanguageLocaleCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExpressionOfInterestRequestField.PreferredLanguageLocaleCode}
          meta={ExpressionOfInterestRequestFieldMeta.PreferredLanguageLocaleCode}
          fieldConfig={fieldConfig}
          code={value?.PreferredLanguageLocaleCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.Note,
      { meta: ExpressionOfInterestRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExpressionOfInterestRequestField.Note}
          meta={ExpressionOfInterestRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.ValidityPeriod,
      { meta: ExpressionOfInterestRequestFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ExpressionOfInterestRequestField.ValidityPeriod}
          meta={ExpressionOfInterestRequestFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.DocumentReference,
      { meta: ExpressionOfInterestRequestFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ExpressionOfInterestRequestField.DocumentReference}
          meta={ExpressionOfInterestRequestFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.Signature,
      { meta: ExpressionOfInterestRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ExpressionOfInterestRequestField.Signature}
          meta={ExpressionOfInterestRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.EconomicOperatorParty,
      { meta: ExpressionOfInterestRequestFieldMeta.EconomicOperatorParty,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorPartyDisplay
          key={ExpressionOfInterestRequestField.EconomicOperatorParty}
          meta={ExpressionOfInterestRequestFieldMeta.EconomicOperatorParty}
          fieldConfig={fieldConfig}
          economicOperatorParty={value?.EconomicOperatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.ContractingParty,
      { meta: ExpressionOfInterestRequestFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={ExpressionOfInterestRequestField.ContractingParty}
          meta={ExpressionOfInterestRequestFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.ProcurementProject,
      { meta: ExpressionOfInterestRequestFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={ExpressionOfInterestRequestField.ProcurementProject}
          meta={ExpressionOfInterestRequestFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      ExpressionOfInterestRequestField.ProcurementProjectLotReference,
      { meta: ExpressionOfInterestRequestFieldMeta.ProcurementProjectLotReference,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotReferenceDisplay
          key={ExpressionOfInterestRequestField.ProcurementProjectLotReference}
          meta={ExpressionOfInterestRequestFieldMeta.ProcurementProjectLotReference}
          fieldConfig={fieldConfig}
          procurementProjectLotReference={value?.ProcurementProjectLotReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function ExpressionOfInterestRequestDisplay<TFieldMeta>({ meta, fieldConfig, expressionOfInterestRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ExpressionOfInterestRequestTypeName,
    meta,
    fieldConfig,
    expressionOfInterestRequest,
    renderContext,
    ExpressionOfInterestRequestSubElementsMap,
  )
}
