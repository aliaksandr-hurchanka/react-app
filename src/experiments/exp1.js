
const users = [{id: 1, name: 'Alex'}, {id: 2, name: 'David'}, {id: 3, name: 'David'}];

const UsersList = ({ list }) => list.map((item, i) => <li key={`${item.name}_${i}`}>{item.name}</li>)

const UsersWidget = () => {

    const filterList = (currentValue, currentList) => {
        console.log(currentValue, currentList);
        return currentList.filter(item => item.name === currentValue)
    };

    const [currentValue, setValue] = useState('');
    const [currentList, setList] = useState(users);

    return (
        <>
            <input onChange={e => setValue(e.target.value)} value={currentValue} />
            <button onClick={() => setList(filterList(currentValue, users))}>OK</button>
            <UsersList list={currentList} />
        </>
    );
};

const people = [
    {
        name: 'John',
        age: 23
    },
    {
        name: 'John',
        age: 43
    },
    {
        name: 'Alex',
        age: 36
    },
    {
        name: 'Piter',
        age: 56
    },
    {
        name: 'Piter',
        age: 56
    }
];



const groupArray = () => {
    const start = new Date().getTime();
    const groupArr = [];
    let obj = {};

    people.forEach((item, i, array) => (
        groupArr.push({
            name: item.name, groupItems: array.filter(user => user.name === item.name)
        })
        // obj[item.name] = obj[item.name]
        //     ? { groupItems: [...obj[item.name].groupItems, item] }
        //     : { groupItems: [item] }
    ))

    // for (let key in obj) {
    //     groupArr.push({ name: obj[key], groupItems: obj[key].groupItems });
    // }
    const end = new Date().getTime();
    const tmp = [...new Map( groupArr.map(item => [item.name, item])).values()];
    console.log(`SecondWay: ${end - start}ms`);
    return tmp;
    // return obj;
};

const getCurrentSizes = () => ({ height: window.innerHeight, width: window.innerWidth });

export const UserScreenSize = () => {

    const [sizes, setNewSizes] = useState(getCurrentSizes());

    useEffect(() => {
        function handleResize() {
          const { innerWidth, innerHeight } = window;

          setNewSizes(getCurrentSizes());
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return `Current size of the screen is ${sizes.height}x${sizes.width}`;
};
