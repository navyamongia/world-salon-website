import "../Styles/UsernamePasswordBoxStyle.css";
export default function ConfirmPasswordBox({initialVal, setConfirmPasswordFunc}){
    return <>
    <div className="outer-box">
        Confirm Password
        <input name="password" className="input-box" type="password"value={initialVal} onChange={(e) => setConfirmPasswordFunc(e.target.value)} ></input>

     </div>
    </>
}