import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { QualificationResolution } from  '../../model/cac/QualificationResolution'
import { QualificationResolutionFieldMeta } from  '../../meta/cac/QualificationResolutionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import ProcurementProjectLotDisplay from './ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: QualificationResolution | undefined
  meta: FieldMeta<T>
}

export default function QualificationResolutionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-QualificationResolution">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={QualificationResolutionFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Admission Code"
            value={value.AdmissionCode?.[0]}
            meta={QualificationResolutionFieldMeta.AdmissionCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ExclusionReason"
            label="Exclusion Reason"
            items={value.ExclusionReason}
            meta={QualificationResolutionFieldMeta.ExclusionReason} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Exclusion Reason"
                value={itemValue}
                meta={QualificationResolutionFieldMeta.ExclusionReason}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Resolution"
            label="Resolution"
            items={value.Resolution}
            meta={QualificationResolutionFieldMeta.Resolution} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Resolution"
                value={itemValue}
                meta={QualificationResolutionFieldMeta.Resolution}
              />
            }
          />

          <DateDisplay
            label="Resolution Date"
            value={value.ResolutionDate?.[0]}
            meta={QualificationResolutionFieldMeta.ResolutionDate}
          />

          <TimeDisplay
            label="Resolution Time"
            value={value.ResolutionTime?.[0]}
            meta={QualificationResolutionFieldMeta.ResolutionTime}
          />

          <ProcurementProjectLotDisplay
            label="Procurement Project Lot"
            value={value.ProcurementProjectLot?.[0]}
            meta={QualificationResolutionFieldMeta.ProcurementProjectLot}
          />
        </div>
    </div>
  )
}
