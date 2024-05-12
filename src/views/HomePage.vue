<template>
  <div>
    <div class="d-flex align-items-center justify-content-between my-4" style="margin-left: 175px;margin-right: 175px;">
      <div class="d-flex align-items-center">
        <input
          type="text"
          class="form-control"
          placeholder="Search ..."
          v-model="searchKey"
          v-on:keyup.enter="searchPosts()"
        />
        <i class="fas fa-search special-tag ml-3" @click="searchPosts()"></i>
      </div>
      <div class="">
        <button v-if="tokenStatus" class="btn mr-3" @click="logoutPage()" style="background-color: black;">Logout</button>
        <button v-if="!tokenStatus" class="btn" @click="loginPage()" style="background-color: black;">Login</button>
      </div>
    </div>
    <!-- Whats New Start -->
    <section v-if="tokenStatus" class="whats-news-area pb-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row d-flex justify-content-between">
              <div class="col-lg-3 col-md-3">
                <div class="section-tittle mb-30">
                  <h3>Whats New</h3>
                </div>
              </div>
              <div class="col-lg-9 col-md-9">
                <div class="properties__button">
                  <!--Nav Button  -->
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        class="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="details.htmlnav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                        @click="searchCategory('all')"
                        >All</a
                      >
                      <a
                        class="nav-item nav-link"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="details.htmlnav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                        v-for="(category, index) in categoryList"
                        :key="index"
                        @click="searchCategory(category.category_id)"
                        >{{ category.title }}</a
                      >
                    </div>
                  </nav>
                  <!--End Nav Button  -->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <!-- Nav Card -->
                <div class="tab-content" id="nav-tabContent">
                  <!-- card one -->
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div class="whats-news-caption">
                      <div class="row" v-if="postList.length != 0">
                        <div
                          class="col-lg-6 col-md-6"
                          v-for="(post, index) in postList"
                          :key="index"
                        >
                          <div
                            class="single-what-news mb-100"
                            @click="newsDetails(post.post_id)"
                          >
                            <div class="what-img">
                              <img
                                :src="post.image"
                                style="width: 100%; height: 400px"
                              />
                            </div>
                            <div class="what-cap">
                              <span class="color1">Night party</span>
                              <h4>
                                <a href="details.html">{{ post.title }}</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5
                        v-else
                        class="text-center text-muted"
                        style="padding: 200px"
                      >
                        There is no data in this category ...
                      </h5>
                    </div>
                  </div>
                </div>
                <!-- End Nav Card -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <h3 v-if="!tokenStatus" class="p-5 m-5 text-center">You do not have access to this page unless you are signed in !</h3>
    <!-- Whats New End -->

    <!--Start pagination -->
    <div class="pagination-area pb-45 text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="single-wrap d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-start">
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow roted"></span
                    ></a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="details.html">01</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">02</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">03</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow right-arrow"></span
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End pagination  -->
  </div>
</template>

<script src="../js/HomePage.js"></script>
