import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: QualificationResolution
  meta: FieldMeta<T>
}

export default function QualificationResolutionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-QualificationResolution ubl-QualificationResolutionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-QualificationResolution ubl-UBLExtensions"
          meta={QualificationResolutionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={QualificationResolutionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationResolution ubl-Code ubl-AdmissionCode"
          meta={QualificationResolutionFieldMeta.AdmissionCode} 
          value={value.AdmissionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Admission Code"
              value={itemValue}
              meta={QualificationResolutionFieldMeta.AdmissionCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-QualificationResolution ubl-Text ubl-ExclusionReason"
          meta={QualificationResolutionFieldMeta.ExclusionReason} 
          value={value.ExclusionReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Exclusion Reason"
              value={itemValue}
              meta={QualificationResolutionFieldMeta.ExclusionReason}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-QualificationResolution ubl-Text ubl-Resolution"
          meta={QualificationResolutionFieldMeta.Resolution} 
          value={value.Resolution}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Resolution"
              value={itemValue}
              meta={QualificationResolutionFieldMeta.Resolution}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationResolution ubl-Date ubl-ResolutionDate"
          meta={QualificationResolutionFieldMeta.ResolutionDate} 
          value={value.ResolutionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Resolution Date"
              value={itemValue}
              meta={QualificationResolutionFieldMeta.ResolutionDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationResolution ubl-Time ubl-ResolutionTime"
          meta={QualificationResolutionFieldMeta.ResolutionTime} 
          value={value.ResolutionTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Resolution Time"
              value={itemValue}
              meta={QualificationResolutionFieldMeta.ResolutionTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-QualificationResolution ubl-ProcurementProjectLot"
          meta={QualificationResolutionFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay
              key={key}
              label="Procurement Project Lot"
              value={itemValue}
              meta={QualificationResolutionFieldMeta.ProcurementProjectLot}
            />
          }
        />
        </div>
    </div>
  )
}
