import axios from "axios";
import { mapGetters } from 'vuex';

export default{
    name: 'LoginPage',
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            userStatus: false,
            tokenStatus: false
        }
    },
    computed: {
        ...mapGetters([ 'storedToken', 'storedUser' ])
    },
    methods: {
        homePage(){
            this.$router.push({
              name: 'home'
            })
          },
        loginPage(){
            this.$router.push({
              name: 'loginPage'
            })
        },
        login(){
            axios.post('http://localhost:8001/api/user/login',this.user).then((response) => {
                if (response.data.token != null) {
                    this.$store.dispatch('setToken', response.data.token);
                    this.$store.dispatch('setUser', response.data.user);
                    this.homePage();
                    this.userStatus = false;
                } else {
                    this.user = {};
                    this.userStatus = true;
                }
            });
        }
    },
}