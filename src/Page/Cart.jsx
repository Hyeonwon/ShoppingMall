import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, increaseAge} from '../store'

function Cart(){

    let state = useSelector((state) => state)
    let dispatch = useDispatch()

    return(
        <div>
            {/* <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={() => {
                dispatch(increaseAge(10))
            }}>버튼</button> */}
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                {
                    state.data.map((a, i) => (
                        <tr key = {i}>
                            <td>{i+1}</td>
                            <td>{a.name}</td>
                            <td>{a.count}</td>
                            <td>
                                <button onClick={() => {
                                    dispatch(changeName())
                                }}>+</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart