// import butterfly from "./asset/butterfly.gif";

// window.onload = () => {
//   const $body = document.querySelector("body");
//   console.log($body);
//   $body.insertAdjacentHTML("afterbegin", "<span>New content</span>");
//   $body.style.backgroundColor = "#13adcc";
//   $body.style.height = "300vh";
//   $body.style.fontSize = "30px";
//   $body.style.padding = "20px";
//   $body.innerHTML = "<h1>test</h1>";
//   const $box = document.createElement("div");
//   const bgImage = document.createElement("img");
//   bgImage.src = butterfly;
//   bgImage.style.width = "200px";
//   $box.appendChild(bgImage);
//   $box.style.width = "40px";
//   $box.style.height = "40px";
//   $box.style.backgroundImage = butterfly;
//   $box.style.position = "absolute";
//   $box.style.top = "50%";
//   $box.style.left = "50%";
//   $box.style.transform = "translate(-50%, -50%)";
//   $box.style.transition = "all 1.5s ease-out";
//   $body.appendChild($box);
//   console.log($body);
//   const $text = document.querySelector("h1");
//   $text.style.position = "fixed";

//   let x = 0;
//   let y = 0;
//   let targetX = 0;
//   let targetY = 0;
//   let speed = 0.03;

//   document.addEventListener("click", (e) => {
//     x = e.pageX;
//     y = e.pageY;
//     $box.style.top = y + "px";
//     $box.style.left = x + "px";

//     $text.innerText = `x : ${e.pageX} y : ${e.pageY}`;
//   });

//   // const loop = () => {
//   //   targetX += (x - targetX) * speed;
//   //   targetY += (y - targetY) * speed;

//   //   $box.style.top = targetY + "px";
//   //   $box.style.left = targetX + "px";
//   //   window.requestAnimationFrame(loop);
//   // };

//   // window.requestAnimationFrame(loop);
// };
