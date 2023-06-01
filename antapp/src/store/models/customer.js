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

export const customer = {
    state: {
        listCustomer: data,
        count: data.length,
    },
    reducers: {
        setListCustomer(state,listCustomer){
            console.log("setListcustomer",state);
            return {
                ... state,
                listCustomer
            }

        },
        setCount(state,count){
            return {
                ... state,
                count
            }
        }
    },
    effects: (dispath) => ({

    }),
    // selectors: (slice, createSelector)({
    //     selectCount(){
    //         return slice(state=>state.count);
    //     }
    // })
    selectors: (slice,createSelector)=>({
        selectCount(){
            return slice(state=>state.count);
        }
    })
}