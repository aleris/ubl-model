import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: DigitalCollaboration
  meta: FieldMeta<T>
}

export default function DigitalCollaborationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DigitalCollaboration ubl-DigitalCollaborationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DigitalCollaboration ubl-UBLExtensions"
          meta={DigitalCollaborationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DigitalCollaborationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalCollaboration ubl-Identifier ubl-ID"
          meta={DigitalCollaborationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DigitalCollaborationFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DigitalCollaboration ubl-DigitalService ubl-SendingDigitalService"
          meta={DigitalCollaborationFieldMeta.SendingDigitalService} 
          value={value.SendingDigitalService}
          itemDisplay={ (itemValue: DigitalService, key: string | number) =>
            <DigitalServiceDisplay
              key={key}
              label="Sending Digital Service"
              value={itemValue}
              meta={DigitalCollaborationFieldMeta.SendingDigitalService}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DigitalCollaboration ubl-DigitalService ubl-ReceivingDigitalService"
          meta={DigitalCollaborationFieldMeta.ReceivingDigitalService} 
          value={value.ReceivingDigitalService}
          itemDisplay={ (itemValue: DigitalService, key: string | number) =>
            <DigitalServiceDisplay
              key={key}
              label="Receiving Digital Service"
              value={itemValue}
              meta={DigitalCollaborationFieldMeta.ReceivingDigitalService}
            />
          }
        />
        </div>
    </div>
  )
}
