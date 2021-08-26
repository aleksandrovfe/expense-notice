import './ChartBar.css'

export const ChartBar = ({value, maxValue, label}) => {
    let barFillHeight = '0%'

    if (maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + '%'
    }

    return (
       <div className="chart-bar">
           <div className="chart-bar__border">
                <div className="chart-bar__inner" style={{height: barFillHeight}}>
                </div>
           </div>
           <p className="chart-bar__label">{label}</p>
       </div>
    )
}
