import React,{useState}from "react";
import img5 from './images1/img5.jpeg';
import './LoginForm.css'
const LoginForm=()=>{
    const CustomInput2=({type,label})=>{
            const [value,setvalue]=useState('');
            const [error,seterror]=useState('');
            const[preset,setpreset]=useState('');
            const [showpre,setshowpre]=useState(false);
            const [showerror,setshowerror]=useState(false);
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
                <div className="input_container2">
                    <input type={type} value={value} onChange={handlechange} id={type} onFocus={handlefocus} onBlur={handleblur}/>
                    <label className={value&& 'filled2'} htmlFor={type}>{label}</label>
                    {showpre&& <p className="preset_mssg2">{preset}</p>}
                    {showerror&&error && <p className="error_mssg2">{error}</p>}
                </div>
            )
        }

    return(
        <div className="main_cont">
            <div className="form_login">
                <div className="content_form">
                    <h6 className="login_head">LOG IN</h6>
                    <div className="login_search">
                        <CustomInput2 type="email" label="E-MAIL"/>
                    </div>
                    <div className="login_search">
                        <CustomInput2 type="password" label="PASSWORD"/>
                    </div>
                    <button type='submit' className="submit_button">LOG IN</button>
                </div>
            </div>
            <div className="image_login">
                <img src={img5} className="login_image"></img>
            </div>
        </div>
    );
}
export default LoginForm;