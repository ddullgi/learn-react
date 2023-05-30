const $body = document.querySelector("body");
console.log($body);
$body.insertAdjacentHTML("afterbegin", "<span>New content</span>");
