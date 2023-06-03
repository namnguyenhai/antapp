import { Divider, Radio, Table, Button } from 'antd';
import { useState } from 'react';
import { CSVLink } from 'react-csv';
import { useDispatch, useSelector } from 'react-redux';
import  styled  from "styled-components";

const StyledUser = styled.div`
    width: 100%;
    height: 100%;
`
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};
export const Customer = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [dataCustomer, setDataCustomer] = useState({});
    const customersStore = useSelector((state) => state.customer);
    const dispatch = useDispatch(); 
    return (<StyledUser>
        <div>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value);
                }}
                value={selectionType}
            >
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">radio</Radio>
            </Radio.Group>

            <Divider />

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={customersStore.listCustomer}
            />
        </div>
        <Button type="primary"><CSVLink data={customersStore.listCustomer}>Download me</CSVLink></Button>
        

    </StyledUser>

    );


}