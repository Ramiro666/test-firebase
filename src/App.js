import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase/firebaseConfig';
  

function App() {

  const [lista, setLista] = useState([]);
  useEffect(() => {
    const obtenerdatos = async()=>{
      try {
          const datos = await getDocs(collection(db, 'clientes'));
          const data = []
          datos.forEach((documento) => {
          // console.log(documento.data());  
          data.push({...documento.data(), id:documento.id})
          });
          setLista(data)
      } catch (error){
          console.log(error);
    }
    } 
    obtenerdatos();
    
  }, [lista])
  return (
    <div className="App">
      <br /><br /><br />
      <div>
        <center>
          <h3>Test Cliente</h3>
        </center>
      </div>
      
      <div className='table-responsive'>
        <table className='table table-hover table-fixed' id='tablafirebase'>
          <thead>
            <tr style={{width:600}}>
              <th style={{width:200}} scope='col'>NOMBRE</th>
              <th style={{width:210}} scope='col'>RAZON SOCIAL</th>
              <th style={{width:200}} scope='col'>NIT</th>
              <th style={{width:200}} scope='col'>TELEFONO</th>
              <th style={{width:200}} scope='col'>CODIGO</th>
            </tr>
          </thead>
            <tbody>
              {/* <tr style={{width:680}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>jhuliza</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>dania</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ronal</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
               <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
               <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
               <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr>
              <tr style={{width:600}}>
                <td style={{width:200}}>ramiro</td>
                <td style={{width:210}}>ventas</td>
                <td style={{width:240}}>56465416511313</td>
                <td style={{width:240}}>7455884</td>
                <td style={{width:240}}>22531dasda3</td>
              </tr> */}

              {
                lista.map(list => {
                return (
                  <tr 
                  key={list.id}
                  style={{width:680}}
                  >
                    <td style={{width:200}}>{list.nombre}</td>
                    <td style={{width:210}}>{list.razon_social}</td>
                    <td style={{width:240}}>{list.nit}</td>
                    <td style={{width:240}}>{list.telefono}</td>
                    <td style={{width:240}}>{list.codigo}</td>
                  </tr>
                
                );
                })
              }
              </tbody>
        </table>
        </div>
        
       
    </div>
  );
}

export default App;
