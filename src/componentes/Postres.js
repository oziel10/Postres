
import React, { useEffect, useState } from "react"

function usePostres() {

	const [postres, setPostres] = useState([])

	useEffect(() => {
		fetch("jason/postres.json")
		.then(response => response.json())
		.then(datos => {
			setPostres(datos)
		})
	}, [])

	return postres
}

export default function Postres() {

	const postres = usePostres()

	return (

		<div className="container mt-5" align="center">
      
	      <h4>Lista de Postres</h4>
	        
	      <div className="row">

	        <div className="col-md-12">

	          <table className="table table-bordered">
	            <thead className="thead-dark">
	              <tr>
	                <th scope="col">ID</th>
	                <th scope="col">Nombre</th>
	                <th scope="col">Stock</th>
	                <th scope="col">Precio</th>
	                <th scope="col">Imagen</th>
	              </tr>
	            </thead> 
	            <tbody>

	            {postres.map(item => (

	              <tr key={item.id}>
	                <td>{item.id}</td>
	                <td>{item.nombre}</td>
	                <td>{item.stock}</td>
	                <td>{item.precio}</td>
	                <td><img src={`${process.env.PUBLIC_URL}/imagenes/${item.img}`} alt={item.nombre} width="30px" className="img-fluid"/></td>
	              </tr>

	            ))}

	            </tbody>

	          </table>

	        </div>

	      </div>

	      <section className="mt-5 mb-5">
	        <div align="center">
	            Desarrollado por <a href="http://www.nubecolectiva.com" target="_blank">Nube Colectiva</a>
	        </div> 
	      </section>
        
    	</div>

	)

}
