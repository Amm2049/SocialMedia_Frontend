import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "NewsDetails",
  data() {
    return {
      postId: 0,
      post: {},
      view: 0
    };
  },
  computed: {
    ...mapGetters([ 'storedUser' ])
  },
  methods: {
    loadPost(id) {
      axios
        .post("http://localhost:8001/api/post/detail", {
          newsId: id,
        })
        .then((response) => {
          let postDetailData = response.data.postDetail;

          if (postDetailData.image != null) {
            postDetailData.image =
              "http://localhost:8001/postImages/" + postDetailData.image;
          } else {
            postDetailData.image =
              "http://localhost:8001/defaultImage/default.png";
          }

          this.post = postDetailData;
        });
    },
    back(){
        history.back();
    },
    viewCount(){
      let data = {
        user : this.storedUser.id,
        postId : this.$route.query.newsId
      };
      axios.post('http://localhost:8001/api/action/view', data).then((response)=>{
        this.view = response.data.viewData.length;
      });
    }
  },
  mounted() {
    this.viewCount();
    this.postId = this.$route.query.newsId;
    this.loadPost(this.postId);
  },
};
