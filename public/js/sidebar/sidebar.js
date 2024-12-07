function sidebar() {
  return ` <h3 class="p-relative txt-c mt-0">Elzero</h3>
    <ul>
      <li>
        <a class="active d-flex align-center fs-14 c-black rad-6 p-10"  data-lien="abdou" >
          <i class="fa-regular fa-chart-bar fa-fw"></i>
          <span>Tableau de bord</span>
        </a>
      </li>
      <li>
        <a class="d-flex align-center fs-14 c-black rad-6 p-10 " >
          <i class="settings"></i>
          <span>Settings</span>
        </a>
      </li>
      <li>
        <a class="d-flex align-center fs-14 c-black rad-6 p-10">
          <i class="fa-regular fa-user fa-fw"></i>
          <span>Profile</span>
        </a>
      </li>
      <li>
        <a class="d-flex align-center fs-14 c-black rad-6 p-10" >
          <i class="fa-solid fa-diagram-project fa-fw"></i>
          <span>Projects</span>
        </a>
      </li>
      <li>
        <a class="d-flex align-center fs-14 c-black rad-6 p-10">
          <i class="fa-solid fa-graduation-cap fa-fw"></i>
          <span>Courses</span>
        </a>
      </li>
      <li>
        <a class="d-flex align-center fs-14 c-black rad-6 p-10" >
          <i class="fa-regular fa-circle-user fa-fw"></i>
          <span>Friends</span>
        </a>
      </li>
      <li>
        <a class="d-flex align-center fs-14 c-black rad-6 p-10" >
          <i class="fa-regular fa-file fa-fw"></i>
          <span>Files</span>
        </a>
      </li>
      <li>
        <a class="d-flex align-center fs-14 c-black rad-6 p-10" >
          <i class="fa-regular fa-credit-card fa-fw"></i>
          <span>Plans</span>
        </a>
      </li>
    </ul>`;
}

function head() {
  let elmnt = `<div></div>
          <!-- <div class="search p-relative">
            <input class="p-10" type="search" placeholder="Type A Keyword" />
          </div> -->
          <div>
            <i title="maison page"  class="hosse  iconsDadi"></i>
            <i class="tools iconsDadi"></i>
          </div>
          <div class="icons d-flex align-center">
            <span class="notification p-relative">
                <ul>
                <li><a >Services  hfghgh  afggjh</a><span onclick="console.log('click');
                ">X</span></li>
                <li><a >Portfolio</a><span onclick="console.log('click');
                ">x</span></li>
                <li><a >About</a><span onclick="console.log('click');
                ">x</span></li>
                <li><a >Contact</a><span onclick="console.log('click');
                ">x</span></li>
              </ul>
            </span>
            <span>abdelhadi slimani</span>
            <span class="avatar"></span>
            <!-- <img src="../imgs/svgs/avatar-vectormaker-co.svg" alt=""  />-->
          </div>
        </div>
        <!-- End Head -->`;
  return elmnt;
}

function gebi(pr) {
  return document.getElementById(pr);
}

//export { sidebar, head, gebi };
