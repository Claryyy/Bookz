src = "https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js";
integrity =
  "sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ==";
crossorigin = "anonymous";

const result = document.querySelector(".result");

const fetchBook = async () => {
  try {
    // axios package makes it easier to set-up http requests (cleaner API and better error messages)
    const { data } = await axios.get("/api/myBooks");

    const myBooks = data.data.map((book) => {
      return `<h5>${book.title}</h5>`;
    });
    result.innerHTML = myBooks.join("");
  } catch (error) {
    result.innerHTML = `<div class="alert alert-danger">Can't Fetch Data</div>`;
  }
};
fetchBook();
// submit form
const btn = document.querySelector(".submit-btn");
const input = document.querySelector(".form-input");
const formAlert = document.querySelector(".form-alert");
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const titleValue = input.value;

  try {
    const { data } = await axios.post("/api/myBooks", { title: nameValue });
    const h5 = document.createElement("h5");
    h5.textContent = data.book;
    result.appendChild(h5);
  } catch (error) {
    // console.log(error.response)
    formAlert.textContent = error.response.data.msg;
  }
  input.value = "";
});
