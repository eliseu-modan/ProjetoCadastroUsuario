import React from "react";
import '../pages/User.css'

const User = () =>
<div className="User">
<div id="Usuarionome">Usuarios Cadastrados</div>


    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Primeiro Nome</th>
      <th scope="col">Último Nome</th>
      <th scope="col">E-Mail</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>markotto@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>JacobThornton23@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>LarryBird45@gmail.com</td>
    </tr>
  </tbody>
</table>
    </div>


export default User