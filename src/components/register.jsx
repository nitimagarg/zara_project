import React,{useState} from "react";
import img5 from './images1/img5.jpeg';
import './register.css';
const Register=()=>{
    const CustomInput=({type,label})=>{
        const [error,seterror]=useState('');
        const [value,setvalue]=useState('');
        const [showpre,setshowpre]=useState(false);
        const [showerror,setshowerror]=useState(false);
        const [preset,setpreset]=useState('');
        function handlechange(e){
            setvalue(e.target.value);
            if(error&&e.target.value){
                seterror('');
            }
        }
        function handlefocus(){
            
            setshowerror(false);
            if(type==='password'){
                setpreset('Enter a secure password of minimum 8 characters');
            }
            else if(type==='email'){
                setpreset('E-mail of type abcd@efg')
            }
            else if(label==='TELEPHONE'){
                setpreset('Please enter a valid 10 digit number')
            }
            setshowpre(true);
        }
        function handleblur(){
            setshowpre(false);
            if(type==='password'&& value.length>0&& value.length<8){
                seterror('Password must be atleast 8 characters.');
            }
            else{
                if(value===''){
                    seterror('Required feild.')
                }
            }
            if(type!=='password'&&value===''){
                seterror('Required feild.')
            }
            
            setshowerror(true);
        }
        return(
            <div className="input_container">
                <input type={type} value={value}  id={type} onBlur={handleblur}  onFocus={handlefocus} onChange={handlechange} required/>
                <label className={value&& 'filled'} htmlFor={type}>{label}</label>
                {showpre&& <p className="preset_mssg">{preset}</p>}
                {showerror&&error && <p className="error_mssg">{error}</p>}

            </div>
        )
    }

    return(
        <div className="reg_main">
            <div className="reg_form">
                <h6 className="reg_head">PERSONAL DETAILS</h6>
                <CustomInput type="email" label="E-MAIL" className="custom_input"/>
                <CustomInput type="password" label="PASSWORD" className="custom-input"/>
                <CustomInput type="text" label="NAME" className="custom-input"/>
                    <div className="input_phone">
                        <div className="prefix">
                            <label htmlFor="prefix_val" className="label_prefix">PREFIX</label>
                            <input
                                type='number'
                                className="prefix_value"
                                placeholder="+91"
                                id='prefix_val'
                            />
                        </div>
                        <div className="telephone">
                            <CustomInput type="text" label="TELEPHONE" className="telephone_custom_input"/>
                        </div>
                    </div>
                    <div className="check">
                        <h9>We will send you an SMS to verify your phone number</h9>
                        <div className="check1">
                            <input type='checkbox' id='check_1' className="check_1"/>
                            <label htmlFor='check_1'>I wish to receive Zara news on my e-mail</label>
                        </div>
                        <div className="check2">
                            <input type='checkbox' id='check_2' className="check_1"/>
                            <label htmlFor='check_2'>I accept the privacy statement</label>
                        </div>

                    </div>
                    <button type='submit' className="create">CREATE ACCOUNT</button>
            </div>
            <div className="reg_image">
                <img src={img5} className="image_reg"/>
            </div>
        </div>
    )
}
export default Register;