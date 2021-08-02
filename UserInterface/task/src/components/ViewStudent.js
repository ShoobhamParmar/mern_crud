// import React, { useState,useEffect } from 'react'
// import axios from 'axios';
// //import { Document, Page } from 'react-pdf';

// function ViewStudent(props) {
//     var baseUrl= "http://localhost:3000/";
//     var stId = props.match.params?.id;
//     const [name, setname] = useState("");
//     const [email, setemail] = useState("");
//     const [marks, setmarks] = useState("");
//     const [age, setage] = useState("");
//     const [city, setcity] = useState("");
//     const [documents, setdocuments] = useState({});
//     const [certificates, setcertificates] = useState([]);
   

//     useEffect(() => {
//       console.log("in view Student use effect");
//         axios.get(baseUrl+'esession/student-by-id?id='+stId).then(
//             (res)=>{
//                 console.log(res.data.data);
//                 setname(res.data.data[0].name);
//                 setemail(res.data.data[0].email);
//                 setage(res.data.data[0].age);
//                 setmarks(res.data.data[0].marks);
//                 setcity(res.data.data[0].city);
//                 setdocuments(res.data.data[0].documents);

//                 setcertificates( res.data.data[0].documents.certificates.map(c=>{return (<div key={c} class="col-md-12">
//                  <iframe src={baseUrl+c} width="100%" height="600px"  >    
//                     </iframe>
//                 </div>) }));
//                 console.log("certificates-->");
//                 console.log(certificates);

//             }
//         ).catch(res=>{
//             alert(JSON.stringify(res));
//         })
    
 
        
//     }, []);

    

//     return (
//         <div class="container">
//         <div class="row mt-5">
//             <div class="col-md-4">
              
//                 <div class="card">
//                     <img class="card-img-top" src={baseUrl+documents.profile} width="100%" alt="Card image"/>
//                     <div class="card-body">
//                         <h4 class="card-title">{name} from {city}</h4>
//                         <p class="card-text">Email: {email} </p>
//                         <p class="card-text">Marks:  {marks} </p>
//                         <p class="card-text">Age:  {age} </p>
//                      </div>
//                 </div>
//             </div>
//             <div class="col-md-8">
                
//             <iframe src={baseUrl+documents.resume} width="100%" height="600px" frameborder='0' >    
//             </iframe>
                
               
          
//             </div>
//         </div>
       
//         <div class="row mt-5">
//            {certificates}      
//         </div>
//     </div>
//     )
// }

// export default ViewStudent
