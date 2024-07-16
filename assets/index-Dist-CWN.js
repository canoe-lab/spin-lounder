import{p as n,j as t,N as A,r,u as $,s as P,f as v,w as O,c as T,A as w,a as z,b as B,T as F,B as H}from"./index-BVG84B-c.js";const L=n.div`
  position: relative;
  display: inline-block;
`,U=n.select`
  appearance: none;
  width: 70px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #a1a5ac;
  background-color: ${({theme:e})=>e.colors.darkBlue};
  color: white;
  padding: 0 10px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`,D=n.div`
  position: absolute;
  right: 15px;
  top: 55%;
  transform: translateY(-50%);
  pointer-events: none;
  color: white;
  font-size: 18px;
  content: "⌃";
`,W=({setCount:e})=>{const o=a=>{e(Number(a.target.value))};return t.jsxs(L,{children:[t.jsx(U,{onChange:o,children:A.map(a=>t.jsx("option",{value:a.value,children:a.value},a.id))}),t.jsx(D,{children:"⌃"})]})},_="/spin-lounder/assets/master-creator-token-placeholder-Dl1yBh_Z.png",G=n.img`
  width: 100%;
  height: auto;
  max-height: 810px;
  object-fit: contain;
`,q=()=>t.jsx(G,{src:_,alt:"master-creator-token-placeholder"}),J=n.div`
  width: ${({width:e})=>e&&e};
  height: ${({height:e})=>e&&e};
`,s=({width:e="0px",...o})=>t.jsx(J,{width:e,...o}),K=n.div`
  display: flex;
  max-width: 1610px;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
  margin: 20px;
  margin-top: 80px;

  & > h1 {
    margin-bottom: 43px;
    font-family: "Space Grotesk", sans-serif;
    font-size: ${({theme:e})=>e.typography.heading1.fontSize};
    line-height: ${({theme:e})=>e.typography.heading1.lineHeight};
  }
`,V=n.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: left;
`,Y=n.div`
  display: flex;
  text-align: left;
  flex-direction: row;
  width: 100%;
`,Z=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,g=n.div`
  display: flex;
  text-align: justify;
  flex-direction: column;
  width: 100%;
  font-family: "Poppins", sans-serif;

  & h1 {
    color: ${({theme:e})=>e.colors.lightBlue};
    font-size: ${({theme:e})=>e.typography.heading2.fontSize};
    line-height: ${({theme:e})=>e.typography.heading2.lineHeight};
    margin-bottom: 25px;
  }

  & p {
    font-size: ${({theme:e})=>e.typography.heading5.fontSize};
    line-height: ${({theme:e})=>e.typography.heading5.lineHeight};
  }
`,Q=n.div`
  & h1 {
    text-align: justify;
    font-family: "Space Grotesk", sans-serif;
    color: ${({theme:e})=>e.colors.lightBlue};
    font-size: ${({theme:e})=>e.typography.heading2.fontSize};
    line-height: ${({theme:e})=>e.typography.heading2.lineHeight};
    margin-bottom: 22px;

    & span {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      color: ${({theme:e})=>e.colors.white};
    }
  }

  & > p {
    margin-bottom: 15px;
    text-align: justify;
    font-family: "Poppins", sans-serif;

    strong {
      font-weight: 700;
    }
  }
`,X=n.div`
  font-family: "Space Grotesk", sans-serif;
`,ee=n.div`
  display: flex;
  flex-direction: column;
  font-family: "Space Grotesk", sans-serif;
  margin-left: 15px;

  & p {
    font-size: ${({theme:e})=>e.typography.paragraph.fontSize};
    line-height: ${({theme:e})=>e.typography.paragraph.lineHeight};

    & span {
      color: ${({theme:e})=>e.colors.lightBlue};
    }
  }
`,j=n.div`
  max-width: calc(53% - 40px);
`,k=n.div`
  max-width: calc(47% - 40px);
`,te=n.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`,ne=n.p`
  font-family: "Space Grotesk", sans-serif !important;
  font-size: ${({theme:e})=>e.typography.heading3.fontSize} !important;
  line-height: ${({theme:e})=>e.typography.heading3.lineHeight} !important;
  span {
    color: ${({theme:e})=>e.colors.lightBlue};
    font-size: ${({theme:e})=>e.typography.heading3.fontSize};
    line-height: ${({theme:e})=>e.typography.heading3.lineHeight};
  }
`,ae=n.p`
  margin-right: 20px;
  font-size: ${({theme:e})=>e.typography.heading4.fontSize} !important;
  line-height: ${({theme:e})=>e.typography.heading4.lineHeight} !important;
`,ie=n.div`
  margin-top: 20px;
  p {
    font-size: ${({theme:e})=>e.typography.heading3.fontSize};
  }
`,M=[{inputs:[{internalType:"address",name:"_initialOwner",type:"address"},{internalType:"string",name:"_initialURI",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC1155InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC1155InvalidApprover",type:"error"},{inputs:[{internalType:"uint256",name:"idsLength",type:"uint256"},{internalType:"uint256",name:"valuesLength",type:"uint256"}],name:"ERC1155InvalidArrayLength",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC1155InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC1155InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC1155InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"ERC1155MissingApprovalForAll",type:"error"},{inputs:[{internalType:"uint256",name:"numerator",type:"uint256"},{internalType:"uint256",name:"denominator",type:"uint256"}],name:"ERC2981InvalidDefaultRoyalty",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC2981InvalidDefaultRoyaltyReceiver",type:"error"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"numerator",type:"uint256"},{internalType:"uint256",name:"denominator",type:"uint256"}],name:"ERC2981InvalidTokenRoyalty",type:"error"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"address",name:"receiver",type:"address"}],name:"ERC2981InvalidTokenRoyaltyReceiver",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"quantity",type:"uint256"}],name:"adminMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"adminMintBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"quantity",type:"uint256"}],name:"buy",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"contractURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"price",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IERC20",name:"token",type:"address"}],name:"reclaimToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"address",name:"to",type:"address"}],name:"rescueERC1155",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"address",name:"to",type:"address"}],name:"rescueERC721",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"salePrice",type:"uint256"}],name:"royaltyInfo",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint96",name:"feeNumerator",type:"uint96"}],name:"setDefaultRoyalty",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"newPrice",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"address",name:"receiver",type:"address"},{internalType:"uint96",name:"feeNumerator",type:"uint96"}],name:"setTokenRoyalty",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"tokenPrices",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdrawETH",outputs:[],stateMutability:"nonpayable",type:"function"}],se=()=>{const[e,o]=r.useState(1),[a,d]=r.useState(0),[u,c]=r.useState(0),[m,h]=r.useState(!1),[p,C]=r.useState(BigInt(0)),[f,x]=r.useState(!1),{address:I,isConnected:S}=$(),R=S?P(I):"";function E(i,l){const y=10**l,b=i*y;return BigInt(b)}const N=async()=>{try{if(p){h(!0);const i=E(u,4)*p,l=await O(T,{abi:M,address:w,functionName:"buy",args:[1,e],value:i}),y=await z(T,{hash:l});y.status==="success"?(x(!0),h(!1)):(h(!1),console.error("Transaction failed",y))}}catch(i){console.log(i.message)}};return r.useEffect(()=>{if(f){const i=setTimeout(()=>{x(!1)},5e3);return()=>clearTimeout(i)}},[f]),r.useEffect(()=>{const i=async()=>{const l=await B(T,{abi:M,address:w,functionName:"getPrice",args:[F]});C(l)};c(Number(v(p))*e),d(Number(v(p))),i()},[e,p]),{setCount:o,price:a,totalCost:u,isLoading:m,walletAddress:R,mintMasterCreatorToken:N,showSuccessNotification:f}},oe=()=>{const{setCount:e,price:o,totalCost:a,isLoading:d,walletAddress:u,mintMasterCreatorToken:c,showSuccessNotification:m}=se();return t.jsxs(K,{children:[t.jsx("h1",{children:"Master Creator Token"}),t.jsxs(Z,{children:[t.jsxs(V,{children:[t.jsx(j,{children:t.jsx(q,{})}),t.jsx(s,{width:"72px"}),t.jsx(k,{children:t.jsxs(Q,{children:[t.jsxs(g,{children:[t.jsxs("h1",{children:["Remaining: ",t.jsx("span",{children:"10/25"})," | Price: ",t.jsxs("span",{children:[o," ETH"]})]}),t.jsx("p",{children:"Mint this Master Creator Token to unlock exclusive access to our ecosystem, enabling you to create, manage, and sell unique vinyl-backed NFTs with ease."}),t.jsx(s,{height:"25px"}),t.jsxs("p",{children:["Please ensure you thoroughly understand the ",t.jsx("strong",{children:"benefits"})," and"," ",t.jsx("strong",{children:"responsibilities"})," associated with the Master Creator Token before proceeding with the minting process."]})]}),t.jsx(s,{height:"52px"}),t.jsxs(ee,{children:[t.jsx(H,{type:"filed",width:"132px",height:"42px",text:d?"SUBMITTING":"MINT NOW",disabled:d,onClick:c}),m&&t.jsx(ie,{children:t.jsx("p",{children:"Transaction Successful"})}),t.jsx(s,{height:"32px"}),t.jsxs("p",{children:["Wallet Connected: ",t.jsx("span",{children:u})]}),t.jsx(s,{height:"25px"}),t.jsxs(X,{children:[t.jsx("p",{children:"PRICE .5 ETH + gAS"}),t.jsx("p",{children:"MINT IS LIVE UNTIL SOLD OUT"}),t.jsxs("p",{children:["PRESALE: ",t.jsx("span",{children:"SOLDOUT"})]})]}),t.jsx(s,{height:"29px"}),t.jsxs(te,{children:[t.jsx(ae,{children:t.jsx("span",{children:"Number of NFTs to mint"})}),t.jsx(W,{setCount:e})]}),t.jsx(s,{height:"34px"})]}),t.jsxs(ne,{children:[t.jsx("span",{children:"Total Cost:"})," ",a.toFixed(4)," ETH"]})]})})]}),t.jsx(s,{height:"135px"}),t.jsxs(Y,{children:[t.jsx(j,{children:t.jsxs(g,{children:[t.jsx("h1",{children:"Exclusive Access"}),t.jsx("p",{children:"Exclusive Access This Master Creator Token is your gateway to the exclusive world of SoundMint, where music and technology converge to empower artists. By holding this token, you gain privileged access to our ecosystem, allowing you to create and launch your own unique NFT drops. Each token represents not just membership but a key to unlock a suite of tools designed to help you mint, manage, and sell vinyl-backed digital collectibles."})]})}),t.jsx(s,{width:"72px"}),t.jsx(k,{children:t.jsxs(g,{children:[t.jsx("h1",{children:"Comprehensive Tools"}),t.jsx("p",{children:"With the Master Creator Token, you can easily customize NFT drops, set up pre-sales, define rarity traits, and distribute revenue. This token offers a turnkey solution for funding, producing, and distributing your vinyl records while engaging fans innovatively. Join forward-thinking musicians and take control of your music's future with the Master Creator Token."})]})})]})]})]})};export{oe as default};
