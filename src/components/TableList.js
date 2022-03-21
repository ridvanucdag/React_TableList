import React, { useEffect, useState } from 'react'
import './Listtable.css'

import ProductService from "../services/Products"

const TableList = () => {
    const [product, setProduct] = useState([])
    const [search,setSearch] = useState('')
  
    useEffect(()=>{
      let productService = new ProductService()
      productService.getProducts().then(res=> setProduct(res.data))
      console.log(product)
    },[])
  
    return (
      <div>
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8"><h2>Form <b>List</b></h2></div>
                <div className="col-sm-4">
                  <div className="search-box">
                    <input type="text" className="form-control" placeholder="Search.." onChange={e=> setSearch(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Adres street</th>
                  <th scope="col">suite</th>
                  <th scope="col">city</th>
                  <th scope="col">zipcode</th>
                  <th scope="col">lat</th>
                  <th scope="col">lng</th>
                  <th scope="col">website</th>
                  <th scope="col">company</th>
                  <th scope="col">Settings</th>
                </tr>
              </thead>
              <tbody>
                  {
                        product.filter((pro)=>{
                          if(search==="") {
                            return pro
                          }
                          else if (pro.name.toLowerCase().includes(search.toLowerCase()) || pro.username.toLowerCase().includes(search.toLowerCase())){
                            return pro
                          }
                        })
                        .map(pro=>(
                    <tr key={pro.id}>
  
                     <td>{pro.id}</td>
                      <td>{pro.name}</td>
                      <td>{pro.username}</td>
                      <td>{pro.email}</td>
                      <td>{pro.address.street}</td>
                      <td>{pro.address.suite}</td>
                      <td>{pro.address.city}</td>
                      <td>{pro.address.zipcode}</td>
                      <td>{pro.address.geo.lat}</td>
                      <td>{pro.address.geo.lng}</td>
                      <td>{pro.website}</td>
                      <td>{pro.company.name}</td>
                      <td>
                        <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="far fa-edit">&#xE254;</i></a>
                        <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="fas fa-times">&#xE872;</i></a>
                      </td>
                       
                      
                    </tr>
                     ))
                    }
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">Toplam <b>25</b> üründen ilk <b>{product.length}</b> tanesi gösteriliyor</div>
              <ul className="pagination">
                <li className="page-item disabled"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                <li className="page-item"><a href="#" className="page-link">1</a></li>
                <li className="page-item"><a href="#" className="page-link">2</a></li>
                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                <li className="page-item"><a href="#" className="page-link">4</a></li>
                <li className="page-item"><a href="#" className="page-link">5</a></li>
                <li className="page-item"><a href="#" className="page-link"><i className="fa fa-angle-double-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TableList