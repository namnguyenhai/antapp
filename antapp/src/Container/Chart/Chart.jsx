import { styled } from "styled-components"
import { Line, RadialBar, Column } from '@ant-design/plots';
import { Col, Row } from 'antd';
const StyledChart = styled.div`
    width: 100%;
    height: 100%;
    .counter_clock{
        transform: scale(-1,1) ;
    }
`
const dataCurveLine = [
    {
        "Date": "2010-01",
        "scales": 1998
    },
    {
        "Date": "2010-02",
        "scales": 1850
    },
    {
        "Date": "2010-03",
        "scales": 1720
    },
    {
        "Date": "2010-04",
        "scales": 1818
    },
    {
        "Date": "2010-05",
        "scales": 1920
    },
    {
        "Date": "2010-06",
        "scales": 1802
    },
    {
        "Date": "2010-07",
        "scales": 1945
    },
    {
        "Date": "2010-08",
        "scales": 1856
    },
    {
        "Date": "2010-09",
        "scales": 2107
    },
    {
        "Date": "2010-10",
        "scales": 2140
    },
    {
        "Date": "2010-11",
        "scales": 2311
    },
    {
        "Date": "2010-12",
        "scales": 1972
    },
    {
        "Date": "2011-01",
        "scales": 1760
    },
    {
        "Date": "2011-02",
        "scales": 1824
    },
    {
        "Date": "2011-03",
        "scales": 1801
    },
    {
        "Date": "2011-04",
        "scales": 2001
    },
    {
        "Date": "2011-05",
        "scales": 1640
    },
    {
        "Date": "2011-06",
        "scales": 1502
    },
    {
        "Date": "2011-07",
        "scales": 1621
    },
    {
        "Date": "2011-08",
        "scales": 1480
    },
    {
        "Date": "2011-09",
        "scales": 1549
    },
    {
        "Date": "2011-10",
        "scales": 1390
    },
    {
        "Date": "2011-11",
        "scales": 1325
    },
    {
        "Date": "2011-12",
        "scales": 1250
    },
    {
        "Date": "2012-01",
        "scales": 1394
    },
    {
        "Date": "2012-02",
        "scales": 1406
    },
    {
        "Date": "2012-03",
        "scales": 1578
    },
    {
        "Date": "2012-04",
        "scales": 1465
    },
    {
        "Date": "2012-05",
        "scales": 1689
    },
    {
        "Date": "2012-06",
        "scales": 1755
    },
    {
        "Date": "2012-07",
        "scales": 1495
    },
    {
        "Date": "2012-08",
        "scales": 1508
    },
    {
        "Date": "2012-09",
        "scales": 1433
    },
    {
        "Date": "2012-10",
        "scales": 1344
    },
    {
        "Date": "2012-11",
        "scales": 1201
    },
    {
        "Date": "2012-12",
        "scales": 1065
    },
    {
        "Date": "2013-01",
        "scales": 1255
    },
    {
        "Date": "2013-02",
        "scales": 1429
    },
    {
        "Date": "2013-03",
        "scales": 1398
    },
    {
        "Date": "2013-04",
        "scales": 1678
    },
    {
        "Date": "2013-05",
        "scales": 1524
    },
    {
        "Date": "2013-06",
        "scales": 1688
    },
    {
        "Date": "2013-07",
        "scales": 1500
    },
    {
        "Date": "2013-08",
        "scales": 1670
    },
    {
        "Date": "2013-09",
        "scales": 1734
    },
    {
        "Date": "2013-10",
        "scales": 1699
    },
    {
        "Date": "2013-11",
        "scales": 1508
    },
    {
        "Date": "2013-12",
        "scales": 1680
    },
    {
        "Date": "2014-01",
        "scales": 1750
    },
    {
        "Date": "2014-02",
        "scales": 1602
    },
    {
        "Date": "2014-03",
        "scales": 1834
    },
    {
        "Date": "2014-04",
        "scales": 1722
    },
    {
        "Date": "2014-05",
        "scales": 1430
    },
    {
        "Date": "2014-06",
        "scales": 1280
    },
    {
        "Date": "2014-07",
        "scales": 1367
    },
    {
        "Date": "2014-08",
        "scales": 1155
    },
    {
        "Date": "2014-09",
        "scales": 1289
    },
    {
        "Date": "2014-10",
        "scales": 1104
    },
    {
        "Date": "2014-11",
        "scales": 1246
    },
    {
        "Date": "2014-12",
        "scales": 1098
    },
    {
        "Date": "2015-01",
        "scales": 1189
    },
    {
        "Date": "2015-02",
        "scales": 1276
    },
    {
        "Date": "2015-03",
        "scales": 1033
    },
    {
        "Date": "2015-04",
        "scales": 956
    },
    {
        "Date": "2015-05",
        "scales": 845
    },
    {
        "Date": "2015-06",
        "scales": 1089
    },
    {
        "Date": "2015-07",
        "scales": 944
    },
    {
        "Date": "2015-08",
        "scales": 1043
    },
    {
        "Date": "2015-09",
        "scales": 893
    },
    {
        "Date": "2015-10",
        "scales": 840
    },
    {
        "Date": "2015-11",
        "scales": 934
    },
    {
        "Date": "2015-12",
        "scales": 810
    },
    {
        "Date": "2016-01",
        "scales": 782
    },
    {
        "Date": "2016-02",
        "scales": 1089
    },
    {
        "Date": "2016-03",
        "scales": 745
    },
    {
        "Date": "2016-04",
        "scales": 680
    },
    {
        "Date": "2016-05",
        "scales": 802
    },
    {
        "Date": "2016-06",
        "scales": 697
    },
    {
        "Date": "2016-07",
        "scales": 583
    },
    {
        "Date": "2016-08",
        "scales": 456
    },
    {
        "Date": "2016-09",
        "scales": 524
    },
    {
        "Date": "2016-10",
        "scales": 398
    },
    {
        "Date": "2016-11",
        "scales": 278
    },
    {
        "Date": "2016-12",
        "scales": 195
    },
    {
        "Date": "2017-01",
        "scales": 145
    },
    {
        "Date": "2017-02",
        "scales": 207
    }
]
const dataRadialBar = [
    {
        name1: '1',
        star: 80,
    },
    {
        name1: '2',
        star: 70,
    },
    {
        name1: '3',
        star: 40,
    },
    {
        name1: '4',
        star: 20,
    },
    {
        name1: '5',
        star: 100,
    },

]
// const dataColumnBar = [
//     {
//       type: '6',
//       value: 130000,
//     },
//     {
//       type: '7',
//       value: -120000,
//     },
//     {
//       type: '8',
//       value: 220000,
//     },
//     {
//       type: '9',
//       value: -20000,
//     },
//     {
//       type: '10',
//       value: -10000,
//     },
//     {
//       type: '11',
//       value: 10000,
//     },
//     {
//       type: '12',
//       value: 15000,
//     },

//   ];

export const Chart = () => {
    const paletteSemanticRed = '#F4664A';
    const brandColor = '#5B8FF9';
    const configCurveLine = {
        data: dataCurveLine,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
        smooth: true,
        color: 'l(0) 0:#9747FF 1:#14F4C9'
    };

    const configRaidalBar = {
        data: dataRadialBar,
        xField: 'name1',
        yField: 'star',
        xAxis: false,
        maxAngle: 360,
        radius: 0.8,
        innerRadius: 0.2,
        gapDegree: 200,
        tooltip: {
            formatter: (datum) => {
                return {
                    name: 'star',
                    value: datum.star,
                    
                };
                
            },
            reversed: true
            

        },
        colorField: 'star',

        color: ({ star }) => {
            const checkStar = Math.abs(star);
            if ( checkStar >= 80 &&checkStar < 100)   {
                return '#F3BA2F';
            } else if (checkStar >= 60 && checkStar < 80) {
                return '#54C2C1';
            } else if (checkStar >= 40 && checkStar < 60) {
                return '#0F0F3F';
            } else if (checkStar >= 20 && checkStar < 40) {
                return '#9020E9';
            }

            return '#ffffff';
        },
        barBackground: {},
        barStyle: {
            lineCap: 'butt',
        },

    };
     
    
    
    return <StyledChart>
        <Row gutter={[16, 24]}>
            <Col span={24}><Line {...configCurveLine}></Line></Col>
            <Col span={12} align="middle">
                <RadialBar  {...configRaidalBar}></RadialBar>
            </Col>
            <Col span={12}>
                
            </Col>
        </Row>


    </StyledChart>
}