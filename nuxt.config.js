import axios from "axios";
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
 

  head: {
    titleTemplate: '%s - موقع سيرتك',
    meta: [
      { charset: 'utf-8' },
      { name: 'google-site-verification', content: 'xwAmzlqPiamAvvhDnyE8wJ9GYDNt16tz4Eg2s' },
    
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/css.css',
    '@/assets/css/mobilecss.css',
    '@/assets/css/starhome.css',

  ],
  loading :{
    color :"white",
    height: '5px'
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/vue-lazyload"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/google-analytics',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-1856358644420211'
    }]


  ],

  axios: {
    // proxyHeaders: false
    proxy: true
  },
    sitemap: {
  hostname: 'https://mfa10.com',
 
    gzip: true,
     defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: '2022-08-8'
    },
  routes: async () => {
      const { data } = await axios.get('https://mfa10.com/api/notification/0s.json')
      console.log(data)
      return data.map(v =>({
          url: `/profiles/${v.name}`,
         hangefreq: 'daily',
        priority: 0.9,
      //lastmod: new Date(new Date() - Math.random()*(1e+11))
      }))
    }

    },
  robots: {
 UserAgent: '*',
 Disallow: '',
 Allow: '/',
 Sitemap:'https://mfa10.com/sitemap.xml'
},
  
googleAnalytics: {
    id: 'UA-236740344-1'
  },
  
 
  proxy: {
    '/api': 'http://localhost:80'
  },

  router:{
    extendRoutes(routes , resolve){
      routes.push(
        {



            name:"Login",
            path:"/data/:id",
            component: resolve(__dirname , "pages/Login.vue"),
            props:true,




      },
      {
        path: "/datacv",
        name: "Datacv",
        props:true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
            component: resolve(__dirname , "pages/datacv.vue"),
      },

      {

        path:"/pagethames",
        name:"pagethames",
        props:true,
        children:[ {path:"",component:"components/view/viewimger.vue"}],
        component:  resolve(__dirname , "components/pagethames")
      },
      {
        path: "/pagethames/thame_1",
        name: "thame_1",
        props:true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.

                  component:  resolve(__dirname , "components/thame/thame_1.vue")

      },

      {
        path: "/pagethames/thame_2",
        name: "thame_2",
        props:true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.

          component:  resolve(__dirname , "components/thame/thame_2.vue")

      },
      {
        path: "/pay",
        name: "pay",
        props:true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.

          component:  resolve(__dirname , "components/pay")

      },

      )
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
       extend(config, ctx) {},
    babel: {
             compact: true
             },
        analyze: true,
       parallel: true,
   
    extractCSS: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    optimization: {
      splitChunks: {
           chunks: 'all',
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },
  
}
