import WebSocket from 'ws';
import modelProduct from './app/api/product/model';
import modelSupplier from './app/api/supplier/model';

const wss = new WebSocket.Server({ port: 7788 });
const getProduct = async () => {
    return await modelProduct.getProducts();
}

const getSupplier = async () => {
    return await modelSupplier.getSuppliers();
}


wss.on('connection',  async (ws, req) => {
    const remoteAddress = req.connection.remoteAddress
    let success = false;
    let data;
    let action;
    // setInterval(() =>{
    ws.on('message', async (d) => {
        action = d;
        if(action == 'product'){
            data = await getProduct();
        }else if(action == 'supplier'){
            data = await getSupplier();
        }else{
            data = null;
        }
        if(data){
            success = true;
        }

        ws.send(JSON.stringify({
            success: success,
            data: data
        }));
    });

// }, 1000);


});
