import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExportCustomsDeclaration } from  '../../model/doc/ExportCustomsDeclaration'
import { ExportCustomsDeclarationField, ExportCustomsDeclarationFieldMeta, ExportCustomsDeclarationTypeName } from  '../../meta/doc/ExportCustomsDeclarationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomsDeclarationDisplay } from '../cac/CustomsDeclarationDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ExportCustomsDeclaration, void>
  exportCustomsDeclaration: ExportCustomsDeclaration[] | undefined
  renderContext: RenderContext
}

export const ExportCustomsDeclarationSubElementsMap: SubElementsTemplatesMap<ExportCustomsDeclarationField, ExportCustomsDeclaration, void> = new Map([
    [
      ExportCustomsDeclarationField.UBLExtensions,
      { meta: ExportCustomsDeclarationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ExportCustomsDeclarationField.UBLExtensions}
          meta={ExportCustomsDeclarationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.UBLVersionID,
      { meta: ExportCustomsDeclarationFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExportCustomsDeclarationField.UBLVersionID}
          meta={ExportCustomsDeclarationFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.CustomizationID,
      { meta: ExportCustomsDeclarationFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExportCustomsDeclarationField.CustomizationID}
          meta={ExportCustomsDeclarationFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.ProfileID,
      { meta: ExportCustomsDeclarationFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExportCustomsDeclarationField.ProfileID}
          meta={ExportCustomsDeclarationFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.ProfileExecutionID,
      { meta: ExportCustomsDeclarationFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExportCustomsDeclarationField.ProfileExecutionID}
          meta={ExportCustomsDeclarationFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.ID,
      { meta: ExportCustomsDeclarationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExportCustomsDeclarationField.ID}
          meta={ExportCustomsDeclarationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.UUID,
      { meta: ExportCustomsDeclarationFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExportCustomsDeclarationField.UUID}
          meta={ExportCustomsDeclarationFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.IssueDate,
      { meta: ExportCustomsDeclarationFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ExportCustomsDeclarationField.IssueDate}
          meta={ExportCustomsDeclarationFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.IssueTime,
      { meta: ExportCustomsDeclarationFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ExportCustomsDeclarationField.IssueTime}
          meta={ExportCustomsDeclarationFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.ExportTypeCode,
      { meta: ExportCustomsDeclarationFieldMeta.ExportTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExportCustomsDeclarationField.ExportTypeCode}
          meta={ExportCustomsDeclarationFieldMeta.ExportTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ExportTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.ExportReasonCode,
      { meta: ExportCustomsDeclarationFieldMeta.ExportReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExportCustomsDeclarationField.ExportReasonCode}
          meta={ExportCustomsDeclarationFieldMeta.ExportReasonCode}
          fieldConfig={fieldConfig}
          code={value?.ExportReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.Note,
      { meta: ExportCustomsDeclarationFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExportCustomsDeclarationField.Note}
          meta={ExportCustomsDeclarationFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.VersionID,
      { meta: ExportCustomsDeclarationFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExportCustomsDeclarationField.VersionID}
          meta={ExportCustomsDeclarationFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.ExporterParty,
      { meta: ExportCustomsDeclarationFieldMeta.ExporterParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ExportCustomsDeclarationField.ExporterParty}
          meta={ExportCustomsDeclarationFieldMeta.ExporterParty}
          fieldConfig={fieldConfig}
          party={value?.ExporterParty}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.CustomsDeclaration,
      { meta: ExportCustomsDeclarationFieldMeta.CustomsDeclaration,
        template: ({value, renderContext, fieldConfig}) => <CustomsDeclarationDisplay
          key={ExportCustomsDeclarationField.CustomsDeclaration}
          meta={ExportCustomsDeclarationFieldMeta.CustomsDeclaration}
          fieldConfig={fieldConfig}
          customsDeclaration={value?.CustomsDeclaration}
          renderContext={renderContext}
        />}
    ],

    [
      ExportCustomsDeclarationField.Signature,
      { meta: ExportCustomsDeclarationFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ExportCustomsDeclarationField.Signature}
          meta={ExportCustomsDeclarationFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function ExportCustomsDeclarationDisplay<TFieldMeta>({ meta, fieldConfig, exportCustomsDeclaration, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ExportCustomsDeclarationTypeName,
    meta,
    fieldConfig,
    exportCustomsDeclaration,
    renderContext,
    ExportCustomsDeclarationSubElementsMap,
  )
}
