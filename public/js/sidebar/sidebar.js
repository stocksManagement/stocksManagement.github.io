function sidebar() {
  let elmnts = [
    {
      data: "chart-bar",
      classI: "chart-bar",
    },
    {
      data: "Settings",
      classI: "settings",
    },
    {
      data: "Profile",
      classI: "user",
    },
    {
      data: "Courses",
      classI: "user",
    },
    {
      data: "Friends",
      classI: "user",
    },
    {
      data: "Files",
      classI: "user",
    },
    {
      data: "Plans",
      classI: "user",
    },
  ];
  let ils =``;
   elmnts.forEach(elemnt => {
    ils += `<li><a class="d-flex align-center fs-14 c-black rad-6 p-10" data-lien="${elemnt.data}"><i class="${elemnt.classI}"></i><span>${elemnt.data}</span></a></li>`;
  })
  return ` <i class="logo"></i>
      <ul>
        ${ils}
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
