<template>
  <div>
    <div style="text-align:center; margin:0 auto; width:90%" v-if="!paidFor">
    
    <br />
    
    <br />
  
      <h1>اختر  احدى اسعار الدعم</h1>
      <ul>
        <li @click="selected = 1 , product.price = 5" :class="{activeprice:selected == 1}" >5$</li>
        <li @click="selected =2, product.price = 10 " :class="{activeprice:selected == 2}" >10$</li>
        <li @click="selected =3 , product.price = 20" :class="{activeprice:selected == 3}" >20$</li>
        <li @click="selected = 4, product.price = 30" :class="{activeprice:selected == 4}" >30$</li>
        <li @click="selected = 5 ,  product.price = 50 " :class="{activeprice:selected == 5}" >50$</li>
      </ul>

      <p>{{ product.description }}</p>

      <!-- <img width="100%" src="https://i.pinimg.com/originals/5e/af/8e/5eaf8eaa7734e962bd0ea385d647e69c.gif" /> -->
      <hr>
          <div style="text-align:center; margin:0 auto; width:90%"  ref="paypal"></div>
            <adsbygoogle ></adsbygoogle>
    </div>

    <div style="text-align:center; margin:0 auto; width:90%" v-if="paidFor">
      <h1>شكككرا لدعمك لنا استمتع بيومك يابطل</h1>

      <img width="310" height="300" src="https://media.giphy.com/media/j5QcmXoFWl4Q0/giphy.gif">
    </div>



  </div>
</template>

<script>
// import image from "../assets/lamp.png"
export default {
  name: "HelloWorld",
 
  
  data: function() {
    return {
      selected:null,
      loaded: false,
      paidFor: false,
      product: {
        price:0,
        description: "دعمك   يشجعنا الى التطوير من المنصه",
        id:'',
        img: "./assets/lamp.jpg"
      },
      
      
    };
  },
  head: {
    title: 'صفحة الدعم المالي',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'paypage',
        name: 'description',
        content: 'في حال ان كنت تريد دعمنا فحياك الله اخي او اختي الحبيبة'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  mounted: function() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AUkfCHy0chrb2NTdqsFMV0jvh1va5Ce0O_BudQT529xvDbBV7T7voIVth-1UnMQd9qP3DK_01uV4XlbW";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);



},
  methods: {






    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
            locale: 'AR',

            style: {
  layout: 'horizontal',
  color: 'gold',
  label: 'checkout',
  shape: 'pill',
  size: 'responsive',
  tagline: true
  },
  
                     
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  id:this.product.id,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            console.log(order);
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  border:2px solid #418EFF;
  font-size:20px;
  width: 60px;
  cursor: pointer;
}
.activeprice {
  background: #42b983;
  color:white;
}
a {
  color: #42b983;
}
.paypal-button-number-1{
    display:none !important;
}
</style>