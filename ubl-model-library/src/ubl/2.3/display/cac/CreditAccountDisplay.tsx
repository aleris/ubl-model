import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CreditAccount } from  '../../model/cac/CreditAccount'
import { CreditAccountField, CreditAccountFieldMeta, CreditAccountTypeName } from  '../../meta/cac/CreditAccountMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CreditAccount, void>
  creditAccount: CreditAccount[] | undefined
  renderContext: RenderContext
}

export const CreditAccountSubElementsMap: SubElementsTemplatesMap<CreditAccountField, CreditAccount, void> = new Map([
    [
      CreditAccountField.UBLExtensions,
      { meta: CreditAccountFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CreditAccountField.UBLExtensions}
          meta={CreditAccountFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CreditAccountField.AccountID,
      { meta: CreditAccountFieldMeta.AccountID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CreditAccountField.AccountID}
          meta={CreditAccountFieldMeta.AccountID}
          fieldConfig={fieldConfig}
          identifier={value?.AccountID}
          renderContext={renderContext}
        />}
    ]
]) 

export function CreditAccountDisplay<TFieldMeta>({ meta, fieldConfig, creditAccount, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CreditAccountTypeName,
    meta,
    fieldConfig,
    creditAccount,
    renderContext,
    CreditAccountSubElementsMap,
  )
}
