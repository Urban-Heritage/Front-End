
import React, {useState} from 'react'
import {ethers} from 'ethers'

const WalletCard = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Working!');
// console.log(accountChangedHandler(result[0]))

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
                console.log(accountChangedHandler(result[0]));
               
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[1]);
			})
			.catch(error => {
                setErrorMessage(error.message);
               
      if (Error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
     } else {
        console.error(error);}
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	if (window.ethereum.on('accountsChanged', accountChangedHandler)) {
        console.log('Account changed');
    }

	if(window.ethereum.on('chainChanged', chainChangedHandler)) {
        console.log('Chain changed');
    }
	
	return (
<div>


			<button  type="button" className="btn btn-primary" onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				{/* <p>Address: {defaultAccount}</p> */}
			</div>
		
		</div>
	);
}

export default WalletCard;