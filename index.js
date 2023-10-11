const like = document.getElementById("like");
const dislike = document.getElementById("deslike");
const displayLike = document.getElementById("display-like");
let likeCount = 0;
let commentCount = 0;
let likeMain = 1;

like.addEventListener("click", () => {
  if (likeCount === 0) {
    like.style.backgroundColor = "white";
    like.style.color = "black";
    displayLike.innerHTML = likeMain++;
    dislike.style.backgroundColor = "#252525";
    dislike.style.color = "white";
    likeCount = 1;
  } else {
    like.style.backgroundColor = "#252525";
    like.style.color = "white";
    likeCount = 0;
  }
});

dislike.addEventListener("click", () => {
  like.style.backgroundColor = "#252525";
  like.style.color = "white";
  likeCount = 0;
  dislike.style.backgroundColor = "white";
  dislike.style.color = "black";
});

// comment
const comment = document.getElementById("comment");
const container1 = document.querySelector(".card-container1");
const commentSection = document.querySelector(".comment-section");
const commentMain = document.querySelector(".comment-main");
const close = document.getElementById("close");
comment.addEventListener("click", () => {
  container1.style.right = "40px";
  document.getElementById("btn-subs").style.marginRight = "50px";
  commentSection.style.visibility = "visible";
  commentSection.style.left = "78%";
  commentSection.style.width = "440px";
});

close.addEventListener("click", () => {
  commentSection.style.left = "50%";
  commentSection.style.width = "300px";
  container1.style.right = "-30px";
  document.getElementById("btn-subs").style.marginRight = "0";
  submit.style.display = "none";
  commentInput.style.display = "block";
  userName.style.display = "none";
  header.style.display = "none";
  commentMain.style.height = "350px";
});
// comment

// comment input

const commentInput = document.querySelector(".comment-input");
const inputContainer = document.querySelector(".input-container");
const userName = document.querySelector(".user-name");
const header = document.querySelector(".heading");
const submit = document.querySelector(".submit-container");

commentInput.addEventListener("click", () => {
  commentInput.style.display = "none";
  commentMain.style.height = "270px";
  userName.style.display = "block";
  header.style.display = "block";
  submit.style.display = "block";
});

const cancelBtn = document.querySelector(".cancel-btn");
const mainInput = document.querySelector(".main-input");

cancelBtn.addEventListener("click", () => {
  submit.style.display = "none";
  commentInput.style.display = "block";
  userName.style.display = "none";
  header.style.display = "none";
  commentMain.style.height = "350px";
});
// comment btn
const commentBtn = document.querySelector(".comment-btn ");
let inputValue = "";
mainInput.addEventListener("input", updateValue);
function updateValue(e) {
  commentBtn.disabled = false;
  commentBtn.style.backgroundColor = "#3EA6FF";
  commentBtn.style.cursor = "pointer";
  commentBtn.style.color = "white";
  if (e.target.value === "") {
    commentBtn.disabled = true;
    commentBtn.style.backgroundColor = "rgb(56, 56, 56)";
    commentBtn.style.cursor = "default";
  }
  inputValue = e.target.value;
}

commentBtn.addEventListener("click", () => {
  let commentContainer = document.createElement("div");
  commentContainer.className = "comment-container";
  commentContainer.innerHTML = `
            <div class="comment-logo">
                <img src="https://images.unsplash.com/photo-1695509038650-7dd05e5cf6a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""/>
            </div>

          <div>
            <p style="font-size: 13px">
              @sahirhossain2818
              <span style="font-size: 12px; color: gray"> 1 minute ago</span>
            </p>
            <p>
              ${inputValue}
            </p>

            <div class="comment-like">
              <div class="reply-like-btn"><i class="fa-solid fa-thumbs-up"></i></div>
              <span style="color: gray"> 20</span>
              <div><i class="fa-solid fa-thumbs-down"></i></div>
              <a href="#" class="reply-btn">Reply</a>
            </div>
          </div>
`;
  commentMain.appendChild(commentContainer);
  commentCount++;
  document.querySelector(".comment-count").innerHTML = commentCount;
  document.querySelector(".header-count").innerHTML = commentCount;
});

let replyLikeBtn = document.querySelector;
