import React, { useContext } from 'react'
import { DataContext } from '../App'
import mathLogo from '../logomathlong-11.png'
import mathstudent from '../student-02.png'
function Menu() {
    const {state,setState} = useContext(DataContext);
    return (

         <div className="container">
            <header>
                <img src={mathLogo} alt="" />
            </header>
            <div className="content-area">
                <div className="container-left">
                    <div className="header-left">
                        <h1 className='one'>แบบทดสอบ</h1>
                        <h1 className='two'>พื้นฐานการคูณ</h1>
                    </div>
                    <div className="text-left">
                        <p>การวัดความรู้การคูณพื้นฐานระดับเริ่มต้น โดยผู้เรียนจะต้อง</p>
                        <p>สอบได้คะแนนมากกว่า 80 % ขึ้นไป ถึงจะถือว่าผู้เรียนทำแบบทดสอบผ่าน</p>
                    </div>
                    <div className="btn-left">
                        <button>เริ่มทำแบบทดสอบ</button>
                    </div>
                </div>
                <div className="container-right">
                    <img src={mathstudent} alt="" />
                </div>
            </div>
        </div>     

           
       
    )
}
 
export default Menu 