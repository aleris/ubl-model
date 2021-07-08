import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CardAccount } from  '../../model/cac/CardAccount'
import { CardAccountField, CardAccountFieldMeta, CardAccountTypeName } from  '../../meta/cac/CardAccountMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CardAccount, void>
  cardAccount: CardAccount[] | undefined
  renderContext: RenderContext
}

export const CardAccountSubElementsMap: SubElementsTemplatesMap<CardAccountField, CardAccount, void> = new Map([
    [
      CardAccountField.UBLExtensions,
      { meta: CardAccountFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CardAccountField.UBLExtensions}
          meta={CardAccountFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.PrimaryAccountNumberID,
      { meta: CardAccountFieldMeta.PrimaryAccountNumberID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CardAccountField.PrimaryAccountNumberID}
          meta={CardAccountFieldMeta.PrimaryAccountNumberID}
          fieldConfig={fieldConfig}
          identifier={value?.PrimaryAccountNumberID}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.NetworkID,
      { meta: CardAccountFieldMeta.NetworkID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CardAccountField.NetworkID}
          meta={CardAccountFieldMeta.NetworkID}
          fieldConfig={fieldConfig}
          identifier={value?.NetworkID}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.CardTypeCode,
      { meta: CardAccountFieldMeta.CardTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CardAccountField.CardTypeCode}
          meta={CardAccountFieldMeta.CardTypeCode}
          fieldConfig={fieldConfig}
          code={value?.CardTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.ValidityStartDate,
      { meta: CardAccountFieldMeta.ValidityStartDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CardAccountField.ValidityStartDate}
          meta={CardAccountFieldMeta.ValidityStartDate}
          fieldConfig={fieldConfig}
          date={value?.ValidityStartDate}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.ExpiryDate,
      { meta: CardAccountFieldMeta.ExpiryDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CardAccountField.ExpiryDate}
          meta={CardAccountFieldMeta.ExpiryDate}
          fieldConfig={fieldConfig}
          date={value?.ExpiryDate}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.IssuerID,
      { meta: CardAccountFieldMeta.IssuerID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CardAccountField.IssuerID}
          meta={CardAccountFieldMeta.IssuerID}
          fieldConfig={fieldConfig}
          identifier={value?.IssuerID}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.IssueNumberID,
      { meta: CardAccountFieldMeta.IssueNumberID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CardAccountField.IssueNumberID}
          meta={CardAccountFieldMeta.IssueNumberID}
          fieldConfig={fieldConfig}
          identifier={value?.IssueNumberID}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.CV2ID,
      { meta: CardAccountFieldMeta.CV2ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CardAccountField.CV2ID}
          meta={CardAccountFieldMeta.CV2ID}
          fieldConfig={fieldConfig}
          identifier={value?.CV2ID}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.CardChipCode,
      { meta: CardAccountFieldMeta.CardChipCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CardAccountField.CardChipCode}
          meta={CardAccountFieldMeta.CardChipCode}
          fieldConfig={fieldConfig}
          code={value?.CardChipCode}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.ChipApplicationID,
      { meta: CardAccountFieldMeta.ChipApplicationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CardAccountField.ChipApplicationID}
          meta={CardAccountFieldMeta.ChipApplicationID}
          fieldConfig={fieldConfig}
          identifier={value?.ChipApplicationID}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.HolderName,
      { meta: CardAccountFieldMeta.HolderName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CardAccountField.HolderName}
          meta={CardAccountFieldMeta.HolderName}
          fieldConfig={fieldConfig}
          text={value?.HolderName}
          renderContext={renderContext}
        />}
    ],

    [
      CardAccountField.RoleCode,
      { meta: CardAccountFieldMeta.RoleCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CardAccountField.RoleCode}
          meta={CardAccountFieldMeta.RoleCode}
          fieldConfig={fieldConfig}
          code={value?.RoleCode}
          renderContext={renderContext}
        />}
    ]
]) 

export function CardAccountDisplay<TFieldMeta>({ meta, fieldConfig, cardAccount, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CardAccountTypeName,
    meta,
    fieldConfig,
    cardAccount,
    renderContext,
    CardAccountSubElementsMap,
  )
}
