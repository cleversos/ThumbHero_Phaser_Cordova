Client.purchase_coin = function(tokenId, method){
    Client.socket.emit('purchase_coin', {username: userData.username, tokenId : tokenId, method: method});
};

Client.purchase_coin_paypal = function(orderId, method){
    Client.socket.emit('purchase_coin_paypal', {username: userData.username, orderId : orderId, method: method});
};

Client.socket.on('purchase_coin',function(data){
    let activeScene = game.scene.getScenes(true)[0];
    if(data.result)
    {
        toast_error(activeScene, data.result);
    }
    else {
        toast_error(activeScene, "Purchase failed\non server.");
    }
});

function toast_error(scene, error){
    var toast = scene.rexUI.add.toast({
        x: 540,
        y: 400,

        background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, 0x40cc40),
        text: scene.add.text(0, 0, '', {
            fontSize: '64px'
        }),
        space: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
        },

        duration: {
            in: 250,
            hold: 3000,
            out: 250,
        },
    }).setDepth(100)
    .showMessage(error)
}

