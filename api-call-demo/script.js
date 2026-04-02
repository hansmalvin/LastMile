const fetchUsersData = () => {
  userContainer.innerHTML = "";
  loading.classList.remove("hidden");

  fetch("https://jsonplaceholder.typicode.com/users") 
    .then(response => {
      if (!response.ok) {
        throw new Error("Unable to fetch users data");
      }
      return response.json();
    })
    .then(data => {
      displayUsersData(data);
      loading.classList.add("hidden");
    })
    .catch(error => { 
      loading.classList.add("hidden");
      userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
};

const displayUsersData = (users) => {
  users.forEach(user => {
    const { name, email, phone } = user;

    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    userDiv.innerHTML = `
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
    `;

    userContainer.appendChild(userDiv);
  });
};

const fetchBtn = document.getElementById("fetchBtn");
const userContainer = document.getElementById("userContainer");
const loading = document.getElementById("loading");

fetchBtn.addEventListener("click", fetchUsersData);