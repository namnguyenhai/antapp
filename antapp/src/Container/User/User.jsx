import { useState, useEffect } from 'react';
import { Button, Divider, Radio, Table, Modal, Form, Checkbox, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// Table
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
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sydney No. 1 Lake Park',
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


export const User = () => {
    // table
    const [selectionType, setSelectionType] = useState('checkbox');

    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // data
    const [dataUser, setDataUser] = useState(data);

    // Form
    const onFinish = (values) => {
        console.log('Success:', values);
        const newData = usersStore.listUser.concat([{
            key: Math.floor(Math.random() * 100) + 1,
            name: values.username,
            age: values.age,
            address: values.address,
        }])
        setDataUser(newData);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    // rematch

    const usersStore = useSelector((state) => state.users);
    const dispath = useDispatch();
    return (
        <div>
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
                    dataSource={usersStore.listUser}
                />
            </div>

            <Modal title="Basic Modal" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your age!',
                            },
                        ]}
                    >
                        {/* <Input.Password /> */}
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address!',
                            },
                        ]}
                    >
                        {/* <Input.Password /> */}
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Button type="primary" onClick={showModal}>Add user</Button>
            <Button type="primary" style={{ margin: "20px" }}>Delete user</Button>
        </div>


    );

}