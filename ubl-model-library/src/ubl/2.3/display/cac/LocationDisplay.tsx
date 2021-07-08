import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Location } from  '../../model/cac/Location'
import { LocationField, LocationFieldMeta, LocationTypeName } from  '../../meta/cac/LocationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationCoordinateDisplay } from './LocationCoordinateDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Location, void>
  location: Location[] | undefined
  renderContext: RenderContext
}

export const LocationSubElementsMap: SubElementsTemplatesMap<LocationField, Location, void> = new Map([
    [
      LocationField.UBLExtensions,
      { meta: LocationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={LocationField.UBLExtensions}
          meta={LocationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.ID,
      { meta: LocationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LocationField.ID}
          meta={LocationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.Description,
      { meta: LocationFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LocationField.Description}
          meta={LocationFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.Conditions,
      { meta: LocationFieldMeta.Conditions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LocationField.Conditions}
          meta={LocationFieldMeta.Conditions}
          fieldConfig={fieldConfig}
          text={value?.Conditions}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.CountrySubentity,
      { meta: LocationFieldMeta.CountrySubentity,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LocationField.CountrySubentity}
          meta={LocationFieldMeta.CountrySubentity}
          fieldConfig={fieldConfig}
          text={value?.CountrySubentity}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.CountrySubentityCode,
      { meta: LocationFieldMeta.CountrySubentityCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={LocationField.CountrySubentityCode}
          meta={LocationFieldMeta.CountrySubentityCode}
          fieldConfig={fieldConfig}
          code={value?.CountrySubentityCode}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.LocationTypeCode,
      { meta: LocationFieldMeta.LocationTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={LocationField.LocationTypeCode}
          meta={LocationFieldMeta.LocationTypeCode}
          fieldConfig={fieldConfig}
          code={value?.LocationTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.InformationURI,
      { meta: LocationFieldMeta.InformationURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LocationField.InformationURI}
          meta={LocationFieldMeta.InformationURI}
          fieldConfig={fieldConfig}
          identifier={value?.InformationURI}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.Name,
      { meta: LocationFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LocationField.Name}
          meta={LocationFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.ValidityPeriod,
      { meta: LocationFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={LocationField.ValidityPeriod}
          meta={LocationFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.Address,
      { meta: LocationFieldMeta.Address,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={LocationField.Address}
          meta={LocationFieldMeta.Address}
          fieldConfig={fieldConfig}
          address={value?.Address}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.SubsidiaryLocation,
      { meta: LocationFieldMeta.SubsidiaryLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={LocationField.SubsidiaryLocation}
          meta={LocationFieldMeta.SubsidiaryLocation}
          fieldConfig={fieldConfig}
          location={value?.SubsidiaryLocation}
          renderContext={renderContext}
        />}
    ],

    [
      LocationField.LocationCoordinate,
      { meta: LocationFieldMeta.LocationCoordinate,
        template: ({value, renderContext, fieldConfig}) => <LocationCoordinateDisplay
          key={LocationField.LocationCoordinate}
          meta={LocationFieldMeta.LocationCoordinate}
          fieldConfig={fieldConfig}
          locationCoordinate={value?.LocationCoordinate}
          renderContext={renderContext}
        />}
    ]
]) 

export function LocationDisplay<TFieldMeta>({ meta, fieldConfig, location, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    LocationTypeName,
    meta,
    fieldConfig,
    location,
    renderContext,
    LocationSubElementsMap,
  )
}
