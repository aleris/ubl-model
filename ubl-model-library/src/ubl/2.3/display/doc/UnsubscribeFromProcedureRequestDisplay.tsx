import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { UnsubscribeFromProcedureRequest } from  '../../model/doc/UnsubscribeFromProcedureRequest'
import { UnsubscribeFromProcedureRequestField, UnsubscribeFromProcedureRequestFieldMeta, UnsubscribeFromProcedureRequestTypeName } from  '../../meta/doc/UnsubscribeFromProcedureRequestMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
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
  fieldConfig?: FieldConfig<UnsubscribeFromProcedureRequest, void>
  unsubscribeFromProcedureRequest: UnsubscribeFromProcedureRequest[] | undefined
  renderContext: RenderContext
}

export const UnsubscribeFromProcedureRequestSubElementsMap: SubElementsTemplatesMap<UnsubscribeFromProcedureRequestField, UnsubscribeFromProcedureRequest, void> = new Map([
    [
      UnsubscribeFromProcedureRequestField.UBLExtensions,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={UnsubscribeFromProcedureRequestField.UBLExtensions}
          meta={UnsubscribeFromProcedureRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.UBLVersionID,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureRequestField.UBLVersionID}
          meta={UnsubscribeFromProcedureRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.CustomizationID,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureRequestField.CustomizationID}
          meta={UnsubscribeFromProcedureRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.ProfileID,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureRequestField.ProfileID}
          meta={UnsubscribeFromProcedureRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.ProfileExecutionID,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureRequestField.ProfileExecutionID}
          meta={UnsubscribeFromProcedureRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.ID,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureRequestField.ID}
          meta={UnsubscribeFromProcedureRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.CopyIndicator,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={UnsubscribeFromProcedureRequestField.CopyIndicator}
          meta={UnsubscribeFromProcedureRequestFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.UUID,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureRequestField.UUID}
          meta={UnsubscribeFromProcedureRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.ContractFolderID,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureRequestField.ContractFolderID}
          meta={UnsubscribeFromProcedureRequestFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.IssueDate,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={UnsubscribeFromProcedureRequestField.IssueDate}
          meta={UnsubscribeFromProcedureRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.IssueTime,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={UnsubscribeFromProcedureRequestField.IssueTime}
          meta={UnsubscribeFromProcedureRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.Note,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UnsubscribeFromProcedureRequestField.Note}
          meta={UnsubscribeFromProcedureRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.Signature,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={UnsubscribeFromProcedureRequestField.Signature}
          meta={UnsubscribeFromProcedureRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.EconomicOperatorParty,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.EconomicOperatorParty,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorPartyDisplay
          key={UnsubscribeFromProcedureRequestField.EconomicOperatorParty}
          meta={UnsubscribeFromProcedureRequestFieldMeta.EconomicOperatorParty}
          fieldConfig={fieldConfig}
          economicOperatorParty={value?.EconomicOperatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.ContractingParty,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={UnsubscribeFromProcedureRequestField.ContractingParty}
          meta={UnsubscribeFromProcedureRequestFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.ProcurementProject,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={UnsubscribeFromProcedureRequestField.ProcurementProject}
          meta={UnsubscribeFromProcedureRequestFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureRequestField.ProcurementProjectLotReference,
      { meta: UnsubscribeFromProcedureRequestFieldMeta.ProcurementProjectLotReference,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotReferenceDisplay
          key={UnsubscribeFromProcedureRequestField.ProcurementProjectLotReference}
          meta={UnsubscribeFromProcedureRequestFieldMeta.ProcurementProjectLotReference}
          fieldConfig={fieldConfig}
          procurementProjectLotReference={value?.ProcurementProjectLotReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function UnsubscribeFromProcedureRequestDisplay<TFieldMeta>({ meta, fieldConfig, unsubscribeFromProcedureRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    UnsubscribeFromProcedureRequestTypeName,
    meta,
    fieldConfig,
    unsubscribeFromProcedureRequest,
    renderContext,
    UnsubscribeFromProcedureRequestSubElementsMap,
  )
}
