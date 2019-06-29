import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const apiUrl = "http://localhost:3000/"

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) {  }
  
  /* Get all the products URL*/
  getAllProducts() {
    return this.http.get(apiUrl + "produits") ;
  }

  /* Create new product URL + data*/
  createNewProduct(data) {
    return this.http.post(apiUrl + "produits/",data) ;
  }

  /* Update product  date + id */
  updateProductsById(id,data) {
    return this.http.put(apiUrl + "produit/"+id, data) ;
  }

  /* Delete product id */
  deleteProductById(id) {
    return this.http.delete(apiUrl + "produit/"+id) ;
  }
  
  /* get product Id */
  getProductById(id){
    return this.http.get(apiUrl + "produit/"+id) ;
  }

}
