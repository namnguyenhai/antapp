const data = [
    {
        key: '1',
        name: 'Hai Nam',
        age: 23,
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

export const users = {
    state: {
        listUser: data,
        count: data.length,
    },
    reducers: {
        setListUser(state,listUser){
            return {
                ... state,
                listUser
            };
        },
        setCount(state,count){
            return{
                ... state,
                count
            }
        }
    },
    effects: (dispath)=> ({

    }),
    selectors: (slice,createSelector)=>({
        selectCount(){
            return slice(state => state.count);
        }
    })
}