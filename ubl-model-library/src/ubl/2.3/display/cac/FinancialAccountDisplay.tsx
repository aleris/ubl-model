import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { FinancialAccount } from  '../../model/cac/FinancialAccount'
import { FinancialAccountField, FinancialAccountFieldMeta, FinancialAccountTypeName } from  '../../meta/cac/FinancialAccountMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { BranchDisplay } from './BranchDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CountryDisplay } from './CountryDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<FinancialAccount, void>
  financialAccount: FinancialAccount[] | undefined
  renderContext: RenderContext
}

export const FinancialAccountSubElementsMap: SubElementsTemplatesMap<FinancialAccountField, FinancialAccount, void> = new Map([
    [
      FinancialAccountField.UBLExtensions,
      { meta: FinancialAccountFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={FinancialAccountField.UBLExtensions}
          meta={FinancialAccountFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialAccountField.ID,
      { meta: FinancialAccountFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FinancialAccountField.ID}
          meta={FinancialAccountFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialAccountField.Name,
      { meta: FinancialAccountFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FinancialAccountField.Name}
          meta={FinancialAccountFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialAccountField.AliasName,
      { meta: FinancialAccountFieldMeta.AliasName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FinancialAccountField.AliasName}
          meta={FinancialAccountFieldMeta.AliasName}
          fieldConfig={fieldConfig}
          text={value?.AliasName}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialAccountField.AccountTypeCode,
      { meta: FinancialAccountFieldMeta.AccountTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FinancialAccountField.AccountTypeCode}
          meta={FinancialAccountFieldMeta.AccountTypeCode}
          fieldConfig={fieldConfig}
          code={value?.AccountTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialAccountField.AccountFormatCode,
      { meta: FinancialAccountFieldMeta.AccountFormatCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FinancialAccountField.AccountFormatCode}
          meta={FinancialAccountFieldMeta.AccountFormatCode}
          fieldConfig={fieldConfig}
          code={value?.AccountFormatCode}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialAccountField.CurrencyCode,
      { meta: FinancialAccountFieldMeta.CurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FinancialAccountField.CurrencyCode}
          meta={FinancialAccountFieldMeta.CurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.CurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialAccountField.PaymentNote,
      { meta: FinancialAccountFieldMeta.PaymentNote,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FinancialAccountField.PaymentNote}
          meta={FinancialAccountFieldMeta.PaymentNote}
          fieldConfig={fieldConfig}
          text={value?.PaymentNote}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialAccountField.FinancialInstitutionBranch,
      { meta: FinancialAccountFieldMeta.FinancialInstitutionBranch,
        template: ({value, renderContext, fieldConfig}) => <BranchDisplay
          key={FinancialAccountField.FinancialInstitutionBranch}
          meta={FinancialAccountFieldMeta.FinancialInstitutionBranch}
          fieldConfig={fieldConfig}
          branch={value?.FinancialInstitutionBranch}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialAccountField.Country,
      { meta: FinancialAccountFieldMeta.Country,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={FinancialAccountField.Country}
          meta={FinancialAccountFieldMeta.Country}
          fieldConfig={fieldConfig}
          country={value?.Country}
          renderContext={renderContext}
        />}
    ]
]) 

export function FinancialAccountDisplay<TFieldMeta>({ meta, fieldConfig, financialAccount, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    FinancialAccountTypeName,
    meta,
    fieldConfig,
    financialAccount,
    renderContext,
    FinancialAccountSubElementsMap,
  )
}
