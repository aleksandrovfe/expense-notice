import React from "react";
import {ChartBar} from "./ChartBar/ChartBar";
import './Chart.css'

export const Chart = ({dataPoints}) => {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className="chart-bar__wrapper">
            {
                dataPoints.map(dataPoint => (
                    <React.Fragment key={dataPoint.id} >
                        <ChartBar
                            value={dataPoint.value}
                            maxValue={totalMaximum}
                            label={dataPoint.label}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
}
