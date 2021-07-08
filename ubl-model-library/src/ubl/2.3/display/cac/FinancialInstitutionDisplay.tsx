import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { FinancialInstitution } from  '../../model/cac/FinancialInstitution'
import { FinancialInstitutionField, FinancialInstitutionFieldMeta, FinancialInstitutionTypeName } from  '../../meta/cac/FinancialInstitutionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<FinancialInstitution, void>
  financialInstitution: FinancialInstitution[] | undefined
  renderContext: RenderContext
}

export const FinancialInstitutionSubElementsMap: SubElementsTemplatesMap<FinancialInstitutionField, FinancialInstitution, void> = new Map([
    [
      FinancialInstitutionField.UBLExtensions,
      { meta: FinancialInstitutionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={FinancialInstitutionField.UBLExtensions}
          meta={FinancialInstitutionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialInstitutionField.ID,
      { meta: FinancialInstitutionFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FinancialInstitutionField.ID}
          meta={FinancialInstitutionFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialInstitutionField.Name,
      { meta: FinancialInstitutionFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FinancialInstitutionField.Name}
          meta={FinancialInstitutionFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialInstitutionField.Address,
      { meta: FinancialInstitutionFieldMeta.Address,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={FinancialInstitutionField.Address}
          meta={FinancialInstitutionFieldMeta.Address}
          fieldConfig={fieldConfig}
          address={value?.Address}
          renderContext={renderContext}
        />}
    ]
]) 

export function FinancialInstitutionDisplay<TFieldMeta>({ meta, fieldConfig, financialInstitution, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    FinancialInstitutionTypeName,
    meta,
    fieldConfig,
    financialInstitution,
    renderContext,
    FinancialInstitutionSubElementsMap,
  )
}
