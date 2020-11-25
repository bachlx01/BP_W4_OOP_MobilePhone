function Mobile(name, brand) {
    this.name = name;
    this.brand = brand;
    this.msg = '';
    this.inbox = [];
    this.outbox = [];

    this.writeMsg = function (_msg) {
        this.msg = _msg;
    }

    this.receiveMsg = function (_msg) {
        this.inbox.push(_msg);
    }

    this.sendMsg = function (mobile) {
        mobile.receiveMsg(this.msg);
        this.outbox.push(this.msg);
    }
}

let iphone = new Mobile('Iphone X', 'iphone');
let samsung = new Mobile('Note 9', 'samsung');


function display (mobile) {
    document.getElementById(mobile.brand+'-name').innerHTML = mobile.name;
    document.getElementById(mobile.brand+'-inbox').innerHTML = mobile.inbox;
    document.getElementById(mobile.brand+'-outbox').innerHTML = mobile.outbox;
}
function displayAll () {
    display(iphone);
    display(samsung);
}

function writeMess (mobile,msg){
    mobile.writeMsg(msg);
}

function sendMess (mb1,mb2){
    mb1.sendMsg(mb2);
    displayAll();
}
displayAll();