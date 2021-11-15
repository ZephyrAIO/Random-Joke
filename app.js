const joke = document.getElementById("joke");
const anotherOne = document.getElementById("new_joke");

//* axios method
const getDadJoke = async () => {
    try {
        const headers = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", headers);
        joke.innerText = res.data.joke;
    } catch (e) {
        joke.innerText = "No jokes available";
    }
};

anotherOne.addEventListener("click", getDadJoke);
