import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import "./App.css";



class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      
      const web3 = await getWeb3();


      const addresses = await web3.eth.getAccounts();

    
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
	  

  
      this.setState({ web3, addresses, instance }, this.asyncCall);
    } catch (error) {
      
      alert(
        `Erreur des chargements des contrats.`,
      );
      console.error(error);
    }
  }; 
  
  
  asyncCall = async () => {
    const { addresses, instance } = this.state;
	const web3 = await getWeb3();

	 await web3.eth.sendTransaction({
	 from: addresses[0],
	 to: addresses[1],
	 value: "10"});
 


    const response = await instance.methods.get().call();

    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (

      <html>
		<head>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
		</head>
			<body>
			
			   
			  <div className="App">
			<span class="color-sample"></span>

				<h1>Bienvenue sur votre BlockChain</h1>
			</div>
			<div class="grid-item2">
			
				<p class="flotte">
					 <img src="https://francecasting.fr/wp-content/uploads/2021/02/e5251329e08c2d2cd0de8fe3e58bd43f.jpg"/>
					
					
					 Ce meuble haut de gamme
					 saura faire vivre et donner de la chaleur à votre salon<br />
					 <strong>Prix : 10 Ether</strong>
					 <button onclick= "asyncCall()"> Procédez à l'achat </button>
				</p>	
			
		
			</div>
			
  			<div class="grid-item2">
				<p class="flotte">
					 <img src="https://francecasting.fr/wp-content/uploads/2021/02/table-de-salle-a-manger-ronde-perugia-scaled.jpg"/>
					
					
					 Cet ensemble pour salle à manger 
					 Composé d'une grande table et de 6 chaises sera parfait pour votre famille.<br />
					 <strong>Prix : 30 Ether</strong>
					 <input type="button" value="Procédez à l'achat"/>
				</p>	
			</div>
  			<div class="grid-item2">
			<p class="flotte">
					 <img src="https://francecasting.fr/wp-content/uploads/2021/02/table-salle-a-manger-bois-massif.jpg"/>
					
					
					 Table cirée en bois
					 Livrée avec 6 chaises en cuir noir<br />
					 <strong>Prix : 20 Ether</strong>
					 <input type="button" value="Procédez à l'achat"/>
				</p>	
			
			</div>
  			<div class="grid-item2">
			<p class="flotte">
					 <img src="https://francecasting.fr/wp-content/uploads/2021/02/hp-03.jpg"/>
					
					
					 Cuisine Haut de Gamme
					 Toute équipée pouvant correspondre au besoin de toute la famille<br />
					 <strong>Prix : 50 Ether</strong>
					 <input type="button" value="Procédez à l'achat"/>
				</p>
			
			</div>
  			<div class="grid-item2">
			<p class="flotte">
					 <img src="https://francecasting.fr/wp-content/uploads/2021/02/G_726470_Y.jpg"/>
					
					
					 Canapé familial
					 Pouvant contenir plus de 10 personnes<br />
					 <strong>Prix : 40 Ether</strong>
					 <input type="button" value="Procédez à l'achat"/>
				</p>
			
			</div>
			<div class="child-page-listing">

</div>
			<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
			</body>
      </html>
    );
  }
  
  
}

export default App;
