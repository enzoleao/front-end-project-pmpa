import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import api from '@/services/api';
import React, { useEffect, useState } from 'react';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const itemsChild = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
      },
      {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
      },
      {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
      },
]
const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <Collapse items={itemsChild} />,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const App: React.FC = () => {
    const [coints, setCoints] = useState<any>([])
    useEffect(()=> {
        const getCoints = async () => {
            const response = await api.get('/coint')
            setCoints(response.data)
        }
        getCoints()
     }, [])
  const onChange = (key: string | string[]) => {
    console.log(coints);
  };

  return <Collapse items={coints.map((i: any) => {
    return {
        key: i.id,
        label: i.name,
        children:<Collapse items={i.battalions.map((i: any) => {
            return {
                key: i.id,
                label: i.name,
                children: (
                    <table>
                        <thead>
                            <tr>
                                <th>GRAD</th>
                                <th>NOME</th>
                                <th>RG</th>
                            </tr>
                        </thead>
                        <tbody>
                        {i.effective.map((i)=>{
                            return (
                            <tr className='flex gap-3' key={i}>
                                <td>2 TEN</td>
                                <td>{i.rg}</td>
                                <td>{i.name}</td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                )
                    // <table>
                    //     {i.effective.map((i)=>{
                    //         return (
                    //         <span className='flex gap-3' key={i}>
                    //             <p>2 TEN</p>
                    //             <p>{i.rg}</p>
                    //             <p>{i.name}</p>
                    //         </span>)
                    //     })}
                    // </table>
                
            }
        })} />
    }
  })} onChange={onChange} />;
};

export default App;