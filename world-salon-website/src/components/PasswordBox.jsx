import "../Styles/UsernamePasswordBoxStyle.css";
export default function PasswordBox({initialVal, setPasswordFunc}){
    return <>
    <div className="outer-box">
        Password
        <input name="password" className="input-box" type="password"value={initialVal} onChange={(e) => setPasswordFunc(e.target.value)} ></input>

     </div>
    </>
}