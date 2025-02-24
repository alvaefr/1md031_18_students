var socket = io();
         

var vm = new Vue({
  el: '#main',
  data: {
        burgers: food,
        order: [],  //burger: listBurger
        fullName: "",
        email: "",
        payment: "",
        gender: "",
        orderList: "",
        contactInfo: "",
        paymentMetod: "",       
  },
    
    created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
    
     methods: {
        markDone: function() { 
            this.orderList = "Din beställning är: " + ' ' + this.order
            this.contactInfo =  "Dina kontaktuppgifter:" + ' ' + this.fullName + ' ' + this.email + ' ' + ' och du har valt  ' + this.gender
            this.paymentMetod = 'Du har betalat med ' + this.payment
        }, 
         

      getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
      addOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y },
                                orderItems: ["Beans", "Curry"]
                              });
    }
  }
})



