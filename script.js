let videoTeg = document.querySelector(".video-cam");
let snapbtn = document.querySelector(".snap-btn");
let canvas = document.getElementById("canva");
let canvaType = canvas.getContext("2d");
const clickPhotoSound = new Audio("/cameraShutter.mp3");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((photo) => {
    videoTeg.srcObject = photo;
  })
  .catch((errorSnap) => {
    alert("Rasmga olishda muammo " + errorSnap);
  });

snapbtn.addEventListener("click", () => {
  clickPhotoSound.play();

  canvas.width = 1280;
  canvas.height = 920;
  canvaType.drawImage(videoTeg, 0, 0, canvas.width, canvas.height);
  const link = document.createElement("a");
  link.download = "your-image.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
