import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalCollaboration } from  '../../model/cac/DigitalCollaboration'
import { DigitalCollaborationFieldMeta } from  '../../meta/cac/DigitalCollaborationMeta'
import DigitalServiceDisplay from './DigitalServiceDisplay'
import { DigitalService } from '../../model/cac/DigitalService'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: DigitalCollaboration | undefined
  meta: FieldMeta<T>
}

export default function DigitalCollaborationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DigitalCollaboration">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DigitalCollaborationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DigitalCollaborationFieldMeta.ID}
          />

          <DigitalServiceDisplay
            label="Sending Digital Service"
            value={value.SendingDigitalService?.[0]}
            meta={DigitalCollaborationFieldMeta.SendingDigitalService}
          />

          <DigitalServiceDisplay
            label="Receiving Digital Service"
            value={value.ReceivingDigitalService?.[0]}
            meta={DigitalCollaborationFieldMeta.ReceivingDigitalService}
          />
        </div>
    </div>
  )
}
