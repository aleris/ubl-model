import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalCollaboration } from  '../../model/cac/DigitalCollaboration'
import { DigitalCollaborationFieldMeta } from  '../../meta/cac/DigitalCollaborationMeta'
import DigitalServiceDisplay from './DigitalServiceDisplay'
import { DigitalService } from '../../model/cac/DigitalService'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: DigitalCollaboration
  meta: FieldMeta<T>
}

export default function DigitalCollaborationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DigitalCollaborationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DigitalCollaborationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCollaborationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalCollaborationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCollaborationFieldMeta.SendingDigitalService} 
          value={value.SendingDigitalService}
          itemDisplay={ (itemValue: DigitalService, key: string | number) =>
            <DigitalServiceDisplay key={key} meta={DigitalCollaborationFieldMeta.SendingDigitalService} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCollaborationFieldMeta.ReceivingDigitalService} 
          value={value.ReceivingDigitalService}
          itemDisplay={ (itemValue: DigitalService, key: string | number) =>
            <DigitalServiceDisplay key={key} meta={DigitalCollaborationFieldMeta.ReceivingDigitalService} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
