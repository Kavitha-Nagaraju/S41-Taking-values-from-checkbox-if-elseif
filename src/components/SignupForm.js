import React, { useRef } from 'react'

function SignupForm() {
    let firstInputRef=useRef();
    let lastInputRef = useRef();
    let femaleRBRef = useRef();
    let maleRBRef = useRef();
    let marriedRBRef = useRef();
    let unmarriedRBRef = useRef();
    let selectStateRef = useRef();
    let marksInputRef = useRef();
    let msgParaRef = useRef();
    let firstSpanRef = useRef();
    let lastSpanRef = useRef();
    let firstNameREx =/^[A-Z][a-zA-Z ]{1,29}$/
    let lastNameREx =/^[A-Z][a-zA-Z ]{1,29}$/

    
    let selectGender;
    let maritalStatus;
    let salutation;
    let languagesKnown={
        tel:false,
        eng:false,
        hin:false,
        kan:false,
    };
 let validateRegEx=(InputRef,SpanRef)=>{
    let result=firstNameREx.test(InputRef.current.value)
    if(result==true){
        SpanRef.current.innerHTML="valid";
        SpanRef.current.style.backgroundColor="pink";
    }
    else{
        SpanRef.current.innerHTML="Invalid";
        SpanRef.current.style.backgroundColor="red";
    }
 }
    
  return (
    <div>
        <h1>SignupForm</h1>
        <form>
            <div>
                <label>First Name</label>
                <input ref={firstInputRef} className='input' onChange={()=>{
                  validateRegEx(firstInputRef,firstSpanRef);
                }}></input>
                <span ref={firstSpanRef}></span>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastInputRef} className='input' onChange={()=>{
                   validateRegEx(lastInputRef,lastSpanRef);
                }}></input>
                <span ref={lastSpanRef}></span>
            </div>
            <div>
            <label>State</label>
                <select ref={selectStateRef} className='input'>  
                    <option>Andhra Pradesh</option>
                    <option>Telangana</option>
                    <option>Maharastra</option>
                    <option>Tamilnadu</option>
                </select>
                
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" name="gender" ref={femaleRBRef} onChange={()=>{
                    if(femaleRBRef.current.checked==true){
                        selectGender="Female";
                    }
                }}></input>
                <label >Female</label>
                <input type="radio" name="gender" ref={maleRBRef} onChange={()=>{
                    if(maleRBRef.current.checked==true){
                    selectGender="Male";
                    }
                }}></input>
                <label >Male</label>
            </div>
            <div>
                <label>Marital Status</label>
                <input type="radio" name="ms" ref={marriedRBRef} onChange={(eventObj)=>{
                    if(eventObj.target.checked==true){
                         maritalStatus="married";
                    }
                }}></input>
                <label>Married</label>
                <input type="radio" name="ms" ref={unmarriedRBRef} onChange={(eO)=>{
                    if(eO.target.checked==true){
                        maritalStatus="Unmarried";
                    }
                }}></input>
                <label >Unmarried</label>
            </div>
            <div>
                <label >LanguageKnown</label>
                <input type="checkbox" onChange={(eO)=>{
                    languagesKnown.tel=eO.target.checked;
                }}></input>
                <label className='checkbox'>Telugu</label>
                <input type="checkbox" onChange={(eO)=>{
                    languagesKnown.eng=eO.target.checked;
                }}></input>
                <label className='checkbox'>English</label>
                <input type="checkbox" onChange={(eO)=>{
                    languagesKnown.hin=eO.target.checked;
                }}></input>
                <label className='checkbox'>Hindhi</label>
                <input type="checkbox" onChange={(eO)=>{
                    languagesKnown.kan=eO.target.checked;
                }}></input>
                <label className='checkbox'>Kannada</label>
            </div>
            <div>
                <label>Marks</label>
                <input ref={marksInputRef} className='input' onChange={()=>{
                    let marks = Number(marksInputRef.current.value);
                    if(marks<=35){
                        console.log("Failed")
                    }else if(marks>=35 && marks<=50 ){
                        console.log("Average")
                    }
                    else if(marks>=50 && marks<=75){
                        console.log("Good")
                    }else if(marks>=75 && marks<=91){
                        console.log("1 st Class")
                    }else if(marks>=91 && marks<=100){
                        console.log("Excellent")
                    }else{
                        console.log("Not Valid")
                    }
                }}></input>
            </div>
            <div>
                <button type="button" onClick={()=>{
                        let firstName = firstInputRef.current.value;
                        let lastName = lastInputRef.current.value;
                        let state = selectStateRef.current.value
                        if(selectGender=="Male"){
                            salutation="Mr";
                        }
                        else{
                            if(maritalStatus=="married"){
                                salutation="Mrs";
                            }
                            else{
                                salutation="Miss";
                            }
                        };
                    msgParaRef.current.innerHTML=`${salutation} ${firstName} ${lastName} from ${state} Knowned languages are ${languagesKnown.tel==true?"Telugu":""} ${languagesKnown.eng==true?"English":""} ${languagesKnown.hin==true?"Hindhi":""} ${languagesKnown.kan==true?"Kannada":""}. ` ;
                
                }}>Submit</button>
            </div>
            <div>
                <p ref={msgParaRef}>Result</p>
            </div>
        </form>
      
    </div>
  )
}

export default SignupForm
