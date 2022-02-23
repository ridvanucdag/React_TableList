import React from 'react'
import './Listtable.css'

const table = () => {
  return (
    <div>
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-8"><h2>Form <b>List</b></h2></div>
              <div className="col-sm-4">
                <div className="search-box">
                  <input type="text" className="form-control" placeholder="Search.." />
                </div>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th scope="col">Deneme 1</th>
                <th scope="col">Deneme 1</th>
                <th scope="col">Deneme 1</th>
                <th scope="col">Deneme 1</th>
                <th scope="col">Deneme 1</th>
                <th scope="col">Deneme 1</th>
                <th scope="col">Deneme 1</th>
                <th scope="col">Deneme 1</th>
                <th scope="col">Deneme 1</th>
                <th scope="col">Deneme 1</th>
                <th scope="col">Deneme 1</th>
                <th scope="col">Deneme 1</th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>Rıdvan Üçdağ</td>
                    <td>Software Engineer</td>
                    <td>ReactJs</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="far fa-edit">&#xE254;</i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="fas fa-times">&#xE872;</i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>Rıdvan Üçdağ</td>
                    <td>Software Engineer</td>
                    <td>ReactJs</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="far fa-edit">&#xE254;</i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="fas fa-times">&#xE872;</i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>Rıdvan Üçdağ</td>
                    <td>Software Engineer</td>
                    <td>ReactJs</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="far fa-edit">&#xE254;</i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="fas fa-times">&#xE872;</i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>Rıdvan Üçdağ</td>
                    <td>Software Engineer</td>
                    <td>ReactJs</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="far fa-edit">&#xE254;</i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="fas fa-times">&#xE872;</i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>Rıdvan Üçdağ</td>
                    <td>Software Engineer</td>
                    <td>ReactJs</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="far fa-edit">&#xE254;</i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="fas fa-times">&#xE872;</i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>Rıdvan Üçdağ</td>
                    <td>Software Engineer</td>
                    <td>ReactJs</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="far fa-edit">&#xE254;</i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="fas fa-times">&#xE872;</i></a>
                    </td>
                  </tr>
            </tbody>
          </table>
          <div className="clearfix">
            <div className="hint-text">Toplam <b>25</b> üründen ilk <b>6</b> tanesi gösteriliyor</div>
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

export default table


            /*  <tbody>
              {
                (data.banner as any[]).map((item: IBannerModel) => (

                  <tr>
                    <td>{item.id}</td>
                    <th scope="row">{item.sirano}</th>
                    <td>{item.bannername}</td>
                    <td>{item.banneryer}</td>
                    <td>{item.bannertip}</td>
                    <td>{item.bannerlink}</td>
                    <td>{item.caritipkod}</td>
                    <td>{item.carialtipkod}</td>
                    <td>{item.yayinbaslangic}</td>
                    <td>{item.yayinbitis}</td>
                    <td>{item.etkin}</td>
                    <td>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="far fa-edit">&#xE254;</i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="fas fa-times">&#xE872;</i></a>
                    </td>
                  </tr>
                ))}
            </tbody>*/


            //Rıdvan Üçdağ
            //github.com/ridvanucdag
            //linkedin.com/ridvanucdag