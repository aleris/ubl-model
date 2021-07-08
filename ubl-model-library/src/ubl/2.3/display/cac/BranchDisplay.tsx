import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Branch } from  '../../model/cac/Branch'
import { BranchField, BranchFieldMeta, BranchTypeName } from  '../../meta/cac/BranchMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { FinancialInstitutionDisplay } from './FinancialInstitutionDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Branch, void>
  branch: Branch[] | undefined
  renderContext: RenderContext
}

export const BranchSubElementsMap: SubElementsTemplatesMap<BranchField, Branch, void> = new Map([
    [
      BranchField.UBLExtensions,
      { meta: BranchFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={BranchField.UBLExtensions}
          meta={BranchFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      BranchField.ID,
      { meta: BranchFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BranchField.ID}
          meta={BranchFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      BranchField.Name,
      { meta: BranchFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={BranchField.Name}
          meta={BranchFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      BranchField.FinancialInstitution,
      { meta: BranchFieldMeta.FinancialInstitution,
        template: ({value, renderContext, fieldConfig}) => <FinancialInstitutionDisplay
          key={BranchField.FinancialInstitution}
          meta={BranchFieldMeta.FinancialInstitution}
          fieldConfig={fieldConfig}
          financialInstitution={value?.FinancialInstitution}
          renderContext={renderContext}
        />}
    ],

    [
      BranchField.Address,
      { meta: BranchFieldMeta.Address,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={BranchField.Address}
          meta={BranchFieldMeta.Address}
          fieldConfig={fieldConfig}
          address={value?.Address}
          renderContext={renderContext}
        />}
    ]
]) 

export function BranchDisplay<TFieldMeta>({ meta, fieldConfig, branch, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    BranchTypeName,
    meta,
    fieldConfig,
    branch,
    renderContext,
    BranchSubElementsMap,
  )
}
