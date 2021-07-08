import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Address } from  '../../model/cac/Address'
import { AddressField, AddressFieldMeta, AddressTypeName } from  '../../meta/cac/AddressMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressLineDisplay } from './AddressLineDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CountryDisplay } from './CountryDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationCoordinateDisplay } from './LocationCoordinateDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Address, void>
  address: Address[] | undefined
  renderContext: RenderContext
}

export const AddressSubElementsMap: SubElementsTemplatesMap<AddressField, Address, void> = new Map([
    [
      AddressField.UBLExtensions,
      { meta: AddressFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AddressField.UBLExtensions}
          meta={AddressFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.ID,
      { meta: AddressFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AddressField.ID}
          meta={AddressFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.AddressTypeCode,
      { meta: AddressFieldMeta.AddressTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AddressField.AddressTypeCode}
          meta={AddressFieldMeta.AddressTypeCode}
          fieldConfig={fieldConfig}
          code={value?.AddressTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.AddressFormatCode,
      { meta: AddressFieldMeta.AddressFormatCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AddressField.AddressFormatCode}
          meta={AddressFieldMeta.AddressFormatCode}
          fieldConfig={fieldConfig}
          code={value?.AddressFormatCode}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.Postbox,
      { meta: AddressFieldMeta.Postbox,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.Postbox}
          meta={AddressFieldMeta.Postbox}
          fieldConfig={fieldConfig}
          text={value?.Postbox}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.Floor,
      { meta: AddressFieldMeta.Floor,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.Floor}
          meta={AddressFieldMeta.Floor}
          fieldConfig={fieldConfig}
          text={value?.Floor}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.Room,
      { meta: AddressFieldMeta.Room,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.Room}
          meta={AddressFieldMeta.Room}
          fieldConfig={fieldConfig}
          text={value?.Room}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.StreetName,
      { meta: AddressFieldMeta.StreetName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.StreetName}
          meta={AddressFieldMeta.StreetName}
          fieldConfig={fieldConfig}
          text={value?.StreetName}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.AdditionalStreetName,
      { meta: AddressFieldMeta.AdditionalStreetName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.AdditionalStreetName}
          meta={AddressFieldMeta.AdditionalStreetName}
          fieldConfig={fieldConfig}
          text={value?.AdditionalStreetName}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.BlockName,
      { meta: AddressFieldMeta.BlockName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.BlockName}
          meta={AddressFieldMeta.BlockName}
          fieldConfig={fieldConfig}
          text={value?.BlockName}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.BuildingName,
      { meta: AddressFieldMeta.BuildingName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.BuildingName}
          meta={AddressFieldMeta.BuildingName}
          fieldConfig={fieldConfig}
          text={value?.BuildingName}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.BuildingNumber,
      { meta: AddressFieldMeta.BuildingNumber,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.BuildingNumber}
          meta={AddressFieldMeta.BuildingNumber}
          fieldConfig={fieldConfig}
          text={value?.BuildingNumber}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.Description,
      { meta: AddressFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.Description}
          meta={AddressFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.InhouseMail,
      { meta: AddressFieldMeta.InhouseMail,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.InhouseMail}
          meta={AddressFieldMeta.InhouseMail}
          fieldConfig={fieldConfig}
          text={value?.InhouseMail}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.Department,
      { meta: AddressFieldMeta.Department,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.Department}
          meta={AddressFieldMeta.Department}
          fieldConfig={fieldConfig}
          text={value?.Department}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.MarkAttention,
      { meta: AddressFieldMeta.MarkAttention,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.MarkAttention}
          meta={AddressFieldMeta.MarkAttention}
          fieldConfig={fieldConfig}
          text={value?.MarkAttention}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.MarkCare,
      { meta: AddressFieldMeta.MarkCare,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.MarkCare}
          meta={AddressFieldMeta.MarkCare}
          fieldConfig={fieldConfig}
          text={value?.MarkCare}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.PlotIdentification,
      { meta: AddressFieldMeta.PlotIdentification,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.PlotIdentification}
          meta={AddressFieldMeta.PlotIdentification}
          fieldConfig={fieldConfig}
          text={value?.PlotIdentification}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.CitySubdivisionName,
      { meta: AddressFieldMeta.CitySubdivisionName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.CitySubdivisionName}
          meta={AddressFieldMeta.CitySubdivisionName}
          fieldConfig={fieldConfig}
          text={value?.CitySubdivisionName}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.CityName,
      { meta: AddressFieldMeta.CityName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.CityName}
          meta={AddressFieldMeta.CityName}
          fieldConfig={fieldConfig}
          text={value?.CityName}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.PostalZone,
      { meta: AddressFieldMeta.PostalZone,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.PostalZone}
          meta={AddressFieldMeta.PostalZone}
          fieldConfig={fieldConfig}
          text={value?.PostalZone}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.CountrySubentity,
      { meta: AddressFieldMeta.CountrySubentity,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.CountrySubentity}
          meta={AddressFieldMeta.CountrySubentity}
          fieldConfig={fieldConfig}
          text={value?.CountrySubentity}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.CountrySubentityCode,
      { meta: AddressFieldMeta.CountrySubentityCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AddressField.CountrySubentityCode}
          meta={AddressFieldMeta.CountrySubentityCode}
          fieldConfig={fieldConfig}
          code={value?.CountrySubentityCode}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.Region,
      { meta: AddressFieldMeta.Region,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.Region}
          meta={AddressFieldMeta.Region}
          fieldConfig={fieldConfig}
          text={value?.Region}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.District,
      { meta: AddressFieldMeta.District,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.District}
          meta={AddressFieldMeta.District}
          fieldConfig={fieldConfig}
          text={value?.District}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.TimezoneOffset,
      { meta: AddressFieldMeta.TimezoneOffset,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressField.TimezoneOffset}
          meta={AddressFieldMeta.TimezoneOffset}
          fieldConfig={fieldConfig}
          text={value?.TimezoneOffset}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.AddressLine,
      { meta: AddressFieldMeta.AddressLine,
        template: ({value, renderContext, fieldConfig}) => <AddressLineDisplay
          key={AddressField.AddressLine}
          meta={AddressFieldMeta.AddressLine}
          fieldConfig={fieldConfig}
          addressLine={value?.AddressLine}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.Country,
      { meta: AddressFieldMeta.Country,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={AddressField.Country}
          meta={AddressFieldMeta.Country}
          fieldConfig={fieldConfig}
          country={value?.Country}
          renderContext={renderContext}
        />}
    ],

    [
      AddressField.LocationCoordinate,
      { meta: AddressFieldMeta.LocationCoordinate,
        template: ({value, renderContext, fieldConfig}) => <LocationCoordinateDisplay
          key={AddressField.LocationCoordinate}
          meta={AddressFieldMeta.LocationCoordinate}
          fieldConfig={fieldConfig}
          locationCoordinate={value?.LocationCoordinate}
          renderContext={renderContext}
        />}
    ]
]) 

export function AddressDisplay<TFieldMeta>({ meta, fieldConfig, address, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AddressTypeName,
    meta,
    fieldConfig,
    address,
    renderContext,
    AddressSubElementsMap,
  )
}
