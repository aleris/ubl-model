import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransactionConditions } from  '../../model/cac/TransactionConditions'
import { TransactionConditionsField, TransactionConditionsFieldMeta, TransactionConditionsTypeName } from  '../../meta/cac/TransactionConditionsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransactionConditions, void>
  transactionConditions: TransactionConditions[] | undefined
  renderContext: RenderContext
}

export const TransactionConditionsSubElementsMap: SubElementsTemplatesMap<TransactionConditionsField, TransactionConditions, void> = new Map([
    [
      TransactionConditionsField.UBLExtensions,
      { meta: TransactionConditionsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransactionConditionsField.UBLExtensions}
          meta={TransactionConditionsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransactionConditionsField.ID,
      { meta: TransactionConditionsFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransactionConditionsField.ID}
          meta={TransactionConditionsFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransactionConditionsField.ActionCode,
      { meta: TransactionConditionsFieldMeta.ActionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransactionConditionsField.ActionCode}
          meta={TransactionConditionsFieldMeta.ActionCode}
          fieldConfig={fieldConfig}
          code={value?.ActionCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransactionConditionsField.Description,
      { meta: TransactionConditionsFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransactionConditionsField.Description}
          meta={TransactionConditionsFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TransactionConditionsField.DocumentReference,
      { meta: TransactionConditionsFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransactionConditionsField.DocumentReference}
          meta={TransactionConditionsFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransactionConditionsDisplay<TFieldMeta>({ meta, fieldConfig, transactionConditions, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransactionConditionsTypeName,
    meta,
    fieldConfig,
    transactionConditions,
    renderContext,
    TransactionConditionsSubElementsMap,
  )
}
