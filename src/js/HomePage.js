import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  data() {
    return {
      postList: {},
      categoryList: {},
      searchKey: "",
      tokenStatus: false
    };
  },
  computed: {
    ...mapGetters(["storedToken", "storedUser"]),
  },
  methods: {

    getAllPosts() {
      
      axios.get("http://localhost:8001/api/posts").then((response) => {
        let postData = response.data.post;

        for (let i = 0; i < postData.length; i++) {
          if (postData[i].image != null) {
            postData[i].image =
              "http://localhost:8001/postImages/" + postData[i].image;
          } else {
            postData[i].image =
              "http://localhost:8001/defaultImage/default.png";
          }
        }

        this.postList = postData;
      });
    },
    getAllCategory() {
      
      axios.get("http://localhost:8001/api/category").then((response) => {
        this.categoryList = response.data.category;
      });
    },
    searchPosts() {
      
      axios
        .post("http://localhost:8001/api/posts/search", {
          searchKey: this.searchKey,
        })
        .then((response) => {
          let postData = response.data.searchData;

          for (let i = 0; i < postData.length; i++) {
            if (postData[i].image != null) {
              postData[i].image =
                "http://localhost:8001/postImages/" + postData[i].image;
            } else {
              postData[i].image =
                "http://localhost:8001/defaultImage/default.png";
            }
          }

          this.postList = postData;
        });
    },
    searchCategory(searchCategory) {
      
      axios
        .post("http://localhost:8001/api/category/search", {
          searchCategoryKey: searchCategory,
        })
        .then((response) => {
          let categoryData = response.data.result;

          for (let i = 0; i < categoryData.length; i++) {
            if (categoryData[i].image != null) {
              categoryData[i].image =
                "http://localhost:8001/postImages/" + categoryData[i].image;
            } else {
              categoryData[i].image =
                "http://localhost:8001/defaultImage/default.png";
            }
          }

          this.postList = categoryData;
        });
    },
    newsDetails(id) {
      
      let data = {
        name: "newsDetails",
        query: {
          newsId: id,
        }, // ID cant be seen when passed as parameter.
      };
      this.$router.push(data);
    },
    loginPage() {
      this.$router.push({
        name: "loginPage",
      });
    },
    logoutPage(){
      this.$store.dispatch('setToken', null);
      this.$router.push({
        name: "loginPage",
      });
    },
    check() {
      
      if (this.storedToken != null && this.storedToken != undefined && this.storedToken != '') {
        this.tokenStatus = true;
      } else {
        this.tokenStatus = false;
      }
    }
  },
  mounted() {
    this.check();
    this.getAllPosts();
    this.getAllCategory();
  },
};
