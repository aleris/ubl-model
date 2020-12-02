import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererPartyQualification } from  '../../model/cac/TendererPartyQualification'
import { TendererPartyQualificationFieldMeta } from  '../../meta/cac/TendererPartyQualificationMeta'
import ProcurementProjectLotDisplay from './ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import QualifyingPartyDisplay from './QualifyingPartyDisplay'
import { QualifyingParty } from '../../model/cac/QualifyingParty'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TendererPartyQualification
  meta: FieldMeta<T>
}

export default function TendererPartyQualificationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TendererPartyQualificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TendererPartyQualificationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererPartyQualificationFieldMeta.InterestedProcurementProjectLot} 
          value={value.InterestedProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay key={key} meta={TendererPartyQualificationFieldMeta.InterestedProcurementProjectLot} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererPartyQualificationFieldMeta.MainQualifyingParty} 
          value={value.MainQualifyingParty}
          itemDisplay={ (itemValue: QualifyingParty, key: string | number) =>
            <QualifyingPartyDisplay key={key} meta={TendererPartyQualificationFieldMeta.MainQualifyingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TendererPartyQualificationFieldMeta.AdditionalQualifyingParty} 
          value={value.AdditionalQualifyingParty}
          itemDisplay={ (itemValue: QualifyingParty, key: string | number) =>
            <QualifyingPartyDisplay key={key} meta={TendererPartyQualificationFieldMeta.AdditionalQualifyingParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
