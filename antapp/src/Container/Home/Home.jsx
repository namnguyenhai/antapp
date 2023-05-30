import {
    UserOutlined,
} from '@ant-design/icons';
import { PrimaryLayout } from "Component/Layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import { styled } from "styled-components";
import { Line } from '@ant-design/charts';
import { Pie } from '@ant-design/plots';
import {Col, Row, Statistic, Typography } from 'antd';
const {  Title } = Typography;
// const StyledHome = styled.div`
//     width: 100%;
//     height: 100%;
    
// `
const DemoPie = () => {
    const data = [
      {
        type: 'Pie',
        value: 27,
      },
      {
        type: 'Tea',
        value: 25,
      },
      {
        type: 'Egg',
        value: 18,
      },
      {
        type: 'Milk',
        value: 15,
      },
      {
        type: 'Chocolate',
        value: 10,
      },
      {
        type: 'Chicken',
        value: 5,
      },
    ];
    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 1,
      innerRadius: 0.6,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
      },
      interactions: [
        {
          type: 'element-selected',
        },
        {
          type: 'element-active',
        },
      ],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          content: 'Number Products',
        },
      },
    };
    return <Pie {...config} />;
  };
export const Home = () => {

    const myData = [
        { x: "Monday", y: 10 },
        { x: "Tuesday", y: 25 },
        { x: "Wednesday", y: 43 },
        { x: "Thursday", y: 11 },
        { x: "Friday", y: 9 },
        { x: "Saturday", y: 60 },
        { x: "Sunday", y: 100 },

    ];

    return (
        <PrimaryLayout tittle={"Home Page"}>
            {/* <StyledHome> */}
                <Row gutter={16} justify={"center"}>
                    <Col span={12} align="middle" >
                        <Statistic title="Active Users" value={1000} prefix={<UserOutlined></UserOutlined>} />
                    </Col>
                    <Col span={12} align="middle" >
                        <Statistic title="Number of Products" value={500} prefix={<FontAwesomeIcon icon={faBoxesStacked} />} />
                    </Col>
                    <Col span={24} align="middle">
                        <Line
                            data={myData}
                            height={500}
                            xField="x"
                            yField="y"
                            point={{ size: 5, shape: 'diamon' }}
                            color='blue'
                        />
                        <Title >Traffic chart</Title>
                    </Col>
                    <Col span={24} align="middle">
                        <DemoPie></DemoPie>
                    </Col>
                </Row>

            {/* </StyledHome> */}

        </PrimaryLayout>
    );
}