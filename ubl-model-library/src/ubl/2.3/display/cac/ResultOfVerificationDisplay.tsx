import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ResultOfVerification } from  '../../model/cac/ResultOfVerification'
import { ResultOfVerificationField, ResultOfVerificationFieldMeta, ResultOfVerificationTypeName } from  '../../meta/cac/ResultOfVerificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ResultOfVerification, void>
  resultOfVerification: ResultOfVerification[] | undefined
  renderContext: RenderContext
}

export const ResultOfVerificationSubElementsMap: SubElementsTemplatesMap<ResultOfVerificationField, ResultOfVerification, void> = new Map([
    [
      ResultOfVerificationField.UBLExtensions,
      { meta: ResultOfVerificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ResultOfVerificationField.UBLExtensions}
          meta={ResultOfVerificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ResultOfVerificationField.ValidatorID,
      { meta: ResultOfVerificationFieldMeta.ValidatorID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ResultOfVerificationField.ValidatorID}
          meta={ResultOfVerificationFieldMeta.ValidatorID}
          fieldConfig={fieldConfig}
          identifier={value?.ValidatorID}
          renderContext={renderContext}
        />}
    ],

    [
      ResultOfVerificationField.ValidationResultCode,
      { meta: ResultOfVerificationFieldMeta.ValidationResultCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ResultOfVerificationField.ValidationResultCode}
          meta={ResultOfVerificationFieldMeta.ValidationResultCode}
          fieldConfig={fieldConfig}
          code={value?.ValidationResultCode}
          renderContext={renderContext}
        />}
    ],

    [
      ResultOfVerificationField.ValidationDate,
      { meta: ResultOfVerificationFieldMeta.ValidationDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ResultOfVerificationField.ValidationDate}
          meta={ResultOfVerificationFieldMeta.ValidationDate}
          fieldConfig={fieldConfig}
          date={value?.ValidationDate}
          renderContext={renderContext}
        />}
    ],

    [
      ResultOfVerificationField.ValidationTime,
      { meta: ResultOfVerificationFieldMeta.ValidationTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ResultOfVerificationField.ValidationTime}
          meta={ResultOfVerificationFieldMeta.ValidationTime}
          fieldConfig={fieldConfig}
          time={value?.ValidationTime}
          renderContext={renderContext}
        />}
    ],

    [
      ResultOfVerificationField.ValidateProcess,
      { meta: ResultOfVerificationFieldMeta.ValidateProcess,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ResultOfVerificationField.ValidateProcess}
          meta={ResultOfVerificationFieldMeta.ValidateProcess}
          fieldConfig={fieldConfig}
          text={value?.ValidateProcess}
          renderContext={renderContext}
        />}
    ],

    [
      ResultOfVerificationField.ValidateTool,
      { meta: ResultOfVerificationFieldMeta.ValidateTool,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ResultOfVerificationField.ValidateTool}
          meta={ResultOfVerificationFieldMeta.ValidateTool}
          fieldConfig={fieldConfig}
          text={value?.ValidateTool}
          renderContext={renderContext}
        />}
    ],

    [
      ResultOfVerificationField.ValidateToolVersion,
      { meta: ResultOfVerificationFieldMeta.ValidateToolVersion,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ResultOfVerificationField.ValidateToolVersion}
          meta={ResultOfVerificationFieldMeta.ValidateToolVersion}
          fieldConfig={fieldConfig}
          text={value?.ValidateToolVersion}
          renderContext={renderContext}
        />}
    ],

    [
      ResultOfVerificationField.SignatoryParty,
      { meta: ResultOfVerificationFieldMeta.SignatoryParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ResultOfVerificationField.SignatoryParty}
          meta={ResultOfVerificationFieldMeta.SignatoryParty}
          fieldConfig={fieldConfig}
          party={value?.SignatoryParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function ResultOfVerificationDisplay<TFieldMeta>({ meta, fieldConfig, resultOfVerification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ResultOfVerificationTypeName,
    meta,
    fieldConfig,
    resultOfVerification,
    renderContext,
    ResultOfVerificationSubElementsMap,
  )
}
